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
  const [sessionTopic, setSessionTopic] = useState<string | undefined>()

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
      const { topic } = await signClient.approve({
        id: event.id,
        namespaces: getNamespaces(),
      })
      setSessionTopic(topic)
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
          // Ideally prompt the user which route they'd like to use
          console.warn(
            "Transaction request is for",
            event.params.request.params.from,
            "but we have",
            transactionMethod.sharedAddress,
            "selected"
          )
        }

        const args = event.params.request.params[0]
        const signer = await getWalletClient({
          chainId: Number(OpenRD.chainId),
        })
        const transactionRaw = {
          to: args.to,
          value: args.value,
          data: args.data,
        }
        const transactionData = abstractTransaction(
          transactionMethod,
          transactionRaw
        )
        signer
          ?.sendTransaction({
            ...transactionData,
            // gas: args.gas,
          })
          .catch(console.error)

        // add error / rejection of tranasctions
      }
    })
  }

  const setSessionDeleteHandler = (signClient: SignClientType) => {
    signClient.on("session_delete", async (event) => {
      console.log("session_delete", event)
      if (event.topic === sessionTopic) {
        setSessionTopic(undefined)
      }
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

    if (sessionTopic) {
      signClient
        .update({
          topic: sessionTopic,
          namespaces: getNamespaces(),
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
  }, [abstractTransaction, signClient])

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
