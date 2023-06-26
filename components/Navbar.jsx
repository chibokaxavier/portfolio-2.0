import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`'uppercase font-bold text-base py-8 sticky top-0 z-20'`}>
      <div className="md:flex hidden  justify-between ">
        <motion.div
           initial={{
            y: 1000,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex items-center px-4"
        >
          <Link href="/">
            <div>
              {" "}
              <img src="../images/Xavy Logo.png" alt="" className="w-[100px]" />
            </div>
          </Link>
        </motion.div>
        <motion.div
           initial={{
            y: 1000,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex px-4 space-x-6 items-center"
        >
          <Link href="#projects">
            <div>Portfolio</div>
          </Link>
          <Link href="#about">
            {" "}
            <div>About</div>{" "}
          </Link>
          <Link href="#skills">
            <div>Skills</div>
          </Link>
          <Link href="#services">
            {" "}
            <div>Services</div>
          </Link>
          <Link href="#contact">
            {" "}
            <div> Contact</div>
          </Link>
        </motion.div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 flex flex-col justify-between w-[85%]  h-[100%] ease-in duration-300  z-99 bg-white"
            : "fixed left-[-200%] top-20 flex flex-col justify-between w-full  h-[70%] ease-in duration-300  z-99 "
        }
      >
        <ul className="w-full p-4  text-black uppercase ">
          <Link href="/" onClick={handleNav}>
            <div className="py-4 border-b-2">Home</div>
          </Link>
          <Link href="#projects" onClick={handleNav}>
            <div className="py-4 border-b-2">Portfolio</div>
          </Link>
          <Link href="#about" onClick={handleNav}>
            {" "}
            <div className="py-4 border-b-2">About</div>{" "}
          </Link>
          <Link href="#skills" onClick={handleNav}>
            <div className="py-4 border-b-2">Skills</div>
          </Link>
          <Link href="#services" onClick={handleNav}>
            {" "}
            <div className="py-4 border-b-2"> Services</div>
          </Link>
          <Link href="#contact" onClick={handleNav}>
            {" "}
            <div className="py-4 border-b-2"> Contact</div>
          </Link>
        </ul>
      </div>

      <div className="flex items-center justify-between px-6 md:hidden">
        <motion.div
          initial={{
            y: 1000,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 3 }}
          className="cursor-pointer"
        >
          <Link href="/">
            <div>
              {" "}
              <img src="../images/Xavy Logo.png" alt="" className="w-[80px]" />
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            y: 1000,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 3 }}
          onClick={handleNav}
          className="cursor-pointer"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
