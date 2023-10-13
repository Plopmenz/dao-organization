import { Address, decodeEventLog, parseAbi } from "viem"
import { PublicClient } from "wagmi"

import { blocknumber } from "./utils"

export interface Permission {
  hat: bigint
  zone?: Address
  functionSelector?: string
}

export async function getPermissions(
  sharedaddress: Address,
  publicClient: PublicClient
): Promise<Permission[]> {
  const events = parseAbi([
    "event FullAccessGranted(uint256 indexed hat)",
    "event FullZoneAccessGranted(uint256 indexed hat, address zone)",
    "event FullFunctionAccessGranted(uint256 indexed hat, address zone, bytes4 functionSelector)",
    "event FullAccessRevoked(uint256 indexed hat)",
    "event FullZoneAccessRevoked(uint256 indexed hat, address zone)",
    "event FullFunctionAccessRevoked(uint256 indexed hat, address zone, bytes4 functionSelector)",
  ])
  const filter = await publicClient.createEventFilter({
    address: sharedaddress,
    events: events,
    fromBlock: blocknumber,
  })
  const logs = await publicClient.getFilterLogs({ filter: filter })
  const parsedLogs = logs.map((l) =>
    decodeEventLog({ abi: events, topics: l.topics, data: l.data })
  )

  const permissions: Permission[] = []
  for (let i = 0; i < parsedLogs.length; i++) {
    switch (parsedLogs[i].eventName) {
      case "FullAccessGranted":
      case "FullZoneAccessGranted":
      case "FullFunctionAccessGranted":
        permissions.push(parsedLogs[i].args as Permission)
        break
      case "FullAccessRevoked":
      case "FullZoneAccessRevoked":
      case "FullFunctionAccessRevoked":
        const remove = parsedLogs[i].args as Permission
        const index = permissions.findIndex((p) => p === remove)
        if (index != -1) {
          permissions.splice(index, 1)
        }
        break
    }
  }
  return permissions
}
