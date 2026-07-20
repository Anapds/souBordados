import React from 'react';

export const ImportantInfo: React.FC = () => {
    return (
        <section className="relative bg-main pt-24 pb-20 px-6 text-[#4A3525]">

           <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg className="block w-full h-[210px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path 
                        d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z" 
                        className="fill-contrast" 
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-title text-[#6B4A35]">
                        Importante!
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base md:text-lg leading-relaxed">
                    <div className="space-y-6">
                        <p>✧ O envio dos produtos será realizado somente após a confirmação do pagamento integral (100%) do valor total do projeto.</p>
                        <p>✧ Após a aprovação da arte gráfica e o início da produção, não serão permitidas alterações no layout ou nas cores do bordado.</p>
                        <p>✧ As cores do bordado podem apresentar pequenas variações em relação à arte digital, devido às características dos materiais utilizados.</p>
                        <p>✧ Os layouts desenvolvidos ao longo do pedido poderão ser reproduzidos em novos projetos.</p>
                    </div>

                    <div className="space-y-6">
                        <p>✧ Cancelamentos solicitados após a criação da arte gráfica terão direito a reembolso de 50% do valor inicial pago, desde que requeridos até esta etapa. Após esse ponto, devido à natureza personalizada e artesanal do produto, não são aceitas devoluções, trocas ou reembolsos.</p>
                        <p>✧ Direitos de divulgação: ao efetuar uma compra conosco, você autoriza o uso de imagens dos produtos personalizados adquiridos para fins de divulgação.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};