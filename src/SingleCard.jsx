import React from "react";

const SingleCard = ({ image, name }) => {
  //   console.log(name);
  return (
    <div className="card" style={{ width: "25rem", padding: 0 }}>
      <img
        src={image}
        className="card-img-top "
        style={{ objectFit: "cover", padding: 0 }}
        alt="colleges"
      />
      <div className="card-body" style={{ padding: 0 }}>
        <h5 className="card-title" style={{ padding: 10 }}>
          {name}
        </h5>
      </div>
    </div>
  );
};

export default SingleCard;
