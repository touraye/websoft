// components/imagesData.ts

import { Product } from "../types/product";

export const products: Product[] = [
  {
    number: '01',
    title: 'Alerio ERP',
    titleColor: '#c51d23', // Red
    imageSrc: '/assets/images/alerio.webp',
    description: 'AlerioERP is a full-suite ERP that gives you absolute control over your business process. Alerio comes both as cloud solution and on-premise. You can request for any specific modules that you need for your business. AlerioERP can be customized to fit exactly into your business process. No matter the challenges you are having in your business operations, our ERP can be modified to your preferences.',
    features: ['HR', 'Payroll', 'Finance', 'Inventory', 'Procurement', 'Sales', 'CRM', 'Asset Tracking', 'Document Management', 'E-learning', 'Logistics and Shipping'],
    buttons: [
      { text: 'Visit Website', type: 'primary', action: 'https://alerioerp.com' },
      { text: 'Download Brochure', type: 'secondary', action: '/downloads/alerio-brochure.pdf' },
    ],
  },
  {
    number: '02',
    title: 'Instoc Pro',
    titleColor: '#f97316', // Orange
    imageSrc: '/assets/images/instock.webp',
    description: 'InstocPro is your comprehensive inventory management and control tool. It is engineered to support the traditional functionalities of a POS application and seamlessly manage stock movements across your supply chain. The solution assists businesses to effectively track, manage and generate real time analytical reports on stock control, manage expiry of products and the general performance overview to aid sales forecasting, decision making about stock as well as manage profiles of their customers. From supplier to warehouse to storefronts and all other internal movements with ease of integrating data into other applications whilst considering the instability of internet service provision as is percular to Africa.',
    features: ['Point of Sale', 'Inventory Management', 'CRM', 'Accounting', 'Purchases'],
    buttons: [
      { text: 'Download Brochure', type: 'secondary', action: '/downloads/instoc-brochure.pdf' },
      { text: 'Submit a Request', type: 'primary', action: '/submit?title=instocpro' },
    ],
  },
  {
    number: '03',
    title: 'Adino',
    titleColor: '#f97316', // Orange
    imageSrc: '/assets/images/adino.webp',
    description: 'Adino is a cloud-based Susu and Loan management system that allows Susu collectors and lending businesses to manage their borrowers loans, repayments, and collections with ease while being affordable at the same time.',
    features: ['Client Management', 'Loan Management', 'Savings Management', 'Staff and Role Management', 'Reports'],
    buttons: [
      { text: 'Download Brochure', type: 'secondary', action: '/downloads/adino-brochure.pdf' },
      { text: 'Submit a Request', type: 'primary', action: '/submit?title=adino' },
    ],
  },
];