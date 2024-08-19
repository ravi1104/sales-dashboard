import React from 'react';
import TodaySalesChart from '../components/TodaySalesChart';
import TodaySalesTable from '../components/TodaySalesTable';
import { salesData } from '../Api/mockData';

const Dashboard1 = () => {
    return (
        <div>
            <h1>Today's Sales</h1>
            <div>
                <h2>Product-Level Sales</h2>
                <TodaySalesChart data={salesData} />
            </div>
            <div>
                <h2>Sales Table</h2>
                <TodaySalesTable rowData={salesData} />
            </div>
        </div>
    );
};

export default Dashboard1;
