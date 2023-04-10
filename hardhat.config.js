require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = 'EUyP2mxP_WIQVM4dvzyeN8YxpYa2JGmA';
const SEPOLIA_PRIVATE_KEY =
  'd10c60b1bdd6de06a05bdc3b3707a161b862707644e45d0d8d9884581ce4c6d9';

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
