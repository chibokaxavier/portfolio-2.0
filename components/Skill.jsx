import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="w-fit h-fit rounded-lg py-4 border border-gray-500 flex space-x-5 items-center px-4">
      <img src={skill.img} className="h-8 bg-black" alt="" />
      <p className=" text-gray-500">{skill.name}</p>
    </div>
  );
};

export default Skill;
