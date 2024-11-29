// Libs
import { ROUTE } from '@/constants';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      {/* TODO: Simulate navigate */}
      <Link to={ROUTE.CATEGORY}>See All</Link>
    </>
  );
};

export default Dashboard;
