import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';

import styles from './comments.module.css';

const ProductRating = props => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.rating}>4.5</span>
        <span className={styles.ratingTotal}>/5</span>
      </div>
      <div className={styles.ratingContainer}>
        <Rating
          name="read-only"
          size="large"
          precision={0.5}
          value={4.5}
          sx={{ margin: '8px 8px 8px 0' }}
          readOnly
        />
        <p className={styles.ratingCount}>(9 Ratings Total)</p>
      </div>
      <Divider sx={{ width: '100%', margin: '5px auto' }}></Divider>
    </div>
  );
};

export default ProductRating;
