import { Address, decodeEventLog, hexToString, Log, parseAbiItem } from "viem"
import { PublicClient } from "wagmi"

import { getFromIpfs } from "./ipfs"
import OpenRD from "./OpenR&D"
import { blocknumber } from "./utils"

export interface DAOMetadata {
  title: string
  description: string
}
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

export interface Organization {
  address: Address
  type: DAOType
}
export enum DAOType {
  Parent,
  Sub,
  Unknown,
}
export async function getCreatedDAOs(
  creator: Address,
  publicClient: PublicClient
): Promise<Organization[]> {
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
  return parsedLogs.map((l) => {
    return {
      address: l.args.dao,
      type: l.args.subdomain.startsWith("parent")
        ? DAOType.Parent
        : l.args.subdomain.startsWith("sub")
        ? DAOType.Sub
        : DAOType.Unknown,
    }
  })
}
