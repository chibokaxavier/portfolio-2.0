import React from "react";

const ContactMe = () => {
  return (
    <div className="pb-20 ">
      <div className=" flex flex-col">
        <div className=" items-center text-center pb-20  uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10 ">
          <p className="md:text-[32px] text-[26px]   tracking-widest text-center   font-bold">
            get in touch
          </p>
          <img
            src="https://technext.github.io/unfold/images/divider.png
"
            alt="/"
            className="pb-4 w-[100px]"
          />
        </div>

        <div className="flex">
          <div>
            <div className="pl-4 space-x-8 pb-8">
              <input
                type="text"
                className="bg-transparent border-b  py-2 pr-2 outline-none w-[300px] text-gray-300 capitalize"
                placeholder="NAME"
              />
              <input
                type="email"
                className="bg-transparent border-b  py-2 pr-2 outline-none w-[300px] text-gray-300 capitalize"
                placeholder="EMAIL"
              />
            </div>
            <div className="pl-4">
              <textarea
                className="bg-transparent border-b  py-2 pr-2 outline-none w-[640px] text-gray-300 capitalize"
                placeholder="WRITE YOUR MESSAGE"
                cols="50"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className="pt-10 pl-4">
        <button className="uppercase rounded-full p-4 bg-transparent text-white outline-1 border">
          send message
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
