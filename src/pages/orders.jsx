import Section from '../components/layouts/section';
import BasicBreadcrumbs from '../components/layouts/breadcrumb';
import HorizontalStepper from '../components/layouts/stepper';
import TrackOrder from '../components/orders';

const breadcrumbItems = [{ name: 'Home', route: '/home' }];

const Orders = props => {
  return (
    <>
      <BasicBreadcrumbs
        breadcrumbs={breadcrumbItems}
        active="Orders"
      ></BasicBreadcrumbs>
      <Section title="Track Your Order">
        <TrackOrder />
      </Section>
    </>
  );
};

export default Orders;
