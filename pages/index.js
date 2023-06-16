import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
 
  return (
    <>
      <div className="  ">
        <section id="home" className="">
          <Banner />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="services" className="  snap-start">
          <Services />
        </section>
      </div>
    </>
  );
}
