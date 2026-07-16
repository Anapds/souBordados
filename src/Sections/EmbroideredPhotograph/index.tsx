import React from 'react';

{/*Imagens do porta Maternidade */ }
import desenhogente from '../../assets/images/desenhogente.jpeg';
import desenhogente2 from '../../assets/images/desenhogente2.jpeg';
import desenhogente3 from '../../assets/images/desenhogente3.jpeg';
import desenhogente4 from '../../assets/images/desenhogente4.jpeg';





const galleryImages = [
    desenhogente,
    desenhogente2,
    desenhogente3,
    desenhogente4,
];

const pricesData = [
    "16cm - a partir de R$ 320,00",
    "20cm - a partir de R$ 350,00",
    "22cm - a partir de R$ 380,00",
    "25cm - a partir de R$ 410,00",
];

export const EmbroideredPhotograph: React.FC = () => {
    return (
        <section id="catalog" className="w-full bg-accent py-20 md:py-28 font-sans text-[#4A3525]">
            <div className="max-w-6xl mx-auto px-6 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="md:col-span-6 space-y-6 md:space-y-8">

                        <h2 className="text-6xl md:text-7xl font-title tracking-wide">
                            Fotografia Bordada
                        </h2>

                        <div className="space-y-4 text-base md:text-lg leading-relaxed font-normal">
                            <p>
                                ✧ Deixe suas fotos ainda mais especiais!
                                Eternize, em bordado, os momentos mais marcantes da
                                sua vida, com a possibilidade de adicionar datas ou
                                frases personalizadas para tornar o projeto ainda mais
                                único e significativo.
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
                                    alt={`Bordado Porta Maternidade ${index + 1}`}
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

export default EmbroideredPhotograph;