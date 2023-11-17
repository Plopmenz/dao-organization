import { Address, decodeEventLog, hexToString, parseAbiItem } from "viem"
import { PublicClient } from "wagmi"

import { getFromIpfs } from "@/lib/ipfs"
import OpenRD from "@/lib/OpenR&D"
import { DAOMetadata } from "@/lib/types"
import { blocknumber } from "@/lib/utils"

export async function getMetadata(
  dao: Address,
  publicClient: PublicClient
): Promise<DAOMetadata> {
  const eventAbi = parseAbiItem("event MetadataSet(bytes metadata)")
  const filter = await publicClient.createEventFilter({
    address: dao,
    event: eventAbi,
    fromBlock: blocknumber,
  })
  const logs = await publicClient.getFilterLogs({ filter: filter })
  const parsedLogs = logs.map((l) =>
    decodeEventLog({ abi: [eventAbi], topics: l.topics, data: l.data })
  )
  const ipfsHash = hexToString(parsedLogs[0].args.metadata) // or last element instead?
  const metadata = (await getFromIpfs(ipfsHash)) as DAOMetadata
  return metadata
}

export async function getPlugins(
  dao: Address,
  publicClient: PublicClient
): Promise<Address[]> {
  const eventAbi = parseAbiItem(
    "event InstallationApplied(address indexed dao, address indexed plugin, bytes32 preparedSetupId, bytes32 appliedSetupId)"
  )
  const filter = await publicClient.createEventFilter({
    address: OpenRD.contracts.PluginSetupProcessor.address,
    event: eventAbi,
    args: { dao: dao },
    fromBlock: blocknumber,
  })
  const logs = await publicClient.getFilterLogs({ filter: filter })
  const parsedLogs = logs.map((l) =>
    decodeEventLog({ abi: [eventAbi], topics: l.topics, data: l.data })
  )
  return parsedLogs.map((l) => l.args.plugin)
}

export async function getCreatedDAOs(
  creator: Address,
  publicClient: PublicClient
): Promise<Address[]> {
  const eventAbi = parseAbiItem(
    "event DAORegistered(address indexed dao, address indexed creator, string subdomain)"
  )
  const filter = await publicClient.createEventFilter({
    address: OpenRD.contracts.DAORegistry.address,
    event: eventAbi,
    args: { creator: creator },
    fromBlock: blocknumber,
  })
  const logs = await publicClient.getFilterLogs({ filter: filter })
  const parsedLogs = logs.map((l) =>
    decodeEventLog({ abi: [eventAbi], topics: l.topics, data: l.data })
  )
  return parsedLogs.map((l) => l.args.dao)
}
