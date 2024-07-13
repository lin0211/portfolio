import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: false });
  const mainControls = useAnimation();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
        ref={aboutRef}
        id="about"
        className="h-screen bg-main-background bg-cover relative"
      >
        <h2 className="sr-only">ABOUT</h2>
        <div className="h-screen flex flex-col justify-center items-center gap-12">
          <motion.figure
            animate={{
              rotate: [0, 0, 180, 360, 360, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <img
              className="w-20 h-20"
              src="/sl_logo.svg"
              alt="서린 개인 로고"
            />
          </motion.figure>
          <div
            id="about-text"
            className="about-text flex flex-col text-2xl sm:text-3xl gap-8 text-center"
          >
            <motion.p
              variants={variants}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              매일 더 나은 코드로,
            </motion.p>
            <motion.p
              variants={variants}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              사용자 중심의 디자인을 실현하기 위해 노력하는
            </motion.p>
            <motion.p
              variants={variants}
              animate={mainControls}
              initial="hidden"
              transition={{ duration: 1.5, delay: 0.9 }}
            >
              프론트엔드 개발자 정서린입니다.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
