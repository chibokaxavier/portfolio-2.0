import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" uppercase font-bold text-base sticky top-0 z-20 ">
      <div className="md:flex hidden  justify-between ">
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
          className="flex items-center"
        >
          <div>My Logo</div>
        </motion.div>
        <motion.div
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
          className="flex  space-x-6 items-center"
        >
          <div>Portfolio</div>
          <div>About</div>
          <div>Skills</div>
          <div>Services</div>
          <div> Contact</div>
        </motion.div>
      </div>

      <div className="flex justify-between  md:hidden">
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
          className="cursor-pointer"
        >
          my logo
        </motion.div>
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
          className="cursor-pointer"
        >
          Menu
        </motion.p>
      </div>
    </nav>
  );
};

export default Navbar;
