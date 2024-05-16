import { educationLists } from "./Education_List";

export const Education = () => {
  return (
    <section id="education" className="snap-start h-screen relative">
      {/* <img
        className="absolute h-full w-full object-cover opacity-20 -z-10"
        src="/background4.jpg"
        alt=""
      /> */}
      <div className="h-screen flex flex-col md:flex-row justify-center items-center gap-10 xl:gap-16 p-4">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-OAGothic-ExtraBold">
          EDUCATION
        </h2>
        <div className="flex flex-col gap-8 xl:gap-12">
          {educationLists &&
            educationLists.map((list) => {
              return (
                <div
                  key={list.school}
                  className="flex justify-start items-center gap-4  sm:gap-8 h-24"
                >
                  <img
                    className="h-full p-2"
                    src={list.imageSrc}
                    alt={list.school}
                  />
                  <div className="flex flex-col justify-evenly h-24">
                    <h3 className="font-OAGothic-ExtraBold text-lg sm:xl xl:text-2xl text-nowrap">
                      {list.school}
                      <span className="bg-main-purple text-sm xl:text-base py-1 px-2 ml-4 rounded font-OAGothic-Medium">
                        {list.state}
                      </span>
                    </h3>
                    <p className="text-lg sm:xl">{list.major}</p>
                    <p className="text-lg sm:xl text-main-lightGray">
                      {list.date}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
