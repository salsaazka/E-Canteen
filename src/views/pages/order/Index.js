import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Order = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Canteen</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Total Price</Form.Label>
            <Form.Control type="number" placeholder="Insert Your Total Price" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Order
