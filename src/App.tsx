import { About } from "./components/About/About";
import { Education } from "./components/Education/Education";
import { Intro } from "./components/Intro/Intro";
import { Navigation } from "./components/Navigation/Navigation";
import { Project } from "./components/Project/Project";

function App() {
  return (
    <div className="snap-y h-screen w-screen snap-mandatory overflow-auto">
      <Navigation />
      <Intro />
      <About />
      <Education />
      <Project />
    </div>
  );
}

export default App;
