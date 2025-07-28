// components/Product.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data/product';
import SectionHeading from '@/components/shared/SectionHeading'; 

export default function ProductListing() {
  return (
    <section className="py-12 md:py-10 px-4 md:px-8">
      <div className="space-y-24">
        {products.map((product) => (
          <div key={product.number} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Title and Image */}
            <div className="lg:col-span-1 space-y-8">
              <SectionHeading
                lineColor="#000"
                tagline={product.number}
                heading={product.title}
                headingColor={product.titleColor} // Pass the dynamic color
              />
              <Image
                src={product.imageSrc}
                alt={`${product.title} software box`}
                width={300}
                height={400}
                className="mx-auto"
              />
            </div>

            {/* Right Column: Details and Buttons */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
              
              <hr className="w-20 border-gray-300 my-8" />

              <p className="text-gray-600 text-sm">
                {product.features.join(' | ')}
              </p>

              <div className="mt-10 flex items-center gap-4">
                {product.buttons.map((button) => {
                  const isPrimary = button.type === 'primary';
                  const buttonClasses = `font-semibold py-3 px-8 rounded-full transition-colors ${
                    isPrimary 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-800 text-white hover:bg-gray-900'
                  }`;

                  // Handle download links specifically
                  if (button.action.startsWith('/downloads/')) {
                    return (
                      <a key={button.text} href={button.action} className={buttonClasses} download>
                        {button.text}
                      </a>
                    );
                  }

                  // Handle all other links
                  return (
                    <Link key={button.text} href={button.action} className={buttonClasses}>
                      {button.text}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};