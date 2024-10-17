import { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaInfoCircle } from "react-icons/fa";

function DealCard({ title, subtitle, amount, interest, apy, term, liquidity, approved, repaid }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  return (
    <div className="deal-card">
      <header className="deal-card__header">
        <img src={logo} alt="Company logo" className="deal-card__logo" />
        <div className="deal-card__title-section">
          <h3 className="deal-card__title">{title}</h3>
          <p className="deal-card__subtitle">{subtitle}</p>
        </div>
      </header>
      <div className="deal-card__details">
        <p className="deal-card__interest-label">Amount</p>
        <h2 className="deal-card__interest-rate">{amount}</h2>
        <p className="deal-card__interest-label">Variable USDC interest</p>
        <h2 className="deal-card__interest-rate">{interest}</h2>
        <DealDetailItem
          label="Variable LLP APY"
          value={apy}
          tooltipKey="apy"
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
          tooltipContent={
            "The Senior Pool's total current estimated APY, including the current USDC APY and est. LLP rewards APY. The LLP rewards APY is volatile and changes based on several variables including the price of LLP, the total capital deployed on Locale Direct Capital, and Senior Pool's utilization. Learn more in the Locale Direct Capital Documentation."
          }
        />
        <DealDetailItem
          label="Loan term"
          value={term}
          tooltipKey="term"
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
          tooltipContent="This deal does not have a fixed term length."
        />
        <DealDetailItem
          label="Liquidity"
          value={liquidity}
          tooltipKey="liquidity"
          activeTooltip={activeTooltip}
          setActiveTooltip={setActiveTooltip}
          tooltipContent="The frequency with which a lender can withdraw some or all of their invested capital."
        />

        <p>Approved: {approved}</p>
        <p>Repaid: {repaid}</p>
      </div>
    </div>
  );
}

function DealDetailItem({ label, value, tooltipKey, activeTooltip, setActiveTooltip, tooltipContent }) {
  return (
    <div className="deal-card__detail-item">
      <p className="deal-card__detail-label">
        {label}
        <FaInfoCircle
          className="deal-card__info-icon"
          onMouseEnter={() => setActiveTooltip(tooltipKey)}
          onMouseLeave={() => setActiveTooltip(null)}
        />
      </p>
      <strong className="deal-card__detail-value">{value}</strong>
      {activeTooltip === tooltipKey && (
        <div className="deal-card__tooltip">
          {tooltipContent}
          {tooltipKey === "apy" && (
            <a href="/" className="deal-card__tooltip-link">Locale Direct Capital Documentation</a>
          )}
        </div>
      )}
    </div>
  );
}

export default DealCard;