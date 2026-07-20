import React from 'react';

export const Feedbacks: React.FC = () => {
    const feedbacks = [
        { text: "Sofia, boa noite! Minha irmã amou o seu trabalho, eu fiquei encantada vendo de perto, porque só tinha visto as fotos que você mandou. Muito obrigado mesmo, você faz arte. Em breve irei fazer outros pedidos! ❤️" },
        { text: "Oi Sofia! Eu não poderia deixar de registrar aqui o quanto fiquei encantada com o bastidor da minha filha. Quanta delicadeza e capricho! Ficou do jeitinho que imaginei. A embalagem super cheirosa e a cartinha cheia de carinho também ganharam o meu coração. Que Deus continue abençoando o seu lindo trabalho. Você de fato faz arte com as mãos. 💖🧶" },
        { text: "Boa noite! Recebi esse presente de uma amiga muito especial e estou passando para dizer que o seu trabalho é perfeito e muito lindo, ficamos emocionadas com tamanha perfeição, obrigada! 🥺🤩💖 Esse foi um dos melhores presentes que já recebemos." }
    ];

    return (
        <section className="relative bg-main pt-20 pb-20 px-6">

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
                        Feedbacks
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {feedbacks.map((item, index) => (
                        <div key={index} className="bg-contrast p-8 rounded-[42px] shadow-sm border border-accent">
                            <p className="text-[#5A3C2B] leading-relaxed text-lg italic text-center">
                                “ {item.text} ”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}