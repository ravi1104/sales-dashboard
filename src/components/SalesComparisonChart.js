import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesComparisonChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.productName),
        datasets: [
            {
                label: 'Date 1 Sales Amount',
                data: data.map(item => item.date1SalesAmount),
                backgroundColor: 'rgba(75,192,192,0.6)',
            },
            {
                label: 'Date 2 Sales Amount',
                data: data.map(item => item.date2SalesAmount),
                backgroundColor: 'rgba(153,102,255,0.6)',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default SalesComparisonChart;
