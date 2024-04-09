import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#003b95",
          marginBottom: 50,
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: 1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>FindFlat</h1>
        <a href="#footer">Contact us</a>
      </div>
    </div>
  );
};

export default Navbar;
