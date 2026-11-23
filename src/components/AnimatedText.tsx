import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
};

export interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const wordsWithOffsets = useMemo(() => {
    const words = text.split(' ');
    let cursor = 0;
    const totalChars = text.length;

    const mapped = words.map((word, wordIdx) => {
      const chars = word.split('').map((char) => {
        const start = cursor / totalChars;
        cursor += 1;
        const end = cursor / totalChars;
        return { char, range: [start, end] as [number, number] };
      });
      // Advance cursor for the space after each word except the last
      if (wordIdx < words.length - 1) {
        cursor += 1;
      }
      return { word, chars, hasTrailingSpace: wordIdx < words.length - 1 };
    });

    return mapped;
  }, [text]);

  return (
    <p ref={paragraphRef} className={className} aria-label={text}>
      {wordsWithOffsets.map((wordObj, wIndex) => (
        <span key={wIndex} className="inline-block whitespace-nowrap">
          {wordObj.chars.map((charObj, cIndex) => (
            <AnimatedChar
              key={`${wIndex}-${cIndex}`}
              char={charObj.char}
              progress={scrollYProgress}
              range={charObj.range}
            />
          ))}
          {wordObj.hasTrailingSpace && <span>&nbsp;</span>}
        </span>
      ))}
    </p>
  );
};
