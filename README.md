<h1 align="left">From UIT - NFT Marketplace</h1>

###

<p align="left">A simple NFT Marketplace Web3 for my class's project and portfolio as well</p>

###

<h2 align="left">🚗 Create with</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" width="52" alt="nextjs logo"  />
  <img src="https://camo.githubusercontent.com/bcd4bda49ef6cd9537db065920f4f4f6ac670eae0e0adf2c5133c19b319f1574/68747470733a2f2f627261646c632e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f627261646c632f7673636f64652d7461696c77696e646373732f302e322e302f313535383034303536333634392f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74" height="40" width="40 alt="tailwindcss logo"  />
  <img src="https://logo-download.com/wp-content/data/images/png/Solidity-logo.png" height="40" width="52" alt="solidity logo"  />
  <img src="https://seeklogo.com/images/H/hardhat-logo-888739EBB4-seeklogo.com.png" height="35" width="47" alt="hardhat logo"  />
</div>

###

<h2 align="left">🚀 For developing (in local)</h2>
                ## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)
- Install [Hardhat](https://hardhat.org/)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ npm install
```

### 3. Boot up local development blockchain

```
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask

- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337" or "1337" if an tx error occurs. Then click save.

### 5. Migrate Smart Contracts

`$ npx hardhat run scripts/deploy.js --network localhost`

### 6. Run Tests

`$ npx hardhat test`

### 7. Launch Frontend

`$ npm run dev`

### P/S:

- Make sure to change the Infura API id, key and address in ./pages/create.js and ./next.config.js
- Or you can store them in an .env file and access with process.env
