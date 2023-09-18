import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const cookies = new Cookies()
  const navigate = useNavigate()

  const [usernameLogin, setUsername] = useState('')
  const [passwordLogin, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
        {
          email: usernameLogin,
          password: passwordLogin,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'auth-token': localStorage.getItem('token'),
          },
        },
      )
      .then((res) => {
        console.log(res.data.message)
        cookies.set('auth_token', res.data.data.auth_token)
        toast.success(res.data.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
        // const inputName = document.getElementById('nameLogin')
        // inputName.value = ''
        // setName('')
        const inputEmail = document.getElementById('usernameLogin')
        inputEmail.value = ''
        setUsername('')
        const inputPass = document.getElementById('passwordLogin')
        inputPass.value = ''
        setPassword('')
        navigate('/dashboard')
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
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton color="primary" type="submit" className="px-4">
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <ToastContainer />
    </>
  )
}

export default Login
