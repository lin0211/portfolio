import { skillLists } from "./Skills_List";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="snap-start h-screen relative">
      <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
        <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">SKILLS</h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.25 } },
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 xs:gap-8"
        >
          {skillLists.map((list) => {
            return (
              <motion.figure
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="text-center "
                key={list.name}
              >
                <Tilt glareEnable={true}>
                  <img src={list.imageSrc} alt={list.name} />
                </Tilt>
                <figcaption>{list.name}</figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
