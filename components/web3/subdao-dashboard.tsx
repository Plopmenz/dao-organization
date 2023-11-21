"use client"

import { useEffect, useState } from "react"
import { Address } from "viem"

import { getSubDAO } from "@/lib/backend"
import { ViewOrganization } from "@/components/web3/view-organization"

export function SubDAODashboard({ subDAO }: { subDAO: Address | undefined }) {
  const [subDAOs, setSubDAOs] = useState<Address[]>([])

  useEffect(() => {
    const fetch = async () => {
      if (!subDAO) {
        setSubDAOs([])
      } else {
        const sharedAddressInfo = await getSubDAO(subDAO)
        setSubDAOs(sharedAddressInfo.subdaos)
      }
    }

    fetch().catch(console.error)
  }, [subDAO])

  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Departments
      </h1>
      {subDAOs.map((d, i) => (
        <ViewOrganization organization={d} key={i} />
      ))}
    </div>
  )
}
