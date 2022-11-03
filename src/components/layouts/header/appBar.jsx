import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#3a003d', //alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    transform: 'scale(1.05)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const history = useHistory();

  const [drawer, toogleDrawer] = React.useState(true);
  const childCompRef = useRef();
  const cart_ref = useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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
    childCompRef.current.toogle(drawer, e);
    toogleDrawer(prev => !prev);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
              <TemporaryDrawer ref={childCompRef} />
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
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
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
                onClick={handleProfileMenuOpen}
                color="primary"
              >
                {/* <AccountCircle /> */}
                <Avatar sx={{ bgcolor: '#3a003d' }} alt="user profile" src="" />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="primary"
              >
                <MoreIcon />
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
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
