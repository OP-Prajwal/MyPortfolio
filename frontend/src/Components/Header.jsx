import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="text-white sticky top-0 w-full z-50">
      {/* Glassmorphism background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/40 to-orange-900/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 animate-gradient-x"></div>
      </div>

      {/* Main navigation */}
      <nav className="relative flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 px-6 sm:px-12 py-4 sm:py-0 gap-4 sm:gap-0">
        {/* Logo/Brand with animated gradient and glow effect */}
        <div className="flex items-center">
          <h1 className="relative text-3xl font-extrabold tracking-wider overflow-hidden">
            <span className="animate-gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-500">
              PRAJWAL
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-orange-500 opacity-30 blur-xl group-hover:opacity-40 transition-opacity"></div>
          </h1>
        </div>

        {/* Navigation buttons with glass effect and animations */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <button
            onClick={() => navigate('/')}
            className="group relative px-6 py-2.5 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
            {/* Button content */}
            <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              About Me
            </span>
            {/* Animated underline */}
            <div className="absolute bottom-1.5 left-3 right-3 h-px bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>

          <button
            onClick={() => navigate('/projects')}
            className="group relative px-6 py-2.5 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
            <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              Projects
            </span>
            <div className="absolute bottom-1.5 left-3 right-3 h-px bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="group relative px-6 py-2.5 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
            <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
              Contact
            </span>
            <div className="absolute bottom-1.5 left-3 right-3 h-px bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </button>
        </div>
      </nav>
    </header>
  )
}
   
  


export default Header