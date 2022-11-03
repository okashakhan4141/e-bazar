import Section from '../components/layouts/section';
import BasicBreadcrumbs from '../components/layouts/breadcrumb';

const breadcrumbItems = [{ name: 'Home', route: '/home' }];

const Orders = props => {
  return (
    <>
      <BasicBreadcrumbs
        breadcrumbs={breadcrumbItems}
        active="Orders"
      ></BasicBreadcrumbs>
      <Section title="Your Orders">
        <p>Orders</p>
      </Section>
    </>
  );
};

export default Orders;
