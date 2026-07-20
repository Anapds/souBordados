import React from 'react';

export const ChatWithMe: React.FC = () => {
    return (
        <section  className="bg-accent py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-12 md:pl-16 lg:pl-24">
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-title text-[#6B4A35]">
                        Converse comigo :
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-[#5A3C2B]">
                            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <a
                                href="https://instagram.com/ateliermertz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl underline decoration-2 underline-offset-4 hover:opacity-80"
                            >
                                ateliermertz
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-[#5A3C2B]">
                            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a
                                href="https://wa.me/5579981314382"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl underline decoration-2 underline-offset-4 hover:opacity-80"
                            >
                                (79) 981314382
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-[#5A3C2B]">
                            <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-2xl  decoration-2 underline-offset-4">
                                Aracaju, Sergipe.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[440px] h-[500px] mx-auto overflow-hidden rounded-t-full rounded-b-[40px] shadow-lg">
                    <video
                        src="/video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
};