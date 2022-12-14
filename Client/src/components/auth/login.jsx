import { Paper } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import PasswordField from '../formControls/passwordField';
import styles from './auth.module.css';
import logo from '../../assets/logo-text.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

const Login = props => {
  return (
    <Paper elevation={10} className={`${styles.login} ${styles.container}`}>
      <img className={styles.logo} src={logo} alt="e bazar" />
      <Divider
        sx={{ backgroundColor: '#ff5a19', width: '80%', margin: '0 0 20px 0' }}
      ></Divider>
      <TextField
        id="phone"
        label="Phone Number"
        type="text"
        required
        placeholder="03XX XXXXXXX"
        variant="outlined"
        helperText="Enter your phone number"
        sx={{ m: 1, width: '35ch' }}
      />
      <PasswordField label="Password" />
      <Button sx={{ m: 2, width: '35ch' }} variant="contained">
        Login
      </Button>
      <p>Don't have an account?</p>
      <Link className={styles.registerText} to="/auth/register-new">
        REGISTER HERE!
      </Link>
    </Paper>
  );
};

export default Login;
