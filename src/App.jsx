import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RaptorPage from './pages/RaptorPage'
import RoadshowPage from './pages/RoadshowPage'
import RegisterPage from './pages/RegisterPage'
import EveningEventsPage from './pages/EveningEventsPage'
import EveningEventRegisterPage from './pages/EveningEventRegisterPage'

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
          <Route path="/evening-events" element={<EveningEventsPage />} />
          <Route path="/evening-events/register" element={<EveningEventRegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
