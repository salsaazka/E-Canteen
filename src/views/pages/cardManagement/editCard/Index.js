import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const EditCard = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const params = useParams()

  const [user_id, setUserId] = useState('')
  const [card_id, setCardId] = useState('')
  const [balance, setBalance] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/card/top_up/${params.id}`,
        {
          user_id: user_id,
          card_id: card_id,
          balance: balance,
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
        const inputUser = document.getElementById('user_id')
        inputUser.value = ''
        setUserId('')

        const inputCanteen = document.getElementById('card_id')
        inputCanteen.value = ''
        setCardId('')

        const inputTotal = document.getElementById('balance')
        inputTotal.value = ''
        setBalance('')
        navigate('/cards')
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
        setUserId(res.data.data.user_id)
        setCardId(res.data.data.card_id)
        setBalance(res.data.data.balance)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getCard()
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                id="user_id"
                type="text"
                defaultValue={user_id}
                placeholder="Insert Your User ID"
                onChange={(e) => setUserId(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Card ID</Form.Label>
              <Form.Control
                id="card_id"
                type="text"
                defaultValue={card_id}
                placeholder="Insert Your Canteen ID"
                onChange={(e) => setCardId(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Balance</Form.Label>
              <Form.Control
                id="balance"
                type="number"
                defaultValue={balance}
                placeholder="Insert Your Total Balance"
                onChange={(e) => setBalance(e.target.value)}
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
export default EditCard
