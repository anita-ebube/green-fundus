import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Slide1 from "../../assets/images/gallery/slide_2.jpg";
import Slide2 from "../../assets/images/gallery/slide_3.jpg";
import Slide3 from "../../assets/images/gallery/slide_4.jpg";
import Slide4 from "../../assets/images/home2.jpeg";
import Autoplay from 'embla-carousel-autoplay';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative "> 
          <img src={Slide1} alt="landing image" className='opacity-1 w-full h-auto' />
          {/* <p className='absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-right text-[3rem] text-white'>
          
          </p> */}
        </div>
        <div className="embla__slide">
          <img src={Slide2} alt="landing image" />
        </div>
        <div className="embla__slide">
          <img src={Slide3} alt="landing image" />
        </div>
      </div>
    </div>
  );
}

