import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="h-screen banner">
      <Navbar />
      <div className="flex flex-col items-center mt-60 justify-center text-center">
        <p className="text-7xl font-black">Unfold</p>
        <p className="px-4  text-[20px] md:text-[33px] md:w-[600px]">
          I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco
        </p>
      </div>
    </div>
  );
};

export default Banner;
