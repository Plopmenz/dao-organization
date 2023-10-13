"use client"

import { useRouter } from "next/navigation"

import { CreateOrganization } from "@/components/web3/create-organization"

export default function IndexPage() {
  const router = useRouter()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          DAO Organization Permission Management
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Technical demo.
        </p>
      </div>
      <CreateOrganization
        onCreate={(dao) => router.push("/organizations/" + dao)}
      />
    </section>
  )
}
