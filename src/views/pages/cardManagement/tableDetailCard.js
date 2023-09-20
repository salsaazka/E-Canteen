/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import Cookies from 'universal-cookie'
import { useParams } from 'react-router-dom'

const DetailCard = () => {
  const cookies = new Cookies()
  const params = new useParams()

  const [card, setCard] = useState([])

  const getCard = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/card/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': cookies.get('auth_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setCard(res.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getCard()
  }, [])
  const data = card.map((item, index) => ({
    //     id: item._id,
    number: index + 1,
    user_id: item.user_id,
    card_id: item.card_id,
    balance: item.balance,
    //     name: item.card.user.name,
  }))

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'number',
      },
      {
        Header: 'User ID',
        accessor: 'user_id ',
      },
      {
        Header: 'Card ID',
        accessor: 'card_id',
      },
      {
        Header: 'Balance',
        accessor: 'balance',
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
                <tr key={row.id} {...row.getRowProps()}>
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

export default React.memo(DetailCard)
