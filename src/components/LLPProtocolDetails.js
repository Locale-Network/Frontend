import Highlights from "./Highlights";
import Overview from "./Overview";
import Portfolio from "./Portfolio";
import RecentActivity from "./RecentActivity";
import Repayment from "./Repayment";
import Risk from "./Risk";

const LLPProtocolDetails = () => {
  return (
    <div className="llp-protocol-details">
      <Overview />
      <Highlights />
      <Repayment />
      <Portfolio />
      <Risk />
      <RecentActivity />
    </div>
  )
}

export default LLPProtocolDetails;