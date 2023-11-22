import { ConnectButton } from "@rainbow-me/rainbowkit"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { SelectTransactionMethod } from "@/components/web3/select-transaction-method"

import { WalletConnectSigner } from "./web3/walletconnect-signer"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <SelectTransactionMethod />
            <WalletConnectSigner />
            <ThemeToggle />
            <ConnectButton chainStatus="none" />
          </nav>
        </div>
      </div>
    </header>
  )
}
