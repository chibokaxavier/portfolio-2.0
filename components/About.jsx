import React, { useEffect } from "react";

const About = () => {
  return (
    <div className="h-screen">
      <div className=" flex flex-col lg:flex-row justify-around   items-center  ">
        <div className=" uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10 ">
          <p className="md:text-[32px] text-[26px]   tracking-widest text-center   font-bold">
            About Me
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4"
          />
        </div>
        <div className="md:w-[750px] h-fit lg:w-[600px] lg:mt-40 ">
          <p className="tracking-[1px] text-[18px] sm:text-[20px] md:text-[30px] lg:text-[28px] md:text-left text-center  md:text-lg px-5">
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
    </div>
  );
};

export default About;
