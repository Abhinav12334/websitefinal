import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0f12cc] backdrop-blur-md border-b border-primary/30 shadow-[0_0_20px_rgba(0,198,255,0.15)]'
          : 'bg-transparent'
      }`}
    >
      {/* 💫 Animated Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00C6FF] via-[#8E2DE2] to-[#FF00CC] animate-gradientFlow"></div>

      <div className="container mx-auto px-6 flex items-center justify-between h-20 relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Aptivora Logo" className="h-20 w-auto animate-float" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-gray-300 font-medium transition duration-300 hover:text-primary ${
                  isActive ? 'text-primary' : ''
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-primary transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0f0f12f5] backdrop-blur-md text-center overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg text-gray-300 hover:text-primary py-2 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
