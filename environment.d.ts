declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PREFFERED_RPC: string | undefined
      PREFFERED_RPC_WS: string | undefined
      ALCHEMY_KEY: string | undefined
      INFURA_KEY: string | undefined
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
