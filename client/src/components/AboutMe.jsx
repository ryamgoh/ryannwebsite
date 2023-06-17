import React from "react";
import "./AboutMe.css";
import NUS from "../assets/NUSCrest.png";
import VJC from "../assets/VJCCrest.png";

function AboutMe() {
  return (
    <div className="about-me-main">
      <p>Born in the little island of Singpaore on 2001.</p>
      <p>Born in the little island of Singpaore on 2001.</p>
      <p>Born in the little island of Singpaore on 2001.</p>
      <p>Born in the little island of Singpaore on 2001.</p>
      {/* <h1>Education</h1> */}
      <div className="about-me-two-col">
        <div className="about-me-title">
          <h2>National University of Singapore (NUS)</h2>
          <div>
            <img src={NUS} alt="" />
          </div>
        </div>
      </div>
      <div className="about-me-two-col">
        <h3>
          School of Computing (Computer Science) and Second Major in Business;
          Interested in Solutions Architect, Technical Consultancy, Artificial
          Intelligence; Relevant Coursework: Data Structures and Algorithms;
          Object-Oriented Programming (OOP)
        </h3>
        <h4>Aug 2023 - 2026</h4>
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
