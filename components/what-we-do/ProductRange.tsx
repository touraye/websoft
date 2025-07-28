// components/ProductRangeSection.tsx
import React from 'react';

export default function ProductRange() {
  return (
    <section className="py-12 md:py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-red-600">
        Our range of Services and Products
      </h2>
      <div className="mt-6 max-w-4xl space-y-6 text-gray-700 leading-relaxed">
        <p>
          With over 18 years of business history, and our engineering team’s combined experience of over 50 years, Websoft brings to you a wide variety of professional expertise that spans across various aspects of Information Technology.
        </p>
        <p>
          We build be-spoke applications (Web, Mobile, Cloud, SaaS, Desktop, etc) that is African-tolerant and friendly to our African business ecosystem, making the solution exactly tailored to work in the way that fits into your work environment. Our main services include Software Development, Systems and Business Process Automation, bespoke ERPs and Website Design and Hosting.
        </p>
      </div>
    </section>
  );
};