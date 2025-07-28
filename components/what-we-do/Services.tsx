import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';

// --- Data for all services ---
const servicesData = [
  {
    number: '01',
    title: 'Software Development',
    description: (
      <>
        <p>We have developed, delivered, and successfully implemented various software solutions for different businesses, including Banking, Oil & Gas, Retail & Distribution, Transportation, and many others.</p>
        <p>With the positive influence on our overall reach, expertise across different industries, and experienced Project Management approaches, we deliver flexible, scalable, customized software development services on web, computers, smartphones, tablets, etc.</p>
      </>
    ),
    tags: ['PORTALS', 'WEB & DESKTOP APPLICATIONS', 'MOBILE APP DEVELOPMENT', 'CLOUD', 'SAAS'],
    imageSrc: '/assets/images/software.webp',
    imageAlt: 'Dashboard of a software application displayed on a monitor.',
  },
  {
    number: '02',
    title: 'Systems and Business Process Automation',
    description: (
      <>
        <p>If your organization is stuck with legacy systems that are either outdated or are no longer serving your best purpose because your operations and business processes have changed. We are your best plug to fix it!</p>
        <p>If you run a manual, paper-based system in your organization, where most of your processes are not automated, this can be very laborious, time-consuming and risky as you could lose all your paper trail to fire, flood, etc.</p>
        <p>At Websoft, we are able to study your entire business process, scope it into workable workflows, and build a customized automation system that converts all your daunting manual processes into exciting Software with informative dashboards, intuitive design, intelligent data analytics and reporting, etc. This solution can be provided either as a stand alone or an ERP which you can chose to deploy either cloud or on-prem.</p>
      </>
    ),
    tags: ['PORTALS', 'WEB & DESKTOP APPLICATIONS', 'MOBILE APP DEVELOPMENT'],
    imageSrc: '/assets/images/process.webp',
    imageAlt: 'Hexagonal chart showing different aspects of an operating model.',
  },
  {
    number: '03',
    title: 'Bespoke ERPs',
    description: (
      <>
        <p>Our ERP (AlerioERP) can be deployed as both cloud and on-prem. What sets our ERPs apart is that they are turn-key solutions, and at the same time can be delivered as bespoke. Our ERP puts you in charge. You can decide to tweak any part of any of our modules to fit exactly into your business process flow. We can also build entirely new modules that are unique to your business and integrate them as part of the modules of our off-the-shelf ERP: making your ERP software superbly unique to you alone.</p>
      </>
    ),
    tags: [], // No tags for this one in the design
    imageSrc: '/assets/images/headless.webp',
    imageAlt: 'A custom-tailored suit on a mannequin, representing bespoke solutions.',
  },
  {
    number: '04',
    title: 'Web Design, Web and Email Hosting ERPs',
    description: (
      <>
        <p>There are websites, and there are websites! At Websoft, we specialize in eye-catching, exciting websites. We ensure that your website is brand-compliant, unique in its own look and feel, and has a warm visual appeal to your online audience.</p>
        <p>With careful attention to detail, we craft landing pages that speak well of you. Our sites are mobile responsive and compliant with modern devices, whether it is a tablet or mobile phone.</p>
        <p>Web interactivity is crucial in adding value to your web services and ensuring your online audience to get feedback from them. We ensure your website is interactive and collects responses from your customers. We also offer secure and reliable Web Hosting and Email Services with 99.9% uptime.</p>
      </>
    ),
    tags: ['DEDICATED & SHARED HOSTING', 'MOBILE RESPONSIVE WEB DESIGNS', 'INTERACTIVE'],
    imageSrc: '/assets/images/server_room.webp',
    imageAlt: 'A smiling man in a server room, representing web hosting and design.',
  }
];


// --- The Main Services Section Component ---
export default function Services() {
  return (
    <section className="py-12 md:py-10 px-4 md:px-8">
      <div className="space-y-24">
        {servicesData.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Text Column */}
              <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                {/* reusable section heading component */}
                <SectionHeading lineColor='#000' tagline={service.number} heading={service.title}
                />
                <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                  {service.description}
                </div>
                {service.tags.length > 0 && (
                  <p className="mt-8 text-sm font-semibold text-gray-600 tracking-wider">
                    {service.tags.join(' | ')}
                  </p>
                )}
              </div>

              {/* Image Column */}
              <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={600}
                  height={500}
                  className="rounded-xl shadow-lg object-contain mx-auto"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};