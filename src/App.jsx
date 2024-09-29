import './App.css'
import { Values } from './components/Values/page'
import { Navbar } from './components/Navbar/page'
import { Services } from './components/Services/page'
import { EmblaCarousel } from './components/Home/EmblaCarousel'
import { Clients } from './components/client/page'
import { Mission } from './components/mission/page'
import { Gallery } from './components/Gallery/page';
import { Footer } from './components/Footer/page'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <EmblaCarousel />
        <Mission />
        <Services />
        
        <Values />
        <Gallery />
        <Clients />
        <Footer />
      </div>
    </>
  )
}

export default App
