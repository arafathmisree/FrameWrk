import React from "react";

const Card = (props) => (
  <div style={{ borderWidth: "3px", color: "black", width: "30%" }}>
    {props.children}
  </div>
);
export default Card;
