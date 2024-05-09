import Lists from "../Lists/Lists";
import { projectLists } from "./Project_List.ts";

export const Project = () => {
  return (
    <section className="h-screen relative">
      <Lists />
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
          PROJECT
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {projectLists &&
            projectLists.map((list) => {
              const descriptionArray = list.description.split("/ ");
              return (
                <div key={list.name} className="relative">
                  <div className="px-6 py-3 w-[20rem] h-[18rem] md:px-12 md:py-6 border-4 hover:border-main-purple rounded absolute top-0 left-0">
                    <figure className="flex flex-col justify-center items-center ">
                      <img
                        className="w-16 h-16 mb-2"
                        src={list.imageSrc[0]}
                        alt={list.name}
                      />
                      <figcaption className="text-center">
                        <h3 className="font-OAGothic-ExtraBold text-base sm:text-xl xl:text-2xl">
                          {list.name}
                        </h3>
                        <p className="text-sm md:text-lg xl:text-xl hidden xs:block">
                          {descriptionArray[0]}
                        </p>
                        <p className="text-sm md:text-lg xl:text-xl hidden xs:block">
                          {descriptionArray[1]}
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="w-[20rem] h-[18rem] absolute top-0 left-0"></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
