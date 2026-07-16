import React from 'react';
import { HowToOrder } from './Sections/HowToOrder';
import Header from './Components/Header/Header';
import { Catalog } from './Sections/Catalog';
import WeddingRingHolder from './Sections/WeddingRingHolder';
import EmbroideredPhotograph from './Sections/EmbroideredPhotograph';
import EmbroideredAcrylic from './Sections/EmbroideredAcrylic';
import Additional from './Sections/Additional';
import AdditionalHandle from './Sections/AdditionalHandle';
import AdditionalEasel from './Sections/AdditionalEasel';
import AdditionalGlassFrame from './Sections/AdditionalGlassFrame';


export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-main text-neutral-800">
      <Header />

      <HowToOrder />

      <Catalog />

      <WeddingRingHolder />


      <EmbroideredPhotograph />
      
      <EmbroideredAcrylic />

      <Additional />

      <AdditionalHandle />

      <AdditionalEasel />

      <AdditionalGlassFrame />
    </main>
  );
};

export default App;