import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-6 md:w-[1140px] uppercase text-base">
      <div className="md:flex hidden  justify-between">
        <div className="flex space-x-6 items-center">
          <div>Home</div>
          <div>Portfolio</div>
          <div>About</div>
          <div></div>
        </div>
        <div className="flex  space-x-6 items-center">
          <div>Skills</div>
          <div>Services</div>
          <div> Contact</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
