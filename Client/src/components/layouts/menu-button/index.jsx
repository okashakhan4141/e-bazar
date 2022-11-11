import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useHistory } from 'react-router-dom';
import { formatCategoryName } from '../../../utils/helpers';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = index => {
    setAnchorEl(null);

    if (typeof index != 'number') return;
    // console.log(index);

    history.push(
      `/home/products/${formatCategoryName(
        props.category
      )}?id=XYF&fvyFtdTxUTcUTcyuyuV${
        index == -1 ? '' : '&subCategory=GYTfFTFTFFTcFCFCftftft'
      }`
    );
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="primary"
      >
        {props.category}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          sx={{ width: '180px' }}
          color="secondary"
          onClick={() => handleClose(-1)}
        >
          {'All'}
        </MenuItem>
        {props.subCategories.map((item, i) => (
          <MenuItem
            sx={{ width: '180px' }}
            color="secondary"
            key={i}
            onClick={() => handleClose(i)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
