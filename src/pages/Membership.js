import Assets from "../components/Assets";
import AvailableAssets from "../components/AvailableAssets";
import HowItWorks from "../components/HowItWorks";
import { useAuthContext } from "../providers/authProvider";

function Membership() {
  const { walletAddress } = useAuthContext();

  return (
    <div className="membership">
      <div className="membership_header">
        <h1>Membership</h1>
        <button>How does it work?</button>
      </div>

      {walletAddress? (
        <>
          <HowItWorks />
          <h1>Vault</h1>
          <div className="vault-container">
            <AvailableAssets />
            <Assets />
          </div>
        </>
      ) : (
        <h3>Please connect to your wallet first.</h3>
      )}
    </div>
  );
}

export default Membership;