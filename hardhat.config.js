require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    baseTestnet: {
      url: process.env.BASE_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 84532,
    },
    baseMainnet: {
      url: process.env.BASE_MAINNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 8453, // Base Mainnet chain ID
    },
  },
  etherscan: {
    apiKey: {
      baseTestnet: process.env.BASESCAN_API_KEY,
      baseMainnet: process.env.BASESCAN_API_KEY, // Reuse same key
    },
    customChains: [
      {
        network: "baseTestnet",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
      {
        network: "baseMainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org",
        },
      },
    ],
  },
};
