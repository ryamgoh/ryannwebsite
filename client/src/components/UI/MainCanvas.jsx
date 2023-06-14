import React from "react";
import "./MainCanvas.css";

function MainCanvas(props) {
  return <div className="main-canvas">{props.children}</div>;
}

export default MainCanvas;
