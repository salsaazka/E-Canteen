import React from "react";
import { useTable } from "react-table";

const ItemsTable = () => {
    const columns = React.useMemo(
        () => [
           {
              Header: 'No',
              accessor: 'number',
           },
           {
              Header: 'Email',
              accessor: 'email',
           },
           {
              Header: 'Name',
              accessor: 'name',
           },
           {
              Header: 'Organization',
              accessor: 'organization',
           },
           {
              Header: 'Workstream',
              accessor: 'workstream',
           },
           {
              Header: 'Role',
              accessor: 'role',
           },
           {
              Header: 'Action',
              accessor: 'action',
              Cell: (props) => {
                 return (
                  <></>
                 );
              },
           },
        ],
        []
     );
  
     const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
     } = useTable({
        columns,
        data: data,
     });

}

export default React.memo(ItemsTable) 