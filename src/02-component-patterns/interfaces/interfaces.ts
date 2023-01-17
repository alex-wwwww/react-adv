import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

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
  (Props: ProductCardProps): JSX.Element;
  // eslint-disable-next-line no-unused-vars
  Title: (Props: ProductTitleProps) => JSX.Element;
  // eslint-disable-next-line no-unused-vars
  Image: (Props: ProductImageProps) => JSX.Element;
  // eslint-disable-next-line no-unused-vars
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}
