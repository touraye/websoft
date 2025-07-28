'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

// Data for the link columns to keep the component clean and scalable
const companyLinks = [
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/contact', label: 'Contact' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/our-clients', label: 'Our Clients' },
];

const productLinks = [
  { href: '#', label: 'Alerio ERP' },
  { href: '#', label: 'Instoc Pro' },
  { href: '#', label: 'Adino' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container max-w-5xl mx-auto px-4 pt-16 sm:pt-24 pb-8">
        {/* --- Top Section: Newsletter and Links --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-light text-gray-800">
              Join our <br /> Newsletter
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-4"
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="text-gray-700 w-full bg-transparent border-b border-gray-400 py-3 pr-10 focus:outline-none focus:border-red-600 transition-colors"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="absolute right-0 bottom-2 text-gray-500 hover:text-red-600"
                  aria-label="Submit email"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </button>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold py-2.5 px-8 rounded-full hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="sm:col-start-2">
              <h3 className="font-semibold text-gray-800">Company</h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Products</h3>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright and Affiliation --- */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <p>© {currentYear} Copyright</p>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logos/logo_new.webp"
              alt="Websoft International Logo"
              width={100}
              height={25}
            />
          </div>
          <div className="flex items-center gap-3">
            <span>A Sterling member of</span>
            <Image
              src="/assets/logos/softgroup_2.webp"
              alt="SOFT Logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
