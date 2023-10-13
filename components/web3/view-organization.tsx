"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Address } from "viem"
import { usePublicClient } from "wagmi"

import { DAOMetadata, getMetadata } from "@/lib/dao"

export function ViewOrganization({ organization }: { organization: Address }) {
  const publicClient = usePublicClient()
  const [metadata, setMetadata] = useState<DAOMetadata>({
    title: "Loading...",
    description: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      setMetadata(await getMetadata(organization, publicClient))
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
