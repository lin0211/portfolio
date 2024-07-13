import { useEffect, useRef } from "react";
import { educationLists } from "./Education_List";
import { motion, useAnimation, useInView } from "framer-motion";

export const Education = () => {
  const educationRef = useRef(null);
  const isInView = useInView(educationRef, { once: false });
  const mainControls = useAnimation();
  const container = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const items = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <>
      <section
        ref={educationRef}
        id="education"
        className="h-screen bg-main-background  bg-cover"
      >
        <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-10 xl:gap-16 p-4">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-OAGothic-ExtraBold">
            EDUCATION
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate={mainControls}
            className="flex flex-col gap-8 xl:gap-12"
          >
            {educationLists &&
              educationLists.map((list) => {
                return (
                  <motion.div
                    variants={items}
                    key={list.school}
                    className="flex justify-start items-center gap-2 xs:gap-4 sm:gap-8 h-24"
                  >
                    <img
                      className="h-full p-2"
                      src={list.imageSrc}
                      alt={list.school}
                    />
                    <div className="flex flex-col justify-evenly h-24">
                      <h3 className="font-OAGothic-ExtraBold text-base xs:text-lg sm:xl xl:text-2xl text-nowrap">
                        {list.school}
                        <span className="hidden xs:inline-block bg-main-blue text-sm xl:text-base py-1 px-2 ml-4 rounded font-OAGothic-Medium font-sans">
                          {list.state}
                        </span>
                      </h3>
                      <p className="text-base xs:text-lg sm:xl">{list.major}</p>
                      <p className="text-base xs:text-lg sm:xl text-main-lightGray">
                        {list.date}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
      </section>
    </>
  );
};
