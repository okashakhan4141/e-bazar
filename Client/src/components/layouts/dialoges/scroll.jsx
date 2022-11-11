import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { forwardRef, useImperativeHandle } from 'react';

const ScrollDialog = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
  }));

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (props.onClick) props.onClick();
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        fullWidth={true}
        maxWidth={props.width ? props.width : 'md'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {props.content}
            {/* {[...new Array(3)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join('\n')} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            {props.buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default ScrollDialog;
