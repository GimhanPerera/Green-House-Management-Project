import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Home } from './Home/Home';

function ManagementSystem() {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  const [value, setValue] = useState('Dashboard');//Name text of the navigation bar
  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: 'flex' }}>
      <Home />
      <div style={{ marginTop: '4rem' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManagementSystem