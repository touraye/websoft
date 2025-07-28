export type ProductButton = {
  text: string;
  type: 'primary' | 'secondary';
  action: string;
};

export type Product = {
  number: string;
  title: string;
  titleColor: string;
  imageSrc: string;
  description: string;
  features: string[];
  buttons: ProductButton[];
};