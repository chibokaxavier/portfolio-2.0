import React, { useEffect } from "react";
import projects from "@/projectData";
import Project from "./Project";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-28">
      <div className="flex flex-col items-start">
        <p
          data-aos="fade-left"
          data-aos-offset="100"
          // data-aos-delay="0"
          data-aos-duration="500"
          className="md:text-[7rem] lg:text-[8rem] text-[3.5rem]  header pl-4 tracking-widest text-left font-bold"
        >
          PROJECTS
        </p>
        <div className="">
          {projects.map((project, i) => (
            <div
              data-aos="zoom-out"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="2000"
              className="my-10"
              key={i}
            >
              {" "}
              <Project Project={project} key={project.id} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
