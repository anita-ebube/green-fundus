import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Slide from "../../assets/images/slide_9.jpg";
import Autoplay from 'embla-carousel-autoplay';
import { Navbar } from '../../components/Navbar/page';
import { Footer } from '../../components/Footer/page';
import { Mission } from '../../components/Mission/page';
import { Services } from '../../components/Services/page';

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div>
      <Navbar />
      <div>
        <img src={Slide} alt="landing image" className='w-full h-auto max-h-screen object-cover' />
      </div>

      <Mission />
      <Services />
      <Footer />
    </div>
  );
}

