// components/AboutIntroSection.tsx
import React from 'react';
import Image from 'next/image';

// Data for the image grid
const images = [
  {
    src: '/assets/images/who-we-are.webp',
    alt: 'Team members working in a modern office space.',
    className: 'col-span-2 row-span-2', // This will be the large image
  },
  {
    src: '/assets/images/img2.webp',
    alt: 'A business meeting in a conference room.',
    className: 'col-span-1 row-span-1', // Top-right smaller image
  },
  {
    src: '/assets/images/img1.webp',
    alt: 'The SOFT Group logo on a wall next to a plant.',
    className: 'col-span-1 row-span-1', // Bottom-right smaller image
  },
];

export default function AboutIntro() {
  return (
    <section className="py-12 md:py-10 px-4 md:px-8">
      {/* Main two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-red-600">
            Welcome to our world
          </h2>
          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
            <p>
              We are an Information and Technology (I.T) based company with focus on developing customer-tailored products and services to ameliorate business practices and processes.
            </p>
            <p>
              We believe we have been commissioned as a solution to many organisational technological challenges using appropriate technology. We crave for success; there is a burning latent flame trapped inside every member of our team to excel.
            </p>
            <p>
              At Websoft, our customers are highly prioritised; we partner with them to achieve and succeed. We aim at seeing our company tremendously achieving and having huge market share in the I.T industry in Ghana and beyond.
            </p>
            <p>
              Our timeless goal is to see our brand become a household name and to be known for providing excellent and quality customer-tailored products and services.
            </p>
          </div>
        </div>

        {/* Right Column: Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 h-[600px]">
          {images.map((image, index) => (
            <div key={index} className={`relative ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-2xl shadow-md"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};