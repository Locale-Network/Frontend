const Highlights = () => {
  return (
    <div className="highlights">
      <h2>Highlights</h2>
      <div className="highlight-main" style={{ marginBottom: "20px", backgroundColor: "#cddef2", padding: "20px", color: "#000", borderRadius: "8px" }}>
        <h2>Diversified capital</h2>
        <p>
          The Senior Pool gives Liquidity Providers exposure to a variety of borrowers on the Locale Lending protocol. These borrowers span 25+ countries, and vary in use cases such as asset financing, SME loans and consumer loans. This is intended to serve investors in search of diversified yield generated through real world economic activity.
        </p>
      </div>

      <div className="sub-sections" style={{ display: "flex", gap: "20px" }}>
        <div className="sub-section" style={{ flex: 1, padding: "20px", backgroundColor: "#cddef2", color: "#000", borderRadius: "8px" }}>
          <h3>Protected by first-loss capital</h3>
          <p>
            All deals protected by 20-25% first-loss capital bar one legacy investment found <a href="/" style={{ color: "#d4af37", textDecoration: "none" }}>here</a>.
          </p>
        </div>

        <div className="sub-section" style={{ flex: 1, padding: "20px", backgroundColor: "#cddef2", color: "#000", borderRadius: "8px" }}>
          <h3>Secured</h3>
          <p>
            Overcollateralized with real-world off-chain assets.
          </p>
        </div>

        <div className="sub-section" style={{ flex: 1, padding: "20px", backgroundColor: "#cddef2", color: "#000", borderRadius: "8px" }}>
          <h3>Ongoing monitoring</h3>
          <p>
            Borrowers are required to provide quarterly reporting in secure datarooms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Highlights;