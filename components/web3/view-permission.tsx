"use client"

import { useEffect, useState } from "react"
import { usePublicClient } from "wagmi"

import OpenRD from "@/lib/OpenR&D"
import { Permission } from "@/lib/sharedaddress"

export function ViewPermission({ permission }: { permission: Permission }) {
  const publicClient = usePublicClient()
  const [hatInfo, setHatInfo] = useState<{ name: string }>({
    name: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const hatInfo = await publicClient.readContract({
        abi: OpenRD.contracts.Hats.abi,
        address: OpenRD.contracts.Hats.address,
        functionName: "viewHat",
        args: [permission.hat],
      })

      setHatInfo({ name: hatInfo[0] })
    }

    fetch().catch(console.error)
  }, [permission.hat])

  const zone = permission.zone ?? "Any"
  const functionSelector = permission.functionSelector ?? "Any"

  return (
    <div>
      {hatInfo.name}: Invoke {functionSelector} at {zone}
    </div>
  )
}
