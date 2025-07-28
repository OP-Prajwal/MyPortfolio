import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
      <nav className="relative px-4 md:px-8 py-3 md:py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="relative text-2xl md:text-3xl font-extrabold tracking-wider">
                <span className="animate-gradient-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 text-transparent bg-clip-text hover:from-orange-400 hover:via-pink-500 hover:to-purple-500 transition-all duration-500">
                  PRAJWAL
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {[
                { label: 'About Me', path: '/' },
                { label: 'Projects', path: '/projects' },
                { label: 'Contact', path: '/contact' }
              ].map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`group relative px-6 py-2.5 rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                    isActive(path) ? 'ring-2 ring-orange-400' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    {label}
                  </span>
                  <div className="absolute bottom-1.5 left-3 right-3 h-px bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </button>
              ))}
            </div>

            {/* Placeholder for Mobile Menu Icon (future use) */}
            <div className="md:hidden">
              {/* Can add mobile menu toggle here if needed */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
