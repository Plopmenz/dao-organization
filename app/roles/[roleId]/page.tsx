"use client"

import { useEffect, useState } from "react"

import { getHat } from "@/lib/backend"
import { HatData } from "@/lib/types"
import { ViewOrganization } from "@/components/web3/view-organization"

export default function RolePage({ params }: { params: { roleId: string } }) {
  const [hatInfo, setHatInfo] = useState<HatData>({
    name: "Loading...",
    description: "Loading...",
    image: "ipfs://bafkreiflezpk3kjz6zsv23pbvowtatnd5hmqfkdro33x5mh2azlhne3ah4",
    sharedaddress: [],
  })

  useEffect(() => {
    const fetch = async () => {
      if (!params.roleId) {
        return
      }

      const hatInfo = await getHat(params.roleId)
      setHatInfo(hatInfo)
    }

    fetch().catch(console.error)
  }, [params.roleId])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {hatInfo.name} (#{params.roleId.toString()})
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground">
        {hatInfo.description}
      </p>
      {hatInfo.sharedaddress.map((s) => (
        <div>
          Invoke {s.access.functionSelector ?? "any"} at{" "}
          {s.access.zone ?? "any"} as <ViewOrganization organization={s.dao} />
          <br />
        </div>
      ))}
    </section>
  )
}
