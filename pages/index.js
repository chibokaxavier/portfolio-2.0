import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen  snap-y snap-mandatory  overflow-y-auto scrollbar-hide overflow-x-hidden">
            <section id="home" className="snap-start">
            <Banner />
          </section>
          <section id="about" className="snap-center">
            <About />
          </section>
      </div>
    </>
  )
};
