import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar';
import { LoginPage } from './pages/loginPage';
import { Home } from './pages/Home/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
            <Route index element={<SideBar />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
          <Outlet />
      </Router>
    </>
  )
}

export default App;