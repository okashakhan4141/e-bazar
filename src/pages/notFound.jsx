import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Section from '../components/layouts/section';

const NotFound = props => {
  const history = useHistory();

  const navigatetoHome = () => {
    history.replace('/home');
  };

  return (
    <Section>
      page not found!
      <Button
        onClick={navigatetoHome}
        variant="contained"
        startIcon={<ArrowBackIcon />}
      >
        Home Page
      </Button>
    </Section>
  );
};

export default NotFound;
