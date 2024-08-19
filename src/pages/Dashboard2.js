import React, { useState } from 'react';
import SalesComparisonChart from '../components/SalesComparisonChart';
import SalesComparisonTable from '../components/SalesComparisonTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { salesComparisonData } from '../Api/mockData';

const Dashboard2 = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    return (
        <div>
            <h1>Sales Comparison Between Two Dates</h1>
            <div>
                <label>Select Date 1: </label>
                <DatePicker selected={date1} onChange={(date) => setDate1(date)} />
            </div>
            <div>
                <label>Select Date 2: </label>
                <DatePicker selected={date2} onChange={(date) => setDate2(date)} />
            </div>
            <div>
                <h2>Product-Level Comparison</h2>
                <SalesComparisonChart data={salesComparisonData} />
            </div>
            <div>
                <h2>Comparison Table</h2>
                <SalesComparisonTable rowData={salesComparisonData} />
            </div>
        </div>
    );
};

export default Dashboard2;
