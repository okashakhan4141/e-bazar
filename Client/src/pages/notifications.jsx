import Section from '../components/layouts/section';
import BasicBreadcrumbs from '../components/layouts/breadcrumb';

const breadcrumbItems = [{ name: 'Home', route: '/home' }];

const Notifications = props => {
  return (
    <>
      <BasicBreadcrumbs
        breadcrumbs={breadcrumbItems}
        active="Notifications"
      ></BasicBreadcrumbs>
      <Section title="Notifications">
        <p>Notifications</p>
      </Section>
    </>
  );
};

export default Notifications;
