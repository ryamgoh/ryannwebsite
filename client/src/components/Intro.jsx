import React from "react";
import "./Intro.css";
import profile from "../assets/Picture.jpg";

function Intro() {
  return (
    <div className="intro-card">
      <div className="intro-pic-card">
        <img src={profile} alt="" className="intro-pic" />
      </div>
      <div className="intro-right">
        <div className="intro-right-top">
          <div className="intro-name">Ryann Goh</div>
          <div className="intro-salutation">Gym/Bro</div>
        </div>
        <div className="intro-right-bottom">
          Sophomore at National University of Singapore (NUS) studying Computer
          Science. Interested in Artificial Intelligence, Product Management and
          Entrepreneurship
        </div>
      </div>
    </div>
  );
}

export default Intro;
