import { Paper } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import PasswordField from '../formControls/passwordField';
import styles from './auth.module.css';
import logo from '../../assets/logo-text.png';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const SignUp = props => {
  const [codeSent, setCodeSent] = useState(false);
  const [profileImage, setProfileImage] = useState('');

  const verifyPhoneNumber = () => {
    setCodeSent(true);
  };

  const onFileChange = event => {
    setProfileImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Paper elevation={10} className={styles.signupContainer}>
      <img className={styles.logo} src={logo} alt="e bazar" />
      <Divider
        sx={{ backgroundColor: '#ff5a19', width: '80%', margin: '0 0 20px 0' }}
      ></Divider>
      <Avatar
        alt="user"
        src={profileImage}
        sx={{ width: 150, height: 150, margin: '0px 0 0 0' }}
      />
      <Button
        variant="contained"
        component="label"
        endIcon={<PhotoCamera />}
        size="small"
        sx={{ m: 2 }}
      >
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={onFileChange}
        />
      </Button>
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
      <p className={styles.sectionText}>* ADDRESS INFORMATION *</p>
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
