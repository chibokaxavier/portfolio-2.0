import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("mainResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mainResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className=" flex flex-col justify-around">
      <p
        data-aos="fade-right"
        data-aos-offset="200"
        // data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        className="md:text-[8rem] text-[3.5rem] header  tracking-widest text-right   font-bold"
      >
        ABOUT
      </p>
      <div className=" flex justify-center items-center ">
        {/* <div
          className="relative"
          data-aos="fade-top"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="  z-50 about-img  relative min-w-[400px] md:min-w-[600px]  lg:w-[500px] h-[500px]"></div>
          <div className="absolute lg:bottom-0 top-[330px] right-3">
            <img
              className="z-10"
              src="https://technext.github.io/unfold/images/dotted_light.png"
              alt=""
            />
          </div>
        </div> */}

        <div className="md:w-[700px] lg:w-[700px] md:pt-20 pt-20 flex justify-center items-center">
          <p
            data-aos="fade-top"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="tracking-[1px] text-[18px] sm:text-[20px] md:text-[33px] md:text-center lg:text-[28px] lg:text-center text-center  md:text-lg px-5"
          >
            Hey there, I am Chiboka Emmanuel, an Undergraduate of the University
            of Nigeria, Nsukka. I am a passionate performance-driven Frontend
            Developer who has knowledge on HTML CSS, Javascript and Typescript.
            My personal strengths Includes
            resilience,punctuality,problem-solving,and the ability to work under
            pressure. I am also a very fast learner, and i always strive to be
            and give the best in all i do. I also have great Leadership skills,
            which has helped build my character and shape me into the young man
            that i am today, i think this is enough of me for now :) Thank You.
          </p>
        </div>
      </div>
      <div className="pt-10  flex justify-center items-center">
        <button
          onClick={onButtonClick}
          className="rounded-full p-4 bg-transparent text-white outline-1 border"
        >
          DOWNLOAD MY RESUME
        </button>
      </div>
    </div>
  );
};

export default About;
