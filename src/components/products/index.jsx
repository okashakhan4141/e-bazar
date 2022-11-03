import styles from './products.module.css';

import Product from './product';

const Products = props => {
  const pagination = (event, page) => {
    console.log(event, page);
  };

  return (
    <div className={styles.productContainer}>
      {props.data.map((prod, index) => (
        <Product key={index} item={prod} />
      ))}
    </div>
  );
};

export default Products;
