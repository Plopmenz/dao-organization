"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Address, stringToHex, zeroAddress } from "viem"
import { useWaitForTransaction } from "wagmi"
import * as z from "zod"

import {
  useAbstractAddress,
  useAbstractTransaction,
} from "@/lib/AbstractTransaction"
import { DAOMetadata } from "@/lib/dao"
import { getDAOAddress } from "@/lib/events"
import { addToIpfs } from "@/lib/ipfs"
import OpenRD from "@/lib/OpenR&D"
import {
  getAdminSettings,
  getSharedAddressSettings,
  getSubDAOSettings,
} from "@/lib/plugin-settings"
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

export function CreateSubDAO({
  onCreate,
  parentSubDAO,
}: {
  onCreate: (subdao: string) => void
  parentSubDAO: Address | undefined
}) {
  const transactor = useAbstractAddress()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
    subdomain: "sub-org-" + Math.round(Math.random() * 1_000_000_000),
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
    abi: OpenRD.contracts.SubDAOImplementation.abi,
    address: parentSubDAO,
    functionName: "createSubDAO",
    args: [OpenRD.contracts.DAOFactory.address, daoSettings, pluginSettings],
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
    pluginSettings.length > 0 &&
    !isError &&
    ipfsMetadata !== "" &&
    prepared &&
    parentSubDAO
  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Create a new department
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
                    placeholder="My Department"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the name of your department.
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
                  Tell a bit more about your department!
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
        Create Department
      </Button>
    </div>
  )
}
