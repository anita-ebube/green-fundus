import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Slide from "../../assets/images/slide_9.jpg";
import Autoplay from 'embla-carousel-autoplay';
// import Mission from '../../components/Mission/page'
// import { Mission } from '../../components/Mission/page';
import { Services } from '../../components/Services/page';
import { Values } from '../../components/Values/page';
import { Layout } from '../../components/Layout/page';
import { Vision } from '../../components/Vision/page';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Set loaded to true after component mounts
  }, []);

  return (
    <Layout>
      <div className='relative'>
        <img src={Slide} alt="landing image" className='w-full h-auto max-h-screen object-cover' />

        <div className='absolute inset-0 flex flex-col justify-center items-center text-center lg:space-y-4 space-y-2'>
          <h2
            className={` pt-10 lg:text-6xl text-2xl text-white font-bold transition-opacity duration-1000 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'
              }`}
          >
            WELCOME TO GREENFUNDUS
          </h2>
          <p className='text-white lg:text-lg text-sm'>
            Lorem ipsum dolor sit amet consectetur?
          </p>
          <button className='bg-brandPrimary text-white py-3 px-4 rounded hover:bg-brandPrimary transition'>
            <a href="/">Know more about us</a>
          </button>
        </div>
      </div>
      <Vision />
      {/* <Mission /> */}
      <Values />
      <Services />
    </Layout>
  );
}
