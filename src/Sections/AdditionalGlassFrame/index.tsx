import React from 'react';

import molduraMadeira from '../../assets/images/molduraMadeira.jpeg';

export const AdditionalGlassFrame: React.FC = () => {
    return (
        <section id="additional" className="w-full bg-main font-sans text-[#4A3525] overflow-hidden">
            <div className="w-full mx-auto pl-8 md:pl-48">
                <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[650px]">

                    <div className="md:col-span-6 px-8 py-16 md:py-20 flex flex-col justify-center items-center">

                        <div className="w-full max-w-lg space-y-10">

                            <div>
                                <h2 className="text-7xl md:text-[86px] font-title tracking-wide leading-none mb-2 md:mb-4">
                                    Adicionais :
                                </h2>
                                <h3 className="text-7xl md:text-[86px] font-title tracking-wide leading-none mb-2 md:mb-4">
                                    - Moldura de Vidro
                                </h3>

                                <div className="space-y-4 text-base md:text-lg leading-relaxed font-normal">
                                    <p>
                                        ✧ A moldura dá um acabamento refinado ao bordado e ainda protege a peça contra poeira e danos, mantendo a arte bonita por muito mais tempo.
                                        Disponível em diferentes tamanhos e cores, consulte as opções disponíveis para escolher a que mais combina com seu estilo.
                                    </p>
                                </div>

                                <p className="text-base md:text-lg font-medium mt-6">
                                    ✧ Adicional de R$ 100,00
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="md:col-span-6 max-w-lg w-full h-full flex items-center justify-center relative">

                        <img
                            src={molduraMadeira}
                            alt="Detalhe artesanal moldura de madeira"
                            className="w-full h-full object-cover"
                        />


                        <div className="absolute top-[8%] bottom-[8%] left-[10%] right-[10%] border md:border-[1.5px] border-white rounded-t-full pointer-events-none" />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdditionalGlassFrame;