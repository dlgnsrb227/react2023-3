import React from "react";

import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/bundle";

const UnsplashImg = ({ image }) => {
  return (
    <a href={`https://unsplash.com/photos/${image.id}`}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </a>
  );
};

const UnsplashSlider = ({ images }) => {
  return (
    <div className="movie__slider">
      <Swiper
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"5"}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, EffectCreative]}
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
