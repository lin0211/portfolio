import { Footer } from "@/components/Footer/Footer";
import { Navigation } from "@/components/Navigation/Navigation";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <>
      <Navigation />
      <section
        id="contact"
        className="snap-start h-screen relative bg-main-background bg-cover"
      >
        <motion.div className="w-full h-full flex-col justify-center content-center ">
          <h2 className="text-5xl font-OAGothic-ExtraBold flex justify-center">
            CONTACT
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="flex justify-center mt-12"
          >
            <div className="grid grid-cols-1 gap-4 text-center text-lg xl:text-xl">
              <a
                className=" border-2 px-2 py-1 rounded-md hover:scale-105"
                href="mailto:slinj0211@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                이메일 : slinj0211@gmail.com
              </a>

              <a
                className="w-full border-2 px-2 py-1 rounded-md hover:scale-105"
                href="http://github.com/lin0211"
                target="_blank"
                rel="noopener noreferrer"
              >
                깃허브 : github.com/lin0211
              </a>

              <a
                className="border-2 px-2 py-1 rounded-md hover:scale-105"
                href="https://slinj0211.notion.site/be1752e2230d45a6a15785929dd80738"
              >
                노션 이력서
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
