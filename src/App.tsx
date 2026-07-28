import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import fotoSouBordados from "./assets/images/atelierMertz.png";
import fotoMobile from "./assets/images/fotoMobile.png"; 

import { HowToOrder } from './Sections/HowToOrder';
import { Catalog } from './Sections/Catalog';
import WeddingRingHolder from './Sections/WeddingRingHolder';
import EmbroideredPhotograph from './Sections/EmbroideredPhotograph';
import EmbroideredAcrylic from './Sections/EmbroideredAcrylic';
import Additional from './Sections/Additional';
import AdditionalHandle from './Sections/AdditionalHandle';
import AdditionalEasel from './Sections/AdditionalEasel';
import AdditionalGlassFrame from './Sections/AdditionalGlassFrame';

import OrderPage from './Pages/OrderPages';
import { ScrollToTop } from './Components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen bg-main text-brown">
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <div className="w-full overflow-hidden pt-10">
                <picture>
                  <source media="(min-width: 768px)" srcSet={fotoSouBordados} />
                  
                  <img
                    src={fotoMobile}
                    alt="Banner Sou Bordados"
                    className="w-full object-cover max-h-[500px]"
                  />
                </picture>
              </div>

              <HowToOrder />
              <Catalog />
              <WeddingRingHolder />
              <EmbroideredPhotograph />
              <EmbroideredAcrylic />
              <Additional />
              <AdditionalHandle />
              <AdditionalEasel />
              <AdditionalGlassFrame />
            </>
          } />

          {/* Rota da página Encomendar */}
          <Route path="/encomendar" element={<OrderPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;