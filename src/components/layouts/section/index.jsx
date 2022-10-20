import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

import styles from './section.module.css';

const Section = props => {
  return (
    <>
      <Paper
        elevation={3}
        sx={{ width: `${props.width}`, height: `${props.height}` }}
        className={styles.container}
      >
        {props.title && (
          <>
            <Typography variant="h5" sx={{ margin: 'auto' }} gutterBottom>
              {props.title}
            </Typography>
            <Divider sx={{ width: '70%', margin: '5px auto' }}></Divider>
          </>
        )}
        {props.children}
      </Paper>
    </>
  );
};

export default Section;
