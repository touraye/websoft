import ProductsCTA from "@/components/home/ProductCTA";
import ProductListing from "@/components/our-products/ProductListing";
import Hero from "@/components/shared/Hero";

export default function OurProductsPage() {
    return (<>
        {/* Reusable Hero section with page here image url pass in as prop */}
            <Hero imgUrl="/assets/images/our-product-hero.webp" /> 

        {/* product listing */}
        <ProductListing />

        {/* product CTA */}
        <ProductsCTA />
    </>)
}