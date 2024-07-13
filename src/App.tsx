import { Contact } from "@/components/Contact/Contact";
import { Project } from "@/components/Project/Project";
import { Home } from "@/components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
