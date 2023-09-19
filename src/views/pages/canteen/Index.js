import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CanteenTable from './table'
import { useNavigate } from 'react-router-dom'

const Canteen = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/canteen/add')
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleNavigate}>
            Add Canteen
          </Button>
        </div>
        <CanteenTable />
      </div>
    </div>
  )
}

export default Canteen
