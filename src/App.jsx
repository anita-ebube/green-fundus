import './App.css'
import { Services } from './components/Services/page'
import { Navbar } from './components/Navbar/page'
import { About } from './components/About/page'
import { EmblaCarousel } from './components/Home/EmblaCarousel'
import { Clients } from './components/client/page'
import { Mission } from './components/mission/page'
import { Footer } from './components/Footer/page'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <EmblaCarousel />
        <Mission />
        <About />
        <Clients />
        <Services />
        <Footer />
      </div>
    </>
  )
}

export default App
