import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="uppercase font-bold text-base py-8 sticky top-0 z-20">
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
          className="flex items-center px-4"
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
          className="flex px-4 space-x-6 items-center"
        >
          <div>Portfolio</div>
          <div>About</div>
          <div>Skills</div>
          <div>Services</div>
          <div> Contact</div>
        </motion.div>
      </div>

      <div className="flex justify-between px-6 md:hidden">
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
