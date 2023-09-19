import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const EditOrder = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const params = useParams()

  const [canteen, setCanteen] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/canteen/${params.id}`,
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
        console.log(res.data.message)
        toast.success(res.data.message, {
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

  const getCanteen = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/canteen/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': cookies.get('auth_token'),
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setCanteen(res.data.data.name)
      })
      .catch((err) => {
        console.log(err.response)
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
              <Form.Label>Canteen Name</Form.Label>
              <Form.Control
                id="canteen"
                type="text"
                defaultValue={canteen}
                placeholder="Insert Name"
                onChange={(e) => setCanteen(e.target.value)}
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
