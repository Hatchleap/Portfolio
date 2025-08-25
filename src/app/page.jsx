import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Testimonial />
    </div>
  );
}
