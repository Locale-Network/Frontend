import { useEffect, useState } from "react";
import UIDBanner from "../components/UIDBanner";
import { useAuthContext } from "../providers/authProvider";
import KYCModal from "../components/KYCModal";
import { usePlaidLink } from "react-plaid-link";
import Profile from "../components/Profile";

function Account() {
  const { walletAddress, account, setAccount } = useAuthContext();
  const [isKYCModalOpen, setIsKYCModalOpen] = useState(false);
  const [linkToken, setLinkToken] = useState(null);
  const [tip, setTip] = useState('');
  const [error, setError] = useState('');

  const clearMessagesAfterDelay = () => {
    setTimeout(() => {
      setTip('');
      setError('');
    }, 1000);
  };

  useEffect(() => {
    const generateLinkToken = async () => {
      if (account || !walletAddress) return;

      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}kyc/create-link-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: walletAddress }),
        });

        const data = await response.json();

        if (data.success) {
          setLinkToken(data.link_token);
        } else {
          setError('Failed to create a link token.');
          clearMessagesAfterDelay();
        }
      } catch (err) {
        console.error('Error creating link token:', err);
        setError('An error occurred while creating the link token.');
        clearMessagesAfterDelay();
      }
    };

    generateLinkToken();
  }, [account, walletAddress]);

  const openKYCModal = () => setIsKYCModalOpen(true);
  const closeKYCModal = () => setIsKYCModalOpen(false);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (publicToken) => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND}kyc/exchange-public-token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: walletAddress, public_token: publicToken }),
        });

        const data = await response.json();

        if (data.success) {
          setTip(data.message);
          setAccount(data.account);
          clearMessagesAfterDelay();
        } else {
          setError(data.message);
          clearMessagesAfterDelay();
        }
      } catch (err) {
        console.error('Error exchanging public token:', err);
        setError('An error occurred during the token exchange.');
        clearMessagesAfterDelay();
      }
    },
    onExit: (error) => {
      setError(error?.message || 'User exited the flow without completing.');
      clearMessagesAfterDelay();
    },
  });

  return (
    <div className="account">
      <h1>Account</h1>
      {!account && walletAddress && (
        <UIDBanner text="Begin UID setup" onClick={openKYCModal} />
      )}
      {account && (
        <Profile walletAddress={account.walletAddress} />
      )}
      {isKYCModalOpen && (
        <KYCModal onClose={closeKYCModal} onBegin={open} disabled={!ready} />
      )}
      {tip && <p className="tip-message">{tip}</p>}
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Account;