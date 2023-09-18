import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const EditDevice = () => {
  const navigate = useNavigate()
  const params = useParams()

  const [device, setDevice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/device/${params.id}`,
        {
          unique_device_id: device,
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
        const inputName = document.getElementById('device')
        inputName.value = ''
        setDevice('')
        navigate('/devices')
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

  const getDetail = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/device/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setDevice(res.data.data.unique_device_id)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name Device</Form.Label>
              <Form.Control
                id="device"
                type="text"
                placeholder="Insert Your Device"
                defaultValue={device}
                onChange={(e) => setDevice(e.target.value)}
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

export default EditDevice
