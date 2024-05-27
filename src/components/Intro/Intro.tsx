import { motion } from "framer-motion";
export const Intro = () => {
  return (
    <>
      <section
        id="intro"
        className=" bg-[url('/titlepage.webp')] h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute text-center top-24 right-1/2 transform translate-x-1/2 sm:translate-x-0  sm:text-right sm:top-auto sm:right-6 sm:bottom-20 lg:right-20 flex flex-col gap-4 font-OAGothic-ExtraBold">
          <p className="text-4xl xl:text-6xl bg-main-gray bg-opacity-50 text-nowrap">
            프론트엔드 개발자
          </p>
          <motion.p initial="hidden" animate className="text-7xl xl:text-8xl">
            정서린
          </motion.p>
        </div>
      </section>
    </>
  );
};
