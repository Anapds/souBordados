import React from 'react';

import acrilico from '../../assets/images/acrilico.jpeg';
import acrilico2 from '../../assets/images/acrilico2.jpeg';
import acrilico3 from '../../assets/images/acrilico3.jpeg';
import acrilico4 from '../../assets/images/acrilico4.jpeg';

const galleryImages = [
  acrilico,
  acrilico2,
  acrilico3,
  acrilico4,
];

const pricesData = [
  "20x20 - a partir de R$ 430,00",
  "25x25 - a partir de R$ 480,00",
  "30x30 - a partir de R$ 530,00",
  "35x35 - a partir de R$ 580,00",
];

export const EmbroideredAcrylic: React.FC = () => {
  return (
    <section className="w-full bg-main py-20 md:py-28 font-sans text-[#4A3525]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div className="md:col-span-6 space-y-6 md:space-y-8">

            <h2 className="text-6xl md:text-7xl font-title tracking-wide">
              Bordado no Acrílico
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed font-normal">
              <p>
                ✧ O bordado na moldura de acrílico une o
                toque artesanal ao visual moderno, resultando
                em uma peça delicada que eterniza memórias.

                Personalize com nomes, datas, frases e
                elementos que representam seu momento.

                O bordado pode ocupar todo o espaço da
                caixa ou ser menor, de acordo com o estilo que
                você escolher.
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

export default EmbroideredAcrylic;