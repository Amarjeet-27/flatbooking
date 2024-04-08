import React from "react";

const Footer = () => {
  return (
    <div className="" style={{ background: "#003b72" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Contact Here</h1>
      <div
        style={{
          display: "flex",
          paddingLeft: 80,
          paddingRight: 80,
          justifyContent: "space-around",
        }}
      >
        <ul style={{ color: "white", listStyle: "none" }}>
          <li style={{ marginBottom: 10, fontSize: 20 }}>Amarjeet</li>
          <li style={{ marginBottom: 10, fontSize: 20 }}>0987654321</li>
          <li style={{ marginBottom: 10, fontSize: 20 }}>
            ajchaurasia1214@gmail.com
          </li>
        </ul>
        <ul style={{ color: "white", listStyle: "none" }}>
          <li style={{ marginBottom: 10, fontSize: 20 }}>Instagram</li>
          <li style={{ marginBottom: 10, fontSize: 20 }}>Facebook</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
