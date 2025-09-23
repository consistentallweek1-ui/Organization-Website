import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="https://github.com/user-attachments/assets/7885a36f-f059-4fd6-a5f3-24c18c80a22f" 
              alt="Cricket Club Logo" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Veterans Cricket Nepal</span>
          </div>
          <p className="text-gray-400 mb-6">Celebrating cricket excellence through experience</p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">&copy; 2025 Veterans Cricket Nepal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;