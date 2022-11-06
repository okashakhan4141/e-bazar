import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Fab from '@mui/material/Fab';
import styles from './order.module.css';

const TrackOrderForm = props => {
  return (
    <div className={styles.formContainer}>
      <TextField
        margin="dense"
        id="orderId"
        label="Order ID"
        type="email"
        variant="standard"
        helperText="Enter your order id"
        sx={{ width: '350px' }}
      />
      <Fab sx={{ margin: '0 20px' }} color="primary" aria-label="add">
        <SearchIcon />
      </Fab>
    </div>
  );
};

export default TrackOrderForm;
