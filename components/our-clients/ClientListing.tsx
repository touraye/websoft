import React from 'react';
import Image from 'next/image';
import { clients } from '@/lib/data/client';

export default function ClientListing() {
  return (
    <section className="py-12 md:py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-red-600 mb-12">
        Our Valued Clients
      </h2>
      
      {/* Grid container with a subtle background to create the border effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray-200 border border-gray-200 gap-px">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white p-8 flex flex-col items-center justify-center gap-4 h-48"
          >
            <div className="relative h-16 w-full">
              <Image
                src={client.logoSrc}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="text-center font-semibold text-gray-700 text-sm">
              {client.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
