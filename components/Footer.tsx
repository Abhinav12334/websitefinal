import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-t from-[#0f0f12] via-[#111111] to-[#181818] text-gray-300 mt-20 overflow-hidden">
      {/* 💫 Animated top glow border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00C6FF] via-[#8E2DE2] to-[#FF00CC] animate-gradientFlow"></div>

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + Tagline */}
        <div>
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Aptivora Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-primary">APTIVORA</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
            Empowering Innovation with Intelligent Solutions.  
            We create technology that evolves with your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Connect</h3>
          <div className="flex space-x-5 text-gray-400">
            
            <a
              href="https://www.linkedin.com/company/aptivora-global-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-transform transform hover:scale-110"
            >
              <Linkedin />
            </a>
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 mt-10 pt-6 pb-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-primary font-medium">Aptivora Global Solutions</span>.  
        All rights reserved.
      </div>

      {/* Soft radial glow effect behind footer */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00C6FF33] via-[#8E2DE233] to-[#FF00CC33] blur-3xl rounded-full opacity-40 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
