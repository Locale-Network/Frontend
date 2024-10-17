import { useEffect, useState } from "react";
import ClosedDeals from "../components/ClosedDeals";
import DealCard from "../components/DealCard";
import SummaryItem from "../components/SummaryItem";
import { FaArrowDown } from "react-icons/fa6";
import { ethers } from "ethers";
import contractABI from '../abi/LocaleLending.abi.json';
import { useAuthContext } from "../providers/authProvider";
import UIDBanner from "../components/UIDBanner";
import { useNavigate } from "react-router-dom";

const closedDeals = [
  { name: 'Fazz', description: "SME Loans in Southeast Asia", totalLoanAmount: 1347026.01, maturityDate: 'Apr 30, 2025', status: 'Fully Repaid' },
  { name: 'Cauris', description: "Cauris Fund #4: Africa Innovation Pool", totalLoanAmount: 2126664.22, maturityDate: 'Dec 16, 2024', status: 'Grace Period' },
  { name: 'Addem Capital', description: "Asset-Backend Pool via Addem Capital", totalLoanAmount: 10000000.00, maturityDate: 'Apr 25, 2025', status: 'On Time' },
];

function Earn() {
  const { walletAddress, account } = useAuthContext();
  const [activeLoans, setActiveLoans] = useState('');
  const [totalLossRate, setTotalLossRate] = useState('');
  const [totalLoansRepaid, setTotalLoansRepaid] = useState('');
  const navigate = useNavigate();

  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    loadLoans();
  }, []);

  const loadLoans = async () => {
    try {
      const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, provider);
      const totalLoans = await contract.totalLoans();
      
      let loanList = [];
      for (let i = 0; i < totalLoans; i++) {
        const loan = await contract.loans(i);
        loanList.push(loan);
      }
      setLoans(loanList);

      const [activeLoans, totalLossRate, totalLoansRepaid] = await Promise.all([
        contract.getTotalActiveLoans(),
        contract.getTotalLossRate(),
        contract.getTotalLoansRepaid()
      ]);

      setActiveLoans(ethers.formatEther(activeLoans));
      setTotalLossRate(ethers.formatUnits(totalLossRate, 2));
      setTotalLoansRepaid(ethers.formatEther(totalLoansRepaid));
    } catch (error) {
      console.error("Failed to fetch contract data:", error);
    }
  };

  const requestLoan = async () => {
    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask is not installed. Please install it to use this feature.");
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, contractABI, signer);

      const loanAmountInUSDC = ethers.parseUnits(loanAmount.toString(), 6);
      const interestRateInBips = Math.floor(interestRate * 100);
      const termInDays = Math.floor(term);

      const tx = await contract.requestLoan(loanAmountInUSDC, interestRateInBips, termInDays);
      await tx.wait();

      await loadLoans();
    } catch (error) {
      console.error("Error requesting loan:", error);
    }
  };

  const handleClick = () => {
    navigate('/account');
  };

  return (
    <div className="earn">
      {!account && walletAddress && (
        <UIDBanner text={"Go to my account"} onClick={handleClick} />
      )}
      <div className="summary">
        <SummaryItem
          label="Active Loans"
          toolTip="Total principal outstanding across all loans in the Locale Lending Protocol."
          value={activeLoans ? `$${parseFloat(activeLoans).toFixed(2)}` : '••••••'}
        />
        <SummaryItem
          label="Total Loss Rate"
          toolTip="Total value of loans written down or written off (losses) as a proportion of total loans issued on the Locale Lending protocol."
          value={activeLoans ? `${parseFloat(totalLossRate)}%` : '••••••'}
        />
        <SummaryItem
          label="Total Loans Repaid"
          toolTip="Total amount of principal and interest repaid across all loans in the Locale Lending Protocol."
          value={activeLoans ? `$${parseFloat(totalLoansRepaid).toFixed(2)}` : '••••••'}
        />
      </div>

      {account && walletAddress && (
        <div className="loan-request-container">
          <h4 className="loan-request-title">Request a Loan</h4>
          <div className="loan-request-form">
            <input
              type="number"
              className="loan-input"
              placeholder="Loan Amount (USDC)"
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
            <input
              type="number"
              className="loan-input"
              placeholder="Interest Rate (%)"
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
            <input
              type="number"
              className="loan-input"
              placeholder="Term (in seconds)"
              onChange={(e) => setTerm(e.target.value)}
              required
            />
            <button className="loan-submit-button" onClick={requestLoan}>Request Loan</button>
          </div>
        </div>
      )}

      <div className="open-deal">
        <h4>1 Open Deal</h4>
        <div className="open-deal-container">
          {loans.map((loan, index) => (
            <DealCard
              key={index}
              title="Locale Lending Senior Pool"
              subtitle="Automated diversified portfolio"
              amount={`${Number(ethers.formatUnits(loan.amount, 6)).toFixed(2)} USDC`}
              interest={`${Number(ethers.formatUnits(loan.interestRate, 2)).toFixed(2)}%`}
              apy="0.00%"
              term={`${ethers.formatUnits(loan.term, 0)} seconds`}
              liquidity="2 week withdraw requests"
              approved={loan.isApproved ? "Yes" : "No"}
              repaid={loan.isRepaid ? "Yes" : "No"}
            />
          ))}
        </div>
      </div>
      
      <div className="closed-deals">
        <h4>3 Closed Deals</h4>
        {closedDeals.length < 0 ? (
          <>
            <ClosedDeals deals={closedDeals} />
            <div className="view-more-closed-pools">
              <p>View more closed pools</p>
              <FaArrowDown size={16} color="#000"/>
            </div>
          </>
        ) : (
          <p style={{textAlign: 'center'}}>No closed deals</p>
        )}
      </div>
    </div>
  );
}

export default Earn;