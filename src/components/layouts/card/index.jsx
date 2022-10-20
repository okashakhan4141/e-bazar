import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardActionArea } from '@mui/material';
import styles from './card.module.css';

export default function ProductCard(props) {
  const addToCart = () => {
    console.log('addtocart!');
  };

  return (
    <Card sx={{ width: 250, height: 310, margin: 3 }} className={styles.card}>
      <CardMedia
        component="img"
        height="45%"
        image={props.image}
        alt="Product"
      />
      <CardActionArea>
        <CardContent sx={{ height: 122 }}>{props.children}</CardContent>
      </CardActionArea>
      <CardActions sx={{ height: '50px' }}>
        <IconButton
          sx={{ marginLeft: 'auto', padding: '8px' }}
          onClick={addToCart}
          aria-label="add to cart"
          color="primary"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
