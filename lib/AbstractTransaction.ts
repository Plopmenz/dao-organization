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

interface AbstractTransactionSettings {
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
        abi = adminAbi
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

const adminAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "address",
        name: "where",
        type: "address",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "permissionId",
        type: "bytes32",
      },
    ],
    name: "DaoUnauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "members",
        type: "address[]",
      },
    ],
    name: "MembersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "members",
        type: "address[]",
      },
    ],
    name: "MembersRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "definingContract",
        type: "address",
      },
    ],
    name: "MembershipContractAnnounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startDate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "endDate",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        indexed: false,
        internalType: "struct IDAO.Action[]",
        name: "actions",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "allowFailureMap",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "EXECUTE_PROPOSAL_PERMISSION_ID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [
      {
        internalType: "contract IDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IDAO.Action[]",
        name: "_actions",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_allowFailureMap",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IDAO",
        name: "_dao",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isMember",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginType",
    outputs: [
      {
        internalType: "enum IPlugin.PluginType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const
