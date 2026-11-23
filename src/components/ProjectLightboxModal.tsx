import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Globe, Images, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';
import type { ProjectModalTab } from './ProjectsSection';
import { ContactButton } from './ContactButton';
import { ResilientImage } from './ResilientImage';

export interface ProjectLightboxModalProps {
  project: ProjectItem | null;
  initialTab?: ProjectModalTab;
  initialImageIndex?: number;
  onClose: () => void;
  onStartSimilar: (projectName: string) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  initialTab = 'live',
  initialImageIndex = 0,
  onClose,
  onStartSimilar,
}) => {
  const [activeTab, setActiveTab] = useState<ProjectModalTab>(initialTab);
  const [activeIndex, setActiveIndex] = useState(initialImageIndex);

  useEffect(() => {
    setActiveTab(initialTab);
    setActiveIndex(initialImageIndex);
  }, [project, initialTab, initialImageIndex]);

  const images = project ? [project.col1Images[0], project.col1Images[1]] : [];

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (activeTab === 'gallery') {
        if (e.key === 'ArrowRight') {
          setActiveIndex((prev) => (prev + 1) % images.length);
        }
        if (e.key === 'ArrowLeft') {
          setActiveIndex((prev) => (prev + images.length - 1) % images.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, activeTab, images.length, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl rounded-[32px] sm:rounded-[44px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-5 sm:p-8 text-[#D7E2EA] shadow-2xl"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#D7E2EA]/15">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-black leading-none text-[#D7E2EA] tabular-nums text-4xl sm:text-6xl">
                  {project.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/60 font-light">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role}</span>
                  </div>
                  <h2
                    id="project-lightbox-title"
                    className="font-medium uppercase tracking-tight text-2xl sm:text-4xl text-[#D7E2EA] leading-tight mt-0.5"
                  >
                    {project.name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Mode Toggle: Site ao Vivo vs Galeria */}
                <div className="flex items-center gap-1 p-1 rounded-full bg-[#151619] border border-[#D7E2EA]/20">
                  <button
                    type="button"
                    onClick={() => setActiveTab('live')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === 'live'
                        ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                        : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA]'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Site ao Vivo
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('gallery')}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      activeTab === 'gallery'
                        ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                        : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA]'
                    }`}
                  >
                    <Images className="w-3.5 h-3.5" />
                    Galeria
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar prévia do projeto"
                  className="w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors shrink-0 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Interactive Stage */}
            {activeTab === 'live' ? (
              <div className="mt-5 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#D7E2EA]/20 bg-[#121316]">
                <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-[#D7E2EA]/10 text-xs text-[#D7E2EA]/70">
                  <span className="truncate font-light tracking-wide">{project.liveDisplayUrl}</span>
                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 uppercase tracking-wider text-[#D7E2EA] hover:opacity-75 transition-opacity whitespace-nowrap"
                    >
                      Abrir Site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 uppercase tracking-wider text-[#D7E2EA]/80 hover:text-[#D7E2EA] transition-colors whitespace-nowrap"
                    >
                      Código GitHub
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <iframe
                  src={project.liveUrl}
                  title={`Visualização interativa — ${project.name}`}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="w-full h-[56vh] sm:h-[60vh] border-0 bg-[#0C0C0C]"
                />
              </div>
            ) : (
              <div className="relative mt-5 rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#141518] aspect-[16/10] w-full">
                <ResilientImage
                  src={images[activeIndex]}
                  alt={`${project.name} — cena ${activeIndex + 1}`}
                  fallbackLabel={`${project.name} · Cena 0${activeIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev + images.length - 1) % images.length)
                    }
                    aria-label="Imagem anterior"
                    className="pointer-events-auto w-11 h-11 rounded-full bg-[#0C0C0C]/75 border border-[#D7E2EA]/40 flex items-center justify-center text-[#D7E2EA] hover:bg-[#0C0C0C] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
                    aria-label="Próxima imagem"
                    className="pointer-events-auto w-11 h-11 rounded-full bg-[#0C0C0C]/75 border border-[#D7E2EA]/40 flex items-center justify-center text-[#D7E2EA] hover:bg-[#0C0C0C] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Footer Strip: Summary + External Links + CTA */}
            <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-5">
              {activeTab === 'gallery' ? (
                <div className="flex items-center gap-3 shrink-0">
                  {images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Selecionar imagem ${idx + 1}`}
                      className={`w-20 h-14 sm:w-24 sm:h-16 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeIndex === idx
                          ? 'border-[#D7E2EA] opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-80'
                      }`}
                    >
                      <ResilientImage
                        src={imgUrl}
                        alt={`${project.name} miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/35 px-5 py-2.5 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
                >
                  Ver no GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <p className="text-sm sm:text-base font-light text-[#D7E2EA]/75 max-w-lg leading-relaxed">
                {project.summary}
              </p>

              <div className="shrink-0">
                <ContactButton
                  label="Solicitar Similar"
                  onClick={() => onStartSimilar(project.name)}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
