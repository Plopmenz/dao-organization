"use client"

import { useEffect, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Address, useAccount, usePublicClient } from "wagmi"

import {
  TransactionMethod,
  useTransactionMethod,
} from "@/lib/AbstractTransaction"
import { DAOMetadata, getCreatedDAOs, getMetadata, getPlugins } from "@/lib/dao"
import OpenRD from "@/lib/OpenR&D"
import { getPermissions } from "@/lib/sharedaddress"
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

interface DAO {
  fromDAO?: DAO
  address: Address
  metadata: DAOMetadata
}

interface Method {
  type: string
  method: TransactionMethod
  dao: DAO
}

export function SelectTransactionMethod() {
  const account = useAccount()
  const publicClient = usePublicClient()
  const [transactionMethods, setTransactionMethods] = useState<
    {
      id: string
      method: TransactionMethod
    }[]
  >([])
  const [daos, setDaos] = useState<DAO[]>([])

  const getTransactionMethods = async () => {
    if (!account?.address) {
      setDaos([])
      setTransactionMethodSelected("")
    } else {
      const daoAddresses: DAO[] = []
      const searchAddress = async (
        fromDao: DAO | undefined,
        address: Address
      ) => {
        const foundDaos = await getCreatedDAOs(address, publicClient)
        await asyncMap(foundDaos, async (dao) => {
          const daoMetadata = await getMetadata(dao.address, publicClient)
          const newDAO = {
            fromDAO: fromDao,
            address: dao.address,
            metadata: daoMetadata,
          }
          daoAddresses.push(newDAO)
          await searchAddress(newDAO, dao.address)

          // Search created SubDAOs
          const plugins = await getPlugins(dao.address, publicClient)
          await searchAddress(newDAO, plugins[1])
        })
      }
      await searchAddress(undefined, account.address)
      setDaos(daoAddresses)
    }
  }

  useEffect(() => {
    getTransactionMethods().catch(console.error)
  }, [account?.address])

  useEffect(() => {
    const fetch = async () => {
      const methods: Method[] = []
      await asyncMap(daos, async (dao) => {
        const plugins = await getPlugins(dao.address, publicClient)
        methods.push({
          type: `Governance`,
          method: { showAddress: dao.address, governance: plugins[2] },
          dao: dao,
        })

        const permissions = await getPermissions(plugins[0], publicClient)
        let hats = permissions.map((p) => p.hat)
        hats = hats.filter((h, i) => hats.indexOf(h) == i) // Remove duplicates
        await asyncMap(hats, async (h) => {
          if (account?.address) {
            const balance = await publicClient.readContract({
              abi: OpenRD.contracts.Hats.abi,
              address: OpenRD.contracts.Hats.address,
              functionName: "balanceOf",
              args: [account?.address, h],
            })

            if (balance > 0) {
              const hatInfo = await publicClient.readContract({
                abi: OpenRD.contracts.Hats.abi,
                address: OpenRD.contracts.Hats.address,
                functionName: "viewHat",
                args: [h],
              })

              // Probably need to do an IPFS call here

              methods.push({
                type: `Role (${hatInfo[0]})`,
                method: {
                  showAddress: dao.address,
                  sharedAddress: { address: plugins[0], hat: h },
                },
                dao: dao,
              })
            }
          }
        })
      })

      const processedMethods = methods.map((m) => {
        let id = `${m.dao.metadata.title}: ${m.type}`
        const method = { ...m.method }

        if (m.type.startsWith("Role")) {
          // Direct, currently doesnt check for DAOs with roles
          return { id: id, method: method }
        }

        let fromDAO = m.dao.fromDAO
        let nextMethod = method
        while (fromDAO) {
          // Ideally you would take all paths, but that is very messy in the UI
          // Currently also only showing type of the last connection
          const from = methods.find((m) => m.dao.address == fromDAO?.address)
          if (from == undefined) {
            throw new Error("Process path not found")
          }
          id = `${from.dao.metadata.title}: ${id}`
          nextMethod.continue = {
            ...from.method,
          }
          nextMethod = nextMethod.continue
          fromDAO = fromDAO.fromDAO
        }

        return { id: id, method: method }
      })

      setTransactionMethods(processedMethods)
    }

    fetch().catch(console.error)
  }, [daos])

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
          onClick={() => getTransactionMethods().catch(console.error)}
        >
          Refresh
        </Button>
      </PopoverContent>
    </Popover>
  )
}
