import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import UserManagementTable from './table'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import { cilZoom } from '@coreui/icons'

const UserManagement = () => {
  const [filter, setFilter] = useState('')
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex">
          <Form.Group className="mb-3 d-flex border" controlId="formBasicName">
            <Form.Control
              id="nameItem"
              onChange={(e) => setFilter(e.target.value)}
              type="text"
              className="border-0"
              placeholder="Insert Your Name"
            />
            <CButton color="white" className="">
              {' '}
              <CIcon icon={cilZoom} customClassName="" />
            </CButton>
          </Form.Group>
        </div>
        <UserManagementTable filter={filter} />
      </div>
    </div>
  )
}

export default UserManagement
