import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import MainCanvas from "../components/MainCanvas";
import Cards from "../components/Cards";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import IMDA from "../assets/IMDA.jpg";
import HustleMuscle from "../assets/HustleMuscle.png";
import YET from "../assets/YET.png";
import TeamE from "../assets/Team E.jpg";
import AGCS from "../assets/AGCS.jpg";
import Pact from "../assets/PactPage.png";
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
      lnk: IMDA,
      title: "IMDA",
      position: "Product Management Intern",
      caption: "May 2023 - Aug 2023",
      text: [
        "Design and create a digital, mobile first, Industry Digital Plan (IDP) that becomes the blueprint for SMEs in specific sectors to digitise their business.",
        "Apply design thinking processes to design IDPs for Retail and Legal Sectors, including identifying user personas, ethnographic research, design workshops, ideation sessions, etc.",
        "Spearhead meetings and collaborate with team members and external stakeholders, including SMEs and partnering agencies, to build common understanding, project plans, and gain consensus on the team's plans and actions.",
        "Highly involved with UI/UX team to streamline the next generation of IDP design.",
      ],
    },
    {
      lnk: TeamE,
      title: "Team E",
      position: "Founding Chairperson",
      caption: "2022 - Present",
      text: [
        "Pitched to several boards and successful pulled in a $3k grant for the project.",
        "Engaged over a 100 student volunteers, 13 HDB blocks, and garnered over 8 tonnes of E-waste.",
        "Aiming to spearhead the organisation into becoming a Non-Governmental Organisation (NGO)",
        "Coordinated an 8-person team to facilitate a series of E-waste collection drives around Keat Hong Community Centre.",
      ],
    },
    {
      lnk: YET,
      title: "Mession Enterprise",
      position: "Entrepreneurship Trainee",
      caption: "May 2023 - Aug 2023",
      text: [
        "Young Entrepreneurship Traineeship Programme (YET23)",
        "Exposed to diverse viewpoints and a range of approaches to business and entrepreneurship, enhancing comprehension and amplifying prospects for success.",
        "Benefited from mentorship and networking opportunities with high-profile individuals.",
        "Engaged in regular pitching sessions and round tables, honing communication and collaboration skills within a team setting.",
      ],
    },
    {
      lnk: AGCS,
      title: "Allen & Gledhill LLP",
      position: "Corporate Secretarial Assistant",
      caption: "Mar 2022 - Jul 2022",
      text: [
        "Provided valuable support to lawyers in managing a diverse portfolio of over 100 locally incorporated and foreign corporate clients.",
        "Ensured adherence to applicable statutory and regulatory obligations (ACRA, IRAS, etc.).",
        "Demonstrated proficiency in drafting and issuing company directorial resolutions, overseeing regulatory filings, and maintaining minute books.",
        "Possessed advanced skills in Microsoft Word and Excel.",
      ],
    },
  ];

  const workList2 = [
    {
      lnk: Pact,
      title: "Pact",
      position: "Software Developer",
      caption: "Jul 2023 - Present",
      text: [
        "Pact is a social app that combines the best social media elements and infusing it into goals making",
        "Powered by React Native, Expo, Firebase, and Google OAuth, this project aims to deliver an extraordinary goal setting experience.",
        "Pursuing VC programmes like Venture Initiative Programme (VIP) and Lee Kuan Yew Global Business Plan Competition (LKYGBPC).",
      ],
    },
    {
      lnk: HustleMuscle,
      title: "HustleMuscle",
      position: "Front End Developer",
      caption: "Apr 2022 - Present",
      text: [
        "Artemis Award - 2023",
        "HustleMuscle is a fitness app that revolutionizes your fitness journey with use of 3D avatars.",
        "Powered by FERN stack (Firebase, Express, React, Node.js), Google OAuth & Google Fit API, this project aims to deliver an extraordinary workout experience.",
        "The UI is sleek and designed to captivate all users, drawing inspiration from Apple Fitness.",
        "We are exploring the potential of gen. AI to provide customized workout prescriptions for our users. Join us and embark on a fitness journey like no other.",
      ],
    },
  ];

  return (
    <Fragment>
      <NavigationBar />
      <MainCanvas>
        <Intro />
        <h1 id="about">About Me</h1>
        <AboutMe />
        <h1 id="work">Work Experience</h1>
        <Cards data={workList}></Cards>
        <h1 id="projects">Projects</h1>
        <Cards data={workList2}></Cards>
      </MainCanvas>
    </Fragment>
  );
}

export default Home;
