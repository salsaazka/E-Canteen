import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const Device = () => {
  return (
    <div className="card">
      <div className="card-body">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDevice">
            <Form.Label>Name Device</Form.Label>
            <Form.Control type="text" placeholder="Insert Your Device" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Device
