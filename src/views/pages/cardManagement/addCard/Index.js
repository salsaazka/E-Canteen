import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const AddCard = () => {
  const navigate = useNavigate()
  const params = useParams()
  const getDetail = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/user/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setUser(res.data.data.user_id)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
  useEffect(() => {
    getDetail()
  }, [])
  const [card, setCard] = useState('')
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/card`,
        {
          card_id: card,
          user_id: user,
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
        const inputCard = document.getElementById('card')
        inputCard.value = ''
        setCard('')

        const inputUser = document.getElementById('user')
        inputUser.value = ''
        setUser('')
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

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Card</Form.Label>
              <Form.Control
                id="card"
                type="text"
                placeholder="Insert Your Cards"
                onChange={(e) => setCard(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 disable " controlId="formBasicName">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                id="user"
                type="text"
                defaultValue={params.id}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Card</Form.Label>
              <Form.Control
                id="card"
                type="text"
                placeholder="Insert Your Cards"
                onChange={(e) => setCard(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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

export default AddCard
