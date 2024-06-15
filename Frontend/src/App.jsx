import { Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { History } from './pages/History/History';
import { Sensor } from './pages/Sensor/Sensor';
import { LoginPage } from './pages/loginPage';
import ManagementSystem from './pages/managementSystem';
import RegistrationPage from './pages/Registration Page/registrationPage';
import AlertPage from './pages/Alert Page/alertsPage';  

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route path="system" element={< ManagementSystem />} >
              <Route index element={<Dashboard />} />
              <Route path="sensor" >
                <Route path=":id" element={<Sensor />} />
              </Route>
              <Route path="history" element={<History />} />
              <Route path="alerts" element={<AlertPage />} />
              {/* New routes add to here */}
            </Route>
            <Route path="home" element={<SideBar />} />
            <Route path="registration" element={<RegistrationPage />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default App;