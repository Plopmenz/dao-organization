"use client"

import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { useTheme } from "next-themes"

import { chains, defaultChain } from "@/config/wagmi-config"

export function ThemedRaindbowProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()

  return (
    <RainbowKitProvider
      chains={chains}
      initialChain={defaultChain}
      theme={resolvedTheme == "light" ? lightTheme() : darkTheme()}
    >
      {children}
    </RainbowKitProvider>
  )
}
