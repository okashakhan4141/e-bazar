import Products from '../components/products';
import { carouselData } from '../utils/dummyData';
import Slider from '../components/layouts/carousel';
import Section from '../components/layouts/section';

const sliderOptions = {
  indicators: true,
  navButtonsAlwaysVisible: true,
  fullHeightHover: false,
  autoPlay: false,
};

const Home = props => {
  return (
    <>
      <Slider data={carouselData} height="400px"></Slider>
      <Slider
        data={carouselData}
        width="350px"
        height="200px"
        options={sliderOptions}
      ></Slider>
      <Section title="Trending">
        <Products></Products>
      </Section>
      <Section title="For You">
        <Products></Products>
      </Section>
    </>
  );
};

export default Home;
