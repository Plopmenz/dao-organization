# dao-organization

Technical demo frontend for the DAO organization management smart contracts of [OpenR&D](https://github.com/Openmesh-Network/openrd).

Allows the creation of Organization DAOs, which can have SubDAOs and special roles to bypass governance in certain instances.

## SubDAOs

Addresses of DAOs that the DAO considers SubDAOs, this does not require permission from the SubDAO nor does this imply any kind of special rights. In most circumstances, however, the parent will have (full) control over the SubDAO.  
In this technical demo SubDAOs can not be added. These SubDAOs can only be newly created. The plugins for this SubDAO are also not customizable, but fixed to the Admin governance plugin (from Aragon) with admin rights to the parent DAO. The SubDAO also has the SubDAO and SharedAddress plugins. These restrictions are all only on the frontend though, the smart contracts do not have these restrictions.

SubDAOs can be used for departments or teams of the organization.

## SharedAddress

Allows holders of a certain ERC-1155 collection to bypass governance for specific actions. The ERC-1155 collection for this technical demo is [Hats Protocol](https://www.hatsprotocol.xyz/). A hat tree can be made using their app, after which rights in specific DAOs can be granted to holders of these hats.

SharedAddress can be used for Role Based Access Control within the organization. Specific positions should be able to perform certain actions without needing to go through a vote.

## For decentralized and centralized governance structures

The desired governance for these DAOs is not restricted by these plugins, meaning this could be any Aragon OSx plugin, even a custom one. This allows existing decentralized management projects using a voting mechanism to use this DAO organization management. Centralized projects are also able to use it, making use of a small multisig or even an admin plugin. This allows existing centralized organizations to onboard into web3. In the future certain powerful positions in this organization, such as the CEO / management could also easily be replaced by a community DAO, if desired.

## WalletConnect

The technical demo has a barebones implementation of using WalletConnect to connect to other dApps. This allows you to use your DAOs as if it was your base wallet. Currently, the request is proposed to be signed by the currently selected DAO. In a final version, you could select a DAO per connection (OpenR&D should use the DAO A, while Uniswap uses DAO B), or even filter all allowed options and allow you to pick on in a dropdown per request.

## Running the project

The demo is live on https://dao-organization.plopmenz.com/ . It consists of a frontend and a backend. The frontend by default will use the backend hosted on https://dao-organization.plopmenz.com/api/ . Running the frontend can be done with

```
npm i
npm run dev
```

or

```
npm i
npm run build
npm run start
```

for a production-optimized version. This assumes you have [nodejs](https://nodejs.org/en/download/) installed already. The same commands can be used to run the backend, you just have to run them in the backend subfolder instead.
