/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useTable } from 'react-table'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import DetailCard from './tableDetailCard'
import Cookies from 'universal-cookie'

const CardTable = () => {
  // const cookies = new Cookies()

  const [card, setCards] = useState([])
  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const getCard = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/card `, {
        headers: {
          'Content-Type': 'application/json',
          // Authorization : `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setCards(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    getCard()
  }, [])

  const data = card.map((item, index) => ({
    id: item._id,
    number: index + 1,
    card: item.card_id,
    user: item.user_id,
  }))

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/v1/card/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        getCard()
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  const columns = React.useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'number',
      },
      {
        Header: 'Card ID',
        accessor: 'card',
      },
      {
        Header: 'User ID',
        accessor: 'user',
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: (props) => {
          return (
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="warning"
                onClick={() => handleShow(props?.row?.original?.card)}
                // onClick={() => navigate('/cards/detail' + props.row.original.card)}
                className="me-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FFFFFF"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </Button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(props?.row?.original?.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FFFFFF"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </div>
          )
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetailCard />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
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
  )
}

export default React.memo(CardTable)
