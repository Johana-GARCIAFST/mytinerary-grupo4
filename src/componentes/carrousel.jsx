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
  const Roma = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/romaX.jpg?alt=media&token=b0d7e541-feab-4155-8f94-3bd50ea7526e" alt="" />
  const Paris = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/parisZ.jpg?alt=media&token=00805f27-3f8d-4fbd-a5d6-0d2d5a341eee" alt="" />
  const NewYork = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/empirestateZ.jpg?alt=media&token=e39ff108-3f88-4021-b120-99ae2544ace4" alt="" />
  const Dubai = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/burjbudaiZ.jpg?alt=media&token=e81f8f48-417f-4fb7-a5a5-1df1d2023848" alt="" />
  
  const BuenosAires =   <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/buenosAires.jpg?alt=media&token=4b4300a2-67c4-4e2e-8395-f45b8a016abb" alt="" />
  const Caracas =  <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/caracas.jpg?alt=media&token=94531c6c-5aca-4fb1-a311-734840e8c5c8" alt="" />
  const Barcelona = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/barcelona.jpg?alt=media&token=6b0dac61-4ab8-449d-b330-37c7801b12f9" alt="" />
  const RioDeJaneiro =  <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/rioDeJaneiro.jpg?alt=media&token=11f0478b-3c9f-4955-a464-98621fe5c254" alt="" />
 
  const Sidney = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/sidney.jpg?alt=media&token=95a28d73-6dba-482d-8898-3349424211e0" alt="" />
  const Tokio = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/tokio.jpg?alt=media&token=92f9ff05-d923-40f7-b664-f57a94719c6e" alt="" />
  const Vaunkouver= <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/vankouver.jpg?alt=media&token=8d688cb3-2cd3-4ce3-b057-3daeb2953217" alt="" />
  const Moscu = <img src="https://firebasestorage.googleapis.com/v0/b/challenge-5ac03.appspot.com/o/moscu.jpg?alt=media&token=693178a7-6377-418a-b110-3e8a22c67cbc" alt="" />

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
          <div>
           <h2>Rome</h2>
           <h2>Paris</h2>
           <h2>New York</h2>
           <h2>Dubai</h2>
          </div>
          {Roma} {Paris} { NewYork} {Dubai}       
        </SwiperSlide>
        <SwiperSlide>
        <div>
           <h2>Buenos Aires</h2>
           <h2>Caracas</h2>
           <h2>Barcelona</h2>
           <h2>Rio de Janeiro</h2>
          </div>
          {BuenosAires} {Caracas} {Barcelona} {RioDeJaneiro}
         
        </SwiperSlide>
        <SwiperSlide>
        <div>
           <h2>Sidney</h2>
           <h2>Tokyo</h2>
           <h2>vaunkouver</h2>
           <h2>Moscow</h2>
          </div>
       {Sidney} {Tokio} {Vaunkouver} {Moscu}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
