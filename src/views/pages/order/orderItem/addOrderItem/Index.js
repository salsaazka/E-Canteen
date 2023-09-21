import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AddOrderItem = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const params = useParams()

  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/order/order_item`,
        {
          order_id: params.id,
          price: price,
          quantity: quantity,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': cookies.get('auth_token'),
          },
        },
      )
      .then((res) => {
        console.log(res?.data?.message)
        toast.success(res?.data?.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        navigate('/orders')
      })
      .catch((err) => {
        console.log(err?.response?.data?.message)
        toast.error(err?.response?.data?.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      })
  }

  // Get User ID
  // const getUsers = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/api/v1/user/${params.id}`, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.data)
  //       setUser(res.data.data._id)
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data.message)
  //     })
  // }
  // useEffect(() => {
  //   getUsers()
  // }, [])
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              {/* <Form.Control
                id="canteen"
                type="text"
                placeholder="Insert Your Canteen ID"
                value={canteen}
                onChange={(e) => setCanteen(e.target.value)}
              /> */}
              <Form.Label>Price</Form.Label>
              <Form.Control
                id="price"
                type="number"
                placeholder="Insert Your Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                id="quantity"
                type="number"
                placeholder="Insert Your Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddOrderItem
