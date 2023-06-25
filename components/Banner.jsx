import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: [
      "ManLikeXavy",
    ],
    loop: true,
    delaySpeed: 6000,
  });
  return (
    <div className="h-screen banner">
      <Navbar />
      <div className="flex flex-col items-center mt-60 justify-center space-y-10 text-center">
        <p className="md:text-7xl text-5xl font-black">{text}</p>
        <p className="px-4  text-[20px] md:text-[33px] md:w-[600px]">
          I’m Emmanuel Chiboka, A Creative Frontend Web Developer </p>
      </div>
    </div>
  );
};

export default Banner;
