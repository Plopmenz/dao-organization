"use client"

import { useAccount, useConnect, useDisconnect } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

import { useAbstractAddress } from "@/lib/AbstractTransaction"
import { Button } from "@/components/ui/button"

export function ConnectButton() {
  const { isConnected } = useAccount()
  const abstractAddress = useAbstractAddress()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <Button onClick={() => disconnect()}>
        Disconnect Wallet ({abstractAddress?.substring(0, 5)}...)
      </Button>
    )
  }
  return <Button onClick={() => connect()}>Connect Wallet</Button>
}
