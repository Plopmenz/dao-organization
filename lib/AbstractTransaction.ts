"use client"

import { createContext, useContext } from "react"
import { Abi, Address, encodeFunctionData } from "viem"
import { useAccount, useContractWrite } from "wagmi"

import OpenRD from "./OpenR&D"

export interface TransactionMethod {
  showAddress?: Address
  governance?: Address
  sharedAddress?: { address: Address; hat: bigint }
  continue?: TransactionMethod
}

const transactionMethodContextDefault = {
  transactionMethod: {} as TransactionMethod,
  setTransactionMethod: (method: TransactionMethod) => {
    transactionMethodContextDefault.transactionMethod = method
  },
}

export const TransactionMethodContext = createContext(
  transactionMethodContextDefault
)

export function useTransactionMethod() {
  return useContext(TransactionMethodContext)
}

export function useAbstractAddress() {
  const { address } = useAccount()
  const { transactionMethod } = useTransactionMethod()
  return transactionMethod.showAddress ?? address
}

export interface AbstractTransactionSettings {
  abi: Abi
  address?: Address
  functionName?: any
  args?: any[]
  value?: bigint
}
export function useAbstractTransaction({
  abi,
  address,
  functionName,
  args,
  value,
}: AbstractTransactionSettings) {
  const { transactionMethod } = useContext(TransactionMethodContext)

  if (address) {
    let method: TransactionMethod | undefined = transactionMethod
    while (method) {
      if (method.sharedAddress && method.governance) {
        throw new Error("Both shared address and governance set")
      }

      if (method.sharedAddress) {
        const data = args
          ? encodeFunctionData({
              abi: abi,
              functionName: functionName,
              args: args,
            })
          : "0x"
        const action = { to: address, value: value ?? BigInt(0), data: data }
        args = [method.sharedAddress.hat, [action], BigInt(0)]
        value = BigInt(0) // or let the user pay?
        functionName = "asDAO"
        address = method.sharedAddress.address
        abi = OpenRD.contracts.SharedAddressImplementation.abi
      }

      if (method.governance) {
        const data = args
          ? encodeFunctionData({
              abi: abi,
              functionName: functionName,
              args: args,
            })
          : "0x"
        const action = { to: address, value: value ?? BigInt(0), data: data }
        args = ["0x", [action], BigInt(0)]
        value = BigInt(0) // or let the user pay?
        functionName = "executeProposal"
        address = method.governance
        abi = OpenRD.contracts.AdminImplementation.abi
      }

      method = method.continue
    }
  }

  const contractWrite = useContractWrite({
    abi: abi,
    address: address,
    functionName: functionName,
    args: args,
  })
  return contractWrite
}

export interface TransactionData {
  to: Address
  value: bigint
  data: `0x${string}`
}
export function abstractTransaction(
  transactionMethod: TransactionMethod,
  transactionData: TransactionData
): TransactionData {
  let transaction = transactionData
  let method: TransactionMethod | undefined = transactionMethod
  while (method) {
    if (method.sharedAddress && method.governance) {
      throw new Error("Both shared address and governance set")
    }

    if (method.sharedAddress) {
      transaction = {
        to: method.sharedAddress.address,
        value: BigInt(0), // or let the user pay?
        data: encodeFunctionData({
          abi: OpenRD.contracts.SharedAddressImplementation.abi,
          functionName: "asDAO",
          args: [method.sharedAddress.hat, [transaction], BigInt(0)],
        }),
      }
    }

    if (method.governance) {
      transaction = {
        to: method.governance,
        value: BigInt(0), // or let the user pay?
        data: encodeFunctionData({
          abi: OpenRD.contracts.AdminImplementation.abi,
          functionName: "executeProposal",
          args: ["0x", [transaction], BigInt(0)],
        }),
      }
    }

    method = method.continue
  }

  return transaction
}
