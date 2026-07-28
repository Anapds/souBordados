import React from 'react';

import macrameComFranja from '../../assets/images/macramecomfranja.jpeg';
import macrameSemFranja from '../../assets/images/macramesemfranja.jpeg';
import macrameFotoGrande from '../../assets/images/macramefotgrande.jpeg';

export const Additional: React.FC = () => {
  return (
    <section id="additional" className="w-full bg-accent font-sans text-brown overflow-hidden">

      <div className="w-full mx-auto md:pl-48">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[650px]">
          
          <div className="md:col-span-6 px-6 md:px-8 py-16 md:py-20 flex flex-col justify-center items-center">
            
            <div className="w-full max-w-lg space-y-10">
              
              <div>
                <h2 className="text-7xl md:text-[86px] font-title tracking-wide leading-none mb-2 md:mb-4">
                  Adicionais :
                </h2>
                <h3 className="text-7xl md:text-[86px] font-title tracking-wide leading-none mb-2 md:mb-4">
                  - Nó
                </h3>

                <div className="space-y-4 text-base md:text-lg leading-relaxed font-normal">
                  <p>
                    ✧ Confeccionada à mão com barbante 32 fios, traz charme e delicadeza ao seu bordado.
                    <br />
                    Disponível em diferentes cores, consulte as opções no momento da encomenda.
                  </p>
                </div>

                <p className="text-base md:text-lg font-medium mt-6">
                  ✧ Adicional de R$ 45,00
                </p>
              </div>

              <div className="w-full max-w-[340px] md:max-w-[380px] mx-auto md:mx-0 grid grid-cols-2 gap-4 md:gap-22 pt-2">
                
                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-t-full shadow-sm bg-black/5 aspect-[4/5] mb-3">
                    <img 
                      src={macrameComFranja} 
                      alt="Alça de macramê com franja" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="font-title text-xl md:text-5xl text-center mt-2">
                    Com franja
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-t-full shadow-sm bg-black/5 aspect-[4/5] mb-3">
                    <img 
                      src={macrameSemFranja} 
                      alt="Alça de macramê sem franja" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="font-title text-3xl md:text-5xl text-center mt-2">
                    Sem franja
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className="md:col-span-6 max-w-lg w-full h-full relative flex justify-center mx-auto md:mx-0">
            
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={macrameFotoGrande} 
                alt="Detalhe artesanal alça de macramê" 
                className="w-full h-full object-cover"
              />

              <div className="absolute top-[6%] bottom-[6%] left-[8%] right-[8%] border md:border-[1.5px] border-white rounded-t-full pointer-events-none" />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Additional;