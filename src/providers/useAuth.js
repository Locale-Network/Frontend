import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const useAuth = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const arbitrumBlueberryChainId = '0x14865D0F05';
  
          if (chainId !== arbitrumBlueberryChainId) {
            try {
              await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: arbitrumBlueberryChainId }],
              });
            } catch (switchError) {
              if (switchError.code === 4902) {
                try {
                  await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: arbitrumBlueberryChainId,
                        chainName: 'Arbitrum Blueberry',
                        rpcUrls: ['https://rpc.arb-blueberry.gelato.digital'],
                        nativeCurrency: {
                          name: 'CGT',
                          symbol: 'CGT',
                          decimals: 18,
                        },
                        blockExplorerUrls: ['https://arb-blueberry.gelatoscout.com'],
                      },
                    ],
                  });
                } catch (addError) {
                  console.error("Failed to add the network:", addError);
                }
              }
            }
          }

          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            const checksumAddress = ethers.getAddress(accounts[0]);
            setWalletAddress(checksumAddress);
          }
        } catch (error) {
          console.error("Error connecting to Arbitrum Blueberry:", error);
        }
      } else {
        console.error("MetaMask is not installed. Please install it to use this feature.");
      }
    };

    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const fetchAccount = async () => {
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

    if (walletAddress) {
      fetchAccount();
    }
  }, [walletAddress]);

  return {
    walletAddress,
    setWalletAddress,
    account,
    setAccount
  }
}

export default useAuth;