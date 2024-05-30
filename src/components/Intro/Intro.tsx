import { Footer } from "@/components/Footer/Footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: true });
  const mainControls = useAnimation();
  const variants = {
    hidden: { opacity: 0, y: 0, x: 100 },
    visible: { opacity: 1, y: 0, x: 0 },
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
        ref={introRef}
        id="intro"
        className=" bg-[url('/titlepage.webp')] h-screen bg-cover bg-center bg-no-repeat relative"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 1 }}
          className="absolute  text-right top-auto right-6 bottom-20 lg:right-20 flex flex-col gap-4 font-OAGothic-ExtraBold"
        >
          <motion.p className="text-4xl xl:text-6xl bg-main-gray bg-opacity-50 text-nowrap">
            프론트엔드 개발자
          </motion.p>
          <motion.p className="intro-name text-7xl xl:text-8xl">
            정서린
          </motion.p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
