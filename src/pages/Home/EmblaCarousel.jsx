import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Home from '../../assets/images/home2.jpeg'
import Slide2 from "../../assets/images/gallery/slide_3.jpg";
import Slide3 from "../../assets/images/gallery/slide_4.jpg";
import Slide from "../../assets/images/home2.jpeg";
import Autoplay from 'embla-carousel-autoplay';
import { Navbar } from '../../components/Navbar/page';
import { Footer } from '../../components/Footer/page';
import { Mission } from '../../components/Mission/page';
import { Services } from '../../components/Services/page';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div>
    <Navbar/>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative "> 
          <img src={Home} alt="landing image" className='opacity-1 w-full h-auto' />
        </div>
        <div className="embla__slide">
          <img src={Slide2} alt="landing image" />
        </div>
        <div className="embla__slide">
          <img src={Slide3} alt="landing image" />
        </div>
      </div>
    </div>
    <Mission />
    <Services />
    <Footer />
    </div>
  );
}

