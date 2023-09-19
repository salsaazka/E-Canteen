import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AddCanteen = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const [canteen, setCanteen] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/canteen`,
        {
          name: canteen,
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
        navigate('/canteen')
        const inputCanteen = document.getElementById('canteen')
        inputCanteen.value = ''
        setCanteen('')
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

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Canteen</Form.Label>
              <Form.Control
                id="canteen"
                onChange={(e) => setCanteen(e.target.value)}
                type="text"
                placeholder="Insert Your Canteen"
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

export default AddCanteen
