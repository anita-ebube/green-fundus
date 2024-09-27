import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Home from "../../assets/images/slide.jpg";
import Home2 from "../../assets/images/home2.jpeg";
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative h-screen"> 
          <img src={Home} alt="landing image" className='opacity-1 w-full h-auto' />
          {/* <p className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-right text-[3rem] text-white'>
          
          </p> */}
        </div>
        <div className="embla__slide">
          <img src={Home2} alt="landing image" />
        </div>
        <div className="embla__slide">
          <img src={Home} alt="landing image" />
        </div>
      </div>
    </div>
  );
}

