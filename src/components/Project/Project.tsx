import Lists from "../Lists/Lists";
import { projectLists } from "./Project_List";
export const Project = () => {
  return (
    <section className="h-screen relative">
      <Lists />
      <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
        <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
          PROJECT
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {projectLists &&
            projectLists.map((list) => {
              const descriptionArray = list.description.split("/ ");
              return (
                <div key={list.name}>
                  <div className="w-[24rem] h-[18rem] bg-transparent cursor-pointer group perspective">
                    <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
                      <div className="absolute backface-hidden border-2 w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={list.imageSrc[1]}
                          alt=""
                        />
                      </div>
                      <div className="absolute rotate-y-180 backface-hidden border-2 w-full h-full bg-main-gray">
                        <h3 className="font-OAGothic-ExtraBold text-base sm:text-xl xl:text-2xl">
                          {list.name}
                        </h3>
                        <p className="text-sm md:text-lg xl:text-xl hidden xs:block">
                          {descriptionArray[0]}
                        </p>
                        <p className="text-sm md:text-lg xl:text-xl hidden xs:block">
                          {descriptionArray[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <p>https://www.youtube.com/watch?v=CC78NrgZkY8</p>
      <p>https://www.youtube.com/watch?v=GSOgbZ396MI</p> */}
    </section>
  );
};
