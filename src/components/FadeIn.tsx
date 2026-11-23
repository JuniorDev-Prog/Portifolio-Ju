import React from 'react';
import { motion } from 'framer-motion';

type SupportedElement = 'div' | 'section' | 'nav' | 'header' | 'footer' | 'article' | 'p' | 'span' | 'h1' | 'h2' | 'h3';

const motionComponentCache: Record<string, React.ComponentType<any>> = {};

function getMotionElement(tag: SupportedElement) {
  if (!motionComponentCache[tag]) {
    motionComponentCache[tag] = motion.create(tag);
  }
  return motionComponentCache[tag];
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: SupportedElement;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
}) => {
  const MotionTag = getMotionElement(as);

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};
