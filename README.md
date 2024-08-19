# Sales Dashboard Application

## Project Overview

The Sales Dashboard Application is a React-based project designed to visualize and analyze sales data through two distinct dashboards. It utilizes Chart.js for graphical representation and AG Grid for tabular data. This application allows users to view and compare sales data, offering insights into sales performance.

### Dashboards

1. **Dashboard 1: Today's Sales**
   - **Graphs**: Displays today's sales data at the product and category levels.
   - **Table**: Provides a detailed table of today's sales with columns for Product Name, Category, Quantity Sold, and Sales Amount.

2. **Dashboard 2: Sales Comparison Between Two Dates**
   - **Graphs**: Compares sales data between two selected dates at the product and category levels.
   - **Table**: Presents a comparison table showing Product Name, Category, Date 1 Sales Amount, Date 2 Sales Amount, and Difference.

## Features

- **Date Selection**: Users can select dates for the comparison dashboard.
- **Data Filtering**: Options to filter data by category and product.
- **Responsive Design**: Ensures usability on various devices.
- **API Integration**: Fetches data from mock or real APIs.
- **Error Handling**: Includes error handling for API requests and data display.

## Technical Stack

- **React**: Functional components and hooks.
- **Chart.js**: Data visualization.
- **AG Grid**: Tabular data display with sorting, filtering, and pagination.
- **React Router**: Navigation between dashboards.
- **API Integration**: Data fetching from external APIs or mock data.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ravi1104/sales-dashboard-app.git
