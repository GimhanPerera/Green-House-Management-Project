import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar';
import { LoginPage } from './pages/loginPage';
import { Home } from "./pages/Home/Home"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route index element={<SideBar />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
        <Outlet />
      </Router>
    </>
  )
}

export default App;