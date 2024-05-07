import Lists from "../Lists/Lists";

export const About = () => {
  return (
    <section className="h-screen relative">
      <Lists />
      <div className="h-screen flex flex-col justify-center items-center">
        <figure>
          <img className="w-20 h-20" src="/sl_logo.svg" alt="" />
        </figure>
        <p className="flex flex-col font-bold">
          <span>매일 더 나은 코드로,</span>
          <span>사용자 중심의 디자인을 실현하기 위해 노력하는</span>
          <span>프론트엔드 개발자 정서린입니다.</span>
        </p>
      </div>
    </section>
  );
};
