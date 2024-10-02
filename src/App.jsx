import './App.css';
import { EmblaCarousel } from './pages/Home/EmblaCarousel';
import { Gallery } from './pages/Gallery/page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Product } from './pages/Product/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<EmblaCarousel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
