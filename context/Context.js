import React, { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';

import { ContractAddress, ContractAddressABI } from './ABI';

export const Context = React.createContext();

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ContractAddress, ContractAddressABI, signerOrProvider);

export const ContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  // Connect MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts);

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const checkWalletConnection = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  const createNFT = async (url, unformattedPrice) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    const price = ethers.utils.parseUnits(unformattedPrice, 'ether');
    const contract = fetchContract(signer);
    const listingPrice = await contract.getListingPrice();

    const createMarketItem = await contract.createToken(url, price, {
      value: listingPrice.toString(),
    });
    await createMarketItem.wait();
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <Context.Provider value={{ connectWallet, currentAccount, createNFT }}>
      {children}
    </Context.Provider>
  );
};
