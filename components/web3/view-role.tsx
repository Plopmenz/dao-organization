"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { getHat } from "@/lib/backend"

export function ViewRole({ roleId }: { roleId: string }) {
  const [hatInfo, setHatInfo] = useState<{ name: string }>({
    name: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const hatInfo = await getHat(roleId)

      setHatInfo({ name: hatInfo.name })
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
