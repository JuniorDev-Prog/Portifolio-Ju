/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';
import { ProjectsSection, type ProjectModalTab } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import type { ProjectItem } from './data/portfolio';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  const [contactOpen, setContactOpen] = useState(false);
  const [contactServiceHint, setContactServiceHint] = useState('');
  const [activeProject, setActiveProject] = useState<{
    project: ProjectItem;
    initialTab: ProjectModalTab;
    initialImageIndex: number;
  } | null>(null);

  const handleOpenContact = (serviceHint = '') => {
    setContactServiceHint(serviceHint);
    setContactOpen(true);
  };

  const handleSelectProject = (
    project: ProjectItem,
    initialTab: ProjectModalTab = 'live',
    initialImageIndex = 0
  ) => {
    setActiveProject({ project, initialTab, initialImageIndex });
  };

  const handleStartSimilarProject = () => {
    setActiveProject(null);
    handleOpenContact('Web Design');
  };

  return (
    <main className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip">
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left pointer-events-none bg-gradient-to-r from-[#BBCCD7] via-[#B600A8] to-[#BE4C00] shadow-[0_0_12px_rgba(182,0,168,0.55)]"
      />
      <HeroSection onOpenContact={() => handleOpenContact()} />
      <MarqueeSection />
      <AboutSection onOpenContact={() => handleOpenContact()} />
      <ServicesSection />
      <ProjectsSection
        onSelectProject={handleSelectProject}
        onOpenContact={() => handleOpenContact()}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        initialService={contactServiceHint}
      />

      <ProjectLightboxModal
        project={activeProject?.project ?? null}
        initialTab={activeProject?.initialTab ?? 'live'}
        initialImageIndex={activeProject?.initialImageIndex ?? 0}
        onClose={() => setActiveProject(null)}
        onStartSimilar={handleStartSimilarProject}
      />
    </main>
  );
}
