import React from "react";
import Chat from "./Chat";
import Percentage from "./Percentage";
import Contact from "./Contact";
import LineChart from "./LineChart";

const Services = () => {
  return (
    <div className=" lg:h-[100vh] h-[180vh] pt-28 px-8">
      <div className="flex flex-col ">
        <p className="font-bold md:text-[32px] text-[28px]  flex justify-center items-center ">
          My Services
        </p>
        <div className="grid md:grid-cols-2 ">
          <div className=" ">
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
          <div className="  px-4 mt-10 flex flex-col justify-center items-center">
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
          <div className="  px-4 mt-10 hover:shadow-2xl ">
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
          <div className="  px-4 mt-10">
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
