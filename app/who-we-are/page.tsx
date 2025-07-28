import ProductsCTA from "@/components/home/ProductCTA";
import Hero from "@/components/shared/Hero";
import AboutIntro from "@/components/who-we-are/AboutIntro";

export default function WhoWeArePage() {
    return (<>
        {/* Hero with an image extending r-l */}
        <Hero imgUrl="/assets/images/who-we-are-hero.webp" />

        {/* about intro sec */}
        <AboutIntro />

        {/* Product CTA */}
        <ProductsCTA />
    </>)
}