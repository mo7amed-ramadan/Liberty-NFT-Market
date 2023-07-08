// Import swiper components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/css/bundle";
// import components
import CollectionItems from "./CollectionItems";
// import images
import CollectionLImg from "../../../../../Images/collection-01.jpg";
function CollectionSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1400: {
            spaceBetween: 40,
            slidesPerView: 3,
            width: 1200,
          },
          1330: {
            spaceBetween: 35,
            slidesPerView: 3,
            width: 1160,
          },
          1080: {
            spaceBetween: 20,
            slidesPerView: 3,
            width: 1125,
          },
          800: {
            spaceBetween: 40,
            slidesPerView: 2,
            width: 700,
          },
          450: {
            spaceBetween: 33,
            slidesPerView: 2,
            width: 635,
          },
          320: {
            spaceBetween: 35,
            slidesPerView: 1,
            width: 300,
          },
        }}
      >
        {/* First Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Worldwide Artwork Ground"
            num="426/468"
            category="Blockchain"
            btn="Explore Worldwide"
          />
        </SwiperSlide>
        {/* Second Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Mutant Bored Ape Yacht Club"
            num="310/340"
            category="Digital Crypto"
            btn="Explore Mutant"
          />
        </SwiperSlide>
        {/* Third Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Bored Ape Kennel Club"
            num="324/324"
            category="Visual Art"
            btn="Explore Bored Ape"
          />
        </SwiperSlide>
        {/* Forth Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Genesis Collective Statue"
            num="380/394"
            category="Music Art"
            btn="Explore Genesis"
          />
        </SwiperSlide>
        {/* 5th Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Worldwide Artwork Ground"
            num="426/468"
            category="Blockchain"
            btn="Explore Worldwide"
          />
        </SwiperSlide>
        {/* 6th Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Mutant Bored Ape Yacht Club"
            num="310/340"
            category="Digital Crypto"
            btn="Explore Mutant"
          />
        </SwiperSlide>
        {/* 7th Slide */}
        <SwiperSlide>
          <CollectionItems
            Img={CollectionLImg}
            title="Bored Ape Kennel Club"
            num="324/324"
            category="Visual Art"
            btn="Explore Bored Ape"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CollectionSlider;
