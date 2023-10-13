"use client"

import { useState } from "react"

import {
  TransactionMethod,
  TransactionMethodContext,
} from "@/lib/AbstractTransaction"

export function AbstractTransactions({
  children,
}: {
  children: React.ReactNode
}) {
  const [transactionMethod, setTransactionMethod] = useState<TransactionMethod>(
    {}
  )

  return (
    <TransactionMethodContext.Provider
      value={{
        transactionMethod: transactionMethod,
        setTransactionMethod: setTransactionMethod,
      }}
    >
      {children}
    </TransactionMethodContext.Provider>
  )
}
