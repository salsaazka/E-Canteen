import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CardTable from './table'
import LoginMiddleware from 'src/components/LoginMiddleware'

const CardsManagement = () => {
  LoginMiddleware()
  return (
    <div className="card">
      <div className="card-body">
        <h4>Card</h4>
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
