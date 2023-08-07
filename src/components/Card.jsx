import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Card;
