export default {
  name: "mumbai",
  chainId: "80001",
  contracts: {
    DAOFactory: {
      address: "0xc715336B5E7F10294F36CA09f19A0493070E2eFB",
      abi: [
        {
          inputs: [
            {
              internalType: "contract DAORegistry",
              name: "_registry",
              type: "address",
            },
            {
              internalType: "contract PluginSetupProcessor",
              name: "_pluginSetupProcessor",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "NoPluginProvided",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "trustedForwarder",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "daoURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "subdomain",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.DAOSettings",
              name: "_daoSettings",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.PluginSettings[]",
              name: "_pluginSettings",
              type: "tuple[]",
            },
          ],
          name: "createDao",
          outputs: [
            {
              internalType: "contract DAO",
              name: "createdDao",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoBase",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "daoRegistry",
          outputs: [
            {
              internalType: "contract DAORegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginSetupProcessor",
          outputs: [
            {
              internalType: "contract PluginSetupProcessor",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    DAORegistry: {
      address: "0x6dD0C8b7F9406206ceAA01B5576D9d46e9298f0E",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractAlreadyRegistered",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractERC165SupportInvalid",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractInterfaceInvalid",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
          ],
          name: "InvalidDaoSubdomain",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
          ],
          name: "DAORegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "REGISTER_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REGISTRY_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "entries",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_managingDao",
              type: "address",
            },
            {
              internalType: "contract ENSSubdomainRegistrar",
              name: "_subdomainRegistrar",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
          ],
          name: "register",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "subdomainRegistrar",
          outputs: [
            {
              internalType: "contract ENSSubdomainRegistrar",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "targetInterfaceId",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    ERC20: {
      address: "0x9Ee0c59FB8CF6c924c9Abd6c1FC4Cd3c6D2EdAeA",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name_",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol_",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string",
            },
          ],
          name: "StringTooLong",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "fromDelegate",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "toDelegate",
              type: "address",
            },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "previousBalance",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newBalance",
              type: "uint256",
            },
          ],
          name: "DelegateVotesChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "CLOCK_MODE",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint32",
              name: "pos",
              type: "uint32",
            },
          ],
          name: "checkpoints",
          outputs: [
            {
              components: [
                {
                  internalType: "uint32",
                  name: "fromBlock",
                  type: "uint32",
                },
                {
                  internalType: "uint224",
                  name: "votes",
                  type: "uint224",
                },
              ],
              internalType: "struct ERC20Votes.Checkpoint",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "clock",
          outputs: [
            {
              internalType: "uint48",
              name: "",
              type: "uint48",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "delegatee",
              type: "address",
            },
          ],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "delegatee",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "expiry",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "delegates",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "timepoint",
              type: "uint256",
            },
          ],
          name: "getPastTotalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "timepoint",
              type: "uint256",
            },
          ],
          name: "getPastVotes",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "getVotes",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "numCheckpoints",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    EscrowImplementation: {
      address: "0x9DD9B7727D569cfdC4D5a23320c35093ff4F2997",
      abi: [
        {
          inputs: [],
          name: "AlreadyInitialized",
          type: "error",
        },
        {
          inputs: [],
          name: "NotOwner",
          type: "error",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "__Escrow_init",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "token",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address payable",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferNative",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    Hats: {
      address: "0xf49d8368f7f4b5679BCaDBAA0431b060ef1d94Aa",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
            {
              internalType: "string",
              name: "_baseImageURI",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
          ],
          name: "AllHatsWorn",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "wearer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
          ],
          name: "AlreadyWearingHat",
          type: "error",
        },
        {
          inputs: [],
          name: "BatchArrayLengthMismatch",
          type: "error",
        },
        {
          inputs: [],
          name: "CircularLinkage",
          type: "error",
        },
        {
          inputs: [],
          name: "CrossTreeLinkage",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
          ],
          name: "HatDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "HatNotActive",
          type: "error",
        },
        {
          inputs: [],
          name: "Immutable",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidHatId",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidUnlink",
          type: "error",
        },
        {
          inputs: [],
          name: "LinkageNotRequested",
          type: "error",
        },
        {
          inputs: [],
          name: "MaxLevelsReached",
          type: "error",
        },
        {
          inputs: [],
          name: "MaxLevelsReached",
          type: "error",
        },
        {
          inputs: [],
          name: "NewMaxSupplyTooLow",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
          ],
          name: "NotAdmin",
          type: "error",
        },
        {
          inputs: [],
          name: "NotAdminOrWearer",
          type: "error",
        },
        {
          inputs: [],
          name: "NotEligible",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHatWearer",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHatsEligibility",
          type: "error",
        },
        {
          inputs: [],
          name: "NotHatsToggle",
          type: "error",
        },
        {
          inputs: [],
          name: "StringTooLong",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAddress",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "maxSupply",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "address",
              name: "eligibility",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "toggle",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "mutable_",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "string",
              name: "imageURI",
              type: "string",
            },
          ],
          name: "HatCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newDetails",
              type: "string",
            },
          ],
          name: "HatDetailsChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newEligibility",
              type: "address",
            },
          ],
          name: "HatEligibilityChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newImageURI",
              type: "string",
            },
          ],
          name: "HatImageURIChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "newMaxSupply",
              type: "uint32",
            },
          ],
          name: "HatMaxSupplyChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
          ],
          name: "HatMutabilityChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "newStatus",
              type: "bool",
            },
          ],
          name: "HatStatusChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newToggle",
              type: "address",
            },
          ],
          name: "HatToggleChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newAdmin",
              type: "uint256",
            },
          ],
          name: "TopHatLinkRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newAdmin",
              type: "uint256",
            },
          ],
          name: "TopHatLinked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          name: "TransferBatch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "TransferSingle",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "value",
              type: "string",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "URI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "hatId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "wearer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "wearerStanding",
              type: "bool",
            },
          ],
          name: "WearerStandingChanged",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_newAdminHat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_eligibility",
              type: "address",
            },
            {
              internalType: "address",
              name: "_toggle",
              type: "address",
            },
            {
              internalType: "string",
              name: "_details",
              type: "string",
            },
            {
              internalType: "string",
              name: "_imageURI",
              type: "string",
            },
          ],
          name: "approveLinkTopHatToTree",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "badStandings",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_wearers",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "_hatIds",
              type: "uint256[]",
            },
          ],
          name: "balanceOfBatch",
          outputs: [
            {
              internalType: "uint256[]",
              name: "balances",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "baseImageURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_admins",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "_details",
              type: "string[]",
            },
            {
              internalType: "uint32[]",
              name: "_maxSupplies",
              type: "uint32[]",
            },
            {
              internalType: "address[]",
              name: "_eligibilityModules",
              type: "address[]",
            },
            {
              internalType: "address[]",
              name: "_toggleModules",
              type: "address[]",
            },
            {
              internalType: "bool[]",
              name: "_mutables",
              type: "bool[]",
            },
            {
              internalType: "string[]",
              name: "_imageURIs",
              type: "string[]",
            },
          ],
          name: "batchCreateHats",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_hatIds",
              type: "uint256[]",
            },
            {
              internalType: "address[]",
              name: "_wearers",
              type: "address[]",
            },
          ],
          name: "batchMintHats",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_admin",
              type: "uint256",
            },
            {
              internalType: "uint16",
              name: "_newHat",
              type: "uint16",
            },
          ],
          name: "buildHatId",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_newDetails",
              type: "string",
            },
          ],
          name: "changeHatDetails",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_newEligibility",
              type: "address",
            },
          ],
          name: "changeHatEligibility",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_newImageURI",
              type: "string",
            },
          ],
          name: "changeHatImageURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "uint32",
              name: "_newMaxSupply",
              type: "uint32",
            },
          ],
          name: "changeHatMaxSupply",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_newToggle",
              type: "address",
            },
          ],
          name: "changeHatToggle",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "checkHatStatus",
          outputs: [
            {
              internalType: "bool",
              name: "toggled",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
          ],
          name: "checkHatWearerStatus",
          outputs: [
            {
              internalType: "bool",
              name: "updated",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_admin",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_details",
              type: "string",
            },
            {
              internalType: "uint32",
              name: "_maxSupply",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "_eligibility",
              type: "address",
            },
            {
              internalType: "address",
              name: "_toggle",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_mutable",
              type: "bool",
            },
            {
              internalType: "string",
              name: "_imageURI",
              type: "string",
            },
          ],
          name: "createHat",
          outputs: [
            {
              internalType: "uint256",
              name: "newHatId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "uint32",
              name: "_level",
              type: "uint32",
            },
          ],
          name: "getAdminAtLevel",
          outputs: [
            {
              internalType: "uint256",
              name: "admin",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "uint32",
              name: "_level",
              type: "uint32",
            },
          ],
          name: "getAdminAtLocalLevel",
          outputs: [
            {
              internalType: "uint256",
              name: "admin",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getHatEligibilityModule",
          outputs: [
            {
              internalType: "address",
              name: "eligibility",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getHatLevel",
          outputs: [
            {
              internalType: "uint32",
              name: "level",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getHatMaxSupply",
          outputs: [
            {
              internalType: "uint32",
              name: "maxSupply",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getHatToggleModule",
          outputs: [
            {
              internalType: "address",
              name: "toggle",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getImageURIForHat",
          outputs: [
            {
              internalType: "string",
              name: "_uri",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getLocalHatLevel",
          outputs: [
            {
              internalType: "uint32",
              name: "level",
              type: "uint32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_admin",
              type: "uint256",
            },
          ],
          name: "getNextId",
          outputs: [
            {
              internalType: "uint256",
              name: "nextId",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
          ],
          name: "getTippyTopHatDomain",
          outputs: [
            {
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "getTopHatDomain",
          outputs: [
            {
              internalType: "uint32",
              name: "domain",
              type: "uint32",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "hatSupply",
          outputs: [
            {
              internalType: "uint32",
              name: "supply",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isActive",
          outputs: [
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isAdminOfHat",
          outputs: [
            {
              internalType: "bool",
              name: "isAdmin",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isEligible",
          outputs: [
            {
              internalType: "bool",
              name: "eligible",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isInGoodStanding",
          outputs: [
            {
              internalType: "bool",
              name: "standing",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isLocalTopHat",
          outputs: [
            {
              internalType: "bool",
              name: "_isLocalTopHat",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isTopHat",
          outputs: [
            {
              internalType: "bool",
              name: "_isTopHat",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isValidHatId",
          outputs: [
            {
              internalType: "bool",
              name: "validHatId",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "isWearerOfHat",
          outputs: [
            {
              internalType: "bool",
              name: "isWearer",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "lastTopHatId",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          name: "linkedTreeAdmins",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          name: "linkedTreeRequests",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "makeHatImmutable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
          ],
          name: "mintHat",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_target",
              type: "address",
            },
            {
              internalType: "string",
              name: "_details",
              type: "string",
            },
            {
              internalType: "string",
              name: "_imageURI",
              type: "string",
            },
          ],
          name: "mintTopHat",
          outputs: [
            {
              internalType: "uint256",
              name: "topHatId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes[]",
              name: "data",
              type: "bytes[]",
            },
          ],
          name: "multicall",
          outputs: [
            {
              internalType: "bytes[]",
              name: "",
              type: "bytes[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_linkedAdmin",
              type: "uint256",
            },
          ],
          name: "noCircularLinkage",
          outputs: [
            {
              internalType: "bool",
              name: "notCircular",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_newAdminHat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_eligibility",
              type: "address",
            },
            {
              internalType: "address",
              name: "_toggle",
              type: "address",
            },
            {
              internalType: "string",
              name: "_details",
              type: "string",
            },
            {
              internalType: "string",
              name: "_imageURI",
              type: "string",
            },
          ],
          name: "relinkTopHatWithinTree",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "renounceHat",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_requestedAdminHat",
              type: "uint256",
            },
          ],
          name: "requestLinkTopHatToTree",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "safeBatchTransferFrom",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_newAdminHat",
              type: "uint256",
            },
          ],
          name: "sameTippyTopHatDomain",
          outputs: [
            {
              internalType: "bool",
              name: "sameDomain",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_newStatus",
              type: "bool",
            },
          ],
          name: "setHatStatus",
          outputs: [
            {
              internalType: "bool",
              name: "toggled",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_eligible",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "_standing",
              type: "bool",
            },
          ],
          name: "setHatWearerStatus",
          outputs: [
            {
              internalType: "bool",
              name: "updated",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_from",
              type: "address",
            },
            {
              internalType: "address",
              name: "_to",
              type: "address",
            },
          ],
          name: "transferHat",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_topHatDomain",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "_wearer",
              type: "address",
            },
          ],
          name: "unlinkTopHatFromTree",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "uri",
          outputs: [
            {
              internalType: "string",
              name: "_uri",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hatId",
              type: "uint256",
            },
          ],
          name: "viewHat",
          outputs: [
            {
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              internalType: "uint32",
              name: "maxSupply",
              type: "uint32",
            },
            {
              internalType: "uint32",
              name: "supply",
              type: "uint32",
            },
            {
              internalType: "address",
              name: "eligibility",
              type: "address",
            },
            {
              internalType: "address",
              name: "toggle",
              type: "address",
            },
            {
              internalType: "string",
              name: "imageURI",
              type: "string",
            },
            {
              internalType: "uint16",
              name: "lastHatId",
              type: "uint16",
            },
            {
              internalType: "bool",
              name: "mutable_",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    NFT: {
      address: "0x3eD1ae814AE5B2CC0280Af292c49392d96821606",
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "name_",
              type: "string",
            },
            {
              internalType: "string",
              name: "symbol_",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "approved",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "burn",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "getApproved",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
          ],
          name: "isApprovedForAll",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "ownerOf",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "tokenByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    PluginRepoFactory: {
      address: "0x4E7c97ab08c046A8e43571f9839d768ae84492e4",
      abi: [
        {
          inputs: [
            {
              internalType: "contract PluginRepoRegistry",
              name: "_pluginRepoRegistry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_subdomain",
              type: "string",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
          ],
          name: "createPluginRepo",
          outputs: [
            {
              internalType: "contract PluginRepo",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_subdomain",
              type: "string",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "address",
              name: "_maintainer",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
          ],
          name: "createPluginRepoWithFirstVersion",
          outputs: [
            {
              internalType: "contract PluginRepo",
              name: "pluginRepo",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginRepoBase",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginRepoRegistry",
          outputs: [
            {
              internalType: "contract PluginRepoRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    PluginRepoRegistry: {
      address: "0xc796bB1AfEBc56daDF6CAcD2aDa78055e5381971",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractAlreadyRegistered",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractERC165SupportInvalid",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "registrant",
              type: "address",
            },
          ],
          name: "ContractInterfaceInvalid",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyPluginRepoSubdomain",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
          ],
          name: "InvalidPluginSubdomain",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "pluginRepo",
              type: "address",
            },
          ],
          name: "PluginRepoRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "REGISTER_PLUGIN_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REGISTRY_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "entries",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ENSSubdomainRegistrar",
              name: "_subdomainRegistrar",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "subdomain",
              type: "string",
            },
            {
              internalType: "address",
              name: "pluginRepo",
              type: "address",
            },
          ],
          name: "registerPluginRepo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "subdomainRegistrar",
          outputs: [
            {
              internalType: "contract ENSSubdomainRegistrar",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "targetInterfaceId",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    PluginSetupProcessor: {
      address: "0x9227b311C5cecB416707F1C8B7Ca1b52649AabEc",
      abi: [
        {
          inputs: [
            {
              internalType: "contract PluginRepoRegistry",
              name: "_repoRegistry",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
          ],
          name: "IPluginNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "currentAppliedSetupId",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "appliedSetupId",
              type: "bytes32",
            },
          ],
          name: "InvalidAppliedSetupId",
          type: "error",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "currentVersionTag",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "newVersionTag",
              type: "tuple",
            },
          ],
          name: "InvalidUpdateVersion",
          type: "error",
        },
        {
          inputs: [],
          name: "PluginAlreadyInstalled",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
          ],
          name: "PluginNonupgradeable",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "proxy",
              type: "address",
            },
            {
              internalType: "address",
              name: "implementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
          ],
          name: "PluginProxyUpgradeFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "PluginRepoNonexistent",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
          ],
          name: "SetupAlreadyPrepared",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "SetupApplicationUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
          ],
          name: "SetupNotApplicable",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "appliedSetupId",
              type: "bytes32",
            },
          ],
          name: "InstallationApplied",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "contract PluginRepo",
              name: "pluginSetupRepo",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              indexed: false,
              internalType: "struct PluginRepo.Tag",
              name: "versionTag",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          name: "InstallationPrepared",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
          ],
          name: "UninstallationApplied",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "contract PluginRepo",
              name: "pluginSetupRepo",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              indexed: false,
              internalType: "struct PluginRepo.Tag",
              name: "versionTag",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IPluginSetup.SetupPayload",
              name: "setupPayload",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              indexed: false,
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          name: "UninstallationPrepared",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "appliedSetupId",
              type: "bytes32",
            },
          ],
          name: "UpdateApplied",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "contract PluginRepo",
              name: "pluginSetupRepo",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              indexed: false,
              internalType: "struct PluginRepo.Tag",
              name: "versionTag",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IPluginSetup.SetupPayload",
              name: "setupPayload",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
          ],
          name: "UpdatePrepared",
          type: "event",
        },
        {
          inputs: [],
          name: "APPLY_INSTALLATION_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "APPLY_UNINSTALLATION_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "APPLY_UPDATE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
                {
                  internalType: "bytes32",
                  name: "helpersHash",
                  type: "bytes32",
                },
              ],
              internalType:
                "struct PluginSetupProcessor.ApplyInstallationParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "applyInstallation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType:
                "struct PluginSetupProcessor.ApplyUninstallationParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "applyUninstallation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "initData",
                  type: "bytes",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
                {
                  internalType: "bytes32",
                  name: "helpersHash",
                  type: "bytes32",
                },
              ],
              internalType: "struct PluginSetupProcessor.ApplyUpdateParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "applyUpdate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType:
                "struct PluginSetupProcessor.PrepareInstallationParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "plugin",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "currentHelpers",
                      type: "address[]",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IPluginSetup.SetupPayload",
                  name: "setupPayload",
                  type: "tuple",
                },
              ],
              internalType:
                "struct PluginSetupProcessor.PrepareUninstallationParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "currentVersionTag",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "newVersionTag",
                  type: "tuple",
                },
                {
                  internalType: "contract PluginRepo",
                  name: "pluginSetupRepo",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "plugin",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "currentHelpers",
                      type: "address[]",
                    },
                    {
                      internalType: "bytes",
                      name: "data",
                      type: "bytes",
                    },
                  ],
                  internalType: "struct IPluginSetup.SetupPayload",
                  name: "setupPayload",
                  type: "tuple",
                },
              ],
              internalType: "struct PluginSetupProcessor.PrepareUpdateParams",
              name: "_params",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "repoRegistry",
          outputs: [
            {
              internalType: "contract PluginRepoRegistry",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "states",
          outputs: [
            {
              internalType: "uint256",
              name: "blockNumber",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "currentAppliedSetupId",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "pluginInstallationId",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "preparedSetupId",
              type: "bytes32",
            },
          ],
          name: "validatePreparedSetupId",
          outputs: [],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    RFPs: {
      address: "0xC5d5c68A96dfE6c2d9CDbe545bD3D19486b8Cc01",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ERC1167FailedCreateClone",
          type: "error",
        },
        {
          inputs: [],
          name: "NotManager",
          type: "error",
        },
        {
          inputs: [],
          name: "Overflow",
          type: "error",
        },
        {
          inputs: [],
          name: "ProjectAlreadyAccepted",
          type: "error",
        },
        {
          inputs: [],
          name: "ProjectDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "RFPClosed",
          type: "error",
        },
        {
          inputs: [],
          name: "RFPDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "RewardDoesntEndWithNextToken",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "rfpId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "projectId",
              type: "uint16",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
          ],
          name: "ProjectAccepted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "rfpId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "projectId",
              type: "uint16",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "address",
              name: "representative",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "nextToken",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint88",
                  name: "amount",
                  type: "uint88",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.Reward[]",
              name: "reward",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.NativeReward[]",
              name: "nativeReward",
              type: "tuple[]",
            },
          ],
          name: "ProjectSubmitted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "rfpId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "contract IERC20",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.ERC20Transfer[]",
              name: "budget",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint96",
              name: "nativeBudget",
              type: "uint96",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "tasksManager",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "manager",
              type: "address",
            },
          ],
          name: "RFPCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "rfpId",
              type: "uint256",
            },
          ],
          name: "RFPEmptied",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_rfpId",
              type: "uint256",
            },
            {
              internalType: "uint16",
              name: "_projectId",
              type: "uint16",
            },
          ],
          name: "acceptProject",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadata",
              type: "string",
            },
            {
              internalType: "uint64",
              name: "_deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "contract IERC20",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              internalType: "struct ITasks.ERC20Transfer[]",
              name: "_budget",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "_tasksManager",
              type: "address",
            },
            {
              internalType: "address",
              name: "_manager",
              type: "address",
            },
          ],
          name: "createRFP",
          outputs: [
            {
              internalType: "uint256",
              name: "rfpId",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_rfpId",
              type: "uint256",
            },
          ],
          name: "emptyRFP",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "escrowImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_rfpId",
              type: "uint256",
            },
          ],
          name: "getRFP",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  internalType: "contract Escrow",
                  name: "escrow",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "nativeBudget",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tasksManager",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "contract IERC20[]",
                  name: "budget",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "representative",
                      type: "address",
                    },
                    {
                      internalType: "uint64",
                      name: "deadline",
                      type: "uint64",
                    },
                    {
                      internalType: "bool",
                      name: "accepted",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct IRFPs.OffchainProject[]",
                  name: "projects",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IRFPs.OffChainRFP",
              name: "offchainRFP",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_rfpIds",
              type: "uint256[]",
            },
          ],
          name: "getRFPs",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  internalType: "contract Escrow",
                  name: "escrow",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "nativeBudget",
                  type: "uint96",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "tasksManager",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "contract IERC20[]",
                  name: "budget",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "representative",
                      type: "address",
                    },
                    {
                      internalType: "uint64",
                      name: "deadline",
                      type: "uint64",
                    },
                    {
                      internalType: "bool",
                      name: "accepted",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct IRFPs.OffchainProject[]",
                  name: "projects",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IRFPs.OffChainRFP[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rfpCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_rfpId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_metadata",
              type: "string",
            },
            {
              internalType: "uint64",
              name: "_deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "nextToken",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint88",
                  name: "amount",
                  type: "uint88",
                },
              ],
              internalType: "struct ITasks.Reward[]",
              name: "_reward",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              internalType: "struct ITasks.NativeReward[]",
              name: "_nativeReward",
              type: "tuple[]",
            },
          ],
          name: "submitProject",
          outputs: [
            {
              internalType: "uint16",
              name: "projectId",
              type: "uint16",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    SharedAddressImplementation: {
      address: "0x479a63Af1750B3E47A656e41201560a612d11ecA",
      abi: [
        {
          inputs: [],
          name: "AccessDenied",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "NotWearingHat",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
          ],
          name: "Execution",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
          ],
          name: "FullAccessGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
          ],
          name: "FullAccessRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "zone",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "functionSelector",
              type: "bytes4",
            },
          ],
          name: "FullFunctionAccessGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "zone",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "functionSelector",
              type: "bytes4",
            },
          ],
          name: "FullFunctionAccessRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "zone",
              type: "address",
            },
          ],
          name: "FullZoneAccessGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hat",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "zone",
              type: "address",
            },
          ],
          name: "FullZoneAccessRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_failureMap",
              type: "uint256",
            },
          ],
          name: "asDAO",
          outputs: [
            {
              internalType: "bytes[]",
              name: "returnValueBytes",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
          ],
          name: "grantFullAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_zone",
              type: "address",
            },
            {
              internalType: "bytes4",
              name: "_function",
              type: "bytes4",
            },
          ],
          name: "grantFullFunctionAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_zone",
              type: "address",
            },
          ],
          name: "grantFullZoneAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
          ],
          name: "hasAccess",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract IHats",
              name: "_hats",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
          ],
          name: "revokeFullAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_zone",
              type: "address",
            },
            {
              internalType: "bytes4",
              name: "_function",
              type: "bytes4",
            },
          ],
          name: "revokeFullFunctionAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_hat",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_zone",
              type: "address",
            },
          ],
          name: "revokeFullZoneAccess",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    SharedAddressRepo: {
      address: "0x0ddB6058aAd5CAdA02F6C1BFf3Dff284C5d91738",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    SharedAddressSetup: {
      address: "0x4C100d0a198BA2d885963AADF9906dEd2DC91259",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "_currentBuild",
              type: "uint16",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    SubDAOImplementation: {
      address: "0x59a4eE07f8003a779a3855eEC35cF8a419DD68f8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "IndexOutOfBound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_subDAO",
              type: "address",
            },
          ],
          name: "addSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract DAOFactory",
              name: "_daoFactory",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "trustedForwarder",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "daoURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "subdomain",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.DAOSettings",
              name: "_daoSettings",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.PluginSettings[]",
              name: "_pluginSettings",
              type: "tuple[]",
            },
          ],
          name: "createSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "getSubDAO",
          outputs: [
            {
              internalType: "address",
              name: "subDAO",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOCount",
          outputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOs",
          outputs: [
            {
              internalType: "address[]",
              name: "subDAOArray",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "removeSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    SubDAORepo: {
      address: "0x59bB262158bbc727D889B92E42D049dDfd2B6Aaf",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    SubDAOSetup: {
      address: "0x14e39aDc79A7610c685143c4cd891F94dB3B40cD",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "_currentBuild",
              type: "uint16",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    TaskDisputesImplementation: {
      address: "0x156b5AcB1a953f7Cb1a8cAE60680B054EFdc257D",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "TransferToDAOError",
          type: "error",
        },
        {
          inputs: [],
          name: "Underpaying",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint88[]",
              name: "_partialReward",
              type: "uint88[]",
            },
            {
              internalType: "uint96[]",
              name: "_partialNativeReward",
              type: "uint96[]",
            },
          ],
          name: "createDispute",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDisputeCost",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_disputeCost",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_disputeCost",
              type: "uint256",
            },
          ],
          name: "updateDisputeCost",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    TaskDisputesRepo: {
      address: "0x7b268000A2E43a91d68dD5ed7CF2A9511C4dB4b0",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    TaskDisputesSetup: {
      address: "0xaAb612dBFa31C85897a460ed73A560fDeab79345",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "_currentBuild",
              type: "uint16",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    TaskDraftsImplementation: {
      address: "0x5651097b7577ff8fFF2A374Fb3A5e855d127d606",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "taskInfo",
              type: "tuple",
            },
          ],
          name: "TaskDraftCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "_taskInfo",
              type: "tuple",
            },
          ],
          name: "createDraftTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    TaskDraftsRepo: {
      address: "0x1687987eA6787DdD72BBa0774705712Db6e58890",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    TaskDraftsSetup: {
      address: "0x2337617d5758E48B2c8241596b63c1Eb60DF4986",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "_currentBuild",
              type: "uint16",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    Tasks: {
      address: "0x44653769398b4f5d0af8c45415f6cc8fff43ecb8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_disabler",
              type: "address",
            },
            {
              internalType: "address",
              name: "_disputeManager",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ApplicationDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ApplicationNotAccepted",
          type: "error",
        },
        {
          inputs: [],
          name: "Disabled",
          type: "error",
        },
        {
          inputs: [],
          name: "ERC1167FailedCreateClone",
          type: "error",
        },
        {
          inputs: [],
          name: "IncorrectAmountOfNativeCurrencyAttached",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidAddress",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidTimestamp",
          type: "error",
        },
        {
          inputs: [],
          name: "JudgementNone",
          type: "error",
        },
        {
          inputs: [],
          name: "ManualBudgetIncreaseNeeded",
          type: "error",
        },
        {
          inputs: [],
          name: "NativeTransferFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "NotDisabled",
          type: "error",
        },
        {
          inputs: [],
          name: "NotDisabler",
          type: "error",
        },
        {
          inputs: [],
          name: "NotDisputeManager",
          type: "error",
        },
        {
          inputs: [],
          name: "NotExecutor",
          type: "error",
        },
        {
          inputs: [],
          name: "NotManager",
          type: "error",
        },
        {
          inputs: [],
          name: "NotYourApplication",
          type: "error",
        },
        {
          inputs: [],
          name: "Overflow",
          type: "error",
        },
        {
          inputs: [],
          name: "PartialRewardAboveFullReward",
          type: "error",
        },
        {
          inputs: [],
          name: "PointlessOperation",
          type: "error",
        },
        {
          inputs: [],
          name: "RequestAlreadyAccepted",
          type: "error",
        },
        {
          inputs: [],
          name: "RequestAlreadyExecuted",
          type: "error",
        },
        {
          inputs: [],
          name: "RequestDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "RequestNotAccepted",
          type: "error",
        },
        {
          inputs: [],
          name: "RewardAboveBudget",
          type: "error",
        },
        {
          inputs: [],
          name: "RewardDoesntEndWithNextToken",
          type: "error",
        },
        {
          inputs: [],
          name: "SubmissionAlreadyJudged",
          type: "error",
        },
        {
          inputs: [],
          name: "SubmissionDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "TaskClosed",
          type: "error",
        },
        {
          inputs: [],
          name: "TaskDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "TaskNotClosed",
          type: "error",
        },
        {
          inputs: [],
          name: "TaskNotOpen",
          type: "error",
        },
        {
          inputs: [],
          name: "TaskNotTaken",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "applicationId",
              type: "uint16",
            },
          ],
          name: "ApplicationAccepted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "applicationId",
              type: "uint16",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "nextToken",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint88",
                  name: "amount",
                  type: "uint88",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.Reward[]",
              name: "reward",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.NativeReward[]",
              name: "nativeReward",
              type: "tuple[]",
            },
          ],
          name: "ApplicationCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
          ],
          name: "BudgetChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "requestId",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "explanation",
              type: "string",
            },
          ],
          name: "CancelTaskRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "newDeadline",
              type: "uint64",
            },
          ],
          name: "DeadlineChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newMetadata",
              type: "string",
            },
          ],
          name: "MetadataChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "disputeManager",
              type: "address",
            },
          ],
          name: "NewDisputeManager",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "manager",
              type: "address",
            },
          ],
          name: "NewManager",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint88[]",
              name: "partialReward",
              type: "uint88[]",
            },
            {
              indexed: false,
              internalType: "uint96[]",
              name: "partialNativeReward",
              type: "uint96[]",
            },
          ],
          name: "PartialPayment",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITasks.RequestType",
              name: "requestType",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "requestId",
              type: "uint8",
            },
          ],
          name: "RequestAccepted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITasks.RequestType",
              name: "requestType",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "requestId",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "address",
              name: "by",
              type: "address",
            },
          ],
          name: "RequestExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "submissionId",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
          ],
          name: "SubmissionCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint8",
              name: "submissionId",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "enum ITasks.SubmissionJudgement",
              name: "judgement",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "string",
              name: "feedback",
              type: "string",
            },
          ],
          name: "SubmissionReviewed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
          ],
          name: "TaskCancelled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITasks.TaskCompletion",
              name: "source",
              type: "uint8",
            },
          ],
          name: "TaskCompleted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "metadata",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "contract IERC20",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              indexed: false,
              internalType: "struct ITasks.ERC20Transfer[]",
              name: "budget",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint96",
              name: "nativeBudget",
              type: "uint96",
            },
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "manager",
              type: "address",
            },
          ],
          name: "TaskCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "applicationId",
              type: "uint16",
            },
          ],
          name: "TaskTaken",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint16[]",
              name: "_applicationIds",
              type: "uint16[]",
            },
          ],
          name: "acceptApplications",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "enum ITasks.RequestType",
              name: "_requestType",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "_requestId",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_execute",
              type: "bool",
            },
          ],
          name: "acceptRequest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_metadata",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "bool",
                  name: "nextToken",
                  type: "bool",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint88",
                  name: "amount",
                  type: "uint88",
                },
              ],
              internalType: "struct ITasks.Reward[]",
              name: "_reward",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              internalType: "struct ITasks.NativeReward[]",
              name: "_nativeReward",
              type: "tuple[]",
            },
          ],
          name: "applyForTask",
          outputs: [
            {
              internalType: "uint16",
              name: "applicationId",
              type: "uint16",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_explanation",
              type: "string",
            },
          ],
          name: "cancelTask",
          outputs: [
            {
              internalType: "uint8",
              name: "cancelTaskRequestId",
              type: "uint8",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint88[]",
              name: "_partialReward",
              type: "uint88[]",
            },
            {
              internalType: "uint96[]",
              name: "_partialNativeReward",
              type: "uint96[]",
            },
          ],
          name: "completeByDispute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_metadata",
              type: "string",
            },
          ],
          name: "createSubmission",
          outputs: [
            {
              internalType: "uint8",
              name: "submissionId",
              type: "uint8",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_metadata",
              type: "string",
            },
            {
              internalType: "uint64",
              name: "_deadline",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "contract IERC20",
                  name: "tokenContract",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "amount",
                  type: "uint96",
                },
              ],
              internalType: "struct ITasks.ERC20Transfer[]",
              name: "_budget",
              type: "tuple[]",
            },
            {
              internalType: "address",
              name: "_manager",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "applicant",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "nextToken",
                      type: "bool",
                    },
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "uint88",
                      name: "amount",
                      type: "uint88",
                    },
                  ],
                  internalType: "struct ITasks.Reward[]",
                  name: "reward",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "to",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.NativeReward[]",
                  name: "nativeReward",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITasks.PreapprovedApplication[]",
              name: "_preapprove",
              type: "tuple[]",
            },
          ],
          name: "createTask",
          outputs: [
            {
              internalType: "uint256",
              name: "taskId",
              type: "uint256",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "disable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "disputeManager",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_newMetadata",
              type: "string",
            },
          ],
          name: "editMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "escrowImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "enum ITasks.RequestType",
              name: "_requestType",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "_requestId",
              type: "uint8",
            },
          ],
          name: "executeRequest",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_extension",
              type: "uint64",
            },
          ],
          name: "extendDeadline",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
          ],
          name: "getTask",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  internalType: "uint16",
                  name: "executorApplication",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "enum ITasks.TaskState",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "contract Escrow",
                  name: "escrow",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "nativeBudget",
                  type: "uint96",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "accepted",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.OffChainApplication[]",
                  name: "applications",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "feedback",
                      type: "string",
                    },
                    {
                      internalType: "enum ITasks.SubmissionJudgement",
                      name: "judgement",
                      type: "uint8",
                    },
                  ],
                  internalType: "struct ITasks.Submission[]",
                  name: "submissions",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "accepted",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "executed",
                          type: "bool",
                        },
                      ],
                      internalType: "struct ITasks.Request",
                      name: "request",
                      type: "tuple",
                    },
                    {
                      internalType: "string",
                      name: "explanation",
                      type: "string",
                    },
                  ],
                  internalType: "struct ITasks.CancelTaskRequest[]",
                  name: "cancelTaskRequests",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITasks.OffChainTask",
              name: "offchainTask",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_taskIds",
              type: "uint256[]",
            },
          ],
          name: "getTasks",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  internalType: "uint16",
                  name: "executorApplication",
                  type: "uint16",
                },
                {
                  internalType: "address",
                  name: "creator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  internalType: "enum ITasks.TaskState",
                  name: "state",
                  type: "uint8",
                },
                {
                  internalType: "contract Escrow",
                  name: "escrow",
                  type: "address",
                },
                {
                  internalType: "uint96",
                  name: "nativeBudget",
                  type: "uint96",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      internalType: "bool",
                      name: "accepted",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.OffChainApplication[]",
                  name: "applications",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "metadata",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "feedback",
                      type: "string",
                    },
                    {
                      internalType: "enum ITasks.SubmissionJudgement",
                      name: "judgement",
                      type: "uint8",
                    },
                  ],
                  internalType: "struct ITasks.Submission[]",
                  name: "submissions",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "accepted",
                          type: "bool",
                        },
                        {
                          internalType: "bool",
                          name: "executed",
                          type: "bool",
                        },
                      ],
                      internalType: "struct ITasks.Request",
                      name: "request",
                      type: "tuple",
                    },
                    {
                      internalType: "string",
                      name: "explanation",
                      type: "string",
                    },
                  ],
                  internalType: "struct ITasks.CancelTaskRequest[]",
                  name: "cancelTaskRequests",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITasks.OffChainTask[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint96[]",
              name: "_increase",
              type: "uint96[]",
            },
          ],
          name: "increaseBudget",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint88[]",
              name: "_partialReward",
              type: "uint88[]",
            },
            {
              internalType: "uint96[]",
              name: "_partialNativeReward",
              type: "uint96[]",
            },
          ],
          name: "partialPayment",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
          ],
          name: "refund",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "_submissionId",
              type: "uint8",
            },
            {
              internalType: "enum ITasks.SubmissionJudgement",
              name: "_judgement",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "_feedback",
              type: "string",
            },
          ],
          name: "reviewSubmission",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint16",
              name: "_applicationId",
              type: "uint16",
            },
          ],
          name: "takeTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "taskCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newManager",
              type: "address",
            },
          ],
          name: "transferDisputeManagement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_newManager",
              type: "address",
            },
          ],
          name: "transferManagement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    TokenListGovernanceImplementation: {
      address: "0x61090B063fd349714D13a6CFee55F13dbCB1d38F",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    TokenListGovernanceRepo: {
      address: "0x7C11feEe39a8558A6BD196dB21a6FB57BAC36fe4",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    TokenListGovernanceSetup: {
      address: "0x7D3865834de4e28D2a97D9fA8ad7432Dd3Ded851",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "prepareInstallation",
          outputs: [
            {
              internalType: "address",
              name: "plugin",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUninstallation",
          outputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "permissions",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "uint16",
              name: "_currentBuild",
              type: "uint16",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "plugin",
                  type: "address",
                },
                {
                  internalType: "address[]",
                  name: "currentHelpers",
                  type: "address[]",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IPluginSetup.SetupPayload",
              name: "_payload",
              type: "tuple",
            },
          ],
          name: "prepareUpdate",
          outputs: [
            {
              internalType: "bytes",
              name: "initData",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address[]",
                  name: "helpers",
                  type: "address[]",
                },
                {
                  components: [
                    {
                      internalType: "enum PermissionLib.Operation",
                      name: "operation",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "where",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "who",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "condition",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "permissionId",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct PermissionLib.MultiTargetPermission[]",
                  name: "permissions",
                  type: "tuple[]",
                },
              ],
              internalType: "struct IPluginSetup.PreparedSetupData",
              name: "preparedSetupData",
              type: "tuple",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    blockchain_dao: {
      address: "0x8D3840B8FADc9925FE8F9e850448fD24b5c8F37c",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    blockchain_taskDrafts: {
      address: "0x3F75aFc4B75A0FD0400F624ca2d7e4a328BB14b2",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "taskInfo",
              type: "tuple",
            },
          ],
          name: "TaskDraftCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "_taskInfo",
              type: "tuple",
            },
          ],
          name: "createDraftTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    blockchain_tokenListGovernance: {
      address: "0x74916DA2F3412fa6e8A00b704C10F1D6D47E7bD6",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    cloud_dao: {
      address: "0x194d3CF263F94501322fc4918B92072B396E3988",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    cloud_taskDrafts: {
      address: "0x52E1D079c13846DE4508E30a6817716AD52Dd7e8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "taskInfo",
              type: "tuple",
            },
          ],
          name: "TaskDraftCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "_taskInfo",
              type: "tuple",
            },
          ],
          name: "createDraftTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    cloud_tokenListGovernance: {
      address: "0x25Ea40f919df09CE800A6586967C7129cC52495e",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    community_dao: {
      address: "0xDB562a6E869267b8315eC8a7f520B75962E666f9",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    community_subDAO: {
      address: "0x44741F538D40fC6fb2c34D46837307581a199661",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "IndexOutOfBound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_subDAO",
              type: "address",
            },
          ],
          name: "addSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract DAOFactory",
              name: "_daoFactory",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "trustedForwarder",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "daoURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "subdomain",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.DAOSettings",
              name: "_daoSettings",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.PluginSettings[]",
              name: "_pluginSettings",
              type: "tuple[]",
            },
          ],
          name: "createSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "getSubDAO",
          outputs: [
            {
              internalType: "address",
              name: "subDAO",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOCount",
          outputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOs",
          outputs: [
            {
              internalType: "address[]",
              name: "subDAOArray",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "removeSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    community_tokenVoting: {
      address: "0x07b24637E47f2FF7D2E9e17aBE3243a4412048d1",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [],
          name: "NoVotingPower",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "enum IMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address[]",
              name: "members",
              type: "address[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address[]",
              name: "members",
              type: "address[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "voter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "enum IMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum MajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_voter",
              type: "address",
            },
            {
              internalType: "enum IMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum IMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum MajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct MajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct MajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_voter",
              type: "address",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum IMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getVotingToken",
          outputs: [
            {
              internalType: "contract IVotesUpgradeable",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum MajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct MajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IVotesUpgradeable",
              name: "_token",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_account",
              type: "address",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum MajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct MajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum IMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum MajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    data_dao: {
      address: "0xb1Cd69677A493734BAe90AC61A75a0265ca87D3E",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    data_taskDrafts: {
      address: "0x2Cd943E1BEF5bB0663a3622C0e1B22922BF5b482",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "taskInfo",
              type: "tuple",
            },
          ],
          name: "TaskDraftCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "_taskInfo",
              type: "tuple",
            },
          ],
          name: "createDraftTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    data_tokenListGovernance: {
      address: "0x019438a2706022e2a67619455D3bbF0E1Be6C905",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    dispute_dao: {
      address: "0xdD396483d663c40E259B45018F3e2aA821215bF3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    dispute_taskDisputes: {
      address: "0x2d44D12E087dBd9e89978cb87BD2A754b9300B2f",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [],
          name: "TransferToDAOError",
          type: "error",
        },
        {
          inputs: [],
          name: "Underpaying",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "uint256",
              name: "_taskId",
              type: "uint256",
            },
            {
              internalType: "uint88[]",
              name: "_partialReward",
              type: "uint88[]",
            },
            {
              internalType: "uint96[]",
              name: "_partialNativeReward",
              type: "uint96[]",
            },
          ],
          name: "createDispute",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getDisputeCost",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_disputeCost",
              type: "uint256",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_disputeCost",
              type: "uint256",
            },
          ],
          name: "updateDisputeCost",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    dispute_tokenListGovernance: {
      address: "0x6cc128749aCF76A03B6Ca657BBE177Dc50F9350A",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    frontend_dao: {
      address: "0x5cbb3f22E8b80509efD2ec08b2866Ece08F57d58",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    frontend_taskDrafts: {
      address: "0x53C5005CF3c02d9a79c5395D37d75DC71713229C",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              indexed: false,
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "taskInfo",
              type: "tuple",
            },
          ],
          name: "TaskDraftCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "metadata",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "deadline",
                  type: "uint64",
                },
                {
                  components: [
                    {
                      internalType: "contract IERC20",
                      name: "tokenContract",
                      type: "address",
                    },
                    {
                      internalType: "uint96",
                      name: "amount",
                      type: "uint96",
                    },
                  ],
                  internalType: "struct ITasks.ERC20Transfer[]",
                  name: "budget",
                  type: "tuple[]",
                },
                {
                  internalType: "address",
                  name: "manager",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "applicant",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "nextToken",
                          type: "bool",
                        },
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint88",
                          name: "amount",
                          type: "uint88",
                        },
                      ],
                      internalType: "struct ITasks.Reward[]",
                      name: "reward",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "to",
                          type: "address",
                        },
                        {
                          internalType: "uint96",
                          name: "amount",
                          type: "uint96",
                        },
                      ],
                      internalType: "struct ITasks.NativeReward[]",
                      name: "nativeReward",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct ITasks.PreapprovedApplication[]",
                  name: "preapproved",
                  type: "tuple[]",
                },
              ],
              internalType: "struct ITaskDrafts.CreateTaskInfo",
              name: "_taskInfo",
              type: "tuple",
            },
          ],
          name: "createDraftTask",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getGovernanceContract",
          outputs: [
            {
              internalType: "contract IPluginProposals",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTasksContract",
          outputs: [
            {
              internalType: "contract ITasks",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IPluginProposals",
              name: "_governancePlugin",
              type: "address",
            },
          ],
          name: "updateGovernanceContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract ITasks",
              name: "_tasks",
              type: "address",
            },
          ],
          name: "updateTasksContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    frontend_tokenListGovernance: {
      address: "0x23cc94d2D96D691ED21A2bc4f0CA04be88d79cd7",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    management_dao: {
      address: "0xb3E40F0A871d604ec525309bc1E50208B6265c59",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
          ],
          name: "ActionFailed",
          type: "error",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InsufficientGas",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "expected",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "NativeTokenDepositAmountMismatch",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "protocolVersion",
              type: "uint8[3]",
            },
          ],
          name: "ProtocolVersionUpgradeNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "ReentrantCall",
          type: "error",
        },
        {
          inputs: [],
          name: "TooManyActions",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "UnkownCallback",
          type: "error",
        },
        {
          inputs: [],
          name: "ZeroAmount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "bytes4",
              name: "sig",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "CallbackReceived",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "token",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "Deposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "actor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes32",
              name: "callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
          ],
          name: "Executed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
          ],
          name: "MetadataSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "NativeTokenDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "daoURI",
              type: "string",
            },
          ],
          name: "NewURI",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "signatureValidator",
              type: "address",
            },
          ],
          name: "SignatureValidatorSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "callbackSelector",
              type: "bytes4",
            },
            {
              indexed: false,
              internalType: "bytes4",
              name: "magicNumber",
              type: "bytes4",
            },
          ],
          name: "StandardCallbackRegistered",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "forwarder",
              type: "address",
            },
          ],
          name: "TrustedForwarderSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "EXECUTE_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "REGISTER_STANDARD_CALLBACK_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_METADATA_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_SIGNATURE_VALIDATOR_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "SET_TRUSTED_FORWARDER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_DAO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "daoURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "_reference",
              type: "string",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_callId",
              type: "bytes32",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [
            {
              internalType: "bytes[]",
              name: "execResults",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "failureMap",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTrustedForwarder",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "hasPermission",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              internalType: "address",
              name: "_initialOwner",
              type: "address",
            },
            {
              internalType: "address",
              name: "_trustedForwarder",
              type: "address",
            },
            {
              internalType: "string",
              name: "daoURI_",
              type: "string",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8[3]",
              name: "_previousProtocolVersion",
              type: "uint8[3]",
            },
            {
              internalType: "bytes",
              name: "_initData",
              type: "bytes",
            },
          ],
          name: "initializeFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_hash",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_signature",
              type: "bytes",
            },
          ],
          name: "isValidSignature",
          outputs: [
            {
              internalType: "bytes4",
              name: "",
              type: "bytes4",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_callbackSelector",
              type: "bytes4",
            },
            {
              internalType: "bytes4",
              name: "_magicNumber",
              type: "bytes4",
            },
          ],
          name: "registerStandardCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newDaoURI",
              type: "string",
            },
          ],
          name: "setDaoURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
          ],
          name: "setMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_signatureValidator",
              type: "address",
            },
          ],
          name: "setSignatureValidator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_newTrustedForwarder",
              type: "address",
            },
          ],
          name: "setTrustedForwarder",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "signatureValidator",
          outputs: [
            {
              internalType: "contract IERC1271",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    management_subDAO: {
      address: "0xB9225Da6029F8D8afAa68D37F58B40163bF65d56",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          name: "IndexOutOfBound",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_subDAO",
              type: "address",
            },
          ],
          name: "addSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract DAOFactory",
              name: "_daoFactory",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "trustedForwarder",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "daoURI",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "subdomain",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "metadata",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.DAOSettings",
              name: "_daoSettings",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      components: [
                        {
                          internalType: "uint8",
                          name: "release",
                          type: "uint8",
                        },
                        {
                          internalType: "uint16",
                          name: "build",
                          type: "uint16",
                        },
                      ],
                      internalType: "struct PluginRepo.Tag",
                      name: "versionTag",
                      type: "tuple",
                    },
                    {
                      internalType: "contract PluginRepo",
                      name: "pluginSetupRepo",
                      type: "address",
                    },
                  ],
                  internalType: "struct PluginSetupRef",
                  name: "pluginSetupRef",
                  type: "tuple",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct DAOFactory.PluginSettings[]",
              name: "_pluginSettings",
              type: "tuple[]",
            },
          ],
          name: "createSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "getSubDAO",
          outputs: [
            {
              internalType: "address",
              name: "subDAO",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOCount",
          outputs: [
            {
              internalType: "uint256",
              name: "count",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getSubDAOs",
          outputs: [
            {
              internalType: "address[]",
              name: "subDAOArray",
              type: "address[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_index",
              type: "uint256",
            },
          ],
          name: "removeSubDAO",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
    management_tokenListGovernance: {
      address: "0xB9225Da6029F8D8afAa68D37F58B40163bF65d56",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "dao",
              type: "address",
            },
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "DaoUnauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "DateOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
          ],
          name: "InvalidTokenlistUpdate",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "limit",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "actual",
              type: "uint64",
            },
          ],
          name: "MinDurationOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "sender",
              type: "uint256",
            },
          ],
          name: "ProposalCreationForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecutionForbidden",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "limit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "actual",
              type: "uint256",
            },
          ],
          name: "RatioOutOfBounds",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "TokenNotOwnedBySender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
          ],
          name: "VoteCastForbidden",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "members",
              type: "uint256[]",
            },
          ],
          name: "MembersRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "definingContract",
              type: "address",
            },
          ],
          name: "MembershipContractAnnounced",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "startDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "endDate",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              indexed: false,
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          name: "ProposalCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          name: "ProposalExecuted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "tokens",
              type: "uint256[]",
            },
          ],
          name: "TokensRemoved",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "voter",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "voteOption",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "votingPower",
              type: "uint256",
            },
          ],
          name: "VoteCast",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "votingMode",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "supportThreshold",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "minParticipation",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint64",
              name: "minDuration",
              type: "uint64",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "minProposerVotingPower",
              type: "uint256",
            },
          ],
          name: "VotingSettingsUpdated",
          type: "event",
        },
        {
          inputs: [],
          name: "UPDATE_MEMBERS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPDATE_VOTING_SETTINGS_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_PLUGIN_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "addMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "canExecute",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
          ],
          name: "canVote",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
          ],
          name: "createPluginProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes",
              name: "_metadata",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "_actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "_allowFailureMap",
              type: "uint256",
            },
            {
              internalType: "uint64",
              name: "_startDate",
              type: "uint64",
            },
            {
              internalType: "uint64",
              name: "_endDate",
              type: "uint64",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "dao",
          outputs: [
            {
              internalType: "contract IDAO",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "execute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "getProposal",
          outputs: [
            {
              internalType: "bool",
              name: "open",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "startDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "endDate",
                  type: "uint64",
                },
                {
                  internalType: "uint64",
                  name: "snapshotBlock",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.ProposalParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "abstain",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "yes",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "no",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.Tally",
              name: "tally",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              internalType: "struct IDAO.Action[]",
              name: "actions",
              type: "tuple[]",
            },
            {
              internalType: "uint256",
              name: "allowFailureMap",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "getVoteOption",
          outputs: [
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "implementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IDAO",
              name: "_dao",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
            {
              internalType: "contract IERC721",
              name: "_tokenCollection",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "isListed",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "isListedAtBlock",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_account",
              type: "uint256",
            },
          ],
          name: "isMember",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isMinParticipationReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReached",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
          ],
          name: "isSupportThresholdReachedEarly",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minDuration",
          outputs: [
            {
              internalType: "uint64",
              name: "",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minParticipation",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "minProposerVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "pluginType",
          outputs: [
            {
              internalType: "enum IPlugin.PluginType",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proposalCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256[]",
              name: "_members",
              type: "uint256[]",
            },
          ],
          name: "removeMembers",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "supportThreshold",
          outputs: [
            {
              internalType: "uint32",
              name: "",
              type: "uint32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "tokenlistLength",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "tokenlistLengthAtBlock",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_blockNumber",
              type: "uint256",
            },
          ],
          name: "totalVotingPower",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum TokenMajorityVotingBase.VotingMode",
                  name: "votingMode",
                  type: "uint8",
                },
                {
                  internalType: "uint32",
                  name: "supportThreshold",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "minParticipation",
                  type: "uint32",
                },
                {
                  internalType: "uint64",
                  name: "minDuration",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "minProposerVotingPower",
                  type: "uint256",
                },
              ],
              internalType: "struct TokenMajorityVotingBase.VotingSettings",
              name: "_votingSettings",
              type: "tuple",
            },
          ],
          name: "updateVotingSettings",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_proposalId",
              type: "uint256",
            },
            {
              internalType: "enum ITokenMajorityVoting.VoteOption",
              name: "_voteOption",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "_tryEarlyExecution",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "votingMode",
          outputs: [
            {
              internalType: "enum TokenMajorityVotingBase.VotingMode",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
    },
    "token-voting-repo": {
      address: "0xaCa70D8c462940B839DE386BcDD4CACf745632cA",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AnyAddressDisallowedForWhoAndWhere",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionInterfacNotSupported",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "contract IPermissionCondition",
              name: "condition",
              type: "address",
            },
          ],
          name: "ConditionNotAContract",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptyReleaseMetadata",
          type: "error",
        },
        {
          inputs: [],
          name: "GrantWithConditionNotSupported",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidPluginSetupInterface",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "latestRelease",
              type: "uint8",
            },
            {
              internalType: "uint8",
              name: "newRelease",
              type: "uint8",
            },
          ],
          name: "InvalidReleaseIncrement",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "currentCondition",
              type: "address",
            },
            {
              internalType: "address",
              name: "newCondition",
              type: "address",
            },
          ],
          name: "PermissionAlreadyGrantedForDifferentCondition",
          type: "error",
        },
        {
          inputs: [],
          name: "PermissionsForAnyAddressDisallowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
          ],
          name: "PluginSetupAlreadyInPreviousRelease",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "ReleaseZeroNotAllowed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
          ],
          name: "Unauthorized",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "versionHash",
              type: "bytes32",
            },
          ],
          name: "VersionHashDoesNotExist",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "previousAdmin",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "newAdmin",
              type: "address",
            },
          ],
          name: "AdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "beacon",
              type: "address",
            },
          ],
          name: "BeaconUpgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "condition",
              type: "address",
            },
          ],
          name: "Granted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "releaseMetadata",
              type: "bytes",
            },
          ],
          name: "ReleaseMetadataUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "permissionId",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "here",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "where",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          name: "Revoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "implementation",
              type: "address",
            },
          ],
          name: "Upgraded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "release",
              type: "uint8",
            },
            {
              indexed: false,
              internalType: "uint16",
              name: "build",
              type: "uint16",
            },
            {
              indexed: true,
              internalType: "address",
              name: "pluginSetup",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "buildMetadata",
              type: "bytes",
            },
          ],
          name: "VersionCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "MAINTAINER_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "ROOT_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "UPGRADE_REPO_PERMISSION_ID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "where",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "condition",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.MultiTargetPermission[]",
              name: "_items",
              type: "tuple[]",
            },
          ],
          name: "applyMultiTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "enum PermissionLib.Operation",
                  name: "operation",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "permissionId",
                  type: "bytes32",
                },
              ],
              internalType: "struct PermissionLib.SingleTargetPermission[]",
              name: "items",
              type: "tuple[]",
            },
          ],
          name: "applySingleTargetPermissions",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "buildCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "_buildMetadata",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "createVersion",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pluginSetup",
              type: "address",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
          ],
          name: "getLatestVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "_tagHash",
              type: "bytes32",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint8",
                  name: "release",
                  type: "uint8",
                },
                {
                  internalType: "uint16",
                  name: "build",
                  type: "uint16",
                },
              ],
              internalType: "struct PluginRepo.Tag",
              name: "_tag",
              type: "tuple",
            },
          ],
          name: "getVersion",
          outputs: [
            {
              components: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "release",
                      type: "uint8",
                    },
                    {
                      internalType: "uint16",
                      name: "build",
                      type: "uint16",
                    },
                  ],
                  internalType: "struct PluginRepo.Tag",
                  name: "tag",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "pluginSetup",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "buildMetadata",
                  type: "bytes",
                },
              ],
              internalType: "struct PluginRepo.Version",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "grant",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "contract IPermissionCondition",
              name: "_condition",
              type: "address",
            },
          ],
          name: "grantWithCondition",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "_data",
              type: "bytes",
            },
          ],
          name: "isGranted",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "latestRelease",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "protocolVersion",
          outputs: [
            {
              internalType: "uint8[3]",
              name: "",
              type: "uint8[3]",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "proxiableUUID",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_where",
              type: "address",
            },
            {
              internalType: "address",
              name: "_who",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_permissionId",
              type: "bytes32",
            },
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "_interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint8",
              name: "_release",
              type: "uint8",
            },
            {
              internalType: "bytes",
              name: "_releaseMetadata",
              type: "bytes",
            },
          ],
          name: "updateReleaseMetadata",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
    },
  },
} as const
