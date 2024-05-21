import { About } from "./components/About/About";
import { Background } from "./components/Background/Background";
import { Education } from "./components/Education/Education";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { Navigation } from "./components/Navigation/Navigation";
import { Project } from "./components/Project/Project";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navigation />
      <div className="snap-y h-screen w-screen snap-mandatory overflow-auto scroll-smooth">
        <Background />
        <Intro />
        <About />
        <Education />
        <Project />
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default App;
