"use client"

import { useEffect, useState } from "react"
import { usePublicClient } from "wagmi"

import { getHat } from "@/lib/backend"
import { Permission } from "@/lib/types"

export function ViewPermission({ permission }: { permission: Permission }) {
  const [hatInfo, setHatInfo] = useState<{ name: string }>({
    name: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const hatInfo = await getHat(permission.hat)
      setHatInfo({ name: hatInfo.name })
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
