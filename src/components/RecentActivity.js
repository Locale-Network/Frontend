const recentActivityData = [
  {
    account: '0x47bc...d41d',
    type: 'Withdrawal',
    amount: '-$847.70 USDC',
    date: 'Sep 20, 2024',
    icon: '�', // Placeholder icon
  },
  {
    account: '0x0dc8...774d',
    type: 'Withdrawal',
    amount: '-$522.30 USDC',
    date: 'Sep 19, 2024',
    icon: '�',
  },
  {
    account: '0x0783...9986',
    type: 'Withdrawal',
    amount: '-$790.28 USDC',
    date: 'Sep 19, 2024',
    icon: '�',
  },
  {
    account: 'Goldfinch Protocol',
    type: 'Withdrawal Request Distribution',
    amount: '-$144,682.76 USDC',
    date: 'Sep 19, 2024',
    icon: '�',
  },
  {
    account: '0x72c0...c125',
    type: 'Withdrawal',
    amount: '-$209.17 USDC',
    date: 'Sep 18, 2024',
    icon: '�',
  },
  {
    account: '0x767b...f104',
    type: 'Withdrawal',
    amount: '-$209.17 USDC',
    date: 'Sep 18, 2024',
    icon: '�',
  },
  {
    account: '0x2d50...2ec9',
    type: 'Withdrawal',
    amount: '-$2,572.87 USDC',
    date: 'Sep 18, 2024',
    icon: '�',
  },
];

const RecentActivity = () => {
  return (
    <div className="recentActivity">
      <h3>Recent activity</h3>

      <div className="activity-table">
        {recentActivityData.map((item, index) => (
          <div className="activity-row" key={index}>
            <div className="activity-icon">{item.icon}</div>
            <div className="activity-account">{item.account}</div>
            <div className="activity-type">{item.type}</div>
            <div className="activity-amount">{item.amount}</div>
            <div className="activity-date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity;