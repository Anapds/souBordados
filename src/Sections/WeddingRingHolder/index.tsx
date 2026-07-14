import React from 'react';

import portaAlianca1 from '../../assets/images/portaAlianca.jpeg';
import portaAlianca2 from '../../assets/images/portaalianca2.jpeg';
import portaAlianca3 from '../../assets/images/portaAlianca3.jpeg';
import portaAlianca4 from '../../assets/images/desenhogente4.jpeg'; 

const galleryImages = [
  portaAlianca1,
  portaAlianca2,
  portaAlianca3,
  portaAlianca4,
];

const pricesData = [
  "16cm - a partir de R$ 340,00",
  "20cm - a partir de R$ 370,00",
  "22cm - a partir de R$ 400,00",
  "25cm - a partir de R$ 430,00",
];

export const WeddingRingHolder: React.FC = () => {
  return (
    <section className="w-full bg-main py-20 md:py-28 font-sans text-[#4A3525]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="md:col-span-6 space-y-6 md:space-y-8">
            
            <h2 className="text-6xl md:text-7xl font-title tracking-wide">
              Porta-alianças
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed font-normal">
              <p>
                ✧ Simbolizando a união e o amor eterno, o porta-alianças é a peça que completa o grande dia.
              </p>
              <p>
                Ele traz sofisticação e emoção ao momento da troca de alianças, tornando-se uma lembrança que acompanha o casal por toda a vida, sempre relembrando o compromisso que iniciaram juntos.
              </p>
              <p>
                Totalmente personalizável, pode ser criado de acordo com a identidade visual do casamento.
              </p>
            </div>

            <div className="pt-2 space-y-1.5 text-base md:text-lg font-medium">
              {pricesData.map((price, index) => (
                <p key={index}>✧ {price}</p>
              ))}
            </div>

            <p className="text-xs md:text-sm text-[#4A3525]/80 pt-4">
              *O valor final será calculado conforme a arte selecionada
            </p>

          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-6 md:gap-8">
            {galleryImages.map((imgUrl, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-t-full shadow-sm bg-black/5 aspect-[4/5]"
              >
                <img 
                  src={imgUrl} 
                  alt={`Bordado Porta Alianças ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WeddingRingHolder;