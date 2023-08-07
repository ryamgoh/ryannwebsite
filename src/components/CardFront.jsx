import React from "react";
import "./CardFront.css";
import Card from "./Card";

function CardFront({ data, trigger }) {
  return (
    <Card
      onClick={(e) => {
        e.preventDefault();
        trigger(false);
      }}
    >
      <div className="card-top">
        <img src={data.lnk} alt="" />
      </div>
      <div className="card-text">
        <div className="card-text-title-card">
          <h2>{data.title}</h2>
          {/* <img src={titleimg} alt="" /> */}
        </div>
        <div className="card-text-caption-card">
          <h3>{data.position}</h3>
          <h4>{data.caption}</h4>
        </div>
        <div className="card-text-scrollable">
          {data.text.map((item) => {
            return <li className="card-text-scrollable-item">{item}</li>;
          })}
        </div>
      </div>
      {/* <div className="card-bottom">
        <button
          onClick={(e) => {
            e.preventDefault();
            trigger(false);
          }}
        >
          More
        </button>
      </div> */}
    </Card>
  );
}

export default CardFront;
