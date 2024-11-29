import { Link } from 'react-router-dom';

// Constants
import { ROUTE } from '@/constants';

const Details = () => {
  return (
    <>
      <div>Details</div>
      {/* TODO: Simulate navigate */}
      <Link to={ROUTE.SUBSCRIBE_PACKAGE}>Become Member</Link>
    </>
  );
};

export default Details;
