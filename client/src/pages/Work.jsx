import React, { Fragment } from "react";
import MainCanvas from "../components/MainCanvas";
import NavigationBar from "../components/NavigationBar";
import Cards from "../components/Cards";

function Work() {
  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <h1>My career. So far.</h1>
        <h2>I love people</h2>
        <p>This is a collection of all the things I love</p>
        <Cards />
      </MainCanvas>
    </Fragment>
  );
}

export default Work;
