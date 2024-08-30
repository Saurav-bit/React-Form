import React from 'react'
import { Outlet } from 'react-router-dom'

function HomePageScreen() {
  return (
    <>
    <div>HomePageScreen</div>
    <Outlet/>
    </>
  )
}

export default HomePageScreen