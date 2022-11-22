import React, { useEffect, useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const checkWalletConnection = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <Context.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </Context.Provider>
  );
};
