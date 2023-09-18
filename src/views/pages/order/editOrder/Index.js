import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const EditOrder = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [user, setUser] = useState('')
  const [canteen, setCanteen] = useState('')
  const [totalPrice, setTotal] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/device/${params.id}`,
        {
          user_id: user,
          canteen_id: canteen,
          total_price: totalPrice,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token': localStorage.getItem('token'),
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
        const inputUser = document.getElementById('user')
        inputUser.value = ''
        setUser('')

        const inputCanteen = document.getElementById('canteen')
        inputCanteen.value = ''
        setCanteen('')

        const inputTotal = document.getElementById('totalPrice')
        inputTotal.value = ''
        setTotal('')
        navigate('/orders')
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

  const getOrder = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/order/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data)
        localStorage.setItem('auth_token', localStorage.getItem('auth_token'))
        setUser(res.data.data.user_id)
        setCanteen(res.data.data.canteen_id)
        setTotal(res.data.data.total_price)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicDevice">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                id="user"
                type="text"
                defaultValue={user}
                placeholder="Insert Your User ID"
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDevice">
              <Form.Label>Canteen ID</Form.Label>
              <Form.Control
                id="canteen"
                type="text"
                defaultValue={canteen}
                placeholder="Insert Your Canteen ID"
                onChange={(e) => setCanteen(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDevice">
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                id="totalPrice"
                type="number"
                defaultValue={totalPrice}
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
export default EditOrder
