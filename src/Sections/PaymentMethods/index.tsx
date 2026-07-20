import React from 'react';

export const PaymentMethods: React.FC = () => {
    return (
        <section id="encomendar" className="w-full bg-accent py-20 text-[#4A3525] relative">

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg className="block w-full h-[210px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z"
                        className="fill-contrast"
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                <div className="w-fit text-left">
                    <div className="inline-block pb-2 mb-8 pl-15 sm:pl-6 md:pl-0">
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-title tracking-wide">
                            Formas de pagamento
                        </h2>
                    </div>

                    <div className="space-y-3 text-lg md:text-xl">
                        <p>✧ Pix</p>
                        <p>✧ Transferência bancária</p>
                        <p>✧ Pagamento via link de crédito (com juros)</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-contrast py-4 my-16">
                <h2 className="text-6xl md:text-7xl font-title tracking-wide text-center">
                    Envio
                </h2>
            </div>

            <div className="flex flex-col items-center w-full px-6">
                <div className="w-full max-w-3xl text-left space-y-4 text-base md:text-lg leading-relaxed">
                    <p className="break-words">✧ Os pedidos são enviados via Correios para todo o Brasil ou disponíveis para entrega local em Aracaju.</p>
                    <p className="break-words">✧ Para cálculo do frete, informe o seu CEP no momento da solicitação.</p>
                    <p className="break-words">✧ Para garantir sua vaga na agenda, é necessário o pagamento de 30% do valor total do projeto no ato da contratação.</p>
                    <p className="break-words">✧ O valor remanescente fica para o dia do envio do projeto.</p>
                </div>
            </div>
        </section>
    );
};