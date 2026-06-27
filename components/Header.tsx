'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-[#1a4a2a] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <span className="text-3xl font-serif font-bold text-[#c9a84c] transition-transform duration-300 group-hover:scale-110">
              ✝
            </span>
            <div>
              <span className="text-xl font-serif font-semibold tracking-wide">
                Holy Deliverance
              </span>
              <span className="hidden sm:block text-xs text-[#c9a84c]/70 font-light tracking-wider">
                Church
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium tracking-wide hover:text-[#c9a84c] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c9a84c] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            {/* Call to Action Button */}
            <a
              href="#contact"
              className="bg-[#c9a84c] text-[#0f1f12] px-5 py-2 rounded-md text-sm font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Visit Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none hover:text-[#c9a84c] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-3xl">✕</span>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4 flex flex-col space-y-3 border-t border-[#c9a84c]/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium hover:text-[#c9a84c] transition-colors duration-300 px-2 py-1 hover:bg-[#c9a84c]/10 rounded"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#c9a84c] text-[#0f1f12] px-5 py-2 rounded-md text-center font-semibold hover:bg-yellow-500 transition-colors duration-300 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Visit Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}