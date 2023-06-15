import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: [
      "Hi, I’m Chiboka Emmanuel,  A Software Engineer.",
    ],
    loop: false,
    delaySpeed: 5000,
  });
  return (
    <div className="relative md:h-[100vh] h-[100vh]">

      <div className="flex items-center justify-center text-center">
        <motion.div className="flex flex-col md:flex-row  mt-36 items-center justify-between space-x-10 space-y-10 px-4">
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
            className="md:text-4xl text-3xl text-gray-200 font-semibold"
          >
            {text}{" "}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
