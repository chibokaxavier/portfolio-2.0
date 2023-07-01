import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Project = ({ Project }) => {
  const router = useRouter();
  return (
    <div className="pt-10 w-[90%] mx-auto items-center text-center ">
      <p className="items-center font-bold flex uppercase text-gray-500 justify-center text-xl">
        {Project.title}
      </p>
      <Link href={Project.link} target="_blank">
        <div className="flex space-y-6 lg:flex-row flex-col lg:space-x-10 justify-between py-8 items-center">
          <img
            src={Project.img}
            alt="/"
            className="lg:w-[50%]  cursor-pointer hover:grayscale transition duration-300 ease-in-out"
          />

          <div className="text-sm flex flex-col items-center text-center space-y-3">
            <p className="">{Project.desc}</p>
            <div className="flex space-x-2">
              {Project.technologies.map((tech, i) => (
                <div className="" key={i}>
                  <img src={tech} className="w-5 h-5" alt="" />
                </div>
              ))}
            </div>

            <div className="p-2 w-fit transition duration-300 ease-in-out hover:bg-white hover:text-black text-white uppercase border rounded-3xl px-8">
              Live Site
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Project;
