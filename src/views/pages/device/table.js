import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import axios from 'axios'

const DeviceTable = () => {
  const [device, setDevices] = useState([])

  const getDevices = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/device`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setDevices(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    getDevices()
  }, [])

  const data = device.map((item, index) => ({
    id: item._id,
    number: index + 1,
    device: item.unique_device_id,
  }))

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'number',
      },
      {
        Header: 'Name Device',
        accessor: 'device',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (props) => {
          return <></>
        },
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: data,
  })

  return (
    <div>
      <table {...getTableProps()} className="w-100 bg-light rounded mt-3">
        <thead className="text-left">
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.id} {...column.getHeaderProps()} className="border-bottom p-3">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr
                key={row.id}
                {...row.getRowProps()}
                style={{ backgroundColor: '#fff', borderBottom: '1px solid #D9D9D9' }}
              >
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.column.id} {...cell.getCellProps()} className="border-none p-3">
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(DeviceTable)
