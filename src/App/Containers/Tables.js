import React, { useState, useEffect, Suspense } from "react";
import Table from "../Components/atoms/Table"
import TableMDL, { TableMDLServer } from "../Components/atoms/TableMDL"
import { Card } from "../Components/atoms/Card";
import { Button } from "../Components/atoms/Button";

function Tables() {
    const [data, setData] = useState([]);
    const dataUrl = "https://api.mocki.io/v1/3099a648";
    const getDataWithAxios = async () => {
      fetch(dataUrl)
      .then(response => response.json())
      .then(data => setData(data));    
    };
  
    const columns = React.useMemo(
      () => [
        {
          Header: 'Account details',
          columns: [
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'First name',
              accessor: 'first_name',
            },
            {
              Header: 'Last name',
              accessor: 'last_name',
            },
          ],
        },
        {
          Header: 'Contact info',
          columns: [
            {
              Header: 'Email',
              accessor: 'email',
            },
            {
              Header: 'Phone',
              accessor: 'phone',
            }
          ],
        },
      ],
      []
    )

    const dataColumns = [
      {
        name: 'First name',
        selector: 'first_name',
        sortable: true,
      },
      {
        name: 'Last name',
        selector: 'last_name',
        sortable: true,
        right: false,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: true,
        right: false,
      },
      {
        name: 'Action',
        sortable: true,
        right: true,
        cell: row => <div><div></div><Button type="primary">Edit</Button></div>
      },
    ];

    useEffect(() => {
        getDataWithAxios()
      }, []);

  return (
    <div class="grid ">
      
      <div> 
          <TableMDL columns={dataColumns} data={data} /> 
      </div>
      <div>
        <TableMDLServer />
      </div>
      <div>
      {/* <Card type="primary" size="big"> */}
      <Table columns={columns} data={data} />
      {/* </Card>   */}
      </div>
    </div>
    
  );
}

export default Tables;