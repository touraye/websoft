import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data/product'; 
import SectionHeading from '@/components/shared/SectionHeading';
import RequestForm from '@/components/submit/RequestForm';
import ProductsCTA from '@/components/home/ProductCTA';

// Define the component to accept searchParams
export default function SubmitRequestPage({
  searchParams,
}: {
  searchParams: { title?: string };
}) {
  // Find the product based on the 'title' parameter from the URL
  // This comparison is made case-insensitive and ignores spaces for robustness
  const product = products.find(
    (p) => p.title.toLowerCase().replace(/\s/g, '') === searchParams.title?.toLowerCase()
  );

  // If no product is found for the given title, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <section>
      <div className="py-12 md:py-10 px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* --- Left Column: Product Details --- */}
          <div className="space-y-8">
            <SectionHeading
              lineColor="#000"
              tagline={product.number}
              heading={product.title}
              headingColor={product.titleColor}
            />
            <Image
              src={product.imageSrc}
              alt={`${product.title} software box`}
              width={300}
              height={400}
              className="mx-auto"
            />
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
            <hr className="w-20 border-gray-300 my-8" />
            <p className="text-gray-600 text-sm">
              {product.features.join(' | ')}
            </p>
          </div>

          {/* --- Right Column: The Form --- */}
          <div>
            <RequestForm />
          </div>
        </div>

      </div>

          {/* product CTA */}
          <ProductsCTA />
    </section>
  );
}