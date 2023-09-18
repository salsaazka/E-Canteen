import React, { useEffect } from 'react'
import Cookies from 'universal-cookie'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LoginMiddleware() {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const authToken = cookies.get('auth_token')
    if (!authToken) {
      navigate('/login')
    } else if (authToken && location.pathname === '/login') {
      navigate('/dashboard')
    }
  }, [])

  return null
}
