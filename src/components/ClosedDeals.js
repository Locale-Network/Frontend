import icon from "../assets/logo.jpg"

function ClosedDeals({ deals }) {
  const getColor = (status) => {
    if (status === 'On Time') {
      return 'green';
    } else if (status === 'Fully Repaid') {
      return '#3d755b';
    }

    return '#e4b332';
  };

  return (
    <>
      {deals.map((deal, index) => (
        <div key={index} className="deal-row">
          <div className="deal-column deal-column-name-section">
            <div className="deal-name-details">
              {deal.img ? (
                <img src={require(`../assets/${deal.img}.png`)} alt="closed-deal" />
              ) : (
                <img src={icon} alt="locale_pool" />
              )}
              <p>{deal.name}</p>
            </div>
            <h3>{deal.description}</h3>
          </div>
          <div className="deal-column deal-column-total-loan-amount">
            <p>Total loan amount</p>
            <h3>${deal.totalLoanAmount.toLocaleString()}</h3>
          </div>
          <div className="deal-column deal-column-maturity-date">
            <p>Maturity date</p>
            <h3>{deal.maturityDate}</h3>
          </div>
          <div className="deal-column deal-column-status">
            <p>Status</p>
            <h3 style={{ color: getColor(deal.status), fontWeight: 'bold' }}>{deal.status}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default ClosedDeals;
