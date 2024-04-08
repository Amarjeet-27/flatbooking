import React from "react";
import SingleCard from "../SingleCard";

const Flats = () => {
  return (
    <div className="section">
      <h2 style={{ fontWeight: 600 }}>Flats and Hostels</h2>
      <div style={{ display: "flex", gap: 15 }}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
};

export default Flats;
