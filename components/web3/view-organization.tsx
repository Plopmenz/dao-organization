"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Address } from "viem"

import { getDAO } from "@/lib/backend"
import { DAOMetadata } from "@/lib/types"

export function ViewOrganization({ organization }: { organization: Address }) {
  const [metadata, setMetadata] = useState<DAOMetadata>({
    title: "Loading...",
    description: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const daoInfo = await getDAO(organization)
      if (daoInfo.metadata) {
        setMetadata(daoInfo.metadata)
      } else {
        setMetadata({
          title: "Error",
          description: "Could not fetch DAO metadata.",
        })
      }
    }

    fetch().catch(console.error)
  }, [organization])

  return (
    <div>
      <Link href={"/organizations/" + organization}>
        {metadata.title} ({organization}): {metadata.description}
      </Link>
    </div>
  )
}
