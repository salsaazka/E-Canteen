/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'universal-cookie'

const DetailItem = () => {
  const cookies = new Cookies()

  const [item, setItem] = useState([])

  const getItem = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/item`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': cookies.get('auth_token'),
        },
      })
      .then((res) => {
        console.log(res?.data?.data)
        setItem(res?.data?.data)
      })
      .catch((err) => {
        console.log(err?.response?.data?.message)
      })
  }

  useEffect(() => {
    getItem()
  }, [])
  const data = item.map((item, index) => ({
    id: item._id,
    number: index + 1,
    canteen: item.canteen_id,
    name: item.name,
    price: item.price,
    image: item.img_url,
  }))

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'number',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Canteen',
        accessor: 'canteen',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: data,
  })

  return (
    <div className="card">
      <div className="card-body">
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
        <ToastContainer />
      </div>
    </div>
  )
}

export default React.memo(DetailItem)
