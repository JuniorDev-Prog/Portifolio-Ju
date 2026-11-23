import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { GITHUB_PROFILE_URL, PROJECTS, type ProjectItem } from '../data/portfolio';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ResilientImage } from './ResilientImage';

export type ProjectModalTab = 'live' | 'gallery';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelectProject: (
    project: ProjectItem,
    initialTab?: ProjectModalTab,
    initialImageIndex?: number
  ) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  onSelectProject,
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const rangeStart = index / totalCards;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] min-h-[640px] sticky top-24 md:top-32 flex items-start justify-center">
      <motion.article
        style={{
          scale,
          top: `${index * 28}px`,
          willChange: 'transform',
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top shadow-[0_24px_80px_rgba(0,0,0,0.65)]"
      >
        {/* Top Row: Number, Category + Name, GitHub + Live Project Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-7 md:gap-10">
            <span className="font-black leading-none text-[#D7E2EA] tabular-nums shrink-0 text-[clamp(2.5rem,7.5vw,110px)]">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm md:text-base">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase leading-tight tracking-tight text-[clamp(1.1rem,2.4vw,2.2rem)]">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir código de ${project.name} no GitHub`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/35 text-[#D7E2EA]/85 font-medium uppercase tracking-widest whitespace-nowrap shrink-0 px-5 py-3 text-xs sm:text-sm transition-colors duration-200 hover:border-[#D7E2EA] hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA]"
            >
              GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <LiveProjectButton onClick={() => onSelectProject(project, 'live', 0)} />
          </div>
        </div>

        {/* Bottom Row: Two-Column Grid (40% Images / 60% Live Website Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-3 sm:gap-4 md:gap-5">
          {/* Left Column: 2 Stacked Visual Previews */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <button
              type="button"
              onClick={() => onSelectProject(project, 'gallery', 0)}
              aria-label={`Ver prévia 1 de ${project.name}`}
              className="group relative block w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141518] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] cursor-pointer"
            >
              <ResilientImage
                src={project.col1Images[0]}
                alt={`${project.name} — tela principal`}
                loading="lazy"
                fallbackLabel={`${project.name} · 01`}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(project, 'gallery', 1)}
              aria-label={`Ver prévia 2 de ${project.name}`}
              className="group relative block w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141518] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] cursor-pointer"
            >
              <ResilientImage
                src={project.col1Images[1]}
                alt={`${project.name} — destaque visual`}
                loading="lazy"
                fallbackLabel={`${project.name} · 02`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </button>
          </div>

          {/* Right Column: Live Website Embed Preview */}
          <div
            onClick={() => onSelectProject(project, 'live', 0)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectProject(project, 'live', 0);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Abrir site interativo de ${project.name}`}
            className="group relative flex flex-col w-full h-[300px] md:h-full min-h-[300px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#141518] border border-[#D7E2EA]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] cursor-pointer"
          >
            {/* Minimal Browser Top Bar */}
            <div className="relative z-10 flex items-center justify-between gap-3 px-6 py-3 bg-[#121316]/95 border-b border-[#D7E2EA]/10 shrink-0">
              <span className="text-xs font-light tracking-wider text-[#D7E2EA]/70 truncate">
                {project.liveDisplayUrl}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-[#D7E2EA]/80 group-hover:text-white transition-colors shrink-0 whitespace-nowrap">
                Interagir
                <Maximize2 className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Scaled Non-Scroll-Trapping Live Site Frame */}
            <div className="relative flex-1 w-full overflow-hidden bg-[#0C0C0C]">
              <iframe
                src={project.liveUrl}
                title={`Site ao vivo — ${project.name}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
                className="absolute top-0 left-0 w-[166.67%] h-[166.67%] origin-top-left scale-[0.6] border-0 pointer-events-none bg-[#0C0C0C]"
              />
              {/* Subtle Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export interface ProjectsSectionProps {
  onSelectProject: (
    project: ProjectItem,
    initialTab?: ProjectModalTab,
    initialImageIndex?: number
  ) => void;
  onOpenContact: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-24"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16 md:mb-20">
          Projetos
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative w-full pb-24 sm:pb-32">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

      {/* Quiet Editorial Footer */}
      <footer className="max-w-6xl mx-auto pt-12 border-t border-[#D7E2EA]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60">
        <span>© 2026 Junior — Criador 3D</span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#D7E2EA] transition-colors duration-200 whitespace-nowrap"
          >
            GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="#hero"
            className="hover:text-[#D7E2EA] transition-colors duration-200 whitespace-nowrap"
          >
            Voltar ao Topo
          </a>
          <a
            href="#services"
            className="hover:text-[#D7E2EA] transition-colors duration-200 whitespace-nowrap"
          >
            Serviços
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-[#D7E2EA] transition-colors duration-200 uppercase tracking-wider whitespace-nowrap cursor-pointer bg-transparent border-0"
          >
            Contato
          </button>
        </div>
      </footer>
    </section>
  );
};
