import { About } from "@/components/About/About";
import { Education } from "@/components/Education/Education";
import { Intro } from "@/components/Intro/Intro";
import { Navigation } from "@/components/Navigation/Navigation";
import { Skills } from "@/components/Skills/Skills";
import { MovePoint } from "../MovePoint/MovePoint";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <div className="h-screen w-screen">
      {/* <div className="snap-y h-screen w-screen snap-mandatory overflow-x-hidden scroll-smooth"> */}
      <Navigation />
      <MovePoint />
      <div className="bg-main-background bg-cover overflow-auto snap-y snap-mandatory h-screen">
        <Intro />
        <About />
        <Education />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
