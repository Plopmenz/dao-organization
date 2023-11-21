"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { polygon } from "viem/chains"
import { configureChains, createConfig } from "wagmi"
import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
  [polygon],
  [
    infuraProvider({ apiKey: "b13eca0fcada4ed9b5e0ef5b940b9de5" }),
    publicProvider(),
  ]
)

const { wallets } = getDefaultWallets({
  appName: "dao-organzation",
  projectId: "bff377b8d8e317762f38434848c40fca",
  chains,
})

export const config = createConfig({
  autoConnect: true,
  connectors: connectorsForWallets(wallets),
  publicClient: publicClient,
})

export { chains }
