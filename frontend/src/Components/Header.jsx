import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="text-white sticky top-0 w-full z-50">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black/40 to-orange-900/20 backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 animate-gradient-x"></div>
      </div>

      {/* Navbar */}
      <nav className="relative px-2 md:px-8 py-2 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between h-12 md:h-16">
          
          {/* Prajwal name on md+ only */}
          <div className="hidden md:block text-lg md:text-xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Prajwal
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-1 md:gap-4">
            {[
              { label: 'About Me', path: '/' },
              { label: 'Projects', path: '/projects' },
              { label: 'Contact', path: '/contact' }
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`group relative px-2 py-1 md:px-5 md:py-2 rounded-full font-medium text-xs md:text-base overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  isActive(path) ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                <span className="relative z-10 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                  {label}
                </span>
                <div className="absolute bottom-0.5 left-2 right-2 h-px bg-gradient-to-r from-purple-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
``