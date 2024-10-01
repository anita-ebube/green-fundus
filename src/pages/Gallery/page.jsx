import React from 'react'
import SlideImg1 from '../../assets/images/gallery/slide_2.jpg';
import SlideImg4 from '../../assets/images/gallery/slide_4.jpg';
import SlideImg5 from '../../assets/images/gallery/slide_5.jpg';
import SlideImg7 from '../../assets/images/gallery/slide_7.jpg';
import SlideImg8 from '../../assets/images/gallery/slide_8.jpg';
import SlideImg9 from '../../assets/images/gallery/slide_9.jpg';
import SlideImg10 from '../../assets/images/gallery/slide_10.jpg';
import SlideImg11 from '../../assets/images/gallery/slide_11.jpg';
import SlideImg12 from '../../assets/images/gallery/slide_12.jpg';
import SlideImg13 from '../../assets/images/gallery/slide_13.jpg';
import SlideImg14 from '../../assets/images/gallery/slide_14.jpg';
import SlideImg15 from '../../assets/images/gallery/slide_15.jpg';
import { Layout } from '../../components/Layout/page';
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
            image: SlideImg5

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

        },
        {
            id: 7,
            image: SlideImg8

        },
        {
            id: 8,
            image: SlideImg9

        },

        {
            id: 10,
            image: SlideImg10

        },

        {
            id: 13,
            image: SlideImg12

        }
        ,
        {
            id: 14,
            image: SlideImg14

        }
        ,

        {
            id: 15,
            image: SlideImg15

        },
        {
            id: 11,
            image: SlideImg11

        }
        ,

        {
            id: 12,
            image: SlideImg13

        }
        ,

        

    ]

    return (
        <Layout>
            <div className='bg-brandPrimary h-[150px] lg:h-[200px]'>
                <h2 className='text-white lg:text-4xl sm:text-3xl flex justify-center items-center pt-24 lg:pt-28'>Welcome to Our Gallery</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10 mb-52">
                {images.map(({ id, image }) => (
                    <div key={id} className="overflow-hidden rounded-lg shadow-md">
                        <img src={image} alt={`Gallery Image ${id}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>
        </Layout>
    );
};