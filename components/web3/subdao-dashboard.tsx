"use client"

import { Address } from "viem"
import { useContractRead } from "wagmi"

import OpenRD from "@/lib/OpenR&D"
import { ViewOrganization } from "@/components/web3/view-organization"

export function SubDAODashboard({ subDAO }: { subDAO: Address | undefined }) {
  // Paging
  // const { data: subDAOCount } = useContractRead({
  //   abi: OpenRD.contracts.SubDAOImplementation.abi,
  //   address: subDAO,
  //   functionName: "getSubDAOCount",
  // })

  const { data: subDAOs } = useContractRead({
    abi: OpenRD.contracts.SubDAOImplementation.abi,
    address: subDAO,
    functionName: "getSubDAOs",
  })

  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Departments
      </h1>
      {subDAOs?.map((d, i) => <ViewOrganization organization={d} key={i} />)}
    </div>
  )
}
