import React from 'react';
import { HowToOrder } from './Sections/HowToOrder';
import Header from './Components/Header/Header';
import { Catalog } from './Sections/Catalog';
import WeddingRingHolder from './Sections/WeddingRingHolder';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-main text-neutral-800">
      <Header/>
      
      <HowToOrder />

      <Catalog />

      <WeddingRingHolder />

    </main>
  );
};

export default App;