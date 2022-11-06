import Products from '../components/products';
import { carouselData } from '../utils/dummyData';
import Slider from '../components/layouts/carousel';
import Section from '../components/layouts/section';
// import BasicBreadcrumbs from '../components/layouts/breadcrumb';
import Paginator from '../components/layouts/paginator';

import { dummyProducts } from '../utils/dummyData';

// import { useDispatch, useSelector } from 'react-redux';
// import { cartActions } from '../store/cart';
// import { fetchCartData } from '../store/cart/actions';

// const sliderOptions = {
//   indicators: true,
//   navButtonsAlwaysVisible: true,
//   fullHeightHover: false,
//   autoPlay: false,
// };

const Home = props => {
  // const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart);
  // console.log(cart);

  // const handleInc = () => {
  //   dispatch(fetchCartData());
  // };

  return (
    <>
      <Slider data={carouselData} height="400px"></Slider>
      {/* <BasicBreadcrumbs></BasicBreadcrumbs> */}
      {/* <Slider
        data={carouselData}
        width="350px"
        height="200px"
        options={sliderOptions}
      ></Slider> */}
      {/* <div>
        <button onClick={handleInc}>INC</button>
      </div> */}
      <Section title="Hot Products">
        <Products data={dummyProducts}></Products>
      </Section>
      <Section title="All Products">
        <Products data={dummyProducts}></Products>
        <Paginator count={10}></Paginator>
      </Section>
    </>
  );
};

export default Home;
