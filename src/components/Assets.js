function Assets() {
  return (
    <div className="assets">
      <h2 className="availableAssets-title">Assets in vault</h2>
      <div className="availableAssets-body">
        <AssetItem
          title="LLP"
          amount="0.00 LLP"
          dollarAmount="$0.00"
          description="LLP"
          subDescription="Governance Token"
        />

        <AssetItem
          title="Capital"
          amount="$0.00"
          description="Capital"
          subDescription="Vaulted capital"
        />

        <SelectButton />
      </div>
    </div>
  )
}

const AssetItem = ({ title, amount, dollarAmount, description, subDescription }) => {
  return (
    <div className="asset-item">
      <div className="asset-header">
        <p className="asset-title">{title}</p>
        <p className="asset-amount">{amount}</p>
      </div>
      <div className="asset-body">
        <div className="description-container">
          <p className="asset-description">{description}</p>
          <p className="asset-sub-description">{subDescription}</p>
        </div>
        <div className="asset-amount">
          <p className="asset-amount">{amount}</p>
          <p className="asset-amount">{dollarAmount}</p>
        </div>
      </div>
    </div>
  );
};

const SelectButton = () => {
  return (
    <button className="select-button">
      Select assets to remove
    </button>
  );
};

export default Assets;