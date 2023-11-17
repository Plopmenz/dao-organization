"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { stringToHex, zeroAddress } from "viem"
import { useWaitForTransaction } from "wagmi"
import * as z from "zod"

import {
  useAbstractAddress,
  useAbstractTransaction,
} from "@/lib/AbstractTransaction"
import { getDAOAddress } from "@/lib/events"
import { addToIpfs } from "@/lib/ipfs"
import OpenRD from "@/lib/OpenR&D"
import {
  getAdminSettings,
  getSharedAddressSettings,
  getSubDAOSettings,
} from "@/lib/plugin-settings"
import { DAOMetadata } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export function CreateOrganization({
  onCreate,
}: {
  onCreate: (dao: string) => void
}) {
  const transactor = useAbstractAddress()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  const [prepared, setPrepared] = useState<boolean>(false)
  function onSubmit(values: z.infer<typeof formSchema>) {
    setDaoMetadata({
      title: values.title,
      description: values.description,
    })
    setPrepared(true)
  }

  const [daoMetadata, setDaoMetadata] = useState<DAOMetadata | undefined>(
    undefined
  )
  const [ipfsMetadata, setIpfsMetadata] = useState<string>("")
  useEffect(() => {
    if (!daoMetadata) {
      return
    }

    const fetch = async () => {
      setIpfsMetadata(await addToIpfs(JSON.stringify(daoMetadata)))
    }

    fetch().catch(console.error)
  }, [daoMetadata])
  const daoSettings = {
    trustedForwarder: zeroAddress,
    daoURI: "https://plopmenz.com",
    subdomain: "parent-org-" + Math.round(Math.random() * 1_000_000_000),
    metadata: stringToHex(ipfsMetadata),
  } as const
  const pluginSettings = transactor
    ? [
        getSharedAddressSettings(),
        getSubDAOSettings(),
        getAdminSettings(transactor),
      ]
    : []

  const { writeAsync, data, isSuccess, isError } = useAbstractTransaction({
    abi: OpenRD.contracts.DAOFactory.abi,
    address: OpenRD.contracts.DAOFactory.address,
    functionName: "createDao",
    args: [daoSettings, pluginSettings],
  })

  useEffect(() => {
    if (!isSuccess) {
      return
    }

    console.log("show loading animation")
  }, [isSuccess])

  const transaction = useWaitForTransaction({
    hash: data?.hash,
    enabled: isSuccess,
  })

  useEffect(() => {
    if (!transaction.isSuccess) {
      return
    }

    const daoAddress = getDAOAddress(transaction.data?.logs)
    onCreate(daoAddress)
  }, [transaction.isSuccess])

  const ready =
    pluginSettings.length > 0 && !isError && ipfsMetadata !== "" && prepared
  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Create a new organization
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={prepared}
                    placeholder="My Organization"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the name of your organzation.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={prepared}
                    placeholder="It's awesome, because..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Tell a bit more about your organization!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={prepared}>
            Prepare
          </Button>
        </form>
      </Form>
      <Button onClick={async () => await writeAsync()} disabled={!ready}>
        Create Organization
      </Button>
    </div>
  )
}
