"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { connectorsForWallets, getDefaultWallets } from "@rainbow-me/rainbowkit"
import { polygonMumbai } from "viem/chains"
import { configureChains, createConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { infuraProvider } from "wagmi/providers/infura"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { publicProvider } from "wagmi/providers/public"

function simpleRpcProvider({ http, ws }: { http: string; ws?: string }): any {
  return jsonRpcProvider({
    rpc: (chain) => ({
      http: http,
      webSocket: ws,
    }),
  })
}

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    simpleRpcProvider({
      http: "https://nd-660-959-213.p2pify.com/e497bc9a66e9cbf16a18b36d095ae80c",
      ws: "wss://ws-nd-660-959-213.p2pify.com/e497bc9a66e9cbf16a18b36d095ae80c",
    }),
    alchemyProvider({ apiKey: "GFsknWbazmwCAkh0yVuOs_PrhfXo_DsT" }),
    infuraProvider({ apiKey: "7f4d8fbf347645bb89346f7844abf9f6" }),
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
