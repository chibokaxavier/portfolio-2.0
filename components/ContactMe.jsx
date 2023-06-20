import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { mailto } from "mailto-link";

const ContactMe = () => {
  const email = "chibokaxavier@gmail.com";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:chibokaxavier@gmail.com?subject='b'&body=Hi Emmanuel, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
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
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex lg:space-x-20">
            <div>
              <div className="pl-4 lg:space-x-8 pb-8 relative">
                <input
                  {...register("name")}
                  type="text"
                  className="bg-transparent border-b text-sm md:text-xl lg:text-2xl py-2 pr-2 lg:mb-0 mb-16 outline-none  w-[85vw] lg:w-[300px] text-gray-300 capitalize"
                  placeholder="NAME"
                />
                <input
                  {...register("email")}
                  type="email"
                  className="bg-transparent border-b text-sm md:text-xl lg:text-2xl py-2 pr-2 outline-none lg:mb-0 mb-5 w-[85vw] lg:w-[300px] text-gray-300 capitalize"
                  placeholder="EMAIL"
                />
              </div>
              <div className="pl-4">
                <textarea
                  {...register("message")}
                  className="bg-transparent border-b text-sm  md:text-xl lg:text-2xl py-2 pr-2 outline-none lg:w-[640px] w-[85vw] text-gray-300 capitalize"
                  placeholder="WRITE YOUR MESSAGE"
                  cols="50"
                  rows="10"
                ></textarea>
              </div>
              <div className="pt-10 pl-4 lg:hidden">
                <button
                  type="submit"
                  className="uppercase rounded-full p-4 px-6 font-bold text-sm tracking-widest lg:hidden bg-transparent text-white outline-1 border"
                >
                  send message
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-10 justify-between pt-10 lg:items-start items-center">
              <div className="flex justify-center flex-col items-center lg:items-start">
                <p className="text-gray-400 text-xs ">EMAIL</p>
                <p className="text-xl">Chibokaxavier@gmail.com</p>
              </div>
              <div className="flex justify-center flex-col items-center lg:items-start">
                <p className="text-gray-400 text-xs">PHONE</p>
                <p className="text-xl">+2349159521381</p>
              </div>
              <div className="flex justify-center flex-col items-center lg:items-start">
                <p className="text-gray-400 text-xs">LOCATION</p>
                <p className="text-xl">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="pt-10 pl-4 hidden lg:block">
            <button
              type="submit"
              className="uppercase rounded-full p-4 bg-transparent hidden lg:block text-white outline-1 border"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
