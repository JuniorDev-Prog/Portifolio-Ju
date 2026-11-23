import React from 'react';

export interface ContactButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  label = 'Fale Comigo',
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`contact-btn-surface rounded-full text-white font-medium uppercase tracking-widest whitespace-nowrap shrink-0 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#D7E2EA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C] cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
};
