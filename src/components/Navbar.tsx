import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    // Set background to transparent and ensure it stays on top
    <nav className="bg-transparent fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Site Logo/Link */}
        <Link href="/" className="relative w-16 h-16">
          <Image
            src="/images/LKC.png"
            alt="LKC Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-lotus-600 hover:text-white font-medium transition-colors text-lg">
            Home
          </Link>
          <Link href="/about" className="text-lotus-600 hover:text-white font-medium transition-colors text-lg">
            About
          </Link>
          <Link href="/report" className="text-lotus-600 hover:text-white font-medium transition-colors text-lg">
            Report
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;