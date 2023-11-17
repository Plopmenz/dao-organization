"use client"

import { useEffect, useState } from "react"
import { Address, usePublicClient } from "wagmi"

import { useAbstractAddress } from "@/lib/AbstractTransaction"
import { getHat, getUser } from "@/lib/backend"
import { asyncMap } from "@/lib/utils"
import { ViewOrganization } from "@/components/web3/view-organization"

export function ViewOrganizations() {
  const transactor = useAbstractAddress()

  const [organizations, setOrganizations] = useState<Address[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (!transactor) {
        setOrganizations([])
        return
      }

      const userInfo = await getUser(transactor)
      let organizations: { [address: Address]: {} } = {}
      userInfo.governance
        .map((g) => g.dao)
        .forEach((d) => (organizations[d] = {}))
      await asyncMap(Object.keys(userInfo.hats), async (hat) => {
        const hatInfo = await getHat(hat)
        hatInfo.sharedaddress
          .map((h) => h.dao)
          .forEach((d) => (organizations[d] = {}))
      })
      setOrganizations(Object.keys(organizations) as Address[])
    }

    fetch().catch(console.error)
  }, [transactor])

  return (
    <div>
      {organizations.map((o, i) => (
        <ViewOrganization organization={o} key={i} />
      ))}
    </div>
  )
}
