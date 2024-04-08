import React from "react";
import SingleCard from "../SingleCard";

const Colleges = () => {
  return (
    <div className="section" style={{ marginBottom: 40 }}>
      <h2 style={{ fontWeight: 600 }}>Our colleges</h2>
      <div style={{ display: "flex", gap: 15 }}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
};

export default Colleges;
