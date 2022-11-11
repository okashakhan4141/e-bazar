import ScrollDialog from '../layouts/dialoges/scroll';
import { useRef, useEffect } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import styles from './cart.module.css';
import CartItem from './cartItem';

const Cart = forwardRef((props, ref) => {
  const scrollDialog_ref = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      scrollDialog_ref.current.open();
    },
  }));

  const placeOrder = () => {
    console.log('in cart!');
  };

  const cartTitle = (
    <div className={styles.totalAmount}>
      <p>Total Amount</p>
      <p>PKR 0 /-</p>
    </div>
  );

  const cartContent = (
    <div>
      {[...new Array(10)].map((_, i) => (
        <CartItem key={i} />
      ))}
    </div>
  );

  return (
    <>
      <ScrollDialog
        ref={scrollDialog_ref}
        title={cartTitle}
        content={cartContent}
        buttonText="Place Order"
        onClick={placeOrder}
        width="sm"
      ></ScrollDialog>
    </>
  );
});

export default Cart;
