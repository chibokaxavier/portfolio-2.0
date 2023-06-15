import React from "react";

const Navbar = () => {
  return (
    <nav className=" py-6 md:w-[1140px] sm:px-6 uppercase text-base text-gray-400  sticky top-0 z-20 ">
      <div className="md:flex hidden  justify-between ">
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

      <div className="flex justify-between px-6 md:hidden">
        <div className="cursor-pointer">
            my logo
        </div>
        <p className="cursor-pointer">Menu</p>
      </div>
    </nav>
  );
};

export default Navbar;
