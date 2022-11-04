import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import styles from './order.module.css';
import IconButton from '@mui/material/IconButton';

const TrackOrderForm = props => {
  return (
    <div className={styles.formContainer}>
      <TextField
        margin="dense"
        id="orderId"
        label="Order ID"
        type="email"
        size="small"
        placeholder="Enter your order Id"
        variant="standard"
        sx={{ width: '350px' }}
      />
      <Button sx={{ margin: '0 10px' }} variant="contained">
        Track
      </Button>
    </div>
  );
};

export default TrackOrderForm;
