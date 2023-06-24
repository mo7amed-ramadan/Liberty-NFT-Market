// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper Styles
import "swiper/swiper-bundle.min.css";
import "./Slider.css";
// Import Component assets
import RightImg from "../../../../../Images/banner-02.png";
import LeftImg from "../../../../../Images/banner-01.png";
import SlideContent from "./SlideContent";
function Slider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <SlideContent img={RightImg} title="right image VR" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent img={LeftImg} title="left image VR" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent img={RightImg} title="right image VR" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent img={LeftImg} title="left image VR" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
