"use client"

import { useEffect, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { useAccount } from "wagmi"

import {
  TransactionMethod,
  useTransactionMethod,
} from "@/lib/AbstractTransaction"
import { getDAO, getHat, getUser } from "@/lib/backend"
import { UserData } from "@/lib/types"
import { asyncMap, cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface SelectableTransactionMethod {
  id: string
  method: TransactionMethod
}

export function SelectTransactionMethod() {
  const account = useAccount()
  const [transactionMethods, setTransactionMethods] = useState<
    SelectableTransactionMethod[]
  >([])
  const [transactionMethodSearchId, setTransactionMethodSearchId] = useState(0) // Increase for refresh

  const getTransactionMethods = async () => {
    setTransactionMethodSelected("")
    setTransactionMethod({})
    const foundTransactionMethods: SelectableTransactionMethod[] = []

    const processUser = async (
      user: UserData,
      path: TransactionMethod | undefined,
      prefix: string
    ) => {
      await Promise.all(
        Object.keys(user.hats)
          .map(async (hatId) => {
            const hatInfo = await getHat(hatId)
            await asyncMap(hatInfo.sharedaddress, async (sharedAddress) => {
              const method: TransactionMethod = {
                sharedAddress: {
                  address: sharedAddress.plugin,
                  hat: BigInt(hatId),
                },
                showAddress: sharedAddress.dao,
                continue: path,
              }
              const daoInfo = await getDAO(sharedAddress.dao)
              const newPrefix =
                prefix + `${daoInfo.metadata?.title} (Role ${hatInfo.name}): `

              foundTransactionMethods.push({
                id: newPrefix.substring(0, newPrefix.length - 2),
                method: method,
              })

              if (
                !sharedAddress.access.zone &&
                !sharedAddress.access.functionSelector
              ) {
                // Ideally should check in the process user if the role has access to the specific method of transacting
                // For now only consider full access as such
                await processUser(
                  await getUser(sharedAddress.dao),
                  method,
                  newPrefix
                )
              }
            })
          })
          .concat(
            user.governance.map(async (governance) => {
              const method: TransactionMethod = {
                governance: governance.plugin,
                showAddress: governance.dao,
                continue: path,
              }
              const daoInfo = await getDAO(governance.dao)
              const newPrefix =
                prefix + `${daoInfo.metadata?.title} (Governance): `

              foundTransactionMethods.push({
                id: newPrefix.substring(0, newPrefix.length - 2),
                method: method,
              })

              await processUser(
                await getUser(governance.dao),
                method,
                newPrefix
              )
            })
          )
      )
    }

    if (account?.address) {
      let userData: UserData | undefined
      try {
        userData = await getUser(account.address)
      } catch (err) {
        // Likely users connected for the first time
        // No records stored about this user yet
        console.warn("User data could not be loaded", err)
      }

      if (userData) {
        await processUser(userData, undefined, "")
      }
    }

    setTransactionMethods(foundTransactionMethods)
  }

  useEffect(() => {
    getTransactionMethods().catch(console.error)
  }, [account?.address, transactionMethodSearchId])

  const [open, setOpen] = useState<boolean>(false)
  const [transactionMethodSelected, setTransactionMethodSelected] =
    useState<string>("")
  const { setTransactionMethod } = useTransactionMethod()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {transactionMethodSelected ?? "Select transaction method..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search transaction method..." />
          <CommandEmpty>No transaction methods found.</CommandEmpty>
          <CommandGroup>
            {transactionMethods.map((transactionMethod) => (
              <CommandItem
                key={transactionMethod.id}
                onSelect={(currentValue) => {
                  if (
                    currentValue === transactionMethodSelected.toLowerCase()
                  ) {
                    setTransactionMethodSelected("")
                    setTransactionMethod({})
                  } else {
                    setTransactionMethodSelected(transactionMethod.id)
                    setTransactionMethod(transactionMethod.method)
                  }
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    transactionMethodSelected === transactionMethod.id
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {transactionMethod.id}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <Button
          className="w-full"
          variant="outline"
          onClick={() =>
            setTransactionMethodSearchId(transactionMethodSearchId + 1)
          }
        >
          Refresh
        </Button>
      </PopoverContent>
    </Popover>
  )
}
