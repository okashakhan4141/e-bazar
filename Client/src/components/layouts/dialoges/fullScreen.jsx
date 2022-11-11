import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Slider from '../carousel';
import { carouselData } from '../../../utils/dummyData';
import { forwardRef, useImperativeHandle } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const sliderOptions = {
  indicators: true,
  navButtonsAlwaysVisible: true,
  fullHeightHover: false,
  autoPlay: false,
};

const FullScreenDialog = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{ ml: 'auto' }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ padding: '15px' }}>
          <Slider
            data={carouselData}
            height="80vh"
            imageSize="contain"
            options={sliderOptions}
          ></Slider>
        </div>
      </Dialog>
    </div>
  );
});

export default FullScreenDialog;
