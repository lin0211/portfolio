import { About } from "@/components/About/About";
import { Background } from "@/components/Background/Background";
import { Contact } from "@/components/Contact/Contact";
import { Education } from "@/components/Education/Education";
import { Footer } from "@/components/Footer/Footer";
import { Intro } from "@/components/Intro/Intro";
import { Navigation } from "@/components/Navigation/Navigation";
import { Project } from "@/components/Project/Project";
import { Skills } from "@/components/Skills/Skills";
import { MovePoint } from "./components/MovePoint/MovePoint";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
