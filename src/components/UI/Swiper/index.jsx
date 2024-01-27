'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from "./SwiperWithScrollIcons.module.scss"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useState } from 'react';
import { LeftIcons, RightIcons } from '../icon';

export default async function SwiperWithScrollIcons({ children,slidesPerView}) {
    const [swipers,setSwiper] = useState()
    return  (
    <>
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={8}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
      
        className={cls.container}
            
        // onSwiper={(e) => setSwiper(e)}
        onSlideChange={() => console.log('slide change')}
    >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        ...
    </Swiper>
        <div className={cls.swiper__btn}>
            <button ><LeftIcons/></button>   
            <button><RightIcons/></button>   
        </div>
    </>
    );
};