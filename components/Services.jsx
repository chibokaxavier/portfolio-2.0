import React from "react";
import Chat from "./Chat";
import Percentage from "./Percentage";
import Contact from "./Contact";
import LineChart from "./LineChart";

const Services = () => {
  return (
    <div className=" lg:h-[100vh] pt-28  px-4">
      <div className="flex flex-col  items-start ">
        <div className="text-left items-start uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10  ">
          <p className="md:text-[8rem] text-[3.5rem]  header tracking-widest text-left   font-bold">
            Services
          </p>
        </div>
        <div className="grid lg:grid-cols-2 text-center items-center lg:text-left ">
          <div className=" px-4 mt-10 flex flex-col text-center justify-center items-center ">
            <div className="flex flex-col justify-center items-center ">
              <Chat />
              <p className="text-[32px]">
                Web <br /> Design
              </p>
              <p>
                I specialize in creating tailor-made web designs that align with
                your unique brand identity and business goals. I work closely
                with you to understand your vision and develop a visually
                stunning website that sets you apart from the competition.
              </p>
            </div>
          </div>
          <div className="  px-4 mt-10 flex flex-col text-center justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Percentage />
              <p className="text-[32px]">
                Web <br /> Development
              </p>
              <p>
                I offer full-stack website development services, creating
                customized and scalable websites from scratch. I handle
                everything from conceptualization and design to frontend and
                backend development, ensuring a seamless and efficient web
                presence for your business.
              </p>
            </div>
          </div>
          <div className="   px-4 mt-10 flex flex-col text-center justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <Contact />
              <p className="text-[32px]">
                User <br /> Interface / Design
              </p>
              <p>
                I pay meticulous attention to visual details, ensuring that your
                website reflects your brand identity. From selecting appropriate
                colors, fonts, and imagery to designing consistent and
                aesthetically pleasing user interfaces, I create a cohesive and
                visually appealing design that resonates with your target
                audience.
              </p>
            </div>
          </div>
          <div className=" px-4 mt-10 flex flex-col text-center justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <LineChart />
              <p className="text-[32px]">
                User <br /> Experience
              </p>
              <p>
                I focus on creating intuitive and engaging user experiences by
                carefully crafting the navigation, information architecture, and
                interactions. By considering user needs and behavior, I create
                designs that are easy to navigate and effectively communicate
                your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
