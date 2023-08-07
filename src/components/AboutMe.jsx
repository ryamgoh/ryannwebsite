import React from "react";
import "./AboutMe.css";
import NUS from "../assets/NUSCrest.png";
import VJC from "../assets/VJCCrest.png";
import Tembu from "../assets/TembuCrest.jpg";

function AboutMe() {
  return (
    <div className="about-me-main">
      <h1>Values</h1>
      <p>
        A determined and resilient young leader possessing strong analytical and
        problem-solving capabilities. Committed to seeking out new opportunities
        for knowledge acquisition and constantly enhancing personal skills.
        Passion for learning and actively contributes to the betterment of the
        community.
      </p>
      <h1>Education</h1>
      {/* School 1 */}
      <div className="about-me-two-col">
        <div className="about-me-title">
          <h2>National University of Singapore (NUS)</h2>
          <img src={NUS} alt="" />
        </div>
      </div>
      <div className="about-me-two-col">
        <h3>School of Computing (Computer Science)</h3>
        <h4>Aug 2022 - 2026</h4>
      </div>
      <p>
        Interested in Solutions Architect, Technical Consultancy, Artificial
        Intelligence; Relevant Coursework: Data Structures and Algorithms;
        Object-Oriented Programming (OOP)
      </p>
      <p>Case Competitions: AY22/23 | NES Ground Zero 2023 - Team Terrace</p>
      <p>
        Co-Curricular Activities AY22/23 | NUS SoC BASH Marketing Committee
        AY22/23 | NUS Ambassador (Open House)
      </p>
      {/* School 2 */}
      <div className="about-me-two-col">
        <div className="about-me-title">
          <h2>Tembusu College</h2>
          <img src={Tembu} alt="" />
        </div>
      </div>
      <div className="about-me-two-col">
        <h3>UTown College Programme (UTCP)</h3>
        <h4>2022 - 2024</h4>
      </div>
      <p>
        UTown Programme (Tembusu College): UTW1001D At the Edges of the Law;
      </p>
      <p>
        Tembusu GreenT Chairperson (Responsible for Tembusu Electricity
        Challenge); AY22/23 | GreenT Co-President AY22/23 | Reversi (ICG Gold)
        AY22/23 | IG^2 Modules taken: UTW1001D - On the Edges of the Law
        UTC1102G - Images
      </p>
      <p>Tembusu Flag Committee; ICG Reversi (Gold); IG^2 Member</p>
      {/* School 3 */}
      <div className="about-me-two-col">
        <div className="about-me-title">
          <h2>Victoria Junior College</h2>
          <img src={VJC} alt="" />
        </div>
      </div>
      <div className="about-me-two-col">
        <h3>GCE A-Levels, 5 Distinctions (H3 Physics)</h3>
        <h4>2018 - 2019</h4>
      </div>
      <p>
        VJDance and StudioV (Film Club); Coordinated over 12 performances and
        concerts.
      </p>
      <p>
        Participated in Shanghai-Suzhou Overseas Exchange; Exposure to multiple
        cultures and perspectives, visited prominent locations such as Alibaba,
        Suzhou Industrial Park and Fudan University.
      </p>
      <h1>My Socials</h1>
    </div>
  );
}

export default AboutMe;
