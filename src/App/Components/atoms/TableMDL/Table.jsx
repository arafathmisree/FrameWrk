import React from "react";
import DataTable from "react-data-table-component";

function TableMDL({ columns, data }) {
  

  return (
    <DataTable
      title={"Data"}
      columns={columns}
      data={data}
      pagination
      selectableRows  
      Clicked 
    />
  );
}
export default TableMDL;