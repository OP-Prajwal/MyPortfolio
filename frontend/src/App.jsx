import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import ProjectDetails from './Components/ProjectDetails'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen w-full flex flex-col items-center justify-between px-4 py-6 sm:px-8 md:px-16 lg:px-32 transition-all duration-300">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:name" element={<ProjectDetails />} />
            <Route path="/contact" element={<div className="flex-grow"><ContactPage /></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App