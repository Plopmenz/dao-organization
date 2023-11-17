import axios from "axios"
import { Address } from "viem"

import {
  DAOData,
  GovernanceData,
  HatData,
  SharedAddressData,
  SubDAOData,
  UserData,
} from "./types"

const backendBaseUrl = "/api/" as const

export async function getDAO(dao: Address): Promise<DAOData> {
  const res = await axios.get(backendBaseUrl + "dao/" + dao)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}

export async function getSharedAddress(
  sharedAddress: Address
): Promise<SharedAddressData> {
  const res = await axios.get(backendBaseUrl + "sharedAddress/" + sharedAddress)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}
export async function getSubDAO(subDAO: Address): Promise<SubDAOData> {
  const res = await axios.get(backendBaseUrl + "subDAO/" + subDAO)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}
export async function getGovernance(
  governance: Address
): Promise<GovernanceData> {
  const res = await axios.get(backendBaseUrl + "governance/" + governance)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}
export async function getUser(user: Address): Promise<UserData> {
  const res = await axios.get(backendBaseUrl + "user/" + user)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}
export async function getHat(hat: string): Promise<HatData> {
  const res = await axios.get(backendBaseUrl + "hat/" + hat)
  if (res.status != 200) {
    throw new Error(
      `Backend error: ${res.statusText}, Server repsonse: ${res.data}`
    )
  }
  return res.data
}
