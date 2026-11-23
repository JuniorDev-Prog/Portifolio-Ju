import React, { useState } from 'react';
import { Box } from 'lucide-react';

export interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
  fallbackClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackLabel,
  fallbackClassName = '',
  loading,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel || 'Prévia de arte 3D'}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#16181D] via-[#111317] to-[#0C0C0C] border border-[#D7E2EA]/10 text-[#D7E2EA]/50 select-none ${className} ${fallbackClassName}`}
      >
        <Box className="w-7 h-7 mb-2 opacity-60" strokeWidth={1.5} />
        {fallbackLabel && (
          <span className="text-xs uppercase tracking-widest font-medium px-3 text-center">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
