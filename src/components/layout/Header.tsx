import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://github.com/user-attachments/assets/c2663386-227e-43e0-b578-4224f86c9968" 
              alt="Cricket Club Logo" 
              className="w-14 h-14 rounded-full object-cover shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollToSection('home')} className="text-white hover:text-blue-400 transition-colors font-medium">Home</button>
            <button onClick={() => handleScrollToSection('about')} className="text-white hover:text-blue-400 transition-colors font-medium">About</button>
            <button onClick={() => handleScrollToSection('features')} className="text-white hover:text-blue-400 transition-colors font-medium">Features</button>
            <button onClick={() => handleScrollToSection('sponsors')} className="text-white hover:text-blue-400 transition-colors font-medium">Sponsors</button>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3 ml-4 border-l border-white/20 pl-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            <button onClick={() => handleScrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => handleScrollToSection('home')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Home</button>
              <button onClick={() => handleScrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">About</button>
              <button onClick={() => handleScrollToSection('features')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Features</button>
              <button onClick={() => handleScrollToSection('sponsors')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Sponsors</button>
              <button onClick={() => handleScrollToSection('contact')} className="block w-full text-left px-3 py-2 text-white hover:text-blue-400">Contact</button>
              
              {/* Mobile Social Media */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/20 mt-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;