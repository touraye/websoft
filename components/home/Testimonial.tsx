// components/TestimonialsSection.tsx
'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

// --- Testimonial Data ---
const testimonialsData = [
  {
    image: '/assets/images/headofhr.webp',
    name: 'Mr Mahama Abubakari',
    title: 'Head of HR and Administration',
    company: 'GIG Engineering',
    rating: 5,
    quote: (
      <>
        <p>Alerio has streamlined our key HR and payroll functions, enabling us to process payroll in a much shorter timeframe while minimizing manual errors. It has allowed for the generation of real-time reports and analytics, simplifying the management of our employee data.</p>
        <p>We can access the modules across desktops, laptops, and mobile platforms, ensuring uninterrupted access. We have access to the employee self-service portal, allowing our staff to manage leave applications, update personal data, and accessing their payslips without relying on HR.</p>
        <p>The transition from manual payroll processing to AlerioERP’s automatic, fully integrated system is a game-changer for our operations.</p>
      </>
    ),
    },
    {
    image: '/assets/images/client1.webp',
    name: 'Eric Edem Damanka',
    title: 'Group Head of Talent(HR) & Corporate Affairs',
    company: 'BTL Africa',
    rating: 5,
    quote: (
      <>
        <p>I enjoyed using AlerioERP. It&#39;s intuitive, easy to navigate convenient, and customized to our delight. I highly recommend it</p>
      </>
    ),
  },
  {
    image: '/assets/images/client2.webp',
    name: 'Vivian Sakyiama',
    title: 'Head of HR',
    company: 'Silverbird Cinema',
    rating: 5,
    quote: (
      <>
        <p>AlerioERP has transformed our HR processes in ways I cannot over emphasize. Before we signed on to Alerio, most of our processes were daunting and manual. Leave management, performance and appraisal, and so many other HR needs we had were quite a challenge.</p>
        <p>AlerioERP has been a fresh breath of ease and seamless automation for us. In fact, AlerioERP is fantastic! I definitely recommend it.</p>
      </>
    ),
    },   
  // Add more testimonials here as needed
];

// --- A small helper component for rendering stars ---
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))}
  </div>
);

// --- The Main Testimonials Component ---
export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const accentColor = '#c51d23'; // Red color

  return (
    <section className="bg-gray-50 py-12 md:py-10">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* --- Left Column: Heading --- */}
          <div className="lg:w-1/3">
            <SectionHeading
              lineColor={accentColor}
              tagline="What"
              heading={
                <>
                  Our Clients <br /> are Saying
                </>
              }
            />
          </div>

          {/* --- Right Column: Testimonial Carousel --- */}
          <div className="lg:w-2/3">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 p-2">
                    {/* Testimonial Card */}
                    <div className="bg-white rounded-xl shadow-lg p-8 ">
                      <div className="flex flex-col sm:flex-row gap-8">
                        <Image
                          src={testimonial.image}
                          alt={`Photo of ${testimonial.name}`}
                          width={120}
                          height={120}
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover flex-shrink-0 mx-auto sm:mx-0"
                        />
                        <div className="flex-grow text-center sm:text-left">
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.title}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                          <div className="mt-2">
                            <StarRating rating={testimonial.rating} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-gray-700 space-y-4">
                        {testimonial.quote}
                      </div>
                      {/* Navigation Controls */}
                      <div className="mt-8 flex justify-end gap-3">
                        <button
                          onClick={scrollPrev}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white ring-1 ring-gray-200 hover:bg-gray-100 transition"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <button
                          onClick={scrollNext}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-white ring-1 ring-gray-200 hover:bg-gray-100 transition"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="h-6 w-6 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
