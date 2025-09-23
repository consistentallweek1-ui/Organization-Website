import React from 'react';

const GallerySection: React.FC = () => {
  const galleryImages = [
    "https://github.com/user-attachments/assets/ec4c5251-def0-47ba-a870-51003cebeea9",
    "https://github.com/user-attachments/assets/f774b02b-18c6-4662-a48c-2dbea0a95031",
    "https://github.com/user-attachments/assets/2dbaee8c-f44f-422e-84a9-1ec2daed9ebc",
    "https://github.com/user-attachments/assets/2b6ee6fa-ad62-49a6-a749-c5426aa513b0",
    "https://github.com/user-attachments/assets/5bad5478-9558-4d5c-bc04-5c1ff543c426",
    "https://github.com/user-attachments/assets/415aa902-6dfe-4b98-a97e-8595f6a5a2c7"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600">Moments from our cricket community</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <img 
                src={imageUrl}
                alt={`Cricket moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;