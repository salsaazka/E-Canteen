import React from 'react'
import CardTable from './table'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import LoginMiddleware from 'src/components/LoginMiddleware'

const CardsManagement = () => {
  LoginMiddleware()
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name Cards</Form.Label>
            <Form.Control type="text" placeholder="Insert Your Cards" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <CardTable />
      </div>
    </div>
  )
}

export default CardsManagement
