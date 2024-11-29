import { Link } from 'react-router-dom';

// Constants
import { ROUTE } from '@/constants';

const Category = () => {
  return (
    <>
      <div>Category Page</div>
      {/* TODO: Simulate navigate */}
      <Link to={`${ROUTE.CATEGORY_DETAILS}/2`}>View Details</Link>
    </>
  );
};

export default Category;
