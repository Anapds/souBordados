import React from 'react';


interface StepItem {
  number: string;
  description: string;
}


const stepsData: StepItem[] = [
  {
    number: "1",
    description: "Me conte suas ideias: tamanho do bastidor, tema, paleta de cores, inspirações, tudo isso me ajudará a criar uma arte única para você!"
  },
  {
    number: "2",
    description: "A vaga na agenda será ocupada após o pagamento de 30% do valor total do projeto (o valor remanescente fica para o dia do envio)."
  },
  {
    number: "3",
    description: "Uma arte gráfica baseada na sua ideia será enviada para você (prazo a combinar) com possibilidade de ajustes, se necessário."
  },
  {
    number: "4",
    description: "Após aprovação será dado inicio ao prazo de produção que são de aproximadamente 7 dias úteis (a data de entrega será combinada conforme a disponibilidade em agenda)."
  }
];

export const HowToOrder: React.FC = () => {
  return (
    <section id="how-to-order" className="relative bg-main pt-12 pb-24 font-sans text-neutral-800">


      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[140px] md:h-[170px] text-contrast"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C200,120 1000,120 1200,0 L1200,0 L0,0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">


        <h2 className="text-4xl md:text-7xl font-title text-center text-[#4A3525] mb-16 md:mb-24">
          Como encomendar?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {stepsData.map((step) => (
            <div key={step.number} className="flex items-start gap-6">


              <div className="flex-shrink-0 w-16 h-20 bg-secondary rounded-b-full flex items-center justify-center shadow-sm">
                <span className="font-title text-3xl md:text-4xl text-white pt-2">
                  {step.number}
                </span>
              </div>


              <p className="text-base md:text-lg leading-relaxed text-neutral-700 pt-2">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};