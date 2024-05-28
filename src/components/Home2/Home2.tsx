import { About } from "@/components/About/About";
import { Education } from "@/components/Education/Education";
import { Intro } from "@/components/Intro/Intro";
import { Navigation as Nav } from "@/components/Navigation/Navigation";
import { Skills } from "@/components/Skills/Skills";
import { MovePoint } from "../MovePoint/MovePoint";
import { Footer } from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

export const Home2 = () => {
  const swiperStyle = {
    "--swiper-pagination-color": "#6A8FDD",
    "--swiper-pagination-bullet-inactive-color": "#999999",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "12px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  };
  return (
    <>
      <Nav />
      <Swiper
        style={swiperStyle}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{ clickable: true }}
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