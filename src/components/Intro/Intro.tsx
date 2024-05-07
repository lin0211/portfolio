import Lists from "../Lists/Lists";

export const Intro = () => {
  return (
    <section className="bg-[url('/intro.png')] h-screen bg-cover bg-center bg-no-repeat relative">
      <Lists />
      <div className="absolute text-right right-6 bottom-20 lg:right-20">
        <p className="text-4xl xl:text-6xl">프론트엔드 개발자</p>
        <p className="text-7xl xl:text-8xl font-OAGothic-ExtraBold">정서린</p>
      </div>
    </section>
  );
};
