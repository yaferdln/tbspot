import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [
  "/images/pexels-enginakyurt-3065209.webp",
  "/images/pexels-rdne-7755523.webp",
  "/images/pexels-rdne-7755558.webp",
  "/images/pexels-zvolskiy-1570807.webp",
];

const ImageSlider = () => {
  return (
    <div className="container mx-auto pt-20 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      <Swiper
        spaceBetween={10}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="w-full h-full"
        grabCursor={true}
        breakpoints={{
          320: { spaceBetween: 5 },
          768: { spaceBetween: 15 },
          1024: { spaceBetween: 30 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <LazyLoadImage
              src={img}
              alt={`Slide ${i + 1}`}
              effect="blur"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
