import React, { Fragment } from "react";
import NavigationBar from "../components/NavigationBar";
import MainCanvas from "../components/MainCanvas";
import Cards from "../components/Cards";
import Intro from "../components/Intro";
import "./Home.css";

function Home() {
  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <Intro />
        <Cards />
      </MainCanvas>
    </Fragment>
  );
}

export default Home;
