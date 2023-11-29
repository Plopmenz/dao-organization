import express, { Response } from "express"
import storage from "node-persist"
import {
  Address,
  createPublicClient,
  decodeAbiParameters,
  hexToString,
  isAddress,
  parseAbiItem,
  webSocket,
  zeroAddress,
} from "viem"
import { polygonMumbai } from "viem/chains"

import { getFromIpfs } from "../lib/ipfs"
import OpenRD from "../lib/OpenR&D"
import {
  DAOData,
  GovernanceData,
  HatData,
  SharedAddressData,
  SubDAOData,
  UserData,
} from "../lib/types"

async function start() {
  const httpRPC =
    "https://polygon-mainnet.infura.io/v3/b13eca0fcada4ed9b5e0ef5b940b9de5"
  const websocketRPC =
    "wss://polygon-mainnet.infura.io/ws/v3/b13eca0fcada4ed9b5e0ef5b940b9de5"

  const client = createPublicClient({
    chain: {
      ...polygonMumbai,
      rpcUrls: {
        default: {
          http: [httpRPC],
          webSocket: [websocketRPC],
        },
        public: {
          http: [httpRPC],
          webSocket: [websocketRPC],
        },
      },
    },
    transport: webSocket(),
  })

  // Data
  await storage.init({ dir: "storage" })
  const storageKeys = {
    daos: "daos",
    sharedAddresses: "sharedAddresses",
    subDaos: "subDaos",
    governance: "governance",
    users: "users",
    hats: "hats",
  } as const
  const daos: {
    [address: Address]: DAOData
  } = (await storage.getItem(storageKeys.daos)) ?? {}
  const saveDaos = () => storage.setItem(storageKeys.daos, daos)
  const sharedAddresses: {
    [address: Address]: SharedAddressData
  } = (await storage.getItem(storageKeys.sharedAddresses)) ?? {}
  const saveSharedAddresses = () =>
    storage.setItem(storageKeys.sharedAddresses, sharedAddresses)
  const subDaos: {
    [address: Address]: SubDAOData
  } = (await storage.getItem(storageKeys.subDaos)) ?? {}
  const saveSubDaos = () => storage.setItem(storageKeys.subDaos, subDaos)
  const governance: {
    [address: Address]: GovernanceData
  } = (await storage.getItem(storageKeys.governance)) ?? {}
  const saveGovernance = () =>
    storage.setItem(storageKeys.governance, governance)
  const users: {
    [address: Address]: UserData
  } = (await storage.getItem(storageKeys.users)) ?? {}
  const saveUsers = () => storage.setItem(storageKeys.users, users)
  const hats: {
    [id: string]: HatData
  } = (await storage.getItem(storageKeys.hats)) ?? {}
  const saveHats = () => storage.setItem(storageKeys.hats, hats)
  const normalizeAddress = (address: Address) => {
    // Some addresses use capital letters as checksum, others all lower/upper case
    return `0x${address.substring(2).toLowerCase()}` as const
  }

  const repos: {
    [repo: Address]: {
      process: (dao: Address, plugin: Address, data: `0x${string}`) => void
    }
  } = {}

  repos[OpenRD.contracts.SharedAddressRepo.address] = {
    process: (dao, plugin, _) => {
      sharedAddresses[plugin] = { dao: dao, permissions: [] }
      daos[dao].sharedAddress = plugin
      saveSharedAddresses()
      saveDaos()
      console.log("SharedAddress plugin discovered at", plugin, "from dao", dao)
      sharedAddressesAdded()
    },
  }
  repos[OpenRD.contracts.SubDAORepo.address] = {
    process: (dao, plugin, _) => {
      subDaos[plugin] = { dao: dao, subdaos: [] }
      daos[dao].subDao = plugin
      saveSubDaos()
      saveDaos()
      console.log("SubDAO plugin discovered at", plugin, "from dao", dao)
      subDAOAdded()
    },
  }
  repos[OpenRD.contracts.AdminRepo.address] = {
    process: (dao, plugin, data) => {
      const admin = normalizeAddress(
        decodeAbiParameters([{ type: "address", name: "admin" }], data)[0]
      )
      governance[plugin] = {
        dao: dao,
        admin: admin,
      }
      createUserIfNotExists(admin).governance.push({ dao: dao, plugin: plugin })
      daos[dao].governance = plugin
      saveGovernance()
      saveUsers()
      saveDaos()
      console.log(
        "Admin plugin discovered at",
        plugin,
        "from dao",
        dao,
        "with admin",
        admin
      )
    },
  }

  function createUserIfNotExists(address: Address): UserData {
    if (!users[address]) {
      users[address] = { hats: {}, governance: [] }
      console.log("New user", address)
    }

    return users[address]
  }

  function prepareDAO(dao: Address, blockHash: `0x${string}`) {
    // Store and handle new dao if it doesn't exist yet
    if (!daos[dao]) {
      daos[dao] = {}
      createUserIfNotExists(dao)

      const setMetadata = async () => {
        try {
          // Just start this and move on
          const logs = await client.getLogs({
            address: dao,
            event: parseAbiItem("event MetadataSet(bytes metadata)"),
            blockHash: blockHash,
          })
          await processDAOMetadataLog(logs)
          console.log("New DAO discovered at", dao)
          daoAdded()
        } catch (err) {
          // Likely block hasnt been indexed yet
          console.error("Metadata fetch error", err)
          setMetadata().catch(console.error)
        }
      }
      setMetadata().catch(console.error)
    }
  }

  // Event listining
  const watchEventOverrides = {
    // poll: true,
    // pollingInterval: 1_000,
  } as const

  function startWatchingPluginInstallation() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.PluginSetupProcessor.abi,
      address: OpenRD.contracts.PluginSetupProcessor.address,
      eventName: "InstallationPrepared",
      onLogs: async (logs) => {
        if (!logs[0].args) {
          return
        }

        const {
          args: { dao, pluginSetupRepo, plugin, data },
          blockHash,
        } = logs[0]

        if (!dao || !pluginSetupRepo || !plugin || !data) {
          return
        }

        const repo = repos[pluginSetupRepo]
        if (repo) {
          prepareDAO(normalizeAddress(dao), blockHash)
          repo.process(normalizeAddress(dao), normalizeAddress(plugin), data)
        }
      },
      onError: (err) => {
        console.error("Watching plugin installation error: ", err)
        stopWatchingPluginInstallation()
        stopWatchingPluginInstallation = startWatchingPluginInstallation()
      },
    })
  }
  let stopWatchingPluginInstallation = startWatchingPluginInstallation()

  async function processDAOMetadataLog(
    logs: { args: { metadata?: `0x${string}` }; address: Address }[]
  ) {
    const {
      args: { metadata },
      address,
    } = logs[0]

    if (!metadata) {
      return
    }

    try {
      const hash = hexToString(metadata)
      const data = await getFromIpfs(hash)
      daos[address].metadata = data
      saveDaos()
      console.log("DAO", address, "updated it's metadata to", data)
    } catch (err) {
      console.error("Error fetching dao metadata", err)
    }
  }
  function startWatchingDaos() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: [parseAbiItem("event MetadataSet(bytes metadata)")],
      address: Object.keys(daos) as Address[],
      eventName: "MetadataSet",
      onLogs: processDAOMetadataLog,
      onError: (err) => {
        console.error("Watching daos error: ", err)
        stopWatchingDaos()
        stopWatchingDaos = startWatchingDaos()
      },
    })
  }
  let stopWatchingDaos =
    Object.keys(daos).length > 0 ? startWatchingDaos() : () => {}
  function daoAdded() {
    // Only needed when an address is newly added
    stopWatchingDaos()
    stopWatchingDaos = startWatchingDaos()
  }

  function startWatchingSharedAddress() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.SharedAddressImplementation.abi,
      address: Object.keys(sharedAddresses) as Address[],
      onLogs: (logs) => {
        const { args, eventName, address } = logs[0]

        if (!args || !eventName) {
          return
        }

        console.log("SharedAddress at", address, "triggered", eventName)

        if (eventName.endsWith("AccessGranted")) {
          const typedArgs = args as {
            hat: bigint
            zone?: Address
            funcionSelector?: `0x${string}`
          }

          const permission = {
            hat: typedArgs.hat.toString(),
            zone: typedArgs.zone,
            functionSelector: typedArgs.funcionSelector,
          }
          // Can lead to duplicate entries (although this is not possible on the smart contract)
          // All duplicate entries will be removed on revoke tho
          // Could check here if it's already present, but changes this from O(1) to O(n)
          sharedAddresses[address].permissions.push(permission)
          saveSharedAddresses()
          console.log("SharedAddress", address, "granted permision", permission)

          if (hats[permission.hat]) {
            // It's possible to grant permission to hats that do not exist (yet)
            hats[permission.hat].sharedaddress.push({
              dao: sharedAddresses[address].dao,
              plugin: address,
              access: permission,
            })
            saveHats()
          }
        } else if (eventName.endsWith("AccessRevoked")) {
          const typedArgs = args as {
            hat: bigint
            zone?: Address
            funcionSelector?: `0x${string}`
          }

          const permission = {
            hat: typedArgs.hat.toString(),
            zone: typedArgs.zone,
            functionSelector: typedArgs.funcionSelector,
          }
          sharedAddresses[address].permissions = sharedAddresses[
            address
          ].permissions.filter(
            (p) =>
              !(
                p.hat === permission.hat &&
                p.zone === permission.zone &&
                p.functionSelector === permission.functionSelector
              )
          )
          saveSharedAddresses()
          console.log("SharedAddress", address, "revoked permision", permission)

          if (hats[permission.hat]) {
            hats[permission.hat].sharedaddress = hats[
              permission.hat
            ].sharedaddress.filter(
              (p) =>
                !(
                  p.dao === sharedAddresses[address].dao &&
                  p.plugin == address &&
                  p.access.zone === permission.zone &&
                  p.access.functionSelector === permission.functionSelector
                )
            )
            saveHats()
          }
        }
      },
      onError: (err) => {
        console.error("Watching shared address error: ", err)
        stopWatchingSharedAddress()
        stopWatchingSharedAddress = startWatchingSharedAddress()
      },
    })
  }
  let stopWatchingSharedAddress =
    Object.keys(sharedAddresses).length > 0
      ? startWatchingSharedAddress()
      : () => {}
  function sharedAddressesAdded() {
    stopWatchingSharedAddress()
    stopWatchingSharedAddress = startWatchingSharedAddress()
  }

  function startWatchingSubDAO() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.SubDAOImplementation.abi,
      address: Object.keys(subDaos) as Address[],
      onLogs: (logs) => {
        const { args, eventName, address } = logs[0]
        console.log("SubDAO at", address, "triggered", eventName)

        const typedArgs = args as {
          subdao?: Address
        }
        if (!typedArgs.subdao) {
          return
        }

        if (eventName === "SubDAOAdded") {
          subDaos[address].subdaos.push(typedArgs.subdao)
          saveSubDaos()
          console.log("Subdao", address, "added", typedArgs.subdao)
        } else if (eventName === "SubDAORemoved") {
          const index = subDaos[address].subdaos.findIndex(
            (d) => d === typedArgs.subdao
          )
          if (index === -1) {
            console.warn("Was not able to find subdao to remove")
          } else {
            subDaos[address].subdaos.splice(index, 1)
          }
          saveSubDaos()
          console.log("Subdao", address, "removed", typedArgs.subdao)
        }
      },
      onError: (err) => {
        console.error("Watching sub dao error: ", err)
        stopWatchingSubDAO()
        stopWatchingSubDAO = startWatchingSubDAO()
      },
    })
  }
  let stopWatchingSubDAO =
    Object.keys(subDaos).length > 0 ? startWatchingSubDAO() : () => {}
  function subDAOAdded() {
    stopWatchingSubDAO()
    stopWatchingSubDAO = startWatchingSubDAO()
  }

  function startWatchingHatCreation() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.Hats.abi,
      address: OpenRD.contracts.Hats.address,
      eventName: "HatCreated",
      onLogs: async (logs) => {
        if (!logs[0].args) {
          return
        }

        const {
          args: { id, details, imageURI },
        } = logs[0]

        if (!id) {
          return
        }

        try {
          // {"type":"1.0","data":{"name":"Topmenz","description":"Plopmenz Hats!"}} (ipfs://bafkreiemn7ptxyqdhnqyshp23sx5wdti6xeqylmbido7ewlug7d62apddy)
          const metadata = details
            ? ((await getFromIpfs(details.replace("ipfs://", ""))) as {
                type?: string
                data?: {
                  name?: string
                  description?: string
                }
              })
            : {}
          hats[id.toString()] = {
            name: metadata.data?.name ?? "Unnamed",
            description: metadata.data?.description ?? "Undescripted",
            image:
              imageURI ??
              "ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4",
            sharedaddress: [],
          }
          saveHats()
          console.log("New hat", details, "created with id", id)
        } catch (err) {
          console.error("Error fetching hat metadata", err)
        }
      },
      onError: (err) => {
        console.error("Watching hat creation error: ", err)
        stopWatchingHatCreation()
        stopWatchingHatCreation = startWatchingHatCreation()
      },
    })
  }
  let stopWatchingHatCreation = startWatchingHatCreation()

  function startWatchingHatDetailsChanged() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.Hats.abi,
      address: OpenRD.contracts.Hats.address,
      eventName: "HatDetailsChanged",
      onLogs: async (logs) => {
        if (!logs[0].args) {
          return
        }

        const {
          args: { hatId, newDetails },
        } = logs[0]

        if (!hatId || !newDetails) {
          return
        }

        try {
          const metadata = (await getFromIpfs(
            newDetails.replace("ipfs://", "")
          )) as {
            type?: string
            data?: {
              name?: string
              description?: string
            }
          }

          if (!hats[hatId.toString()]) {
            console.warn("Missed initial hat creation event", hatId)
            return
          }
          hats[hatId.toString()].name = metadata.data?.name ?? "Unnamed"
          hats[hatId.toString()].description =
            metadata.data?.description ?? "Undescripted"
          saveHats()
          console.log("Hat", hatId, "updated its details to", newDetails)
        } catch (err) {
          console.error("Error fetching hat metadata on change", err)
        }
      },
      onError: (err) => {
        console.error("Watching hat details changed error: ", err)
        stopWatchingHatDetailsChanged()
        stopWatchingHatDetailsChanged = startWatchingHatDetailsChanged()
      },
    })
  }
  let stopWatchingHatDetailsChanged = startWatchingHatDetailsChanged()

  function startWatchingHatImageChanged() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.Hats.abi,
      address: OpenRD.contracts.Hats.address,
      eventName: "HatImageURIChanged",
      onLogs: async (logs) => {
        if (!logs[0].args) {
          return
        }

        const {
          args: { hatId, newImageURI },
        } = logs[0]

        if (!hatId || !newImageURI) {
          return
        }

        if (!hats[hatId.toString()]) {
          console.warn("Missed initial hat creation event", hatId)
          return
        }
        hats[hatId.toString()].image = newImageURI
        saveHats()
        console.log("Hat", hatId, "updated its image to", newImageURI)
      },
      onError: (err) => {
        console.error("Watching hat image changed error: ", err)
        stopWatchingHatImageChanged()
        stopWatchingHatImageChanged = startWatchingHatImageChanged()
      },
    })
  }
  let stopWatchingHatImageChanged = startWatchingHatImageChanged()

  function processHatTransfer(
    from: Address,
    to: Address,
    id: bigint,
    amount: bigint
  ) {
    if (from !== zeroAddress) {
      // Potentially dangerous if hats allows user to transfer more hats than they have
      // Or if we missed a transfer event / receive the events in the wrong order
      if (
        !users[from] ||
        !users[from].hats[id.toString()] ||
        BigInt(users[from].hats[id.toString()]) < amount
      ) {
        console.warn(
          "Potential dangerous transfer! Could not deduct hat from sender."
        )
      } else {
        users[from].hats[id.toString()] = (
          BigInt(users[from].hats[id.toString()]) - amount
        ).toString()
        if (users[from].hats[id.toString()] === BigInt(0).toString()) {
          // User does not hold this hat anymore
          delete users[from].hats[id.toString()]
        }
      }
    }

    createUserIfNotExists(to).hats[id.toString()] = (
      (createUserIfNotExists(to).hats[id.toString()]
        ? BigInt(createUserIfNotExists(to).hats[id.toString()])
        : BigInt(0)) + amount
    ).toString()

    saveUsers()
    console.log(from, "transfered", amount, "of hat", id, "to", to)
  }

  function startWatchingHatTransfers() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.Hats.abi,
      address: OpenRD.contracts.Hats.address,
      eventName: "TransferSingle",
      onLogs: async (logs) => {
        const {
          args: { from, to, id, amount },
        } = logs[0]

        if (!from || !to || !id || !amount) {
          return
        }

        processHatTransfer(
          normalizeAddress(from),
          normalizeAddress(to),
          id,
          amount
        )
      },
      onError: (err) => {
        console.error("Watching hat transfers error: ", err)
        stopWatchingHatTransfers()
        stopWatchingHatTransfers = startWatchingHatTransfers()
      },
    })
  }
  let stopWatchingHatTransfers = startWatchingHatTransfers()

  function startWatchingHatBatchTransfers() {
    return client.watchContractEvent({
      ...watchEventOverrides,
      abi: OpenRD.contracts.Hats.abi,
      address: OpenRD.contracts.Hats.address,
      eventName: "TransferBatch",
      onLogs: async (logs) => {
        const {
          args: { from, to, ids, amounts },
        } = logs[0]

        if (!from || !to || !ids || !amounts) {
          return
        }

        for (let i = 0; i < Math.min(ids.length, amounts.length); i++) {
          processHatTransfer(
            normalizeAddress(from),
            normalizeAddress(to),
            ids[i],
            amounts[i]
          )
        }
      },
      onError: (err) => {
        console.error("Watching hat batch transfers error: ", err)
        stopWatchingHatBatchTransfers()
        stopWatchingHatBatchTransfers = startWatchingHatBatchTransfers()
      },
    })
  }
  let stopWatchingHatBatchTransfers = startWatchingHatBatchTransfers()

  console.log("Event listeners activated.")

  function stop() {
    stopWatchingPluginInstallation()
    stopWatchingDaos()
    stopWatchingSharedAddress()
    stopWatchingSubDAO()
    stopWatchingHatCreation()
    stopWatchingHatDetailsChanged()
    stopWatchingHatImageChanged()
    stopWatchingHatTransfers()
    stopWatchingHatBatchTransfers()
  }

  function relisten() {
    // Could also be used for initial start, but have to declare the variable anyway (and initialize or give type signature)
    stopWatchingPluginInstallation = startWatchingPluginInstallation()
    stopWatchingDaos =
      Object.keys(daos).length > 0 ? startWatchingDaos() : () => {}
    stopWatchingSharedAddress =
      Object.keys(sharedAddresses).length > 0
        ? startWatchingSharedAddress()
        : () => {}
    stopWatchingSubDAO =
      Object.keys(subDaos).length > 0 ? startWatchingSubDAO() : () => {}
    stopWatchingHatCreation = startWatchingHatCreation()
    stopWatchingHatDetailsChanged = startWatchingHatDetailsChanged()
    stopWatchingHatImageChanged = startWatchingHatImageChanged()
    stopWatchingHatTransfers = startWatchingHatTransfers()
    stopWatchingHatBatchTransfers = startWatchingHatBatchTransfers()
  }

  function preventWebsocketTimeout() {
    console.log("Letting the websocket know we are still there...")
    stop()
    relisten()
    setTimeout(preventWebsocketTimeout, 60 * 60 * 1000) // 1h
  }
  setTimeout(preventWebsocketTimeout, 60 * 60 * 1000)

  process.on("SIGINT", function () {
    console.log("Stopping...")

    stop()
    process.exit()
  })

  // Webserver
  const app = express()
  const basePath = "/api/"

  function getDataOfAddress<Data>(
    req: { params: { address?: string } },
    res: Response,
    data: { [address: Address]: Data },
    item: string
  ) {
    if (!req.params.address) {
      res.statusCode = 400
      res.end("Address not provided.")
      return
    }

    if (!isAddress(req.params.address)) {
      res.statusCode = 400
      res.end("Invalid address: " + req.params.address)
      return
    }

    const address = normalizeAddress(req.params.address as Address)
    if (!data[address]) {
      res.statusCode = 404
      res.end(item + " not found for " + req.params.address)
      return
    }

    res.end(JSON.stringify(data[address]))
  }

  app.get(basePath + "daos", function (_, res) {
    res.end(JSON.stringify(daos))
  })
  app.get(basePath + "hats", function (_, res) {
    res.end(JSON.stringify(hats))
  })

  app.get(basePath + "dao/:address", function (req, res) {
    getDataOfAddress(req, res, daos, "DAO")
  })
  app.get(basePath + "sharedAddress/:address", function (req, res) {
    getDataOfAddress(req, res, sharedAddresses, "SharedAddress plugin")
  })
  app.get(basePath + "subDAO/:address", function (req, res) {
    getDataOfAddress(req, res, subDaos, "SubDAO plugin")
  })
  app.get(basePath + "governance/:address", function (req, res) {
    getDataOfAddress(req, res, governance, "Governance plugin")
  })
  app.get(basePath + "user/:address", function (req, res) {
    getDataOfAddress(req, res, users, "User")
  })
  app.get(basePath + "hat/:id", function (req, res) {
    if (!req.params.id) {
      res.statusCode = 400
      res.end("Id not provided.")
      return
    }

    let id = BigInt(0)
    try {
      id = BigInt(req.params.id)
    } catch {
      res.statusCode = 400
      res.end("Invalid bigint.")
      return
    }

    if (!hats[id.toString()]) {
      res.statusCode = 404
      res.end("Hat not found.")
      return
    }

    res.end(JSON.stringify(hats[id.toString()]))
  })

  var server = app.listen(3001, () => {
    const addressInfo = server.address() as any
    var host = addressInfo.address
    var port = addressInfo.port
    console.log(`Webserver started on ${host}:${port}`)
  })
}
start().catch(console.error)
