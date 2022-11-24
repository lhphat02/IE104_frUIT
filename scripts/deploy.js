const hre = require('hardhat');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const frUIT = await NFTMarketplace.deploy();

  await frUIT.deployed();

  console.log('frUIT Marketplace deployed to:', frUIT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
