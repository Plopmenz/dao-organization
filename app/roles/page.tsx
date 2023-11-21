"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { ViewRoles } from "@/components/web3/view-roles"

export default function AllRolesPage() {
  const router = useRouter()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Roles
      </h1>
      <ViewRoles />
      <Link href="https://app.hatsprotocol.xyz/" target="_blank">
        Manage Hats
      </Link>
      {/*<CreateRole onCreate={(roleId) => router.push("/roles/" + roleId)} />*/}
    </section>
  )
}
