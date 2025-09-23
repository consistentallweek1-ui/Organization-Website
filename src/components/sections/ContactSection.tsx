import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Ready to join our cricket community? Contact us today and become part of something special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-red-100">Cricket Ground Complex<br />Sports City, India</p>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-red-100">+91 98765 43210<br />+91 98765 43211</p>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-red-100">info@veteranscricket.com<br />join@veteranscricket.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;