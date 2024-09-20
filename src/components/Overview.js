import { FaInfoCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="overview">
      <h3 className="overview-title">Overview</h3>
      <div className="overview-content">
        <div className="total-assets">
          <div className="label">
            Total pool assets
            <FaInfoCircle color="gray"/>
          </div>
          <div className="amount">$48,484,716.93</div>
          <div className="progress-bar">
            <div className="progress-filled" style={{ width: '100%' }}></div>
          </div>
        </div>

        <div className="metrics">
          <div className="metric">
            <span className="label">Utilization rate</span>
            <span className="info-icon"><FaInfoCircle color="gray"/></span>
            <div className="value">100.00%</div>
          </div>
          <div className="metric">
            <span className="label">Total loss rate</span>
            <span className="info-icon"><FaInfoCircle color="gray"/></span>
            <div className="value">14.55%</div>
          </div>
          <div className="metric">
            <span className="label">Next repayment</span>
            <span className="info-icon"><FaInfoCircle color="gray"/></span>
            <div className="value">Oct 22, 2023</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview;