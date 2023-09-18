// const getTokenFromLocalStorage = localStorage.getItem('token')
//   ? JSON.parse(localStorage.getItem('token'))
//   : null

// export const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ''
//     }`,
//     Accept: 'application/json',
//   },
// }

import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function LoginMiddleware() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const getTokenFromLocalStorage = localStorage.getItem('token')

    if (!getTokenFromLocalStorage) {
      // window.location.href = '/login'
      window.location.href = '/login'
    } else if (getTokenFromLocalStorage && location.pathname === '/login') {
      navigate('/dashboard')
      console.log('hello')
    }
  }, [])
}
