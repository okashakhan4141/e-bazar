import Section from '../components/layouts/section';
import Details from '../components/productDetail';
import SimpleAccordion from '../components/layouts/accordion';
import Comments from '../components/comments';
import Paginator from '../components/layouts/paginator';

const ProductDetail = props => {
  return (
    <>
      <Section title="Product Details">
        <Details></Details>
      </Section>
      <Section title={`FAQs`}>
        <SimpleAccordion></SimpleAccordion>
      </Section>
      <Section title={`Rating & Reviews`}>
        <Comments></Comments>
        <Paginator count={5}></Paginator>
      </Section>
    </>
  );
};

export default ProductDetail;
