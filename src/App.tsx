import { Intro } from "./components/Intro/Intro";
import "./style/main.css";
import "./style/reset.css";
import "./style/tailwind.css";

function App() {
  return (
    <>
      <Intro />
      <div className="text-purple-300">체크</div>
    </>
  );
}

export default App;
