'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

// Define the type for a single client based on your data structure
export interface Client {
  name: string;
  logo: React.ReactNode;
}

// Define the props for our component
interface ClientShowcaseProps {
  clients: Client[];
}

export function ClientShowcase({ clients }: ClientShowcaseProps) {
  return (
    <section className="py-12 md:py-10 bg-white">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Clients
        </h2>

        {/* 
          The Marquee Component
          - pauseOnHover: Stops the animation when the user's mouse is over it.
          - speed: Controls the scroll speed (higher is faster).
          - autoFill: This is the key! It automatically duplicates the logos to
            create a seamless, infinite loop, regardless of screen size.
        */}
        <Marquee
          pauseOnHover={true}
          speed={50}
          autoFill={true}
          className="w-full"
        >
          {clients.map((client) => (
            // Each logo is a "slide" in the marquee.
            // We add padding (px-12) to create space between logos.
            // flex-shrink-0 prevents the logos from being squashed.
            <div
              key={client.name}
              className="flex-shrink-0 flex items-center justify-center px-4 gap-8"
              title={client.name}
            >
              {client.logo}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}