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

        {/* <div className="grid grid-cols-2 auto-rows-fr gap-4">
          {projectLists &&
            projectLists.map((list) => {
              const descriptionArray = list.description.split("/ ");
              return (
                <div
                  key={list.name}
                  className="flip-card relative [perspective:1000px] hover:[transform:rotateY(180deg)]"
                >
                  <div className="flip-card-inner w-[28rem] h-[20rem] relative transition-transform [transform-style:preserve-3d] [transform:rotateY(180deg)]">
                    <div className="flip-card-back  [transform:rotateY(180deg)]">
                      <img
                        className="w-full h-full object-cover"
                        src={list.imageSrc[1]}
                        alt=""
                      />
                    </div>
                    <div className="flip-card-front absolute [backface-visibility:hidden]">
                      <div className="px-6 py-3 md:px-12 md:py-6 border-4 bg-main-gray hover:border-main-purple rounded">
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
                    </div>
                  </div>
                </div>
              );
            })}
        </div> */}
        <div className="grid grid-cols-2 gap-4">
          {projectLists &&
            projectLists.map((list) => {
              const descriptionArray = list.description.split("/ ");
              return (
                <div
                  key={list.name}
                  className="flip-card relative [perspective:1000px] hover:[transform:rotateY(180deg)] aspect-[4/3]"
                >
                  <div className="flip-card-inner relative transition-transform [transform-style:preserve-3d] [transform:rotateY(180deg)]">
                    <div className="flip-card-back w-full h-full [transform:rotateY(180deg)]">
                      <img
                        className="w-full h-full object-cover"
                        src={list.imageSrc[1]}
                        alt=""
                      />
                    </div>
                    <div className="flip-card-front absolute [backface-visibility:hidden]">
                      <div className="px-6 py-3 md:px-12 md:py-6 border-4 bg-main-gray hover:border-main-purple rounded">
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

                          <p>https://www.youtube.com/watch?v=CC78NrgZkY8</p>
                          <p>https://www.youtube.com/watch?v=GSOgbZ396MI</p>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
