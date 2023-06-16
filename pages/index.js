import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=''>
        <Navbar />
        <section id="home" className="">
          <Banner />
        </section>
        <section id="about" className="">
          <About />
        </section>
        <section id="services" className="">
          <Services />
        </section>
        <Skills/>
      </div>
    </>
  );
}
