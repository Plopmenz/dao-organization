import { Address, encodeAbiParameters } from "viem"

import OpenRD from "./OpenR&D"

export function getSharedAddressSettings() {
  const sharedAddressFormat = [{ type: "address", name: "hats" }] as const
  const hats = OpenRD.contracts.Hats
  const sharedAddressValues = [hats.address] as const
  const sharedAddressBytes = encodeAbiParameters(
    sharedAddressFormat,
    sharedAddressValues
  )
  const sharedAddressSettings = {
    pluginSetupRef: {
      versionTag: {
        release: 1,
        build: 1,
      },
      pluginSetupRepo: OpenRD.contracts.SharedAddressRepo.address,
    },
    data: sharedAddressBytes,
  }
  return sharedAddressSettings
}

export function getSubDAOSettings() {
  const subDAOFormat = [] as const
  const subDAOValues = [] as const
  const subDAOBytes = encodeAbiParameters(subDAOFormat, subDAOValues)
  const subDAOSettings = {
    pluginSetupRef: {
      versionTag: {
        release: 1,
        build: 1,
      },
      pluginSetupRepo: OpenRD.contracts.SubDAORepo.address,
    },
    data: subDAOBytes,
  }
  return subDAOSettings
}

export function getAdminSettings(admin: Address) {
  const adminRepo = OpenRD["admin-repo"].address
  const adminFormat = [{ type: "address", name: "admin" }] as const
  const adminValues = [admin] as const
  const adminBytes = encodeAbiParameters(adminFormat, adminValues)
  const adminSettings = {
    pluginSetupRef: {
      versionTag: {
        release: 1,
        build: 1,
      },
      pluginSetupRepo: adminRepo,
    },
    data: adminBytes,
  }
  return adminSettings
}
