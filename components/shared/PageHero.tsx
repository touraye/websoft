// components/PageHero.tsx
import React from 'react';
import Image from 'next/image';

interface PageHeroProps {
  backgroundImage: string;
  overlayBackgroundColor?: string;
  className?: string;
}

/**
 * A reusable hero component designed to be an absolute background.
 */
const PageHero: React.FC<PageHeroProps> = ({
  backgroundImage,
  overlayBackgroundColor,
  className = '',
}) => {
  return (
    <section
      className={`absolute top-0 left-0 right-0 z-[-1] min-h-[227px] overflow-hidden container mx-auto max-w-6xl ${className}`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Page hero background"
        fill
        priority
        className="object-contain w-full h-auto"
      />

      {/* Optional Color Overlay */}
      {overlayBackgroundColor && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayBackgroundColor }}
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default PageHero;