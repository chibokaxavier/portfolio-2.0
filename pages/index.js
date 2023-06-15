import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="h-screen">
      <main className="">
        <section id="home" className="snap-start">
        <Banner />
        </section>
        
      </main>
    </div>
     
    </>
  );
}
