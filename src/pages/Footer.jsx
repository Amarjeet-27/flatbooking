import React from "react";
import List from "./List";

const Footer = () => {
  return (
    <div className="" style={{ background: "#003b72", paddingTop: 10 }}>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: 15 }}>
        Contact Here
      </h1>
      <div
        style={{
          display: "flex",
          paddingLeft: 80,
          paddingRight: 80,
          justifyContent: "space-around",
        }}
      >
        <ul>
          <List prop="Amarjeet Chaurasia" />
          <List prop="0987654321" />
          <List prop=" ajchaurasia1214@gmail.com" />
        </ul>
        <ul>
          <List prop="Instagram" />
          <List prop="Facebook" />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
