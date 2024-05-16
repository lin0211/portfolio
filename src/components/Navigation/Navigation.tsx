import moveToView from "@/utils/moveToView";

export const Navigation = () => {
  return (
    <nav className="w-fit py-2 px-6 fixed z-10 text-lg bg-black/20 backdrop-blur-sm top-4 left-1/2 -translate-x-1/2 shadow-lg rounded-full">
      <ul className="flex gap-4 justify-center xl:gap-12 ">
        <li>
          <button
            className="hover:text-main-blue"
            onClick={() => moveToView("about")}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            className="hover:text-main-blue"
            onClick={() => moveToView("education")}
          >
            EDUCATION
          </button>
        </li>
        <li>
          <button
            className="hover:text-main-blue"
            onClick={() => moveToView("project")}
          >
            PROJECT
          </button>
        </li>
        <li>
          <button
            className="hover:text-main-blue"
            onClick={() => moveToView("about")}
          >
            SKILL
          </button>
        </li>
        <li>
          <button
            className="hover:text-main-blue"
            onClick={() => moveToView("about")}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
};
