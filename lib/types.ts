import { Address } from "viem"

export interface DAOMetadata {
  title: string
  description: string
}

export interface DAOData {
  metadata?: DAOMetadata
  sharedAddress?: Address
  subDao?: Address
  governance?: Address
}

export interface Permission extends PermissionAccess {
  hat: string
}

export interface PermissionAccess {
  zone?: Address
  functionSelector?: string
}

export interface SharedAddressData {
  dao: Address
  permissions: Permission[] // Use Set instead? (object does reference compare tho)
}

export interface SubDAOData {
  dao: Address
  subdaos: Address[]
}

export interface GovernanceData {
  dao: Address
  admin: Address
}

export interface UserData {
  hats: { [id: string]: string } // ERC1155, id -> amount, only amounts > 0 are included
  governance: { dao: Address; plugin: Address }[]
}

export interface HatData {
  name: string
  sharedaddress: { dao: Address; plugin: Address; access: PermissionAccess }[] // Use Set instead? (object does reference compare tho)
}
