import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'

const Body = () => {
  return (
    <main className="flex justify-center items-center flex-grow py-8 sm:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <section className="text-white flex flex-col gap-10 items-center justify-center w-full max-w-4xl px-2 sm:px-8">
        {/* Avatar with animated gradient border */}
        <div className="mt-4 sm:mt-8 flex justify-center">
          <div className="relative flex items-center justify-center">
            {/* Animated colorful background */}
            <span className="absolute h-48 w-48 sm:h-72 sm:w-72 rounded-full z-0 animate-pulse"
              style={{
                background: 'conic-gradient(from 180deg at 50% 50%, #a855f7 0deg, #ec4899 90deg, #f59e42 180deg, #22d3ee 270deg, #a855f7 360deg)',
                filter: 'blur(24px)',
                opacity: 0.7
              }}
            ></span>
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 animate-spin-slow p-1" style={{filter:'blur(2px)'}}></span>
            <img
              className="relative rounded-full h-40 w-40 sm:h-60 sm:w-60 object-cover border-4 border-white shadow-xl z-10"
              src="/images/pfp.jpeg"
              alt="Profile"
            />
          </div>
        </div>
        {/* Name and Title */}
        <div className="gap-2 flex flex-col text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text animate-gradient">I'm Prajwal Gaonkar</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-200"></h2>
        </div>

        {/* Quick Skills Summary */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
          <div className="animate-float-1 bg-gradient-to-r from-purple-600/20 to-purple-600/10 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <span className="text-purple-400">🤖 AI/ML Engineer</span>
          </div>
          <div className="animate-float-2 bg-gradient-to-r from-orange-600/20 to-orange-600/10 px-4 py-2 rounded-full border border-orange-500/30 backdrop-blur-sm">
            <span className="text-orange-400">💻 Full Stack Developer</span>
          </div>
          <div className="animate-float-3 bg-gradient-to-r from-pink-600/20 to-pink-600/10 px-4 py-2 rounded-full border border-pink-500/30 backdrop-blur-sm">
            <span className="text-pink-400">🚀 Problem Solver</span>
          </div>
          <div className="animate-float-2 bg-gradient-to-r from-blue-600/20 to-blue-600/10 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-400">🎯 Deep Learning Expert</span>
          </div>
        </div>

        {/* Bio Section */}
        <div className="relative max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 via-black/40 to-orange-900/20 border border-gray-800">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm rounded-2xl"></div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">About Me</h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Hey there! I'm a passionate Computer Science student and AI enthusiast from India, currently pursuing my BTech in CSE. I thrive on turning complex problems into elegant solutions through code and innovation.
              </p>
              <p>
                My journey in tech has been driven by curiosity and a desire to push boundaries. From developing sophisticated AI models to crafting seamless web experiences, I love exploring the intersection of cutting-edge technology and practical applications.
              </p>
              <p>
                When I'm not coding, you'll find me diving into research papers, experimenting with new technologies, or contributing to open-source projects. I believe in the power of AI to transform lives and am committed to building solutions that make a difference.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">Skills & Expertise</h3>
          
          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* AI & ML Section */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-black border border-purple-900/50 hover:border-purple-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-xl font-semibold text-purple-400 mb-4">
                  <span role="img" aria-label="AI">🤖</span> AI & Machine Learning
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Deep Learning & Neural Networks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Natural Language Processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Computer Vision</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web Development Section */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-black border border-orange-900/50 hover:border-orange-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-xl font-semibold text-orange-400 mb-4">
                  <span role="img" aria-label="Web">💻</span> Web Development
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Node.js & Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">MongoDB & PostgreSQL</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-black border border-pink-900/50 hover:border-pink-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-xl font-semibold text-pink-400 mb-4">
                  <span role="img" aria-label="Tools">🛠️</span> Tools & Technologies
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">PyTorch & TensorFlow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Git & CI/CD</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Languages */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-900/50 hover:border-blue-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h4 className="flex items-center gap-3 text-xl font-semibold text-blue-400 mb-4">
                  <span role="img" aria-label="Languages">📝</span> Programming Languages
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">Python & JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">TypeScript & Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                    </svg>
                    <span className="text-gray-300">C++ & SQL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-xl mt-6 items-center justify-center">
          <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full py-2 px-6 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
            Connect with me
          </Link>
          <button className="border-white border-2 rounded-full px-6 py-2 text-white font-semibold hover:bg-white hover:text-black transition-colors duration-200 shadow-lg">
            My Resume
          </button>
        </div>
        {/* GitHub Profile Button */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/OP-Prajwal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black/60 hover:bg-black/80 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-colors duration-200 border border-gray-700"
          >
            {/* GitHub logo (SVG) */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="28" height="28" style={{marginRight: '4px'}} />
            <span className="flex items-center gap-2">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            </span>
          </a>
        </div>
        {/* Projects Section */}
        
      </section>
    </main>
  )
}

export default Body