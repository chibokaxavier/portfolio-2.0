import React from "react";

const Project = ({ Project }) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between py-8 items-center">
        <img src={Project.img} alt="/" className="lg:w-[50%]" />
        <p className="text-sm">{Project.desc}</p>
      </div>
    </div>
  );
};

export default Project;
