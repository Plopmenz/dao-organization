"use client"

import {
  darkTheme,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit"
import { useTheme } from "next-themes"

import { chains } from "@/config/wagmi-config"

export function ThemedRaindbowProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()

  return (
    <RainbowKitProvider
      chains={chains}
      theme={resolvedTheme == "light" ? lightTheme() : darkTheme()}
    >
      {children}
    </RainbowKitProvider>
  )
}
