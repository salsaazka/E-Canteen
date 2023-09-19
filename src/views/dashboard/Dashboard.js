import React from 'react'

import { CCard, CCardBody, CCol, CProgress, CRow } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import LoginMiddleware from 'src/components/LoginMiddleware'

const Dashboard = () => {
  LoginMiddleware()
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
  ]

  return (
    <>
      <CRow md={{ cols: 1 }} lg={{ cols: 4 }} className="">
        {progressExample.map((item, index) => (
          <div className="px-1" key={index}>
            <CCard className="mb-4">
              <CCardBody>
                <CCol className="mb-sm-2 mb-0">
                  <div className="text-medium-emphasis">{item.title}</div>
                  <strong>
                    {item.value} ({item.percent}%)
                  </strong>
                  <CProgress thin className="mt-2" color={item.color} value={item.percent} />
                </CCol>
              </CCardBody>
            </CCard>
          </div>
        ))}
      </CRow>
      <CCard>
        <CCardBody>
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center me-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50px',
                  backgroundColor: '#2eb85c',
                }}
              ></div>
              <p className="ms-1">Income in</p>
            </div>
            <div className="d-flex align-items-center ms-2">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50px',
                  backgroundColor: '#e55353',
                }}
              ></div>
              <p className="ms-1">Income out</p>
            </div>
          </div>
          <CChartBar
            data={{
              labels: [
                '11 September 2023',
                '12 September 2023',
                '13 September 2023',
                '14 September 2023',
                '15 September 2023',
                '16 September 2023',
                '17 September 2023',
              ],
              datasets: [
                {
                  label: 'Income in',
                  backgroundColor: '#2eb85c',
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  barThickness: 30,
                },
                {
                  label: 'Income out',
                  backgroundColor: '#e55353',
                  data: [20, 30, 40, 15, 10, 50, 10, 90, 60],
                  barThickness: 30,
                },
              ],
            }}
            options={{
              responsive: true,
              borderRadius: 50,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              plugins: {
                legend: {
                  display: false, // Set to false to hide the legend
                },
              },
            }}
            labels="months"
            style={{ minHeight: '300px', maxHeight: '300px', width: '100%' }}
          />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
