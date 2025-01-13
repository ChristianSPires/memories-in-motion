import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Adicionado o módulo Autoplay
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Slider.css";

import amor1 from "../../assets/images/amor_1.jpg";
import amor2 from "../../assets/images/amor_2.jpg";
import amor3 from "../../assets/images/amor_3.jpg";
import amor4 from "../../assets/images/amor_4.jpg";
import amor5 from "../../assets/images/amor_5.jpg";
import amor6 from "../../assets/images/amor_6.jpg";
import amor7 from "../../assets/images/amor_7.jpg";

const Slider = () => {
  const photos = [amor1, amor2, amor3, amor4, amor5, amor6, amor7];

  return (
    <div className="slider-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        loopAdditionalSlides={3}
        watchSlidesProgress={true}
        autoplay={{
          delay: 3000, // 3 segundos entre slides
          disableOnInteraction: false, // Continua o autoplay mesmo após interação
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Adicionado o módulo Autoplay
        className="swiper_container"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Slider;
