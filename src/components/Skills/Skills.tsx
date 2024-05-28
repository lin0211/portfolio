import { useRef } from "react";
import { Footer } from "../Footer/Footer";
import { skillLists } from "./Skills_List";
import { delay, motion, useInView } from "framer-motion";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section ref={ref} id="skills" className="h-screen bg-main-background">
        <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
          <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
            SKILLS
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 xs:gap-8">
            {skillLists.map((list) => {
              return (
                <figure
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                  }}
                  className="text-center"
                  key={list.name}
                >
                  <motion.img
                    initial={{ opacity: 0.9 }}
                    whileHover={{
                      scale: 1.2,
                      opacity: 1,
                      transition: { duration: 1 },
                      borderRadius: 100,
                    }}
                    src={list.imageSrc}
                    alt={list.name}
                  />

                  <figcaption className="mt-2">{list.name}</figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
