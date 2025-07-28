import ProductsCTA from "@/components/home/ProductCTA";
import ClientListing from "@/components/our-clients/ClientListing";
import Hero from "@/components/shared/Hero";

export default function OurClientsPage() {
    return (<>
        {/* Reusable Hero section with page here image url pass in as prop */}
        <Hero imgUrl="/assets/images/our-clients-hero.webp" /> 
        
        {/* Client listings */}
        <ClientListing />

        {/* Product CTA */}
        <ProductsCTA />
    </>)
}