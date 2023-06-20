import React from "react";

const Project = ({ Project }) => {
  return (
    <div className="pt-10"> 
          <p className="items-center flex justify-center text-xl">{Project.title}</p>
      <div className="flex lg:flex-row flex-col justify-between py-8 items-center">
      
        <img src={Project.img} alt="/" className="lg:w-[50%] h-[]" />
        <p className="text-sm hidden lg:block">{Project.desc}</p>
      </div>
    </div>
  );
};

export default Project;
