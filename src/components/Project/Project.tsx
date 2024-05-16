import { projectLists } from "./Project_List";
export const Project = () => {
  return (
    <section id="project" className="snap-start h-screen relative">
      <div className="h-screen flex flex-col justify-center items-center gap-10 px-4">
        <h2 className="text-3xl xl:text-5xl font-OAGothic-ExtraBold">
          PROJECT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectLists &&
            projectLists.map((list) => {
              const descriptionArray = list.description.split("/ ");
              return (
                <div key={list.name}>
                  <div className="w-[14rem] h-[10rem] sm:w-[18rem] sm:h-[14rem] lg:w-[26rem] lg:h-[20rem] bg-transparent cursor-pointer group perspective">
                    <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000 rounded">
                      <div className="absolute backface-hidden border-2 shadow-xl w-full h-full rounded">
                        <img
                          className="w-full h-full object-cover"
                          src={list.imageSrc[1]}
                          alt={list.name}
                        />
                      </div>
                      <div
                        title="프로젝트 보러가기"
                        className="absolute rotate-y-180 backface-hidden border-2 shadow-xl w-full h-full bg-main-gray rounded flex justify-center"
                      >
                        <div className="flex flex-col justify-center text-center">
                          <img
                            className="w-12 mx-auto mb-2"
                            src={list.imageSrc[0]}
                            alt={list.name}
                          />
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
