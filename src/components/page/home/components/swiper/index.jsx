import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';

const SwiperComponent = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;



