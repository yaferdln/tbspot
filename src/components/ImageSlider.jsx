import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import required modules
import { EffectFade, Autoplay } from "swiper/modules";
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
    <div className="pt-20 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-screen overflow-hidden">
      <Swiper
        spaceBetween={10}
        effect={"fade"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true} // Infinite loop enabled
        modules={[EffectFade, Autoplay]}
        className="w-full h-full"
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
