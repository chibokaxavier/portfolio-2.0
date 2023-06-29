import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
    
      className="py-10"
    >
      <div className="flex justify-center">
        <SocialIcon
          url="https://www.instagram.com/manlikexavy/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/manlikexavy"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wa.me/+2348121826916"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/chibokaxavier"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
    </div>
  );
};

export default Footer;
