import { FiArrowUpRight } from "react-icons/fi";
import { LuLink } from "react-icons/lu";
import { FaInfoCircle, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from '../assets/logo.jpg';

const dealData = [
  {
    name: 'Almavest Basket #6',
    portfolioShare: '15.50%',
    principalOwed: '$9,449,813.77',
    maturityDate: 'Feb 20, 2025',
    status: 'On Time',
  },
  {
    name: 'Lend East #1: Emerging Asia',
    portfolioShare: '13.32%',
    principalOwed: '$8,119,999.86',
    maturityDate: 'Apr 03, 2024',
    status: 'Late',
  },
  {
    name: 'Almavest Basket #7: Fintech...',
    portfolioShare: '13.13%',
    principalOwed: '$7,999,999.92',
    maturityDate: 'Apr 11, 2025',
    status: 'On Time',
  },
  {
    name: 'Asset-Backed Pool via Add...',
    portfolioShare: '13.13%',
    principalOwed: '$7,999,999.92',
    maturityDate: 'Apr 25, 2025',
    status: 'Grace Period',
  },
  {
    name: 'Cauris Fund #2: Africa Inno...',
    portfolioShare: '13.13%',
    principalOwed: '$7,999,930.36',
    maturityDate: 'Feb 24, 2025',
    status: 'On Time',
  },
  {
    name: 'Almavest Basket #4',
    portfolioShare: '12.31%',
    principalOwed: '$7,499,990.70',
    maturityDate: 'Nov 29, 2024',
    status: 'Grace Period',
  },
  {
    name: 'Tugende',
    portfolioShare: '7.01%',
    principalOwed: '$4,273,860.76',
    maturityDate: 'Oct 22, 2023',
    status: 'Default',
  },
  {
    name: 'Cauris',
    portfolioShare: '6.33%',
    principalOwed: '$3,856,981.51',
    maturityDate: 'Nov 10, 2024',
    status: 'On Time',
  },
  {
    name: 'Almavest Basket #5',
    portfolioShare: '6.15%',
    principalOwed: '$3,749,999.81',
    maturityDate: 'Dec 19, 2024',
    status: 'On Time',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio details</h2>
      <div className="portfolio-header">
        <div className="llp-protocol-header">
          <div style={{display: 'flex', alignItems: 'center', gap: 5 }}>
            <img src={logo} style={{ width: 25, height: 25, borderRadius: '50%' }} alt="logo"/>
            <p>Locale Lending Protocol</p>
          </div>
          <a href="https://etherscan.io">Read more <FiArrowUpRight /></a>
        </div>

        <h1>Locale Lending Senior Pool</h1>
        <p style={{ margin: 0 }}>
          The Senior Pool gives Liquidity Providers (LPs) exposure to a variety of borrowers on the Locale Lending protocol.
          LPs who provide capital into the Senior Pool are capital providers in search of diversified exposure, diversified
          exposure across any Borrower Pool with Senior Pool capital. 
          See full list of Borrower Pools with Senior Pool exposure <a href="/">here.</a>
        </p>

        <div className="social-link">
          <a href="https://website"><LuLink />Website</a>
          <a href="https://linkedin"><FaLinkedin />Linkedin</a>
          <a href="https://x.com"><FaTwitter />Twitter</a>
        </div>
      </div>
      <div className="metrics" style={{ border: '1px solid #ccc', borderRadius: 10 }}>
        <div className="metric">
          <span className="label">No. of portfolio loans</span>
          <span className="info-icon"><FaInfoCircle color="gray"/></span>
          <div className="value">0</div>
        </div>
        <div className="metric">
          <span className="label">Total loss rate</span>
          <span className="info-icon"><FaInfoCircle color="gray"/></span>
          <div className="value">0.00%</div>
        </div>
        <div className="metric">
          <span className="label">Principal outstanding</span>
          <span className="info-icon"><FaInfoCircle color="gray"/></span>
          <div className="value">$0.00</div>
        </div>
      </div>
      <DealTable />
    </div>
  )
}

const DealTable = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'On Time':
        return 'status-on-time';
      case 'Late':
        return 'status-late';
      case 'Grace Period':
        return 'status-grace-period';
      case 'Default':
        return 'status-default';
      default:
        return '';
    }
  };

  return (
    <div className="deal-table-container">
      <h3>Current distribution</h3>
      <table className="deal-table">
        <thead>
          <tr>
            <th>Deal name</th>
            <th>Portfolio share</th>
            <th>Principal owed</th>
            <th>Maturity date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dealData.map((deal, index) => (
            <tr key={index}>
              <td>{deal.name}</td>
              <td>{deal.portfolioShare}</td>
              <td>{deal.principalOwed}</td>
              <td>{deal.maturityDate}</td>
              <td>
                <p className={`status ${getStatusClass(deal.status)}`}>
                  {deal.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;