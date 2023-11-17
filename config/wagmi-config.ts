"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { polygonMumbai } from "viem/chains"
import { configureChains, createConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: "iRRdBU4koK5yTH9tmRNnTFLvKOq8T-ou" }),
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
