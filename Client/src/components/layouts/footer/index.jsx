import styles from './footer.module.css';
import logo from '../../../assets/logo-text.png';
import { Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

import { useHistory } from 'react-router-dom';

const Footer = props => {
  const history = useHistory();
  const goToHome = () => {
    history.push('/home');
  };
  return (
    <div className={styles.container}>
      <img
        style={{ cursor: 'pointer' }}
        onClick={goToHome}
        className={styles.logo}
        src={logo}
        alt=""
      />
      <Divider
        sx={{ backgroundColor: 'white', width: '70%', margin: '20px' }}
      ></Divider>
      <div className={styles.social}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ color: 'white' }}
        >
          <GitHubIcon sx={{ width: '30px', height: '30px' }} />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon sx={{ width: '30px', height: '30px' }} />
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ color: 'white' }}
        >
          <FacebookIcon sx={{ width: '30px', height: '30px' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
