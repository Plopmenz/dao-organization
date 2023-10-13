import { Address, decodeEventLog, parseAbiItem } from "viem"
import { PublicClient } from "wagmi"

import OpenRD from "@/lib/OpenR&D"
import { blocknumber } from "@/lib/utils"

export async function getHats(
  of: Address,
  publicClient: PublicClient
): Promise<bigint[]> {
  const eventAbi = parseAbiItem(
    "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)"
  )
  const filter = await publicClient.createEventFilter({
    address: OpenRD.contracts.Hats.address,
    event: eventAbi,
    args: { to: of },
    fromBlock: blocknumber,
  })
  const logs = await publicClient.getFilterLogs({ filter: filter })
  const parsedLogs = logs.map((l) =>
    decodeEventLog({ abi: [eventAbi], topics: l.topics, data: l.data })
  )
  return parsedLogs.map((l) => {
    return l.args.id
  })
}
