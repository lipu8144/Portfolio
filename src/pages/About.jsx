import React from "react";
import Biography from "../components/Biography";
import TechList from "../components/TechList";
import Experience from "../components/Experience";

const About = () => {
  document.title = "Lipu Swain | About"
  return <div className="">
    <Biography />
    <TechList />
    <Experience />
  </div>;
};

export default About;
