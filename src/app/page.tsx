import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skils from "@/components/Skils";


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
