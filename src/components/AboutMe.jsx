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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad
        iste obcaecati vero dolorum nulla totam voluptas nisi velit deleniti
        fuga aspernatur repudiandae pariatur unde ullam nemo minima voluptatem
        impedit dolore! Odio quibusdam quidem delectus soluta similique? Unde
        consequatur consequuntur impedit tempore expedita? Blanditiis, eaque
        corporis facere laborum nulla expedita sapiente aut repellat vel maxime
        officiis adipisci pariatur sed reiciendis!
      </p>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ad
        iste obcaecati vero dolorum nulla totam voluptas nisi velit deleniti
        fuga aspernatur repudiandae pariatur unde ullam nemo minima voluptatem
        impedit dolore! Odio quibusdam quidem delectus soluta similique? Unde
        consequatur consequuntur impedit tempore expedita? Blanditiis, eaque
        corporis facere laborum nulla expedita sapiente aut repellat vel maxime
        officiis adipisci pariatur sed reiciendis!
      </p>
    </div>
  );
}

export default AboutMe;
