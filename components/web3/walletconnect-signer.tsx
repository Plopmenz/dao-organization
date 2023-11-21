"use client"

import { useContext, useEffect, useState } from "react"
import { getWalletClient } from "@wagmi/core"
import { SignClient } from "@walletconnect/sign-client"
import { SignClient as SignClientType } from "@walletconnect/sign-client/dist/types/client"

import {
  abstractTransaction,
  TransactionMethodContext,
  useAbstractAddress,
} from "@/lib/AbstractTransaction"
import OpenRD from "@/lib/OpenR&D"
import { Button } from "@/components/ui/button"

export function WalletConnectSigner() {
  const abstractAddress = useAbstractAddress()
  const { transactionMethod } = useContext(TransactionMethodContext)

  const [accounts, setAccounts] = useState<string[]>([])
  const [signClient, setSignClient] = useState<SignClientType | undefined>()
  const [sessionTopic, setSessionTopic] = useState<string[]>([])

  const getNamespaces = () => {
    return {
      eip155: {
        accounts: accounts,
        chains: [`eip155:${OpenRD.chainId}`],
        methods: [
          "eth_sendTransaction",
          "personal_sign",
          "eth_signTypedData",
          "eth_signTypedData_v4",
        ],
        events: ["chainChanged", "accountsChanged"],
      },
    }
  }

  const setSessionProposalHandler = (signClient: SignClientType) => {
    signClient.on("session_proposal", async (event) => {
      console.log("session_proposal", event)
      const { acknowledged } = await signClient.approve({
        id: event.id,
        namespaces: getNamespaces(),
      })

      // Optionally await acknowledgement from dapp
      const session = await acknowledged()

      setSessionTopic(sessionTopic.concat([session.topic]))
    })
  }

  const setSessionRequestHandler = (signClient: SignClientType) => {
    signClient.on("session_request", async (event) => {
      console.log("session_request", event)
      if (event.params.request.method === "eth_sendTransaction") {
        if (
          event.params.request.params.from !== transactionMethod.showAddress
        ) {
          // We cannot decide based on just address what transactionMethod / route the user wishes to take
          // However we could use "lastSelected" or something
          // Ideally prompt the user which route they'd like to use (show a list of incomming transaction with a dropdown for signer)
          console.warn(
            "Transaction request is for",
            event.params.request.params.from,
            "but we have",
            transactionMethod.sharedAddress,
            "selected"
          )
        }

        try {
          const args = event.params.request.params[0]
          const signer = await getWalletClient({
            chainId: Number(OpenRD.chainId),
          })
          const transactionRaw = {
            to: args.to,
            value: args.value ?? BigInt(0),
            data: args.data ?? "0x00",
          }
          const transactionData = abstractTransaction(
            transactionMethod,
            transactionRaw
          )
          const result = await signer?.sendTransaction({
            ...transactionData,
            // Gas is increased if we do not use the EOA directly
            // gas: args.gas,
          })
          signClient.respond({
            topic: event.topic,
            response: { id: event.id, jsonrpc: "2.0", result: result },
          })
        } catch (err: any) {
          console.error(err)

          const USER_REJECTED_REQUEST_CODE = 4001
          signClient.respond({
            topic: event.topic,
            response: {
              id: event.id,
              jsonrpc: "2.0",
              error: {
                code: USER_REJECTED_REQUEST_CODE, // Most likely "error"
                message: err?.message ?? "Unknown error",
              },
            },
          })
        }
      } else {
        const INVALID_METHOD_ERROR_CODE = 1001
        signClient.respond({
          topic: event.topic,
          response: {
            id: event.id,
            jsonrpc: "2.0",
            error: {
              code: INVALID_METHOD_ERROR_CODE,
              message: "Method not supported.",
            },
          },
        })
      }
    })
  }

  const setSessionDeleteHandler = (signClient: SignClientType) => {
    signClient.on("session_delete", async (event) => {
      console.log("session_delete", event)
      setSessionTopic(sessionTopic.filter((t) => t === event.topic))
    })
  }

  useEffect(() => {
    const fetch = async () => {
      const _signClient = await SignClient.init({
        projectId: "9e6b312fc985cf816f698be49de6ed4c",
        // optional parameters
        // relayUrl: "<YOUR RELAY URL>",
        metadata: {
          name: "DAO Organization Signer",
          description: "DAO Organization Permission Management",
          url: "https://dao-organization.plopmenz.com/",
          icons: ["https://dao-organization.plopmenz.com/favicon.ico"],
        },
      })

      setSessionProposalHandler(_signClient)

      _signClient.on("session_event", (event) => {
        console.log("session_event", event)
      })

      setSessionRequestHandler(_signClient)

      _signClient.on("session_ping", (event) => {
        console.log("session_ping", event)
      })

      setSessionDeleteHandler(_signClient)

      setSignClient(_signClient)
    }

    fetch().catch(console.error)
  }, [])

  useEffect(() => {
    const accounts = []

    if (abstractAddress) {
      accounts.push(`eip155:${OpenRD.chainId}:${abstractAddress}`)
      // Also add the other options
    }

    setAccounts(accounts)
  }, [abstractAddress])

  useEffect(() => {
    if (!signClient) {
      return
    }

    signClient.removeAllListeners("session_proposal")
    setSessionProposalHandler(signClient)

    for (let i = 0; i < sessionTopic.length; i++) {
      signClient
        .emit({
          topic: sessionTopic[i],
          event: {
            name: "accountsChanged",
            data: accounts,
          },
          chainId: `eip155:${OpenRD.chainId}`,
        })
        .catch(console.error)
    }
  }, [accounts, signClient])

  useEffect(() => {
    if (!signClient) {
      return
    }

    signClient.removeAllListeners("session_request")
    setSessionRequestHandler(signClient)
  }, [transactionMethod, signClient])

  useEffect(() => {
    if (!signClient) {
      return
    }

    signClient.removeAllListeners("session_delete")
    setSessionDeleteHandler(signClient)
  }, [sessionTopic, signClient])

  const buttonClick = async () => {
    if (!signClient) {
      window.alert("Wallet connect not ready (yet).")
      return
    }

    const wcUri = window.prompt("Enter walletconnect url (wc://)")
    if (wcUri) {
      await signClient.core.pairing.pair({ uri: wcUri })
    }
  }

  return signClient && <Button onClick={buttonClick}>WC</Button>
}
