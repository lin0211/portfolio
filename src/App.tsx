import { About } from "./components/About/About";
import { Background } from "./components/Background/Background";
import { Contact } from "./components/Contact/Contact";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { Navigation } from "./components/Navigation/Navigation";
import { Project } from "./components/Project/Project";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="snap-y h-screen w-screen snap-mandatory overflow-x-hidden scroll-smooth">
      <Navigation />
      <Background />
      <Intro />
      <About />
      <Education />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
