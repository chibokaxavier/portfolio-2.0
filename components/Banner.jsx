import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: ["Chiboka Emmanuel Chinemezu.", "a Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative md:h-[95vh] h-[100vh]">
      {/* <div className="absolute top-0 left-0 -z-50 h-[100vh] md:w-[1140px]  w-full">
        <Image
          src="https://images.pexels.com/photos/3885344/pexels-photo-3885344.jpeg?auto=compress&cs=tinysrgb&w=600"
          fill
          alt="dd"
          objectFit="cover"
          priority
        />
      </div> */}
      <div className="">
        <Navbar />
      </div>

      <div className="flex items-center justify-center mt-[200px] text-center">
            <motion.div
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
              className="flex flex-col  items-center justify-center space-y-10 px-4"
            >
              <p className="text-5xl font-bold capitalize">
                Unfold
              </p>
              <p className="text-lg">I’m Glenn Chapman Hoyer A Product Designer Based In San Francisco</p>
            </motion.div>
          
        
      </div>
    </div>
  );
};

export default Banner;
