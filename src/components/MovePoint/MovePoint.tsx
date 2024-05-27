import { Link } from "react-scroll";

export const MovePoint = () => {
  const navList = ["intro", "about", "education", "skills"];
  //https://hyomyo.tistory.com/104
  return (
    <nav className="z-10 fixed left-1/2 -translate-x-1/2 top-4">
      <ul className="flex gap-3 justify-center items-center xl:gap-4 ">
        {navList.map((list, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="text-main-blue text-xl"
                to={list}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span
                  className="cursor-pointer hover:text-main-blue"
                  title={list}
                >
                  ●
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
