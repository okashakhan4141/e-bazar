import { Paper } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import PasswordField from '../formControls/passwordField';
import styles from './auth.module.css';
import logo from '../../assets/logo-text.png';
import Button from '@mui/material/Button';
import { useState } from 'react';

const SignUp = props => {
  const [codeSent, setCodeSent] = useState(false);

  const verifyPhoneNumber = () => {
    setCodeSent(true);
  };

  return (
    <Paper className={styles.signupContainer}>
      <img className={styles.logo} src={logo} alt="e bazar" />
      <p className={styles.sectionText}>* Basic Information *</p>
      <div className={styles.signup}>
        <TextField
          id="firstName"
          label="First Name"
          type="text"
          required
          variant="outlined"
          helperText="Enter your first name"
          sx={{ m: 1, width: '35ch' }}
        />
        <TextField
          id="lastName"
          label="Last Name"
          type="text"
          required
          variant="outlined"
          helperText="Enter your last name"
          sx={{ m: 1, width: '35ch' }}
        />
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
        {codeSent ? (
          <TextField
            id="phoneCode"
            label="Verification Code"
            type="text"
            required
            variant="outlined"
            placeholder="XXXXXX"
            helperText="Check your number for code"
            sx={{ m: 1, width: '35ch' }}
          />
        ) : (
          <Button
            sx={{ m: 1, width: '300px', height: '55px' }}
            variant="outlined"
            onClick={verifyPhoneNumber}
          >
            Verify Phone Number
          </Button>
        )}
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          variant="outlined"
          placeholder="example@gmail.com"
          //   fullWidth
          helperText="Enter your email address"
          sx={{ m: 1, width: '72.5ch' }}
        />
        <PasswordField label="Password" />
        <PasswordField label="Confirm Password" />
      </div>
      <p className={styles.sectionText}>* Address Information *</p>
      <div className={styles.signup}>
        <TextField
          id="postalCode"
          label="Postal Code"
          type="text"
          required
          variant="outlined"
          helperText="Enter your postal code"
          sx={{ m: 1, width: '35ch' }}
        />
        <TextField
          id="City"
          label="City"
          type="text"
          required
          variant="outlined"
          helperText="Enter your city"
          sx={{ m: 1, width: '35ch' }}
        />
        <TextField
          id="address"
          label="Complete Address"
          type="text"
          required
          minRows={3}
          variant="outlined"
          placeholder="Complete Address"
          multiline
          helperText="Enter your complete address"
          sx={{ m: 1, width: '72.5ch' }}
        />
      </div>
      <Button sx={{ m: 2, width: '35ch' }} variant="contained">
        Register
      </Button>
    </Paper>
  );
};

export default SignUp;
