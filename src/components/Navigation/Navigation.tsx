import moveToView from "@/utils/moveToView";
import { useState } from "react";

export const Navigation = () => {
  const navList = [
    "home",
    "about",
    "education",
    "project",
    "skills",
    "contact",
  ];
  const [navClassName, setNavClassName] = useState(
    "w-fit py-2 px-4 fixed z-10 bg-black/20 backdrop-blur-sm top-4 left-0 shadow-lg hidden rounded-e-full"
  );
  const [openNavButtonClassName, setOpenNavButtonClassName] = useState(
    "absolute py-2 top-4 left-0 -translate-x-2 hover:translate-x-0 hover:duration-200 z-10 bg-black/10 rounded-e-full ps-2"
  );

  const showLists = () => {
    setNavClassName(navClassName.replace(" hidden", ""));
    setOpenNavButtonClassName(openNavButtonClassName + " hidden");
  };
  const closeLists = () => {
    setNavClassName(navClassName + " hidden");
    setOpenNavButtonClassName(openNavButtonClassName.replace(" hidden", ""));
  };
  return (
    <>
      <button className={openNavButtonClassName} onClick={showLists}>
        <img
          className="w-8 h-8 p-2 sm:w-10 sm:h-10"
          src="/right_arrow.svg"
          alt="리스트 열기"
        />
      </button>
      <nav className={navClassName}>
        <ul className="flex gap-4 justify-center items-center xl:gap-12 text-sm sm:text-base text-white/80 ">
          {navList.map((list, index) => {
            return (
              <li key={index}>
                <button
                  className="hover:border-b-2 hover:text-white hover:scale-110"
                  onClick={() => moveToView(list)}
                >
                  {list.toUpperCase()}
                </button>
              </li>
            );
          })}
          <button
            onClick={closeLists}
            className="hover:-translate-x-2 hover:duration-200"
          >
            <img
              className="w-8 h-8 p-2 sm:w-10 sm:h-10"
              src="/left_arrow.svg"
              alt="리스트 열기"
            />
          </button>
        </ul>
      </nav>
    </>
  );
};
