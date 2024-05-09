import Lists from "../Lists/Lists";

export const About = () => {
  return (
    <section className="h-screen relative">
      <Lists />
      <div className="h-screen flex flex-col justify-center items-center gap-12">
        <figure>
          <img className="w-20 h-20" src="/sl_logo.svg" alt="서린 개인 로고" />
        </figure>
        <div className="flex flex-col text-2xl sm:text-3xl gap-8 text-center">
          <p>매일 더 나은 코드로,</p>
          <p>사용자 중심의 디자인을 실현하기 위해 노력하는</p>
          <p>프론트엔드 개발자 정서린입니다.</p>
        </div>
      </div>
    </section>
  );
};
