import { projectLists } from "./Project_List";
import Modal from "./Modal/Modal";
import { Navigation } from "../Navigation/Navigation";
import useModals from "@/hooks/useModals";
import { motion } from "framer-motion";
import { Footer } from "../Footer/Footer";

export const Project = () => {
  const { isVisible, openModal, closeModal } = useModals();
  const container = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <Navigation />
      <section
        id="project"
        className="snap-start h-screen relative bg-main-background bg-cover"
      >
        <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
          <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
            PROJECT
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-8"
          >
            {projectLists &&
              projectLists.map((list, index) => {
                const descriptionArray = list.description.split("/ ");
                return (
                  <motion.div variants={item} key={list.id}>
                    <div
                      tabIndex={index + 1}
                      className="w-52 h-36 sm:w-72 sm:h-52 xl:w-96 xl:h-64 bg-transparent group perspective cursor-pointer"
                      onClick={() => openModal(list.id)}
                      title={list.name + " 프로젝트 더보기"}
                    >
                      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000 rounded">
                        <div className="absolute backface-hidden border-2 shadow-xl w-full h-full rounded">
                          <img
                            className="w-full h-full object-cover"
                            src={list.imageSrc[1]}
                            alt={list.name}
                          />
                        </div>
                        <div className="absolute rotate-y-180 backface-hidden border-2 shadow-xl w-full h-full bg-main-gray rounded flex justify-center">
                          <div className="flex flex-col justify-center text-center">
                            <img
                              className="w-12 mx-auto m-2"
                              src={list.imageSrc[0]}
                              alt={list.name}
                            />
                            <h3 className="font-OAGothic-ExtraBold text-base sm:text-xl xl:text-2xl">
                              {list.name}
                            </h3>
                            <p className="text-sm md:text-lg xl:text-xl hidden sm:block">
                              {descriptionArray[0]}
                            </p>
                            <p className="text-sm md:text-lg xl:text-xl hidden sm:block">
                              {descriptionArray[1]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {
                      <Modal
                        id={list.id}
                        isVisible={isVisible(list.id)}
                        closeModal={closeModal}
                        project={list}
                      />
                    }
                  </motion.div>
                );
              })}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};
