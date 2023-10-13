import { decodeEventLog, Log } from "viem"

import OpenRD from "@/lib/OpenR&D"

export function getDAOAddress(logs: Log<bigint, number>[] | undefined) {
  return (
    logs
      ?.filter(
        (l) => l.address == OpenRD.contracts.DAORegistry.address.toLowerCase()
      )
      ?.map((l) =>
        decodeEventLog({
          abi: OpenRD.contracts.DAORegistry.abi,
          topics: l.topics,
          data: l.data,
        })
      )
      ?.filter((l) => l.eventName == "DAORegistered")[0]?.args as any
  )?.dao
}

export function getHatID(logs: Log<bigint, number>[] | undefined) {
  return (
    logs
      ?.filter((l) => l.address == OpenRD.contracts.Hats.address.toLowerCase())
      ?.map((l) =>
        decodeEventLog({
          abi: OpenRD.contracts.Hats.abi,
          topics: l.topics,
          data: l.data,
        })
      )
      ?.filter((l) => l.eventName == "HatCreated")[0]?.args as any
  )?.id
}
