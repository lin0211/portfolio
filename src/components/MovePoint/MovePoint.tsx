import moveToView from "@/utils/moveToView";
import { useEffect, useState } from "react";

export const MovePoint = () => {
  const navList = ["home", "about", "education", "skills"];
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    navList.map((list) => {
      const element = document.getElementById(list);
      console.log(element);
      if (element) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(list);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="z-10 fixed left-1/2 -translate-x-1/2 top-4">
      <ul className="flex gap-3 justify-center items-center xl:gap-4 ">
        {navList.map((list, index) => {
          console.log(activeSection);
          return (
            <li key={index}>
              <button
                className={`w-3 h-3 rounded-full bg-white hover:bg-main-blue ${
                  activeSection === list ? "bg-main-blue" : "bg-white"
                }`}
                onClick={() => moveToView(list)}
              ></button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
