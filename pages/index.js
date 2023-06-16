import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" h-[100vh] snap-y snap-mandatory  overflow-y-auto scrollbar-hide overflow-x-hidden ">
        <Navbar />
        <section id="home" className="snap-start">
          <Banner />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="services" className="  snap-start">
          <Services/>
        </section>
      </div>
    </>
  );
}
