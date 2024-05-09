import { useState } from "react";

const Lists = () => {
  const [openListsClassName, setOpenListsClassName] = useState(
    "absolute w-full h-full bg-main-lightGray z-10 flex flex-col justify-center align-middle gap-12 text-main-purple hidden font-OAGothic-ExtraBold text-lg"
  );
  const showLists = () =>
    setOpenListsClassName(openListsClassName.replace(" hidden", ""));
  const closeLists = () =>
    setOpenListsClassName(openListsClassName + " hidden");
  return (
    <>
      <button
        onClick={showLists}
        className="absolute top-6 left-6 w-8 h-8 hover:scale-110"
      >
        <img src="/lists.svg" alt="리스트 열기" />
      </button>
      <div className={openListsClassName}>
        <button className="hover:text-main-blue">ABOUT</button>
        <button>EDUCATION</button>
        <button>SKILL</button>
        <button>PROJECT</button>
        <button>CONTACT</button>
        <button className="flex justify-center" onClick={closeLists}>
          <img className="w-8 h-8" src="/close.svg" alt="닫기" />
        </button>
      </div>
    </>
  );
};

export default Lists;
