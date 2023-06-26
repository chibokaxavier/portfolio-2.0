import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: ["ManLikeXavy"],
    loop: true,
    delaySpeed: 6000,
  });
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="h-screen banner"
    >
      <Navbar />
      <div className="flex flex-col items-center mt-60 justify-center space-y-10 text-center">
        <motion.p
          initial={{
            x: 0,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 10 }}
          className="md:text-7xl text-5xl font-black"
        >
          {text}
        </motion.p>
        <p className="px-4  text-[20px] md:text-[33px] md:w-[600px]">
          I’m Emmanuel Chiboka, A Creative Frontend Web Developer{" "}
        </p>
      </div>
    </motion.div>
  );
};

export default Banner;
