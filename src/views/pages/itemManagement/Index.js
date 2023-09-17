import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ItemsTable from './table'
import { useNavigate } from 'react-router-dom'

const Items = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/items/add')
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-end">
          <Button variant="primary" onClick={handleNavigate}>
            Add Item
          </Button>
        </div>
        <ItemsTable />
      </div>
    </div>
  )
}

export default Items
