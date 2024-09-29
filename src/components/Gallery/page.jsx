import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideImg1 from '../../assets/images/gallery/slide_1.jpg'
import SlideImg2 from '../../assets/images/gallery/slide_2.jpg'
import SlideImg3 from '../../assets/images/gallery/slide_3.jpg'
import SlideImg4 from '../../assets/images/gallery/slide_4.jpg'
import SlideImg5 from '../../assets/images/gallery/slide_5.jpg'
import SlideImg6 from '../../assets/images/gallery/slide_6.jpg'
export const Gallery = () => {
    return (
        <div id='gallery'>
            <h1>Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={SlideImg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SlideImg6} alt="" />
                </SwiperSlide>
           

            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    
    </div >
  )
}
