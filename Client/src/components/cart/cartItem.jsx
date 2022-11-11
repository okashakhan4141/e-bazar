import { Divider, IconButton, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import styles from './cart.module.css';

const CartItem = props => {
  const [quantity, setQuantity] = useState(1);

  const incQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decQuantity = () => {
    setQuantity(prev => prev - 1);
  };
  return (
    <Paper className={styles.cartItem} elevation={2} sx={{ padding: '15px' }}>
      <div>
        <p className={styles.cartItemTitle}>I phone 14 Pro</p>
        <p>PKR 12.00 /-</p>
      </div>
      <div>
        <IconButton
          aria-label="Remove"
          color="primary"
          disabled={quantity == 1}
          onClick={decQuantity}
        >
          <RemoveIcon />
        </IconButton>
        <span>{quantity}</span>
        <IconButton aria-label="Add" color="primary" onClick={incQuantity}>
          <AddIcon />
        </IconButton>
      </div>
      {/* <Divider
        sx={{ width: '70%', margin: '45px auto', color: 'red' }}
      ></Divider> */}
    </Paper>
  );
};

export default CartItem;
