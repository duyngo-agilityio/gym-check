import { Link } from 'react-router-dom';

// Constants
import { ROUTE } from '@/constants';

const SubscribePackage = () => {
  return (
    <>
      <div>SubscribePackage</div>
      {/* TODO: Simulate navigate */}
      <Link to={`${ROUTE.CHECKOUT}/1`}>Subscribe</Link>
    </>
  );
};

export default SubscribePackage;
