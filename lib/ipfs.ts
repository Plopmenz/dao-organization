import axios from "axios"

const FormData = require("form-data")

const IPFSUrl = "https://prod.ipfs.aragon.network/api/v0" // "https://test.ipfs.aragon.network/api/v0"
const APIKey = "b477RhECf8s8sdM7XrkLBs2wHc4kCMwpbcFC55Kt" // Publicly known Aragon IPFS node API key

/** Upload a file to the cluster and pin it */
export async function addToIpfs(json: string): Promise<string> {
  let data = new FormData()
  data.append("path", json)

  const config = {
    method: "POST",
    url: IPFSUrl + "/add",
    headers: {
      "X-API-KEY": APIKey,
    },
    data: data,
  }

  const res = await axios(config)
  return res.data.Hash
}

export async function getFromIpfs(hash: string): Promise<any> {
  const config = {
    method: "POST",
    url: IPFSUrl + "/cat?arg=" + hash,
    headers: {
      "X-API-KEY": APIKey,
    },
  }

  const res = await axios(config)
  return res.data
}
