"use client"

import { useEffect, useState } from "react"
import { Address } from "viem"

import { getSharedAddress } from "@/lib/backend"
import { Permission } from "@/lib/types"
import { ViewPermission } from "@/components/web3/view-permission"

export function SharedAddressDashboard({
  sharedAddress,
}: {
  sharedAddress: Address | undefined
}) {
  const [permissions, setPermissions] = useState<Permission[]>()
  useEffect(() => {
    const fetch = async () => {
      if (!sharedAddress) {
        setPermissions([])
      } else {
        const sharedAddressInfo = await getSharedAddress(sharedAddress)
        setPermissions(sharedAddressInfo.permissions)
      }
    }

    fetch().catch(console.error)
  }, [sharedAddress])

  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Permissions
      </h1>
      {permissions?.map((p, i) => <ViewPermission permission={p} key={i} />)}
    </div>
  )
}
