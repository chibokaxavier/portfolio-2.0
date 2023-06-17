import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className=" group relative flex cursor-pointer">
      <img
        src={skill.img}
        className="h-24 w-24 md:w-28 md:h-28 rounded-full border border-gray-500  object-cover  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="opacity-0 absolute group-hover:opacity-80  transition duration-300 group-hover:bg-white h-24 w-24 rounded-full z-0 xl:w-32 xl:h-32 md:w-28 md:h-28 ">
        <div className="h-full flex items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.percent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
