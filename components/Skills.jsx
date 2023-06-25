import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from "@/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className=" pt-28 lg:pt-44 pb-16 px-4">
      <div className="flex flex-col justify-around ">
           <p className=" md:text-[8rem] text-[3.5rem] header pb-10 tracking-widest text-right   font-bold">
            SKILLS
          </p>
  
        <div className=" flex flex-col items-center justify-center">
          <div className="grid gap-8 w-full ">
            {skills.map((skill, i) => (
              <div key={skill.id} className="cursor-pointer hover:grayscale">
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
