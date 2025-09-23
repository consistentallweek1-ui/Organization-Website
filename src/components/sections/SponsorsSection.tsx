import React from 'react';

interface SponsorsSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const SponsorsSection: React.FC<SponsorsSectionProps> = ({ scrollToSection }) => {
  const sponsorLogos = [
    "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud partners who support our cricket community and help us achieve excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {sponsorLogos.map((logoUrl, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:scale-105">
                <img 
                  src={logoUrl}
                  alt={`Sponsor ${index + 1}`}
                  className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              {/* Floating effect */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-xl transform translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Interested in becoming a sponsor?</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;