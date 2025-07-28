import ProductsCTA from "@/components/home/ProductCTA";
import Hero from "@/components/shared/Hero"
import ProductRange from "@/components/what-we-do/ProductRange";
import Services from "@/components/what-we-do/Services";

export default function WhatWeDoPage() {
  return (<>
    {/* Hero section with page here image url pass in as prop */}
    <Hero imgUrl="/assets/images/what-we-do-hero.webp" /> 
    
    {/* product range  */}
    <ProductRange />

    
    {/* services listing */}
    <Services />

    {/* product CTA */}
    <ProductsCTA />
  </>);
}