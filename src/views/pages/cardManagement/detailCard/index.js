import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'universal-cookie'

const DetailCard = () => {
  //   const cookies = new Cookies()

  //   const navigate = useNavigate()
  const params = useParams()

  const [card, setCard] = useState('')

  const getCard = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/card/${params.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res.data.data)
        setCard(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
  useEffect(() => {
    getCard()
  }, [])

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '50%' }}>
          <Card.Header className="text-center">Detail</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>User ID : {card.user_id}</ListGroup.Item>
            <ListGroup.Item>Card ID : {card.card_id}</ListGroup.Item>
            <ListGroup.Item>Balance : Rp. {card.balance}</ListGroup.Item>
          </ListGroup>
        </Card>
        <ToastContainer />
      </div>
    </>
  )
}

export default DetailCard
