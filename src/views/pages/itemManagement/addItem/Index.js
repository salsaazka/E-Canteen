import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AddItem = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const [canteens, setCanteens] = useState([])
  const [canteen, setCanteen] = useState('')
  const [nameItem, setName] = useState('')
  const [priceItem, setPrice] = useState('')
  const [image, setImage] = useState('')

  const getCanteen = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/canteen`, {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': cookies.get('auth_token'),
        },
      })
      .then((res) => {
        setCanteens(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }

  useEffect(() => {
    getCanteen()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/item`,
        {
          canteen_id: canteen,
          name: nameItem,
          price: priceItem,
          img_url: image,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': cookies.get('auth_token'),
          },
        },
      )
      .then((res) => {
        console.log(res?.data?.message)
        toast.success(res?.data?.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        navigate('/items')

        const inputName = document.getElementById('nameItem')
        inputName.value = ''
        setName('')

        const inputPrice = document.getElementById('priceItem')
        inputPrice.value = ''
        setPrice('')

        const inputImage = document.getElementById('image')
        inputImage.value = ''
        setImage('')
      })
      .catch((err) => {
        console.log(err?.response?.data?.message)
        toast.error(err?.response?.data?.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      })
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Canteen</Form.Label>
              {/* <Form.Control
                id="canteen"
                onChange={(e) => setCanteen(e.target.value)}
                type="text"
                placeholder="Insert Your Canteen"
              /> */}
              <Form.Select onChange={(e) => setCanteen(e.target.value)}>
                <option value="" selected disabled>
                  Pilih Kantin
                </option>
                {canteens.map((canteen) => (
                  <option value={canteen._id} key={canteen._id}>
                    {canteen.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name Items</Form.Label>
              <Form.Control
                id="nameItem"
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Insert Your Items"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                id="priceItem"
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Insert Your Price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                id="image"
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Insert Your Image"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddItem
