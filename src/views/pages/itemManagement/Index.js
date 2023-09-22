import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ItemsTable from './table'
import { useNavigate } from 'react-router-dom'

const Items = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/items/add')
  }

  const [filter, setFilter] = useState('')

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              id="nameItem"
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              placeholder="Insert Your Items"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleNavigate}>
            Add Item
          </Button>
        </div>
        <ItemsTable filter={filter} />
      </div>
    </div>
  )
}

export default Items
