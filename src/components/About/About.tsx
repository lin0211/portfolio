import { motion } from "framer-motion";
export const About = () => {
  return (
    <section id="about" className="snap-start h-screen relative">
      <h2 className="sr-only">ABOUT</h2>

      <div className="h-screen flex flex-col justify-center items-center gap-12">
        <motion.figure
          animate={{
            rotate: [0, 0, 180, 360, 360, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <img className="w-20 h-20" src="/sl_logo.svg" alt="서린 개인 로고" />
        </motion.figure>
        <div className="flex flex-col text-2xl sm:text-3xl gap-8 text-center">
          <p>매일 더 나은 코드로,</p>
          <p>사용자 중심의 디자인을 실현하기 위해 노력하는</p>
          <p>프론트엔드 개발자 정서린입니다.</p>
        </div>
      </div>
    </section>
  );
};
