import React from "react";

const SingleCard = () => {
  return (
    <div className="card" style={{ width: "25rem", padding: 0 }}>
      <img
        src="/286273.jpg"
        className="card-img-top "
        style={{ objectFit: "cover", padding: 0 }}
        alt="colleges"
      />
      <div className="card-body" style={{ padding: 0 }}>
        <h5 className="card-title" style={{ marginLeft: 5 }}>
          Card title
        </h5>
      </div>
    </div>
  );
};

export default SingleCard;
