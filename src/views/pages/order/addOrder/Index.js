import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AddOrder = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const params = useParams()

  const [user, setUser] = useState('')
  const [canteen, setCanteen] = useState('')
  const [listcanteen, setListCanteen] = useState([])
  const [totalPrice, setTotal] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/order`,
        {
          user_id: user,
          canteen_id: canteen,
          total_price: totalPrice,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': cookies.get('auth_token'),
          },
        },
      )
      .then((res) => {
        console.log(res.data.message)
        toast.success(res.data.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        navigate('/orders')
        const inputUser = document.getElementById('user')
        inputUser.value = ''
        setUser('')

        const inputCanteem = document.getElementById('canteen')
        inputCanteem.value = ''
        setCanteen('')

        const inputTotal = document.getElementById('totalPrice')
        inputTotal.value = ''
        setTotal('')
      })
      .catch((err) => {
        console.log(err.response.data.message)
        toast.error(err.response.data.message, {
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

  // Get Canteen ID
  const getCanteen = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/canteen`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': cookies.get('auth_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setListCanteen(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
  useEffect(() => {
    getCanteen()
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                id="user"
                type="text"
                placeholder="Insert Your User ID"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Canteen ID</Form.Label>
              <Form.Control
                id="canteen"
                type="text"
                placeholder="Insert Your Canteen ID"
                value={canteen}
                onChange={(e) => setCanteen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                id="totalPrice"
                type="number"
                placeholder="Insert Your Total Price"
                onChange={(e) => setTotal(e.target.value)}
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

export default AddOrder
