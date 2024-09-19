import React from "react";

function LineItem({title, value}) {
  return (
    <div className="profile-item">
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  )
}

function Profile({ walletAddress }) {

  return (
    <div className="profile">
      <LineItem title={'Information'} value={'U.S. Non-Accredited Individual'} />
      <LineItem title={'Main wallet'} value={walletAddress} />
    </div>
  );
}

export default Profile;