import React from "react";
import "./Cards.css";

function Cards(props) {
  const list = props.data;
  return (
    <div className="cards">
      {list.map(({ lnk, title, text, caption }) => (
        <div className="card">
          <div className="card-top">
            <img src={lnk} alt="" />
          </div>
          <div className="card-text">
            <h2>{title}</h2>
            <h4>{caption}</h4>
            <p className="card-text-scrollable">{text}</p>
          </div>
          <div className="card-bottom">
            <button>More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
