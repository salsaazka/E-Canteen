import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AddCard = () => {
  const cookies = new Cookies()

  const navigate = useNavigate()
  const params = useParams()

  const [card, setCard] = useState('')
  const [user, setUser] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    // console.log(params.id)
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
  const getUsers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/user/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setUser(res.data.data._id)
        setName(res.data.data.name)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Card ID</Form.Label>
              <Form.Control
                disabled
                id="card"
                type="text"
                placeholder="Insert Your Cards"
                onChange={(e) => setCard(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                disabled
                id="user"
                type="text"
                placeholder="User ID"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                disabled
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

export default AddCard
