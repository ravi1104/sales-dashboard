import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components needed for the bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TodaySalesChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.productName),
        datasets: [{
            label: 'Sales Amount',
            data: data.map(item => item.salesAmount),
            backgroundColor: 'rgba(75,192,192,0.6)',
        }],
    };

    return <Bar data={chartData} />;
};

export default TodaySalesChart;
