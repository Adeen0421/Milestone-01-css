import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skils from "@/components/Skils";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About/> 
      <Skils />                    
      <Contact/>                                        
      </main>
  );
}
