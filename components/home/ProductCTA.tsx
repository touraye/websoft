import Image from 'next/image';

// Data for the product images to keep the component clean
const products = [
  {
    src: '/assets/images/alerio.webp',
    alt: 'Alerio ERP Software Box',
  },
  {
    src: '/assets/images/instock.webp',
    alt: 'Instoc Pro Software Box',
  },
  {
    src: '/assets/images/adino.webp',
    alt: 'Adino Microcredit Software Box',
  },
];

export default function ProductsCTA() {
  return (
    <section className="py-12 md:py-10">
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="relative">
          {/* Red background container with extra bottom padding */}
                  <div className="bg-gradient-to-b from-red-600 via-red-500 to-white rounded-2xl p-8 sm:p-12 lg:p-16 pt-32 sm:pb-10 flex flex-col">
                      {/* product cta detail */}
                    <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Manage your business processes on the fly
                    </h2>
                    <p className="mt-6 text-xl text-white/90">
                        Our complete ERP Solutions, Point of Sale and Stock Management Solutions, MicroCredit Software Solutions etc are all tailored to streamline your operations and drive maximum revenue.
                    </p>
                      </div>
                      
                      {/* product cta listing */}

                    {/* Product Images container, pulled up with a negative margin */}
                    <div className="relative pt-8 md:pt-14 md:self-end">
                        <div className="flex items-start md:items-end gap-4 sm:gap-8 px-4">
                        {products.map((product, index) => (
                            <div key={index} className="w-1/3 sm:w-auto flex-shrink-0">
                            <Image
                                src={product.src}
                                alt={product.alt}
                                width={100}
                                height={100}
                                className="mx-auto w-[80px] h-[80px] md:w-[150] md:h-[200px] drop-shadow-2xl hover:scale-105 hover:-translate-y-2 transition-transform duration-300"
                            />
                            </div>
                        ))}
                        </div>
                    </div>
          </div>

        </div>
      </div>
    </section>
  );
};