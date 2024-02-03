'use client'
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./SwiperWithScrollIcons.module.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import React, { useState } from 'react';
import { LeftIcons, RightIcons } from '../icon';

export default  function SwiperWithScrollIcons({ children,slidesPerView}) {
    const [swipers,setSwiper] = useState()
    return  (
    <>
     <Swiper
        modules={[ Autoplay]}
        spaceBetween={8}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 2500, disableOnInteraction: false,loop:true }}
        className={cls.container}
        // loop={true}
        onSwiper={(e) => setSwiper(e)}
        onSlideChange={() => console.log('slide change')}
    >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        ...
    </Swiper>
        <div className={cls.swiper__btn}>
            <button onClick={()=>swipers.slidePrev()}><LeftIcons/></button>   
            <button onClick={()=>swipers.slideNext()}><RightIcons/></button>   
        </div>
    </>
    );
};3