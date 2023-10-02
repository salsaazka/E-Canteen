import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ItemsTable from './table'
import { cilZoom } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'

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
          <Form.Group className="mb-3 d-flex border" controlId="formBasicName">
            <Form.Control
              id="nameItem"
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              className="border-0"
              placeholder="Insert Your Items"
            />
            <CButton color="white" className="">
              {' '}
              <CIcon icon={cilZoom} customClassName="" />
            </CButton>
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
