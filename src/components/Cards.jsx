import React from "react";
import "./Cards.css";

function Cards(props) {
  const list = props.data;
  return (
    <div className="cards">
      {list.map(({ lnk, title, titleimg, position, text, caption }) => (
        <div className="card">
          <div className="card-top">
            <img src={lnk} alt="" />
          </div>
          <div className="card-text">
            <div className="card-text-title-card">
              <h2>{title}</h2>
              {/* <img src={titleimg} alt="" /> */}
            </div>
            <div className="card-text-caption-card">
              <h3>{position}</h3>
              <h4>{caption}</h4>
            </div>
            <div className="card-text-scrollable">
              {text.map((listitem) => {
                return (
                  <li className="card-text-scrollable-item">{listitem}</li>
                );
              })}
            </div>
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
