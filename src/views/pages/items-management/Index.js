import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Items = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name Items</Form.Label>
            <Form.Control type="text" placeholder="Insert Your Items" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Insert Your Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Insert Your Price" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Items
