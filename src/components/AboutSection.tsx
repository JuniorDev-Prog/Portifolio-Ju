import React from 'react';
import { ABOUT_DECORATIVE_IMAGES } from '../data/portfolio';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { ResilientImage } from './ResilientImage';

export interface AboutSectionProps {
  onOpenContact: () => void;
}

const ABOUT_TEXT =
  'Com mais de cinco anos de experiência em design, foco em branding, web design e experiência do usuário. Gosto muito de trabalhar com empresas que buscam se destacar e apresentar sua melhor imagem. Vamos construir algo incrível juntos!';

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-x-clip"
    >
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <ResilientImage
          src={ABOUT_DECORATIVE_IMAGES.moon}
          alt="Elemento 3D decorativo de lua"
          loading="lazy"
          className="w-full h-auto block object-contain"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none z-0"
      >
        <ResilientImage
          src={ABOUT_DECORATIVE_IMAGES.object}
          alt="Objeto 3D decorativo"
          loading="lazy"
          className="w-full h-auto block object-contain"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none z-0"
      >
        <ResilientImage
          src={ABOUT_DECORATIVE_IMAGES.lego}
          alt="Peça 3D decorativa"
          loading="lazy"
          className="w-full h-auto block object-contain"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none z-0"
      >
        <ResilientImage
          src={ABOUT_DECORATIVE_IMAGES.group}
          alt="Composição 3D decorativa"
          loading="lazy"
          className="w-full h-auto block object-contain"
        />
      </FadeIn>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
              Sobre mim
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
