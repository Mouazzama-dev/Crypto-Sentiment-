
const hre = require("hardhat");

async function main() {
  
  const MarketSentiment = await hre.ethers.getContractFactory("MarketSentiment");
  const marketSentiment = await MarketSentiment.deploy("Hello Hardhat!");

  await marketSentiment.deployed();

  console.log(
    `Market sentiment deployed `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
