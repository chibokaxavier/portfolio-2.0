import React, { useEffect } from "react";

const About = () => {
  return (
    <div className=" flex flex-col justify-around">
      <p className="md:text-[8rem] text-[3.5rem] header  tracking-widest text-right   font-bold">
        ABOUT
      </p>
      <div className=" flex lg:flex-row flex-col justify-between space-x-5 items-center ">
        <div className="relative">
          <div className="  z-50 about-img  relative min-w-[400px] md:min-w-[600px]  lg:w-[500px] h-[500px]"></div>
          <div className="absolute lg:bottom-0 top-[330px] right-3">
            <img
              className="z-10"
              src="https://technext.github.io/unfold/images/dotted_light.png"
              alt=""
            />
          </div>
        </div>

        <div className="md:w-[700px] lg:w-[500px] md:pt-20 pt-20 flex justify-center items-center">
          <p className="tracking-[1px] text-[18px] sm:text-[20px] md:text-[33px] md:text-center lg:text-[28px] lg:text-left text-center  md:text-lg px-5">
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
        <button className="rounded-full p-4 bg-transparent text-white outline-1 border">
          DOWNLOAD MY RESUME
        </button>
      </div>
    </div>
  );
};

export default About;
