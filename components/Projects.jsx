import React from "react";
import projects from "@/projectData";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="pt-28">
      <div className="flex flex-col items-center">
           {/* <p className="md:text-[8rem] text-[4.5rem]  header   tracking-widest text-left pl-10 font-bold">
            My Projects
          </p> */}
        <div className="">
          {projects.map((project) => (
            <Project Project={project} key={project.id} className="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
