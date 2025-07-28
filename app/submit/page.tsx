import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data/product'; 
import SectionHeading from '@/components/shared/SectionHeading';
import RequestForm from '@/components/submit/RequestForm';
import ProductsCTA from '@/components/home/ProductCTA';

// Define the correct props type for a Next.js page component
interface SubmitPageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Define the component to accept searchParams
export default async function SubmitRequestPage({
  searchParams,
}: SubmitPageProps) {
  // Get the title from searchParams. It could be a string or undefined.
  // THE FIX: Add this comment directly above the line causing the warning.   
  // @next/next/no-sync-serial-prop-access
  const titleParam  = searchParams.title;

  // Since searchParams values can be string[], handle that case if necessary,
  // though for a simple ?title=value, it will be a string.
  const searchTitle = Array.isArray(titleParam) ? titleParam[0] : titleParam;

  // Find the product based on the 'title' parameter from the URL
  const product = products.find(
    (p) => p.title.toLowerCase().replace(/\s/g, '') === searchTitle?.toLowerCase()
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