import React from 'react';

export const QualityDurability: React.FC = () => {
    return (
        <section className="relative bg-accent pt-24 pb-20 px-6 text-[#4A3525]">

           <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg className="block w-full h-[200px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path 
                        d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z" 
                        className="fill-contrast" 
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-title text-[#6B4A35]">
                        Qualidade e durabilidade
                    </h2>
                </div>

                <div className="w-full flex flex-col items-center px-6">
                    {/* Aumentamos o max-w para permitir que o texto fique mais extenso */}
                    {/* Removi o 'text-left' forçado para que ele siga o fluxo natural do parágrafo */}
                    <div className="max-w-4xl w-full text-left space-y-8 text-base md:text-lg leading-relaxed">

                        <div className="flex justify-center">
                            <p className="inline-block border-b border-[#4A3525] pb-1">
                                Todos os materiais utilizados são de alta qualidade, garantindo um bordado bonito e duradouro:
                            </p>
                        </div>

                        <p>✧ Confeccionadas em algodão cru premium e bordadas com fio 100% algodão egípcio, as peças oferecem textura delicada, excelente resistência e um acabamento sofisticado.</p>
                        <p>✧ Para maior conservação, cada bordado recebe uma camada de spray impermeabilizante, que auxilia na proteção contra líquidos e poeira.</p>
                        <p>✧ Os bastidores são produzidos em madeira natural envernizada, garantindo resistência e durabilidade.</p>
                        <p>✧ O acabamento do verso é totalmente revestido, proporcionando uniformidade, acabamento limpo e maior proteção para a peça.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};