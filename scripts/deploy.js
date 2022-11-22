const hre = require('hardhat');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const frUIT = await NFTMarketplace.deploy();

  await frUIT.deployed();

  console.log('NFTMarketplace deployed to:', frUIT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
