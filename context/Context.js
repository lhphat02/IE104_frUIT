import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';

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
    const provider = new ethers.providers.Web3Provider(window.ethereum);
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

  const fetchExistingMarketItem = async () => {
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = fetchContract(provider);

    const data = await contract.fetchMarketItem();

    const items = await Promise.all(
      data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
        const tokenURI = await contract.tokenURI(tokenId);
        const {
          data: { image, name, description },
        } = await axios.get(tokenURI);
        const price = ethers.utils.formatUnits(
          unformattedPrice.toString(),
          'ether'
        );

        return {
          price,
          tokenId: tokenId.toNumber(),
          id: tokenId.toNumber(),
          seller,
          owner,
          image,
          name,
          description,
          tokenURI,
        };
      })
    );

    return items;
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <Context.Provider
      value={{
        connectWallet,
        currentAccount,
        createNFT,
        fetchExistingMarketItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};
