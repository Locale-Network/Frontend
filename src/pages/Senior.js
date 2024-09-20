import { FaInfoCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { FaArrowLeftLong } from "react-icons/fa6";
import LLPProtocol from "../components/LLPProtocol";
import LLPProtocolDetails from "../components/LLPProtocolDetails";

function Senior() {
  return (
    <div className="senior">
      <div className="warning">
        <FaInfoCircle color="#d7bd7a" size={20}/>
        <p>This offering is only available to U.S. accreited investors.</p>
      </div>
      <div className="error">
        <BiSolidError color="red" size={20} style={{ width: 20 }}/>
        <p>One of the Sr. Pool loans is currently in default. This may impact the returns of your investment. Please see this governance post for more details. In addition, currently, monthly interest payments and principal repayments are less than the current withdrawal demand. As such, the Goldfinch Senior Pool cannot accommodate all withdrawal requests.</p>
      </div>
      <div className="senior-header">
        <a href="/membership"><FaArrowLeftLong size={15} />Back to Open Deals</a>
        <div className="llp-protocol-details-header">
          <a href='#overview'>Overview</a>
          <a href='#highlight'>Highlights</a>
          <a href='#repayment'>Repayment</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#risk'>Risk</a>
        </div>
      </div>
      <div className="senior-body">
        <LLPProtocol />
        <LLPProtocolDetails />
      </div>
    </div>
  );
}

export default Senior;