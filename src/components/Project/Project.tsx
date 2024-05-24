import useModal from "@/hooks/useModal";
import { projectLists } from "./Project_List";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
export const Project = () => {
  const { isVisible, openModal, closeModal } = useModal();
  return (
    <>
      <Navigation />
      <section id="project" className="snap-start h-screen relative">
        <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
          <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
            PROJECT
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-8">
            {projectLists &&
              projectLists.map((list) => {
                const descriptionArray = list.description.split("/ ");
                return (
                  <div key={list.name}>
                    <div className=" w-52 h-36 sm:w-72 sm:h-52 xl:w-96 xl:h-64 bg-transparent group perspective cursor-pointer">
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
                            <button
                              onClick={openModal}
                              className="rounded-md bg-white text-main-gray my-4 hover:text-white hover:bg-main-purple w-44 sm:w-64 xl:w-80 xl:text-xl xl:py-1"
                            >
                              프로젝트 보러가기
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isVisible && (
                      <Modal closeModal={closeModal} project={list}>
                        {list.name}
                      </Modal>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
