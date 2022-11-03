import Rating from '@mui/material/Rating';

import ProductCard from '../layouts/card';
import styles from './products.module.css';

const Price = props => {
  const calcDiscount = () => {
    const discPrice = (props.product.discount / 100) * props.product.price;
    return (props.product.price - discPrice).toFixed(2);
  };

  return (
    <div className={styles.price}>
      <span>{`PKR `}</span>
      <h2 className={props.product.discount ? styles.discount : ''}>
        {props.product.price}
      </h2>
      {props.product.discount && (
        <h2 className={styles.discountedPrice}>{calcDiscount()}</h2>
      )}
      {props.product.discount && <span>(-{props.product.discount}%)</span>}
    </div>
  );
};

const Product = props => {
  return (
    <ProductCard image={props.item.image}>
      <h3 className={styles.title}>{props.item.name}</h3>
      <p className={styles.desc}>
        {props.item.desc.length > 60
          ? props.item.desc.substring(0, 60).concat(' ...')
          : props.item.desc}
      </p>
      <Rating
        name="read-only"
        value={3.5}
        precision={0.5}
        size="small"
        readOnly
      />
      <Price product={props.item}></Price>
    </ProductCard>
  );
};

export default Product;
