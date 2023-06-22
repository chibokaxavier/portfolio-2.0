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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique velit aut harum inventore perferendis totam tempora
                hic quae excepturi, magnam repellat tenetur aperiam officia et
                dolorum? Tempore nulla eum tenetur.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique velit aut harum inventore perferendis totam tempora
                hic quae excepturi, magnam repellat tenetur aperiam officia et
                dolorum? Tempore nulla eum tenetur.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique velit aut harum inventore perferendis totam tempora
                hic quae excepturi, magnam repellat tenetur aperiam officia et
                dolorum? Tempore nulla eum tenetur.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique velit aut harum inventore perferendis totam tempora
                hic quae excepturi, magnam repellat tenetur aperiam officia et
                dolorum? Tempore nulla eum tenetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
