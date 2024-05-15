import React from "react";

import Bounded from "../components/Bounded";
import ContentList from "../components/ContentList";
import { ProjectData } from "../db/db";

const Projects = () => {
  document.title = "Lipu Swain | Projects"

  return (
    <Bounded>
      <h1 className="mb-8 md:text-9xl text-7xl font-extrabold">Projects</h1>
      <div className="prose prose-xl prose-invert mb-10">
        The tech projects I've created
      </div>
      <ContentList data={ProjectData} readMore={"View Project"} />
    </Bounded>
  );;
};

export default Projects;
