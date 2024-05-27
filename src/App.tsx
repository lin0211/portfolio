import { Contact } from "@/components/Contact/Contact";
import { Project } from "@/components/Project/Project";
import { Test } from "@/components/Test/Test";
import { Home } from "@/components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Home2 } from "./components/Home2/Home2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Test />} />
    </Routes>
  );
}

export default App;
