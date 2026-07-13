import React from 'react';
import { HowToOrder } from './Sections/HowToOrder';
import Header from './Components/Header/Header';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-main text-neutral-800">
      <Header/>
      
      {/* Renderização da seção Como Encomendar */}
      <HowToOrder />

      {/* As demais seções (Catalog, Additional, Order) entrarão aqui em sequência */}
    </main>
  );
};

export default App;