"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Address } from "viem"
import { useWaitForTransaction } from "wagmi"
import * as z from "zod"

import { useAbstractTransaction } from "@/lib/AbstractTransaction"
import OpenRD from "@/lib/OpenR&D"
import { Permission } from "@/lib/sharedaddress"
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
  hat: z.string(),
  zone: z.coerce.string(),
  functionSelector: z.coerce.string(),
})

export function GrantPermission({
  onGrant,
  sharedAddress,
}: {
  onGrant: (permission: Permission) => void
  sharedAddress: Address | undefined
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [prepared, setPrepared] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema>>({
    hat: "",
    zone: "",
    functionSelector: "",
  })
  const [transactionInfo, setTransactionInfo] = useState<{
    functionName: string
    args: any[]
  }>({ functionName: "grantFullAccess", args: [formValues.hat] })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormValues(values)
    setPrepared(true)
  }

  useEffect(() => {
    if (
      formValues.functionSelector !== "" &&
      formValues.functionSelector !== "undefined"
    ) {
      setTransactionInfo({
        functionName: "grantFullFunctionAccess",
        args: [
          BigInt(formValues.hat),
          formValues.zone,
          formValues.functionSelector,
        ],
      })
    } else if (formValues.zone !== "" && formValues.zone !== "undefined") {
      setTransactionInfo({
        functionName: "grantFullZoneAccess",
        args: [BigInt(formValues.hat), formValues.zone],
      })
    } else {
      setTransactionInfo({
        functionName: "grantFullAccess",
        args: [BigInt(formValues.hat)],
      })
    }
  }, [formValues])

  const { writeAsync, data, isSuccess, isError } = useAbstractTransaction({
    abi: OpenRD.contracts.SharedAddressImplementation.abi,
    address: sharedAddress,
    functionName: transactionInfo.functionName,
    args: transactionInfo.args,
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

    let permission: Permission = { hat: transactionInfo.args[0] }
    if (transactionInfo.args[1]) {
      permission.zone = transactionInfo.args[1]
    }
    if (transactionInfo.args[2]) {
      permission.functionSelector = transactionInfo.args[2]
    }
    onGrant(permission)
  }, [transaction.isSuccess])

  const ready = !isError && prepared
  return (
    <div>
      <h1 className="text-1xl font-extrabold leading-tight tracking-tighter md:text-2xl">
        Grant a new permission
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="hat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role ID*</FormLabel>
                <FormControl>
                  <Input disabled={prepared} placeholder="0" {...field} />
                </FormControl>
                <FormDescription>
                  This is the role you want to grant the permission to.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zone</FormLabel>
                <FormControl>
                  <Input disabled={prepared} placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  This is the address on which you want the permission to be
                  valid.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="functionSelector"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Function</FormLabel>
                <FormControl>
                  <Input disabled={prepared} placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  This is the function on which you want the permission to be
                  valid.
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
        Grant Permission
      </Button>
    </div>
  )
}
