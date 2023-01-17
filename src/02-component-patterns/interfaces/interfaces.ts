import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductContextProps {
  counter: number;
  // eslint-disable-next-line no-unused-vars
  increaseBy: (value: number) => void;
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardHOCProps {
  // eslint-disable-next-line no-unused-vars
  ({ children, product }: ProductCardProps): JSX.Element;
  // eslint-disable-next-line no-unused-vars
  Title: ({ title }: { title?: string }) => JSX.Element;
  // eslint-disable-next-line no-unused-vars
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
