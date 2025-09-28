import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate('/')}
          >
            VoiceLink
          </div>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${
                activeSection === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => scrollToSection('service')}
              className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${
                activeSection === 'service' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              Service
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className={`text-lg font-medium transition-colors duration-200 hover:text-blue-600 ${
                activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
              }`}
            >
              Über uns
            </button>
            
            <button
              onClick={handleLoginClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;