import { useState, useEffect } from 'react';

const useAuth = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const fetchAccount = async () => {
      if (!walletAddress) return;

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}kyc/account`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: walletAddress }),
        });

        const data = await response.json();

        if (data.success) {
          setAccount(data.account);
        }
      } catch (err) {
        console.error('Error fetching account:', err);
      }
    };

    fetchAccount();
  }, [walletAddress]);

  return {
    walletAddress,
    setWalletAddress,
    account,
    setAccount
  }
}

export default useAuth;