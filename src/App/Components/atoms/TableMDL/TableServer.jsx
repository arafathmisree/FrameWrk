import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import DataTable from "react-data-table-component";

const columns = [
  {
    name: 'First Name',
    selector: 'first_name',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'last_name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
];

const TableMDLServer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const fetchUsers = async page => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`,
    );

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const handlePageChange = page => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);

    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`,
    );

    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  
  }, []);

  return (
    <DataTable
      title="Data From the server"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      selectableRows
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  );
};

export default TableMDLServer;