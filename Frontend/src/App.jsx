import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/sideBar';
import { LoginPage } from './pages/loginPage';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="sidebar" element={<SideBar />} />
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
