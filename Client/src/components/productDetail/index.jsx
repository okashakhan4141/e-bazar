import styles from './productDetail.module.css';

import Slider from '../layouts/carousel';
import { carouselData } from '../../utils/dummyData';
import { useRef, useState } from 'react';
import FullScreenDialog from '../layouts/dialoges/fullScreen';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardActionArea } from '@mui/material';
import ScrollDialog from '../layouts/dialoges/scroll';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CardActions from '@mui/material/CardActions';

const prodDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet sagittis magna, a viverra ligula tempus sed. Maecenas quis augue a quam rutrum iaculis vitae ut purus. Duis at risus ut magna scelerisque pulvinar sed nec libero. Fusce a sapien augue. Mauris diam nulla, commodo ac velit eget, dignissim eleifend lacus. Suspendisse et scelerisque urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit augue vel imperdiet imperdiet. Duis volutpat, tellus ac fringilla faucibus, nisl est rutrum justo, et volutpat est odio eu est. Nam sollicitudin at nibh ut accumsan. Mauris eget turpis vitae turpis interdum varius. Curabitur varius, risus ut facilisis efficitur, enim massa rutrum diam, ac volutpat massa leo nec eros. Praesent nec turpis nulla. Praesent eget egestas nisi.

Pellentesque diam velit, hendrerit id interdum maximus, ornare laoreet arcu. Nullam ultrices risus ipsum, sed ultrices diam auctor semper. Praesent mattis consectetur neque, eget vehicula elit sollicitudin ut. Donec ultrices pretium nisi, quis eleifend erat congue quis. Praesent pulvinar velit ante, id rutrum massa fermentum non. Sed bibendum tellus non purus laoreet sagittis. Nam scelerisque dui et neque porttitor, et euismod metus consequat. In lacus purus, tempor ac laoreet eget, sodales vel dui. Quisque ultricies et libero sit amet egestas.`;

const sliderOptions = {
  indicators: true,
  navButtonsAlwaysVisible: true,
  fullHeightHover: false,
  autoPlay: false,
};

const Details = props => {
  const fullScreenDialog_ref = useRef();
  const scrollDialog_ref = useRef();

  const [quantity, setQuantity] = useState(1);

  const incQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decQuantity = () => {
    setQuantity(prev => prev - 1);
  };

  return (
    <>
      <FullScreenDialog ref={fullScreenDialog_ref}></FullScreenDialog>
      <ScrollDialog
        ref={scrollDialog_ref}
        title="I phone 14"
        content={prodDesc}
        buttonText="Close"
      ></ScrollDialog>
      <div className={styles.container}>
        <div
          className={styles.image}
          onClick={() => fullScreenDialog_ref.current.open()}
        >
          <Slider
            data={carouselData}
            height="450px"
            options={sliderOptions}
          ></Slider>
        </div>

        <div className={styles.details}>
          <Paper elevation={3} sx={{ height: '100%', padding: '10px' }}>
            <h2>IPhone 14 Pro Max</h2>
            <CardActionArea
              style={{ color: '#989898' }}
              sx={{ fontSize: 'medium', margin: '10px 0' }}
              onClick={() => scrollDialog_ref.current.open()}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardActionArea>
            <div>
              <span className={styles.currency}>PKR</span>
              <span className={styles.price}> 1299 /-</span>
            </div>
            <Rating
              name="read-only"
              size="large"
              precision={0.5}
              value={4.5}
              sx={{ margin: '8px 8px 8px 0' }}
              readOnly
            />

            <CardActions>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <span className={styles.quantity}>Quantity </span>
                <IconButton
                  aria-label="Remove"
                  color="primary"
                  disabled={quantity == 1}
                  onClick={decQuantity}
                >
                  <RemoveIcon />
                </IconButton>
                <span>{quantity}</span>
                <IconButton
                  aria-label="Add"
                  color="primary"
                  onClick={incQuantity}
                >
                  <AddIcon />
                </IconButton>
                <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
                  ADD TO CART
                </Button>
              </Box>
            </CardActions>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Details;
