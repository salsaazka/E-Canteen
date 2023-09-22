import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import UserManagementTable from './table'

const UserManagement = () => {
  const [filter, setFilter] = useState('')
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <Form.Group className="w-100 mb-3" controlId="formBasicName">
            <Form.Control
              id="nameItem"
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              placeholder="Insert Your Name"
            />
          </Form.Group>
        </div>
        <UserManagementTable filter={filter} />
      </div>
    </div>
  )
}

export default UserManagement
