import React, { Fragment } from "react";
import "./Home.css";
import NavigationBar from "../components/UI/NavigationBar";
import MainCanvas from "../components/UI/MainCanvas";

function Home() {
  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <h2>This is the main page</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
        <h2>TItle</h2>
      </MainCanvas>
    </Fragment>
  );
}

export default Home;
