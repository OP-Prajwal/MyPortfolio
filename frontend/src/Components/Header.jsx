import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="text-white sticky top-0 w-full z-50">
      {/* Glassmorphism background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/40 to-orange-900/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 animate-gradient-x"></div>
      </div>

      {/* Main navigation */}
      <nav className="relative mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 
                onClick={() => navigate('/')} 
                className="relative text-2xl md:text-3xl font-extrabold tracking-wider cursor-pointer"
              >
                <span className="animate-gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-500">
                  PRAJWAL
                </span>
              </h1>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'transform rotate-180' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate('/')}
                className={`nav-button ${isActive('/') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => navigate('/projects')}
                className={`nav-button ${isActive('/projects') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/projects') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => navigate('/contact')}
                className={`nav-button ${isActive('/contact') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col space-y-3 py-3">
              <button
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className={`nav-button ${isActive('/') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => {
                  navigate('/projects');
                  setIsMenuOpen(false);
                }}
                className={`nav-button ${isActive('/projects') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/projects') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className={`nav-button ${isActive('/contact') ? 'active' : ''} px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'bg-gradient-to-r from-purple-500/30 to-orange-500/30 text-white' 
                    : 'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-orange-500/20 text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
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