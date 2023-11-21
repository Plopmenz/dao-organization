"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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

  const zone = permission.zone ?? "any"
  const functionSelector = permission.functionSelector ?? "any"

  return (
    <div>
      <Link href={"/roles/" + permission.hat}>
        {hatInfo.name}: Invoke {functionSelector} at {zone}
      </Link>
    </div>
  )
}
