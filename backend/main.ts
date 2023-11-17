import express, { Response } from "express"
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

const httpRPC =
  "https://polygon-mumbai.g.alchemy.com/v2/iRRdBU4koK5yTH9tmRNnTFLvKOq8T-ou"
const websocketRPC =
  "wss://polygon-mumbai.g.alchemy.com/v2/iRRdBU4koK5yTH9tmRNnTFLvKOq8T-ou"

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
const daos: {
  [address: Address]: DAOData
} = {}
const sharedAddresses: {
  [address: Address]: SharedAddressData
} = {}
const subDaos: {
  [address: Address]: SubDAOData
} = {}
const governance: {
  [address: Address]: GovernanceData
} = {}
const users: {
  [address: Address]: UserData
} = {}
const hats: {
  [id: string]: HatData
} = {}
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
    console.log("SharedAddress plugin discovered at", plugin, "from dao", dao)
    sharedAddressesAdded()
  },
}
repos[OpenRD.contracts.SubDAORepo.address] = {
  process: (dao, plugin, _) => {
    subDaos[plugin] = { dao: dao, subdaos: [] }
    daos[dao].subDao = plugin
    console.log("SubDAO plugin discovered at", plugin, "from dao", dao)
    subDAOAdded()
  },
}
repos["0x0DF9b15550fF39149e491dDD154b28f587e0cD16"] = {
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
      // Just start this and move on
      const logs = await client.getLogs({
        address: dao,
        event: parseAbiItem("event MetadataSet(bytes metadata)"),
        blockHash: blockHash,
      })
      await processDAOMetadataLog(logs)
      console.log("New DAO discovered at", dao)
      daoAdded()
    }
    setMetadata()
  }
}

// Event listining
const stopWatchingPluginInstallation = client.watchContractEvent({
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
})

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

  const hash = hexToString(metadata)
  const data = await getFromIpfs(hash)
  daos[address].metadata = data
  console.log("DAO", address, "updated it's metadata to", data)
}
function daoListener() {
  return client.watchContractEvent({
    abi: OpenRD.contracts.community_dao.abi,
    address: Object.keys(daos) as Address[],
    eventName: "MetadataSet",
    onLogs: processDAOMetadataLog,
  })
}
let stopWatchingDaos = Object.keys(daos).length > 0 ? daoListener() : () => {}
function daoAdded() {
  // Only needed when an address is newly added
  stopWatchingDaos()
  stopWatchingDaos = daoListener()
}

function sharedAddressListener() {
  console.log("Listening to shared address now")
  return client.watchContractEvent({
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
        console.log("SharedAddress", address, "granted permision", permission)

        if (hats[permission.hat]) {
          // It's possible to grant permission to hats that do not exist (yet)
          hats[permission.hat].sharedaddress.push({
            dao: sharedAddresses[address].dao,
            plugin: address,
            access: permission,
          })
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
        }
      }
    },
  })
}
let stopWatchingSharedAddress =
  Object.keys(sharedAddresses).length > 0 ? sharedAddressListener() : () => {}
function sharedAddressesAdded() {
  stopWatchingSharedAddress()
  stopWatchingSharedAddress = sharedAddressListener()
}

function subDAOListener() {
  console.log("Listening to sub dao now")
  return client.watchContractEvent({
    abi: OpenRD.contracts.SubDAOImplementation.abi,
    address: Object.keys(subDaos) as Address[],
    onLogs: (logs) => {
      const { args, eventName, address } = logs[0]
      console.log("SubDAO at", address, "triggered", eventName)
    },
  })
}
let stopWatchingSubDAO =
  Object.keys(subDaos).length > 0 ? subDAOListener() : () => {}
function subDAOAdded() {
  stopWatchingSubDAO()
  stopWatchingSubDAO = subDAOListener()
}
console.log("Event listeners activated.")

const stopWatchingHatCreation = client.watchContractEvent({
  abi: OpenRD.contracts.Hats.abi,
  address: OpenRD.contracts.Hats.address,
  eventName: "HatCreated",
  onLogs: async (logs) => {
    if (!logs[0].args) {
      return
    }

    const {
      args: { id, details },
    } = logs[0]

    if (!id || !details) {
      return
    }

    hats[id.toString()] = { name: details, sharedaddress: [] }
    console.log("New hat", details, "created with id", id)
  },
})

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
  console.log(from, "transfered", amount, "of hat", id, "to", to)
}
const stopWatchingHatTransfers = client.watchContractEvent({
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

    processHatTransfer(normalizeAddress(from), normalizeAddress(to), id, amount)
  },
})
const stopWatchingHatBatchTransfers = client.watchContractEvent({
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
})

function stop() {
  stopWatchingDaos()
  stopWatchingPluginInstallation()
  stopWatchingSharedAddress()
  stopWatchingSubDAO()
  stopWatchingHatCreation()
  stopWatchingHatTransfers()
  stopWatchingHatBatchTransfers()
}

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

app.get(basePath + "daos", function (req, res) {
  res.end(JSON.stringify(daos))
})
app.get(basePath + "hats", function (req, res) {
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