import React from "react";

const List = ({ prop }) => {
  return (
    <li style={{ marginBottom: 10, fontSize: 16, cursor: "pointer" }}>
      {prop}
    </li>
  );
};

export default List;
