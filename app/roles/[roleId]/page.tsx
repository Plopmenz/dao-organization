"use client"

import { useEffect, useState } from "react"
import { usePublicClient } from "wagmi"

import OpenRD from "@/lib/OpenR&D"

export default function RolePage({ params }: { params: { roleId: bigint } }) {
  const publicClient = usePublicClient()
  const [hatInfo, setHatInfo] = useState<{ name: string }>({
    name: "Loading...",
  })

  useEffect(() => {
    const fetch = async () => {
      const hatInfo = await publicClient.readContract({
        abi: OpenRD.contracts.Hats.abi,
        address: OpenRD.contracts.Hats.address,
        functionName: "viewHat",
        args: [params.roleId],
      })
      setHatInfo({ name: hatInfo[0] })
    }

    fetch().catch(console.error)
  }, [params.roleId])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {hatInfo.name} (#{params.roleId.toString()})
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        {"In the future you'll be able to add a description here!"}
      </p>
    </section>
  )
}
