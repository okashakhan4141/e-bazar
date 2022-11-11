import Carousel from 'react-material-ui-carousel';
import styles from './carousel.module.css';
import Paper from '@mui/material/Paper';

const Slider = props => {
  return (
    <Carousel {...props.options} sx={{ width: `${props.width}` }}>
      {props.data.map((item, i) => (
        <Paper
          elevation={3}
          key={i}
          sx={{ height: `${props.height}` }}
          // className={styles.container}
        >
          <div
            className={styles.img}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: `${props.imageSize}`,
            }}
          ></div>
          {item.name && item.desc && (
            <div className={styles.desc}>
              <h2>{item.name}</h2>
              <span>{item.desc}</span>
            </div>
          )}
        </Paper>
      ))}
    </Carousel>
  );
};

export default Slider;
