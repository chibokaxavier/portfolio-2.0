import React, { useEffect } from "react";

const About = () => {
  return (
    <div className="">
      <div className=" flex flex-col justify-around   items-center  ">
        <div className="items-center text-center  uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10 ">
          <p className="md:text-[32px] text-[26px]   tracking-widest text-center   font-bold">
            About Me
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4 w-[100px]"
          />
        </div>
        <div className=" flex lg:flex-row flex-col justify-between space-x-5 lg:mt-40 ">
          <div className="relative">
            <div className="  z-50 about-img  relative  lg:w-[500px] h-[500px]"></div>
            <div className="absolute lg:bottom-0 top-[330px] right-3">
              <img
                className="z-10"
                src="https://technext.github.io/unfold/images/dotted_light.png"
                alt=""
              />
            </div>
          </div>

          <div className="md:w-[700px] lg:w-[500px] md:pt-20 pt-20">
            <p className="tracking-[1px] text-[18px] sm:text-[20px] md:text-[33px] md:text-center lg:text-[28px] lg:text-left text-center  md:text-lg px-5">
              Hey there, I am Chiboka Emmanuel, an Undergraduate of the
              University of Nigeria, Nsukka. I am a passionate
              performance-driven Frontend Developer who has knowledge on HTML
              CSS, Javascript and Typescript. My personal strengths Includes
              resilience,punctuality,problem-solving,and the ability to work
              under pressure. I am also a very fast learner, and i always strive
              to be and give the best in all i do. I also have great Leadership
              skills, which has helped build my character and shape me into the
              young man that i am today, i think this is enough of me for now :)
              Thank You.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <button className="rounded-full p-4 bg-transparent text-white outline-1 border">
            DOWNLOAD MY RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
