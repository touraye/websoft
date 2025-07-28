
import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import RequestForm from '@/components/submit/RequestForm'; 
import Hero from '@/components/shared/Hero';
import ProductsCTA from '@/components/home/ProductCTA';

// A small, local component for the styled contact details sections
const ContactDetailSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="w-1 h-full bg-red-600 self-stretch"></div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <div className="mt-4 text-gray-600 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  </div>
);

export default function ContactPage() {
  const mapEmbedCode = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4291115648707!2d-0.08589769202374715!3d5.650893832669869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf998c4326d563%3A0x8fc94f5627dcf740!2sWebsoft%20Ltd!5e0!3m2!1sen!2sgm!4v1753571426663!5m2!1sen!2sgm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <>
      {/* Consistent Hero and Logo for inner pages */}
      {/* <div className="py-8">
        <Image
          src="/assets/images/logos/websoft-logo.png"
          alt="Websoft International Logo"
          width={180}
          height={40}
        />
      </div> */}
      
      {/* Reusable Hero section with page here image url pass in as prop */}
              <Hero imgUrl="/assets/images/contact-us-hero.webp" /> 

      <section className="py-12 md:py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Column: The Form --- */}
          <div>
            {/* Reuse Form component */}
            <RequestForm />
          </div>

          {/* --- Right Column: Contact Details & Map --- */}
          <div className="space-y-12">
            {/* Contact Info */}
            <ContactDetailSection title="Contact">
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-red-600" />
                <span>Whatsapp or Call: </span>
                <a href="tel:+233554634346" className="font-semibold text-blue-600 hover:underline">
                  0554634346
                </a>
              </p>
            </ContactDetailSection>

            {/* Office Location */}
            <ContactDetailSection title="Office Location">
              <p>
                Websoft Ltd.,<br />
                Head Office,<br />
                Adj. Eden Tree,<br />
                Community 18,<br />
                Greater-Accra,<br />
                Ghana.
              </p>
              <p>
                Email: <a href="mailto:info@websoftghana.com" className="font-semibold text-blue-600 hover:underline">info@websoftghana.com</a> - General inquiries
              </p>
            </ContactDetailSection>

            {/* Google Map Embed */}
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: mapEmbedCode }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* product CTA */}
      <ProductsCTA />
    </>
  );
}