import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const SalesComparisonTable = ({ rowData }) => {
    const columns = [
        { headerName: 'Product Name', field: 'productName', sortable: true, filter: true },
        { headerName: 'Category', field: 'category', sortable: true, filter: true },
        { headerName: 'Date 1 Sales Amount', field: 'date1SalesAmount', sortable: true, filter: true },
        { headerName: 'Date 2 Sales Amount', field: 'date2SalesAmount', sortable: true, filter: true },
        { headerName: 'Difference', field: 'difference', sortable: true, filter: true },
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columns}
                pagination={true}
            />
        </div>
    );
};

export default SalesComparisonTable;
