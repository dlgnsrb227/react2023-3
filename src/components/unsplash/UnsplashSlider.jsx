import React from "react";

import { Navigation, Pagination, Autoplay, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";
import "swiper/css/effect-cube";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className="unsplash__slider">
      <Swiper
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.89,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, EffectCube]}
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <UnsplashImg key={index} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UnsplashSlider;
