import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const {  PRIVATE_KEY, ETHERSCAN_API_KEY , CELO_SEPOLIA_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.30",
  networks: {
    celo_sepolia: {
      url: `${CELO_SEPOLIA_URL}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
   etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    },
  
};

export default config;
