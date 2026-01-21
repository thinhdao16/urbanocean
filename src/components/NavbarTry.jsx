import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavbarTry({ fixed = true, className="", logoWhite= false }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`${className} ${fixed ? 'fixed' : 'relative'} top-0 left-0 w-full px-4 md:px-14 lg:px-64 py-4 flex justify-between items-center z-50`}>
      <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
        {
         logoWhite ? <img 
          src="/assets/logo_white.png" 
          alt="SCATERS Logo" 
          className="h-12 md:h-16 w-auto"
        /> :<img 
          src="/assets/logo.png" 
          alt="SCATERS Logo" 
          className="h-12 md:h-16 w-auto"
        />
        }
      </Link>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-gray-400 p-2"
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10  tracking-[0.2em] font-medium ">
        <Link 
          to="/" 
          className={`hover:text-white transition-colors ${isActive('/') ? 'text-white' : 'text-gray-400'}`}
        >
          Homepage
        </Link>
        <Link 
          to="/about" 
          className={`hover:text-white transition-colors ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
        >
          About Us
        </Link>
        <Link 
          to="/raptor" 
          className={`hover:text-white transition-colors ${isActive('/raptor') ? 'text-white' : 'text-gray-400'}`}
        >
          The Raptor
        </Link>
        <Link 
          to="/roadshow" 
          className={`hover:text-white transition-colors ${isActive('/roadshow') ? 'text-white' : 'text-gray-400'}`}
        >
          Roadshow Tour
        </Link>
        <Link 
          to="/register" 
          className={`hover:text-urban-pink transition-colors ${isActive('/register') ? 'text-urban-pink underline underline-offset-4' : 'text-urban-pink'}`}
        >
          Register
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-8 px-4 flex flex-col gap-6 text-center">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`text-sm uppercase tracking-[0.2em] font-black italic ${isActive('/') ? 'text-white' : 'text-gray-400'}`}
          >
            Homepage
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className={`text-sm uppercase tracking-[0.2em] font-black italic ${isActive('/about') ? 'text-white' : 'text-gray-400'}`}
          >
            About Us
          </Link>
          <Link 
            to="/raptor" 
            onClick={() => setIsOpen(false)}
            className={`text-sm uppercase tracking-[0.2em] font-black italic ${isActive('/raptor') ? 'text-white' : 'text-gray-400'}`}
          >
            The Raptor
          </Link>
          <Link 
            to="/roadshow" 
            onClick={() => setIsOpen(false)}
            className={`text-sm uppercase tracking-[0.2em] font-black italic ${isActive('/roadshow') ? 'text-white' : 'text-gray-400'}`}
          >
            Roadshow Tour
          </Link>
          <Link 
            to="/register" 
            onClick={() => setIsOpen(false)}
            className={`text-sm uppercase tracking-[0.2em] font-black italic ${isActive('/register') ? 'text-urban-pink' : 'text-urban-pink'}`}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavbarTry
