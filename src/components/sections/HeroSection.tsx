import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cricket Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://github.com/user-attachments/assets/37bf757c-bf35-4fd9-824a-f767398f4e43" 
          alt="Cricket Match" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-red-800/40"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-6 h-6 bg-red-300/60 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-20 w-8 h-8 bg-blue-400/60 rounded-full animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '4s' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-5 h-5 bg-red-300/60 rounded-full animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Veterans Cricket</span>
            <span className="block text-blue-400 animate-pulse drop-shadow-lg">Nepal</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Celebrating the spirit of cricket with experienced players who continue to inspire and compete with passion and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
              <ChevronRight className="w-5 h-5 inline ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Join Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Floating Cricket Ball */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <div className="w-16 h-16 bg-red-500 rounded-full animate-spin-slow relative shadow-lg">
          <div className="absolute inset-2 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;