import React from "react";
import Card from "./Card";
import "./CardBack.css";

function CardBack({ data, trigger }) {
  return (
    <Card
      onClick={(e) => {
        e.preventDefault();
        trigger(true);
      }}
    >
      <img src={data.lnk} className="card-back-img" />
    </Card>
  );
}

export default CardBack;
