import Hero from "@/components/Hero";
import { clients } from "@/components/home/ClientLogoData";
import ClientLogos from "@/components/home/ClientLogos";
import { ClientShowcase } from "@/components/home/ClientShowcase";
import HowWeTransform from "@/components/home/HowWeTransform";
import ProductsCTA from "@/components/home/ProductCTA";
import Testimonials from "@/components/home/Testimonial";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
   <>
      {/* home page hero sec */}
      <Hero />
        
      {/* showcase areas: our client logos */}      
       <ClientShowcase clients={clients} />      
      
      {/* Why Us */}
      <WhyUs />

      {/* How We Transform */}
      <HowWeTransform />

      {/* Testimonial */}
      <Testimonials />

      {/* Product CTA */}
      <ProductsCTA />
   </>
  );
}
