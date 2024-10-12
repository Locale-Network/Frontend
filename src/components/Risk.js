const Risk = () => {
  return (
    <div className="risk">
      <h3>Risk mitigation</h3>

      <div className="risk-card">
        <h4>Senior Pool capital risk</h4>
        <p>
          Senior Pool capital is diversified across various borrower pools, and has the first lien on the assets across these pools. In return for this Seniority, it gives a portion of nominal interest to the junior investors who participate in the individual borrower pools as a “risk premium.” All deals protected by 20-25% first-loss capital bar one legacy investment found <a href="/">here</a>.
        </p>
        <p>
          Capital from these pools is used to finance real-world private debt transactions. USDC is converted to fiat by the Borrowers and used off-chain to finance economic activity, thus protected from on-chain DeFi volatility.
        </p>

        <div className="diagram-container">
          <div className="senior-tranche">Senior Tranche</div>
          <div className="junior-tranche">Junior Tranche</div>
          <p>Borrower Pool Principal Value</p>
        </div>

        <button className="read-more-button">
          Read more <span>&#8594;</span>
        </button>
      </div>

      <div className="details-section">
        <div className="detail-item">
          <strong>Deal structure</strong>
          <p>Liquidity pool</p>
          <p>The Locale Lending protocol automatically allocates Senior Pool capital across various vetted Borrower Pools. All deals protected by 20-25% first-loss capital bar one legacy investment found <a href="/">here</a>.</p>
        </div>

        <div className="detail-item">
          <strong>Collateralization</strong>
          <p>Yes</p>
          <p>This loan is secured with real-world, off-chain assets as collateral.</p>
        </div>

        <div className="detail-item">
          <strong>Post-close reporting</strong>
          <p>Investors can access borrower-reported updates via the investment-gated <a href="/">Discord channel</a>.</p>
        </div>

        <div className="detail-item">
          <strong>Legal recourse</strong>
          <p><a href="/">Senior Pool Agreement</a></p>
        </div>
      </div>
    </div>
  )
}

export default Risk;