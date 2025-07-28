import React from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Users, TrendingUp, Clock } from 'lucide-react'; 

// Define the data for the stat cards in an array for clean, scalable code
const statsData = [
  {
    Icon: Users,
    label: 'Customers',
    metric: '120+',
    description: 'Trusted by over 120+ businesses, our ERP powers seamless operations across several industries—enhancing efficiency, automation, and growth.',
  },
  {
    Icon: TrendingUp,
    label: 'Impact',
    metric: '40%',
    description: 'Increase efficiency by 40% with our ERP—automate processes, reduce errors, and speed up operations.',
  },
  {
    Icon: Clock,
    label: 'Experience',
    metric: '50+yrs',
    description: 'With over 18 years of rich business history, and our engineering team’s combined experience of over 50 years, we bring to you World Class design thinking and quality software development skills.',
  },
];

const WhyUs = () => {
  const accentColor = '#f97316'; // Orange color for icons and labels
  
  return (
    <section className="bg-white py-12 md:py-10">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Reusable Section Heading */}
        <SectionHeading
          lineColor="#c51d23" // The red color from the design
          tagline="Why"
          heading={
            <>
              We Deliver <br /> Exceptional value
            </>
          }
        />

        {/* Grid for the key stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2">
                <stat.Icon
                  className="h-6 w-6"
                  style={{ color: accentColor }}
                  aria-hidden="true"
                />
                <span
                  className="font-semibold"
                  style={{ color: accentColor }}
                >
                  {stat.label}
                </span>
              </div>
              <p className="mt-4 text-6xl font-light text-gray-900">
                {stat.metric}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;