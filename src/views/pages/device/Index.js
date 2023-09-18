import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify'
import DeviceTable from './table'
import { useNavigate } from 'react-router-dom'

const Device = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/devices/add')
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={handleNavigate}>
              Add Device
            </Button>
          </div>
          <DeviceTable />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Device
