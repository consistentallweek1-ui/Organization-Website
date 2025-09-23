import React from 'react';
import { Trophy } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Veterans Cricket Nepal</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Where experience meets excellence. Our community brings together cricket veterans who share a passion for the game and the wisdom of years on the field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a platform where experienced cricketers can continue to play, compete, and share their knowledge with the next generation while maintaining the highest standards of sportsmanship.
              </p>
            </div>
            
            <div className="transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier destination for veteran cricketers, fostering a community that celebrates experience, promotes healthy competition, and preserves the rich traditions of cricket.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 transform hover:rotate-2 transition-all duration-300">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Trophy className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">Excellence in Experience</h4>
                <p className="text-gray-600 text-center">
                  Over 25 years of combined cricket expertise in our community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;