import { MdOutlineElectricBolt } from "react-icons/md";

function AvailableAssets() {
  return (
    <div className="availableAsset">
      <div className="balanced">
        <h2><MdOutlineElectricBolt color="#d7bd7a"/> Balanced is best</h2>
        <p>To optimize your member Reward yields, aim to have balanced dollar amount of captital in LLP in your vault at all times</p>
        <p>Ex: $100 of captital should be balanced with $100 of LLP for an optimal reward rate.</p>
      </div>

      <div className="availableAssets-container">
        <h2 className="availableAssets-title">Available assets</h2>
        <div className="availableAssets-body">
          <h3>You don't have any available assets to be added</h3>
          <p className="availableAssets-description">
            To optimize Member rewards, aim to have balanced amounts of LLP and Capital in your Vault at all times.
          </p>

          <AssetItem
            title="LLP"
            amount="0.00 LLP"
            buttonText="Buy now"
            buttonLink="#"
            description="Buy LLP"
          />

          <AssetItem
            title="Capital"
            amount="$0.00"
            buttonText="Invest"
            buttonLink="/pools/senior"
            description="LP in the Senior Pool for FIDU"
          />

          <SelectButton />

          <p className="availableAssets-footer">
            You must have both LLP and Capital to be eligible for Membership.
          </p>
        </div>
      </div>
    </div>
  )
}

const AssetItem = ({ title, amount, buttonText, buttonLink, description }) => {
  return (
    <div className="asset-item">
      <div className="asset-header">
        <p className="asset-title">{title}</p>
        <p className="asset-amount">{amount}</p>
      </div>
      <div className="asset-body">
        <p className="asset-description"><MdOutlineElectricBolt color="#d7bd7a"/> {description}</p>
        <a href={buttonLink} className="asset-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const SelectButton = () => {
  return (
    <button className="select-button">
      Select assets to add
    </button>
  );
};

export default AvailableAssets;