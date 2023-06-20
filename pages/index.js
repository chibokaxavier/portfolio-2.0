import About from "@/components/About";
import Banner from "@/components/Banner";
import ContactMe from "@/components/ContactMe";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="">
       
        <section id="home" className="">
          <Banner />
          <ParticlesBackground/>
        </section>
        <div className="lg:border-r lg:border-l border-gray-700">
          <section id="about" className="">
            <About />
          </section>
          <section id="services" className="">
            <Services />
          </section>
          <section>
            <Skills />
          </section>
          <section>
            <Projects/>
          </section>
          <section>
            <ContactMe/>
          </section>
        </div>
      </div>
    </>
  );
}
