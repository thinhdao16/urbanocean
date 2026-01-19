import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RaptorPage from './pages/RaptorPage'
import RoadshowPage from './pages/RoadshowPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-urban overflow-x-hidden selection:bg-skater-yellow selection:text-black">
        {/* <Navbar  /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/raptor" element={<RaptorPage />} />
          <Route path="/roadshow" element={<RoadshowPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
