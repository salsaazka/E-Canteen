import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { ToastContainer, toast } from 'react-toastify'
import DeviceTable from './table'
import { useNavigate } from 'react-router-dom'

const Device = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/devices/add')
  }

  const [filter, setFilter] = useState('')
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <Form.Group className="w-75" controlId="formBasicName">
              <Form.Control
                id="nameItem"
                onChange={(e) => setFilter(e.target.value)}
                type="text"
                placeholder="Insert Your Items"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleNavigate}>
              Add Device
            </Button>
          </div>
          <DeviceTable filter={filter} />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Device
