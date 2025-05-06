'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          ClubMate
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-black hover:text-gray-600">Home</Link>
          <Link href="/about" className="text-black hover:text-gray-600">About</Link>
          <Link href="/booking" className="text-black hover:text-gray-600">Booking</Link>
          <Link href="/products" className="text-black hover:text-gray-600">Products</Link>
          <Link href="/contact" className="text-black hover:text-gray-600">Contact</Link>
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 text-black hover:text-gray-600">Home</Link>
          <Link href="/about" className="block py-2 text-black hover:text-gray-600">About</Link>
          <Link href="/booking" className="block py-2 text-black hover:text-gray-600">Booking</Link>
          <Link href="/products" className="block py-2 text-black hover:text-gray-600">Products</Link>
          <Link href="/contact" className="block py-2 text-black hover:text-gray-600">Contact</Link>
        </div>
      )}
    </header>
  );
}
