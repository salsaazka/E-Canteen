import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { ToastContainer, toast } from 'react-toastify'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100" style={{ backgroundColor: '#EBEAF5' }}>
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default DefaultLayout
