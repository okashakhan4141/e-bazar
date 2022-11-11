import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import { forwardRef, useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';

export const menuId = 'primary-search-account-menu';

const MyProfile = forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);

  useImperativeHandle(ref, () => ({
    open(event) {
      setAnchorEl(event.currentTarget);
    },
  }));

  const handleMenuClose = path => {
    history.push(path);
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={() => handleMenuClose('')}
    >
      <MenuItem
        sx={{ width: '200px' }}
        onClick={() => handleMenuClose('/user/profile/yuftXdr6SEXRXrXrXr')}
      >
        <ListItemIcon>
          <PersonIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>My Profile</ListItemText>
      </MenuItem>
      <MenuItem
        sx={{ width: '200px' }}
        onClick={() => handleMenuClose('/auth/login')}
      >
        <ListItemIcon>
          <LoginIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Login</ListItemText>
      </MenuItem>
      <MenuItem sx={{ width: '200px' }} onClick={() => handleMenuClose('')}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );
});

export default MyProfile;
