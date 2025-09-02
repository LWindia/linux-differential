import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Enrollment', href: '#enrollment' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="h-8 rounded-xl flex items-center justify-center">
              <img 
                src="/images/WHITE LW.png" 
                alt="LW Logo" 
                className="h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-black text-white">LINUX</div>
              <div className="text-sm text-red-400 font-semibold">DIFFERENTIAL TRAINING</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              Course Details
            </button>
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-colors duration-300">
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <button className="w-full px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300 font-medium border border-gray-700 rounded-2xl">
                  Course Details
                </button>
                <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-colors duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 