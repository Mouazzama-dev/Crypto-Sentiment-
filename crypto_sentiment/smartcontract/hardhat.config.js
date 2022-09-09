require("hardhat/config").HardhatUserConfig;
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

const dotenv = require("dotenv");

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address)
  }
})

const ALCHEMY_API_KEY = 'rwHCptOOdHqR-HtkhOy31gSRC5V7Marv'
const GOERLI_PRIVATE_KEY = "426b239e38b23c7b4e0c0cd50cd54773ed5ee4fc33cdea25790808f4cd4657f9"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli : {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY ]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.API_KEY
    }
  },

  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

}