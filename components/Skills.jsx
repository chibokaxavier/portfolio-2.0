import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skills from "@/data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className=" pt-28 lg:pt-28 pb-20">
      <div className="flex flex-col justify-around   items-center ">
        <div className="  uppercase flex flex-col space-y-2 pt-28 lg:pt-0  pb-10 lg:px-10 ">
          <p className="md:text-[32px] text-[26px]   tracking-widest text-center   font-bold">
            Skills
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 ">
          {skills.map((skill, i) => (
            <div key={skill.id} className="cursor-pointer hover:grayscale">
              <Skill skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
