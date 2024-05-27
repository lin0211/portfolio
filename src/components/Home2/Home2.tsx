import { About } from "@/components/About/About";
import { Education } from "@/components/Education/Education";
import { Intro } from "@/components/Intro/Intro";
import { Navigation as Navi } from "@/components/Navigation/Navigation";
import { Skills } from "@/components/Skills/Skills";
import { MovePoint } from "../MovePoint/MovePoint";
import { Footer } from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Navigation } from "swiper/modules";

export const Home2 = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="w-screen h-screen"
      >
        <SwiperSlide>
          <Intro />
        </SwiperSlide>
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Education />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
