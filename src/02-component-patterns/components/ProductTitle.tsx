import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const {
    product: { title: titleToShow },
  } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : titleToShow}
    </span>
  );
};
