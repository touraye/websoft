// components/ClientLogos.tsx
import React from 'react';
import { clients } from './ClientLogoData'; 

export default function ClientLogos() {
  // We duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Our Clients
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* This div is the animated marquee */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center"
              >
                {/* The logo is rendered here */}
                {client.logo}
              </div>
            ))}
          </div>

          {/* Optional: Add a gradient overlay for a fading effect on the edges */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};