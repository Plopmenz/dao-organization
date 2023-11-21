export default {
  name: "polygon",
  chainId: "137",
  contracts: {
    DAOFactory: {
      address: "0x51Ead12DEcD31ea75e1046EdFAda14dd639789b8",
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
      address: "0x96E54098317631641703404C06A5afAD89da7373",
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
    Hats: {
      address: "0x3bc1A0Ad72417f2d411118085256fC53CBdDd137",
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
    PluginRepoFactory: {
      address: "0x6E924eA5864044D8642385683fFA5AD42FB687f2",
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
      address: "0xA03C2182af8eC460D498108C92E8638a580b94d4",
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
      address: "0x879D9dfe3F36d7684BeC1a2bB4Aa8E8871A7245B",
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
    SharedAddressImplementation: {
      address: "0x2c253283a14c55C12C77931A8bf7E3CdC0f9D3C8",
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
      address: "0xCC37e94Cd317Bb66b31180A9570a49a67183a3F1",
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
      address: "0x4A92cBE5592152c4c50CA84BC20DEa6b6c2e5360",
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
      address: "0xe8B900D786454A9584A2db49888c74532aA1c7c3",
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
              indexed: false,
              internalType: "address",
              name: "subdao",
              type: "address",
            },
          ],
          name: "SubDAOAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "subdao",
              type: "address",
            },
          ],
          name: "SubDAORemoved",
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
      address: "0x12943fB4c33bF88ACf7b42056B06512B00E2B414",
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
      address: "0xC81F21621ebF363B4677dBb8bf9D5E0e48c2eA9C",
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
    "token-voting-repo": {
      address: "0xae67aea0B830ed4504B36670B5Fa70c5C386Bb58",
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
    AdminRepo: {
      address: "0x7fF570473d0876db16A59e8F04EE7F17Ab117309",
    },
    AdminImplementation: {
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
          inputs: [],
          name: "EXECUTE_PROPOSAL_PERMISSION_ID",
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
          ],
          name: "executeProposal",
          outputs: [],
          stateMutability: "nonpayable",
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
  },
} as const
