import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  const [text, setText] = useTypewriter({
    words: ["Hi, I’m Chiboka Emmanuel  A Software Engineer.","I offer engineering services such as FrontEnd Web Development & Web Design."],
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

      <div className="flex items-center justify-center mt-[100px] text-center">
            <motion.div
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
              transition={{ duration: 1.5 }}
              className="flex flex-col md:flex-row   items-center justify-between space-x-10 space-y-10 px-4"
            >
             <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className="w-[200px] h-[250px] md:w-[400px] md:h-[500px] rounded-lg"/>
              <p className="text-lg italic text-gray-200 font-semibold">{text}  </p>
            </motion.div>
          
        
      </div>
    </div>
  );
};

export default Banner;
