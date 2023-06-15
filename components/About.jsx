import React, { useEffect } from "react";

const About = () => {
 
  return (
    <div className="h-screen pt-10">
      <div className=" flex flex-col md:flex-row mt-10 justify-between items-center ">
        <div className=" uppercase flex flex-col justify-between space-y-4  ">
          <p className="md:text-[32px] text-[25px]  tracking-widest text-center font-bold">
            About Me
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4"
          />
        </div>
        <div className="md:w-[600px]  px-10 md:px-0">
          <p className="tracking-[1px] text-[13px] md:text-left text-center md:mt-32  md:text-lg ">
            Hey there, I am Chiboka Emmanuel, an Undergraduate of the University
            of Nigeria, Nsukka. I am a passionate performance-driven Frontend
            Developer who has knowledge on HTML CSS, Javascript and Typescript.
            My personal strengths Includes
            resilience,punctuality,problem-solving,and the ability to work under
            pressure. I welcome positively impactful opportunities where I can
            explore technology and business in a progress-oriented organization
            that welcomes and nurtures talent.I have an excellent reputation for
            my integrity, productivity and leadership ability. I am also a very
            fast learner, and i always strive to be and give the best in all i
            do. I also have great Leadership skills, which has helped build my
            character and shape me into the young man that i am today, i am big
            on team work , because i believe that &quot;Two Heads are better than
            one&quot; and i also believe that &quot;No Man is an Island&quot; meaning that no
            matter how good or established a person is , he or she still needs
            people around them, i think this is enough of me for now :) Thank
            You.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
