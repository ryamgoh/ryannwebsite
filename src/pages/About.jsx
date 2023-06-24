import React, { Fragment } from "react";
import MainCanvas from "../components/MainCanvas";
// import "./Home.css";
import NavigationBar from "../components/NavigationBar";

function About() {
  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <h2>Hello this is the About Page</h2>
      </MainCanvas>
    </Fragment>
  );
}

export default About;
