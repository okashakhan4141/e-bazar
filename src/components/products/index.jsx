import Rating from '@mui/material/Rating';

import ProductCard from '../layouts/card';
import styles from './products.module.css';

import { dummyProducts } from '../../utils/dummyData';
import Paginator from '../layouts/paginator';

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

const Products = props => {
  const pagination = (event, page) => {
    console.log(event, page);
  };

  return (
    <>
      <div className={styles.productContainer}>
        {dummyProducts.map((prod, index) => (
          <ProductCard key={index} image={prod.image}>
            <h3 className={styles.title}>{prod.name}</h3>
            <p className={styles.desc}>
              {prod.desc.length > 60
                ? prod.desc.substring(0, 60).concat(' ...')
                : prod.desc}
            </p>
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Price product={prod}></Price>
          </ProductCard>
        ))}
      </div>
      <Paginator onChange={pagination} count={10}></Paginator>
    </>
  );
};

export default Products;
