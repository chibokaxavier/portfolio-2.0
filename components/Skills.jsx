import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from "@/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className=" pt-28 lg:pt-44 pb-20  ">
      <div className="flex flex-col justify-around  ">
           <p className=" md:text-[8rem] text-[4.5rem]  header   tracking-widest text-right   font-bold">
            Skills
          </p>
  
        <div className=" flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20 ">
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
