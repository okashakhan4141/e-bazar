import TrackOrderForm from './orderForm';
import HorizontalStepper from '../layouts/stepper';

const TrackOrder = props => {
  return (
    <>
      <TrackOrderForm></TrackOrderForm>
      <HorizontalStepper />
    </>
  );
};

export default TrackOrder;
