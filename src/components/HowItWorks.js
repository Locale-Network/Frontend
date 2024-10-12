import logo from '../assets/logo.jpg';

function HowItWorks() {
  return (
    <div className="howItWorks">
      <h2>How it works: Locale Lending Membership Vaults</h2>

      <div className='howItWorks-container'>
        <div className='howItWorks-item'>
          <div className='item-header'>
            <img src={logo} alt="Step 1"/>
            <img src={logo} alt="Step 2"/>
            <img src={logo} alt="Step 3"/>
            <img src={logo} alt="Step 4"/>
            <img src={logo} alt="Step 5"/>
            <img src={logo} alt="Step 6"/>
            <img src={logo} alt="Step 7"/>
            <img src={logo} alt="Step 8"/>
          </div>
          <div className='item-body'>
            <h3 className="text-lg font-bold mb-2">Deposit LLP and Capital</h3>
            <p>
              Put both LLP and Capital (FIDU, Backer NFT) in the Vault to become a Member. You can withdraw from the Vault at any time.
            </p>
          </div>
        </div>
        <div className='howItWorks-item'>
          <div className='item-header'></div>
          <div className='item-body'>
            <h3 className="text-lg font-bold mb-2">Receive boosted yields</h3>
            <p>
              Enhance your yields with Member Rewards, a percentage of the Locale Lending Treasury distributed pro-rata based on your Member Vault position.
            </p>
          </div>
        </div>
        <div className='howItWorks-item'>
          <div className='item-header'>
            <h3 className="text-lg font-bold">Share of Member Rewards</h3>
            <div className="flex items-center mt-2">
              <div className="circle-icon w-10 h-10 bg-green-400 rounded-full mr-4"></div>
              <p className="text-2xl font-bold">0.7%</p>
            </div>
          </div>
          <div className='item-body'>
            <h3 className="text-lg font-bold mb-2">Claim rewards weekly</h3>
            <p>
              Member Rewards are distributed weekly in FIDU. Withdrawing during a weekly cycle will forfeit rewards for that cycle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;