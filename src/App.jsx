import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResearchPage from './pages/ResearchPage'
import ProjectPage from './pages/ProjectPage'
import LearningPage from './pages/LearningPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/learning" element={<LearningPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
