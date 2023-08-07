import React from "react";
import "./Intro.css";
import profile from "../assets/Picture.jpg";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-start",
            gap: "5px",
          }}
        >
          <a href="https://www.github.com/ryamgoh" target="_blank">
            <img
              src={GitHub}
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ryann-goh/" target="_blank">
            <img
              src={LinkedIn}
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
