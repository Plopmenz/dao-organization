"use client"

import { useEffect, useState } from "react"

import { useAbstractAddress } from "@/lib/AbstractTransaction"
import { getUser } from "@/lib/backend"
import { ViewRole } from "@/components/web3/view-role"

export function ViewRoles() {
  const transactor = useAbstractAddress()
  const [roles, setRoles] = useState<string[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (!transactor) {
        return
      }

      const userInfo = await getUser(transactor)
      setRoles(Object.keys(userInfo.hats))
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
