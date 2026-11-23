import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MARQUEE_IMAGES } from '../data/portfolio';
import { ResilientImage } from './ResilientImage';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  const row1 = useMemo(() => {
    const firstEleven = MARQUEE_IMAGES.slice(0, 11);
    return [...firstEleven, ...firstEleven, ...firstEleven];
  }, []);

  const row2 = useMemo(() => {
    const remainingTen = MARQUEE_IMAGES.slice(11);
    return [...remainingTen, ...remainingTen, ...remainingTen];
  }, []);

  useEffect(() => {
    let rafId: number | null = null;

    const updateOffset = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculated = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculated);
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateOffset);
      }
    };

    updateOffset();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Prévias de projetos em movimento"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: moves RIGHT on scroll */}
        <div className="flex justify-center overflow-visible">
          <div
            className="flex flex-nowrap gap-3 w-max"
            style={{
              transform: `translateX(${offset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row1.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141518]"
              >
                <ResilientImage
                  src={src}
                  alt={`Prévia de projeto 3D ${idx + 1}`}
                  loading="lazy"
                  fallbackLabel={`Reel 3D ${(idx % 11) + 1}`}
                  className="w-[420px] h-[270px] rounded-2xl object-cover block"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div className="flex justify-center overflow-visible">
          <div
            className="flex flex-nowrap gap-3 w-max"
            style={{
              transform: `translateX(${-(offset - 200)}px)`,
              willChange: 'transform',
            }}
          >
            {row2.map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#141518]"
              >
                <ResilientImage
                  src={src}
                  alt={`Prévia de projeto 3D ${idx + 12}`}
                  loading="lazy"
                  fallbackLabel={`Reel 3D ${(idx % 10) + 12}`}
                  className="w-[420px] h-[270px] rounded-2xl object-cover block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
