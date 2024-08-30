import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function DashboardLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout