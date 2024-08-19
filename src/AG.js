import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Import AG Grid styles
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Import AG Grid Alpine theme styles

const TodaySalesTable = ({ rowData }) => {
    const columns = [
        { headerName: 'Product Name', field: 'productName', sortable: true, filter: true },
        { headerName: 'Category', field: 'category', sortable: true, filter: true },
        { headerName: 'Quantity Sold', field: 'quantitySold', sortable: true, filter: true },
        { headerName: 'Sales Amount', field: 'salesAmount', sortable: true, filter: true },
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
export default TodaySalesTable;
