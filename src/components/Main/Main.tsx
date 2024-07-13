import { About } from "../About/About";
import { Education } from "../Education/Education";
import { Footer } from "../Footer/Footer";
import { Intro } from "../Intro/Intro";
import { Navigation } from "../Navigation/Navigation";
import { Skills } from "../Skills/Skills";

export const Main = () => {
  return (
    <>
      <Navigation />
      <Intro />

      <About />

      <Education />

      <Skills />
      <Footer />
    </>
  );
};
