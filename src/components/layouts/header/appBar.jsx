import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import TemporaryDrawer from './drawer';
import { useRef } from 'react';
import logo from '../../../assets/logo.png';
import styles from './header.module.css';
import { Tooltip } from '@mui/material';
import { categories } from '../../../utils/dummyData';
import BasicMenu from '../menu-button';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { useHistory } from 'react-router-dom';
import Cart from '../../cart';
import SearchBar from './searchBar';
import MyProfile, { menuId } from './myProfile';

export default function PrimarySearchAppBar() {
  const history = useHistory();

  const [drawer, toogleDrawer] = React.useState(true);
  const drawer_ref = useRef();
  const cart_ref = useRef();
  const profile_ref = useRef();

  const goToHome = () => {
    history.push('/home');
  };

  const ordersHandler = () => {
    history.push('/home/orders/xUTDtfyVHVuYfuyfvUY');
  };

  const cartHandler = () => {
    cart_ref.current.open();
  };

  const notificationHandler = () => {
    history.push('/home/notifications/xUTDtfyVHVuYfuyfvUY');
  };

  const menuClickHandler = e => {
    drawer_ref.current.toogle(drawer, e);
    toogleDrawer(prev => !prev);
  };

  return (
    <>
      <Cart ref={cart_ref}></Cart>
      <Box
        sx={{
          flexGrow: 1,
          height: '110px',
          position: 'fixed',
          width: '100vw',
          zIndex: 100,
        }}
      >
        <AppBar
          position="static"
          color="secondary"
          sx={{ color: '#FFFFFF', backgroundColor: 'white', height: '100%' }}
          className={styles.container}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={menuClickHandler}
            >
              <LunchDiningIcon sx={{ width: '30px', height: '30px' }} />
              <TemporaryDrawer ref={drawer_ref} />
            </IconButton>
            <img
              style={{ cursor: 'pointer' }}
              onClick={goToHome}
              className={styles.logo}
              src={logo}
              alt=""
            />

            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ flexGrow: 1 }}>
              <SearchBar></SearchBar>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title="Your Orders" arrow>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="primary"
                  onClick={ordersHandler}
                >
                  <Badge badgeContent={17} color="secondary">
                    <LocalShippingIcon sx={{ width: '30px', height: '30px' }} />
                  </Badge>
                </IconButton>
              </Tooltip>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="primary"
                onClick={cartHandler}
              >
                <Badge badgeContent={17} color="secondary">
                  <ShoppingCartIcon sx={{ width: '30px', height: '30px' }} />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="notifications"
                color="primary"
                onClick={notificationHandler}
              >
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon sx={{ width: '30px', height: '30px' }} />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={e => profile_ref.current.open(e)}
                color="primary"
              >
                <Avatar sx={{ bgcolor: '#3a003d' }} alt="user profile" src="" />
              </IconButton>
            </Box>
          </Toolbar>

          <div className={styles.categories}>
            {Object.keys(categories).map((key, i) => (
              <BasicMenu
                key={i}
                category={key}
                subCategories={categories[key]}
              ></BasicMenu>
            ))}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <FilterAltRoundedIcon sx={{ width: '25px', height: '25px' }} />
            </IconButton>
          </div>
        </AppBar>
        <MyProfile ref={profile_ref}></MyProfile>
      </Box>
    </>
  );
}
