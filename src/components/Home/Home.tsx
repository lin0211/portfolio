import { About } from "@/components/About/About";
import { Background } from "@/components/Background/Background";
import { Contact } from "@/components/Contact/Contact";
import { Education } from "@/components/Education/Education";
import { Footer } from "@/components/Footer/Footer";
import { Intro } from "@/components/Intro/Intro";
import { Navigation } from "@/components/Navigation/Navigation";
import { Project } from "@/components/Project/Project";
import { Skills } from "@/components/Skills/Skills";
import { MovePoint } from "../MovePoint/MovePoint";
import { useEffect, useState } from "react";
export const Home = () => {
  const navList = ["home", "about", "education", "skills"];
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    console.log(scrollPosition);
    navList.map((list) => {
      const element = document.getElementById(list);
      console.log(element);
      if (element) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(list);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="snap-y h-screen w-screen snap-mandatory overflow-x-hidden scroll-smooth">
      <Navigation />
      <MovePoint />
      <Background />
      <Intro />
      <About />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
};
