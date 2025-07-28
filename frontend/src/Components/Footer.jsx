import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black/80 text-gray-300 flex flex-col items-center mt-8">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} Prajwal Gaonkar. All rights reserved.
      </div>
      <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-orange-400 transition-colors">GitHub</a>
        <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
      </div>
    </footer>
  )
}

export default Footer