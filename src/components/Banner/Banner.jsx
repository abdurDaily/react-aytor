import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css'


// import required modules
import { Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper pagination={true} loop={true} autoplay={{
                    delay: 500,
                    disableOnInteraction: false
                }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div className="slider_parent" style={{ backgroundImage:'url(images/banner/banner_1.jpg)' }}>
               <div className="container">
                  <h1>Slider 1</h1>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider_parent" style={{ backgroundImage:'url(images/banner/banner_1.jpg)' }}>
               <div className="container">
                  <h1>Slider 2</h1>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slider_parent" style={{ backgroundImage:'url(images/banner/banner_1.jpg)' }}>
               <div className="container">
                  <h1>Slider 1</h1>
               </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
