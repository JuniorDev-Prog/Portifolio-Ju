import React from 'react';
import { SERVICES } from '../data/portfolio';
import { FadeIn } from './FadeIn';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-36 md:pb-44"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Serviços
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={30}
            className="border-t border-[rgba(12,12,12,0.15)] last:border-b"
          >
            <div className="flex items-start sm:items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12">
              <span className="font-black leading-none text-[#0C0C0C] tabular-nums shrink-0 text-[clamp(3rem,10vw,140px)]">
                {service.number}
              </span>

              <div className="flex flex-col justify-center">
                <h3 className="font-medium uppercase text-[#0C0C0C] leading-tight tracking-tight text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60 mt-2 sm:mt-3 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
