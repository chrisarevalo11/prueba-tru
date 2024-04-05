import * as dotenv from "dotenv";
dotenv.config();  

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
};

export default config;
