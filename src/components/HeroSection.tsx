import React from 'react';
import { HERO_PORTRAIT_URL } from '../data/portfolio';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ResilientImage } from './ResilientImage';

export interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex flex-col justify-between bg-[#0C0C0C] overflow-x-clip"
    >
      {/* Top Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="relative z-20 w-full">
        <nav
          aria-label="Navegação principal"
          className="flex items-center justify-between w-full px-6 md:px-10 pt-6 md:pt-8"
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] whitespace-nowrap hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
          >
            Sobre
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] whitespace-nowrap hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
          >
            Preços
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] whitespace-nowrap hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm"
          >
            Projetos
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] whitespace-nowrap hover:opacity-70 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] rounded-sm cursor-pointer bg-transparent border-0"
          >
            Contato
          </button>
        </nav>
      </FadeIn>

      {/* Massive Hero Heading */}
      <div className="w-full overflow-hidden relative z-0 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.5vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.2vw] mt-6 sm:mt-4 md:-mt-3 select-none">
            Oi, sou junior
          </h1>
        </FadeIn>
      </div>

      {/* Centered Magnetic Hero Portrait with Studio Backlight */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-auto">
        <div
          aria-hidden="true"
          className="hero-portrait-glow absolute -inset-x-16 -inset-y-12 rounded-full blur-3xl pointer-events-none -z-10"
        />
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            magnetStrength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            wrapperClassName="w-full block"
            innerClassName="w-full"
          >
            <ResilientImage
              src={HERO_PORTRAIT_URL}
              alt="Junior — Retrato 3D"
              fallbackLabel="Junior — Criador 3D"
              fallbackClassName="aspect-[3/4] rounded-3xl"
              className="w-full h-auto block object-contain object-bottom select-none hero-portrait-mask drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[175px] sm:max-w-[235px] md:max-w-[280px]">
            um criador 3d movido por criar projetos marcantes e inesquecíveis
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
