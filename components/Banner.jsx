import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: ["Chiboka Emmanuel .C."],
    loop: false,
    delaySpeed: 5000,
  });
  return (
    <div className="relative md:h-[100vh] h-screen">
      <div className="flex items-center justify-center text-center">
        <motion.div className="flex flex-col md:flex-row  items-center justify-between">
          <motion.img
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[300px] h-[450px] md:w-[400px] md:h-[500px] rounded-lg"
          />
          <motion.p
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-col space-y-10 text-gray-200"
          >
            
            <span className=" text-2xl md:text-5xl uppercase font-bold">{text}</span>
            <span className="text-xl"> A Creative Freelancer & Software Developer</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
