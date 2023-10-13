"use client"

import { useEffect, useState } from "react"
import { usePublicClient } from "wagmi"

import { useAbstractAddress } from "@/lib/AbstractTransaction"
import { getHats } from "@/lib/hats"
import { ViewRole } from "@/components/web3/view-role"

export function ViewRoles() {
  const transactor = useAbstractAddress()
  const publicClient = usePublicClient()
  const [roles, setRoles] = useState<bigint[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (!transactor) {
        return
      }

      setRoles(await getHats(transactor, publicClient))
    }

    fetch().catch(console.error)
  }, [transactor])

  return (
    <div>
      {roles.map((r, i) => (
        <ViewRole roleId={r} key={i} />
      ))}
    </div>
  )
}
