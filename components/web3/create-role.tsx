"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useWaitForTransaction } from "wagmi"
import * as z from "zod"

import {
  useAbstractAddress,
  useAbstractTransaction,
} from "@/lib/AbstractTransaction"
import { getHatID } from "@/lib/events"
import OpenRD from "@/lib/OpenR&D"
import { Permission } from "@/lib/types"
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

const formSchema = z.object({
  name: z.string(),
})

export function CreateRole({
  onCreate,
}: {
  onCreate: (permission: Permission) => void
}) {
  const transactor = useAbstractAddress()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  const [prepared, setPrepared] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema>>({
    name: "",
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValues(values)
    setPrepared(true)
  }

  const { writeAsync, data, isSuccess, isError } = useAbstractTransaction({
    abi: OpenRD.contracts.Hats.abi,
    address: OpenRD.contracts.Hats.address,
    functionName: "mintTopHat",
    args: [
      transactor,
      formValues.name,
      "https://app.hatsprotocol.xyz/icon.jpeg",
    ], //name should be uploaded to IFPS, should also do Hats list of attributes
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

    const hatId = getHatID(transaction.data?.logs)
    onCreate(hatId)
  }, [transaction.isSuccess])

  const ready = !isError && prepared
  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Create a new role
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role Name</FormLabel>
                <FormControl>
                  <Input disabled={prepared} placeholder="My Role" {...field} />
                </FormControl>
                <FormDescription>The name of the role.</FormDescription>
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
        Create Role
      </Button>
    </div>
  )
}
