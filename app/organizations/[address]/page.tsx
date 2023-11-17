"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Address } from "viem"

import { getDAO } from "@/lib/backend"
import { DAOMetadata } from "@/lib/types"
import { CreateSubDAO } from "@/components/web3/create-subdao"
import { GrantPermission } from "@/components/web3/grant-permission"
import { SharedAddressDashboard } from "@/components/web3/sharedaddress-dashboard"
import { SubDAODashboard } from "@/components/web3/subdao-dashboard"

interface Plugins {
  sharedAddress?: Address
  subDAO?: Address
  governance?: Address
}

export default function OrgnaizationPage({
  params,
}: {
  params: { address: Address }
}) {
  const router = useRouter()
  const dao = params.address
  const [plugins, setPlugins] = useState<Plugins>({})
  const [metadata, setMetadata] = useState<DAOMetadata>({
    title: "Loading...",
    description: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const daoData = await getDAO(dao)
      setPlugins({
        sharedAddress: daoData.sharedAddress,
        subDAO: daoData.subDao,
        governance: daoData.governance,
      })

      if (daoData.metadata) {
        setMetadata(daoData.metadata)
      } else {
        setMetadata({
          title: "Error",
          description: "Could not load DAO metadata.",
        })
      }
    }

    fetch().catch(console.error)
  }, [dao])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {metadata.title} ({dao})
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        {metadata.description}
      </p>
      <SharedAddressDashboard sharedAddress={plugins.sharedAddress} />
      <GrantPermission
        sharedAddress={plugins.sharedAddress}
        onGrant={() => router.refresh()}
      />
      <SubDAODashboard subDAO={plugins.subDAO} />
      <CreateSubDAO
        parentDAO={dao}
        parentSubDAO={plugins.subDAO}
        onCreate={(subDAO) => router.push("/organizations/" + subDAO)}
      />
    </section>
  )
}
