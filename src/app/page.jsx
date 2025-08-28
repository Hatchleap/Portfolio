import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Marquee from "@/components/Marquee";
import Homie from "@/components/Homie";
import Process from "@/components/Process";
import Success from "@/components/Success";

export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Marquee /> */}
      <Homie />
      <About />
      <Services />
      <Process />
      <Success />
      <Projects />
      <Contact />
      <Testimonial />
    </div>
  );
}
