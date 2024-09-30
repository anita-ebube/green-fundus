import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SlideImg2 from '../../assets/images/gallery/slide_1.jpg';
import SlideImg1 from '../../assets/images/gallery/slide_2.jpg';
import SlideImg3 from '../../assets/images/gallery/slide_3.jpg';
import SlideImg4 from '../../assets/images/gallery/slide_4.jpg';
import SlideImg5 from '../../assets/images/gallery/slide_5.jpg';
import SlideImg7 from '../../assets/images/gallery/slide_7.jpg';
import SlideImg8 from '../../assets/images/gallery/slide_8.jpg';
import SlideImg9 from '../../assets/images/gallery/slide_9.jpg';
import SlideImg10 from '../../assets/images/gallery/slide_10.jpg';
import { Navbar } from '../../components/Navbar/page';
import { Footer } from '../../components/Footer/page';
export const Gallery = () => {
    const images = [
        {
            id: 1,
            image: SlideImg1

        },
        {
            id: 2,
            image: SlideImg4

        },
        {
            id: 3,
            image:SlideImg5

        },
        {
            id: 4,
            image: SlideImg4

        },
        {
            id: 5,
            image: SlideImg5

        },
        {
            id: 6,
            image: SlideImg7

        }
    ]

    return (
        <div id='gallery'>
            <Navbar />
            <div className="lg:mt-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {images.map(({ id, image }) => (
                        <div key={id} className="overflow-hidden rounded-lg shadow-md">
                            <img src={image} alt={`Gallery Image ${id}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
            <Footer className='bottom-0 top-0' />
        </div>
    );
};