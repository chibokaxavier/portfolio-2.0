import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from "@/data";
import Skill from "./Skill";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" pt-28 lg:pt-60 pb-16 px-4">
      <div className="flex flex-col justify-around ">
        <p
          data-aos="fade-left"
          data-aos-offset="100"
          // data-aos-delay="0"
          data-aos-duration="500"
          className=" md:text-[8rem] text-[3.5rem] header pb-10 tracking-widest text-right   font-bold"
        >
          SKILLS
        </p>

        <div className=" flex flex-col items-center justify-center">
          <div className="grid gap-8 w-full ">
            {skills.map((skill, i) => (
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                key={skill.id}
                className="cursor-pointer hover:grayscale"
              >
                <Skill skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
