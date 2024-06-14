import React from 'react'
import { Outlet } from 'react-router-dom'

const SystemLayout = ({ sidebarToggle, setSidebarToggle, value }) => {
  return (
    <div style={{ width: '100%', ...(sidebarToggle ? {} : { marginLeft: '16rem' }) }}>
      {/* <Navbar/> */}
      <Outlet />

    </div>
  )
}

export default SystemLayout
