import './App.css';
import { EmblaCarousel } from './pages/Home/EmblaCarousel';
import { Gallery } from './pages/Gallery/page';
import { Footer } from './components/Footer/page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/about'; 
import { Product } from './pages/Product/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<EmblaCarousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
        {/* Add footer or other components as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
