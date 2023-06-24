import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import MainCanvas from "../components/MainCanvas";
import Cards from "../components/Cards";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import "./Home.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  const workList = [
    {
      lnk: card1,
      title: "IMDA - Product Management Intern",
      caption: "May 2023 - Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae odit consectetur perspiciatis temporibus quo sit corrupti reiciendis quia. Quae in, esse delectus, quidem nisi voluptatem unde, blanditiis similique reiciendis eius nesciunt illo dolor voluptates repellat sit qui ut. Ipsam illum est id impedit rerum, deserunt placeat itaque dolorem quia, nostrum recusandae, eius aut amet. Corrupti quis blanditiis molestias eaque.",
    },
    {
      lnk: card2,
      title: "card2",
      caption: "May 2023 - Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae odit consectetur perspiciatis temporibus quo sit corrupti reiciendis quia. Quae in, esse delectus, quidem nisi voluptatem unde, blanditiis similique reiciendis eius nesciunt illo dolor voluptates repellat sit qui ut. Ipsam illum est id impedit rerum, deserunt placeat itaque dolorem quia, nostrum recusandae, eius aut amet. Corrupti quis blanditiis molestias eaque.",
    },
    {
      lnk: card3,
      title: "card3",
      caption: "May 2023 - Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae odit consectetur perspiciatis temporibus quo sit corrupti reiciendis quia. Quae in, esse delectus, quidem nisi voluptatem unde, blanditiis similique reiciendis eius nesciunt illo dolor voluptates repellat sit qui ut. Ipsam illum est id impedit rerum, deserunt placeat itaque dolorem quia, nostrum recusandae, eius aut amet. Corrupti quis blanditiis molestias eaque.",
    },
  ];

  const workList2 = [
    {
      lnk: card1,
      title: "card1",
      caption: "May 2023 - Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae odit consectetur perspiciatis temporibus quo sit corrupti reiciendis quia. Quae in, esse delectus, quidem nisi voluptatem unde, blanditiis similique reiciendis eius nesciunt illo dolor voluptates repellat sit qui ut. Ipsam illum est id impedit rerum, deserunt placeat itaque dolorem quia, nostrum recusandae, eius aut amet. Corrupti quis blanditiis molestias eaque.",
    },
    {
      lnk: card2,
      title: "card2",
      caption: "May 2023 - Aug 2023",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae odit consectetur perspiciatis temporibus quo sit corrupti reiciendis quia. Quae in, esse delectus, quidem nisi voluptatem unde, blanditiis similique reiciendis eius nesciunt illo dolor voluptates repellat sit qui ut. Ipsam illum est id impedit rerum, deserunt placeat itaque dolorem quia, nostrum recusandae, eius aut amet. Corrupti quis blanditiis molestias eaque.",
    },
  ];

  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <Intro />
        <h1 id="work">Work Experience</h1>
        <Cards data={workList}></Cards>
        <h1 id="about">About Me</h1>
        <AboutMe />
        <Cards data={workList2}></Cards>
      </MainCanvas>
    </Fragment>
  );
}

export default Home;
