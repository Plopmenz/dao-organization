"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Address } from "viem"
import { usePublicClient } from "wagmi"

import { DAOMetadata, getMetadata, getPlugins } from "@/lib/dao"
import { CreateSubDAO } from "@/components/web3/create-subdao"
import { GrantPermission } from "@/components/web3/grant-permission"
import { SharedAddressDashboard } from "@/components/web3/sharedaddress-dashboard"
import { SubDAODashboard } from "@/components/web3/subdao-dashboard"

interface Plugins {
  sharedAddress: Address
  subDAO: Address
  governance: Address
}

export default function OrgnaizationPage({
  params,
}: {
  params: { address: Address }
}) {
  const router = useRouter()
  const publicClient = usePublicClient()
  const dao = params.address
  const [plugins, setPlugins] = useState<Plugins | undefined>(undefined)
  useEffect(() => {
    const fetch = async () => {
      const pluginAddresses = await getPlugins(dao, publicClient)
      setPlugins({
        sharedAddress: pluginAddresses[0],
        subDAO: pluginAddresses[1],
        governance: pluginAddresses[2],
      })
    }

    fetch().catch(console.error)
  }, [dao])

  const [metadata, setMetadata] = useState<DAOMetadata>({
    title: "Loading...",
    description: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const DAOMetadata = await getMetadata(dao, publicClient)
      setMetadata(DAOMetadata)
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
      <SharedAddressDashboard sharedAddress={plugins?.sharedAddress} />
      <GrantPermission
        sharedAddress={plugins?.sharedAddress}
        onGrant={() => router.refresh()}
      />
      <SubDAODashboard subDAO={plugins?.subDAO} />
      <CreateSubDAO
        parentSubDAO={plugins?.subDAO}
        onCreate={(subDAO) => router.push("/organizations/" + subDAO)}
      />
    </section>
  )
}
