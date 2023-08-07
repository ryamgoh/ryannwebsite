import React from "react";
import "./Cards.css";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function Cards(props) {
  const list = props.data;
  return (
    <div className="cards">
      {list.map((item, index) => {
        const [isFront, setIsFront] = React.useState(true);
        return isFront ? (
          <CardFront key={index} data={item} trigger={setIsFront} />
        ) : (
          <CardBack key={index} data={item} trigger={setIsFront} />
        );
      })}
    </div>
  );
}

export default Cards;
