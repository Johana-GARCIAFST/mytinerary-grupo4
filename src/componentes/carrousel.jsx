// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.css"
import "../carrousel.css";

// import required modules.
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carrousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/romaX.jpg?alt=media&token=b0d7e541-feab-4155-8f94-3bd50ea7526e" alt="" />
          <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/parisZ.jpg?alt=media&token=00805f27-3f8d-4fbd-a5d6-0d2d5a341eee" alt="" />
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/empirestateZ.jpg?alt=media&token=e39ff108-3f88-4021-b120-99ae2544ace4" alt="" />
        <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/burjbudaiZ.jpg?alt=media&token=e81f8f48-417f-4fb7-a5a5-1df1d2023848" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
