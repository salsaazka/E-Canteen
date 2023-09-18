import React from 'react'
import Button from 'react-bootstrap/Button'
import OrderTable from './table'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/orders/add')
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleNavigate}>
            Add Order
          </Button>
        </div>
        <OrderTable />
      </div>
    </div>
  )
}

export default Order
