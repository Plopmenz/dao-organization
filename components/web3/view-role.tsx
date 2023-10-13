"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePublicClient } from "wagmi"

import OpenRD from "@/lib/OpenR&D"

export function ViewRole({ roleId }: { roleId: bigint }) {
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
        args: [roleId],
      })

      setHatInfo({ name: hatInfo[0] })
    }

    fetch().catch(console.error)
  }, [roleId])

  return (
    <div>
      <Link href={"/roles/" + roleId}>
        {hatInfo.name} ({roleId.toString()})
      </Link>
    </div>
  )
}
