import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const email = "chibokaxavier@gmail.com";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:chibokaxavier@gmail.com?subject=' '&body=Hi Emmanuel, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="pb-20 px-4">
      <div className=" flex flex-col">
        <div className=" items-end text-right pb-20  uppercase flex flex-col space-y-2 pt-28 lg:pt-0  lg:px-10">
          <p
            data-aos="fade-right"
            data-aos-offset="500"
            // data-aos-delay="0"
            data-aos-duration="500"
            className="md:text-[8rem] text-[4.5rem]  header  tracking-widest text-right   font-bold"
          >
            get in touch
          </p>
        </div>
        <form
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="2000"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:flex lg:space-x-20">
            <div>
              <div className="pl-4 lg:space-x-8 pb-8 relative">
                <input
                  {...register("name")}
                  type="text"
                  className="bg-transparent border-b text-sm md:text-xl lg:text-xl py-2 pr-2 lg:mb-0 mb-16 outline-none  w-[85vw] lg:w-[300px] text-gray-300 capitalize"
                  placeholder="NAME"
                />
                <input
                  {...register("email")}
                  type="email"
                  className="bg-transparent border-b text-sm md:text-xl lg:text-xl py-2 pr-2 outline-none lg:mb-0 mb-5 w-[85vw] lg:w-[300px] text-gray-300 capitalize transition-all transform ease-in-out duration-300 "
                  placeholder="EMAIL"
                />
              </div>
              <div className="pl-4">
                <textarea
                  {...register("message")}
                  className="bg-transparent border-b border-t-0 border-r-0 border-l-0 text-sm  md:text-xl lg:text-xl py-2 pr-2 outline-none lg:w-[640px] w-[85vw] text-gray-300 capitalize"
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
            <div className="flex flex-col space-y-10 justify-between pt-20 lg:items-start items-center">
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
