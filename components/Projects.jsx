import React from "react";
import projects from "@/projectData";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="pt-28 px-8">
      <div className="flex flex-col items-center">
        <div className="text-center items-center uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10 ">
          <p className="md:text-[32px] text-[26px]   tracking-widest text-center   font-bold">
            My Projects
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4 w-[100px]"
          />
        </div>

        {projects.map((project) => (
          <Project Project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
