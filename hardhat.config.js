require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = 'EUyP2mxP_WIQVM4dvzyeN8YxpYa2JGmA';
const SEPOLIA_PRIVATE_KEY =
  '239908345ec889b15c5d2f6a7ce7bb21e5997749705cfcd7b86f66385c362dad';

module.exports = {
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: '0.8.4',
};
