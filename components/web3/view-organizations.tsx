"use client"

import { useEffect, useState } from "react"
import { usePublicClient } from "wagmi"

import { useAbstractAddress } from "@/lib/AbstractTransaction"
import { getCreatedDAOs, Organization } from "@/lib/dao"
import { ViewOrganization } from "@/components/web3/view-organization"

export function ViewOrganizations() {
  const transactor = useAbstractAddress()
  const publicClient = usePublicClient()
  const [organizations, setOrganizations] = useState<Organization[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (!transactor) {
        return
      }

      setOrganizations(await getCreatedDAOs(transactor, publicClient))
    }

    fetch().catch(console.error)
  }, [transactor])

  return (
    <div>
      {organizations.map((o, i) => (
        <ViewOrganization organization={o.address} key={i} />
      ))}
    </div>
  )
}
