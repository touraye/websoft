// components/SectionHeading.tsx
import React from 'react';

/**
 * Props for the SectionHeading component.
 */
interface SectionHeadingProps {
  /**
   * The color for the vertical line and tagline text. 
   * Accepts any valid CSS color string (e.g., '#dc2626', 'rgb(220, 38, 38)').
   */
  lineColor: string;
  /**
   * The small text displayed above the main heading (e.g., "WHY").
   */
  tagline: string;
  /**
   * The main heading text. Can include <br /> tags for line breaks.
   */
  heading: React.ReactNode;
  /**
   * Optional: Additional CSS classes to apply to the container div.
   */
  /**
   * Optional: A CSS color string for the main heading text.
   * If not provided, it will use the default text color.
   */
  headingColor?: string;   
  className?: string;
}

/**
 * A reusable heading component with a vertical accent line.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  lineColor,
  tagline,
  heading,
  headingColor,
  className = '',
}) => {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      {/* The vertical accent line */}
      <div
        className="w-1 self-stretch"
        style={{ backgroundColor: lineColor }}
        aria-hidden="true"
      />

      {/* The text content */}
      <div>
        <p
          className="text-sm font-bold uppercase tracking-widest"
          style={{ color: lineColor }}
        >
          {tagline}
        </p>
        <h2
          className="mt-1 text-4xl md:text-5xl font-light text-gray-800 leading-tight"
          // Apply the heading color if it exists          
          style={headingColor ? { color: headingColor } : undefined}
        >
          {heading}
        </h2>
      </div>
    </div>
  );
};
export default SectionHeading;