import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Sales Dashboard</h1>
      <p>Select one of the dashboards below to view sales data:</p>
      <ul>
        <li>
          <Link to="/today-sales">Today's Sales Dashboard</Link>
        </li>
        <li>
          <Link to="/sales-comparison">Sales Comparison Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
