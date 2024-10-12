import { BiSolidError } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import logo from '../assets/logo.jpg';

const LLPProtocol = () => {
  return (
    <div className="llp-protocol">
      <div className="llp-protocol-header">
        <div style={{display: 'flex', alignItems: 'center', gap: 5 }}>
          <img src={logo} style={{ width: 25, height: 25, borderRadius: '50%' }} alt="logo"/>
          <p>Locale Lending Protocol</p>
        </div>
        <a href="https://etherscan.io">Etherscan <FiArrowUpRight /></a>
      </div>

      <h1>Locale Lending Senior Pool</h1>
      <p style={{ margin: 0 }}>
        The Senior Pool gives Liquidity Providers (LPs) exposure to a variety of borrowers on the Locale Lending protocol.
        LPs who provide capital into the Senior Pool are capital providers in search of diversified exposure, diversified
        exposure across any Borrower Pool with Senior Pool capital. 
        See full list of Borrower Pools with Senior Pool exposure <a href="/">here.</a>
      </p>

      <section className="apy-section">
        <div className="apy-item">
          <p style={{ display: 'flex', gap: 5, alignItems: 'center' }}>Variable USDC APY<FaInfoCircle color="gray"/></p>
          <h2>9.93%</h2>
        </div>
        <div className="apy-item" style={{ textAlign: 'right' }}>
          <p>Variable LLP APY</p>
          <h2>0.00%</h2>
        </div>
      </section>

      <section className="loan-term-section">
        <div className="loan-term-item">
          <p style={{ display: 'flex', gap: 5, alignItems: 'center' }}>Loan term<FaInfoCircle color="gray"/></p>
          <h4>Open-ended</h4>
        </div>
        <div className="liquidity-info">
          <p style={{ display: 'flex', gap: 5, alignItems: 'center' }}>Liquidity<FaInfoCircle color="gray"/></p>
          <p>
            The current utilization rate is 100%. Therefore, not all withdrawals can be processed at this time. 
            As borrowers make interest and principal payments, withdrawals will be processed according to the withdrawal queue.
          </p>
        </div>
      </section>

      <section className="error-section">
        <BiSolidError color="red" size={30} />
        <p>Sorry, you are not eligible to participate in the senior pool because you do not have a suitable UID.</p>
      </section>
    </div>
  )
}

export default LLPProtocol;