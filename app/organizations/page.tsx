"use client"

import { ViewOrganizations } from "@/components/web3/view-organizations"

export default function AllOrganizationsPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Your organizations
      </h1>
      <ViewOrganizations />
    </section>
  )
}
