import React from 'react';
import { Users, Trophy, Calendar } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with fellow cricket veterans from around the region"
    },
    {
      icon: Trophy,
      title: "Tournaments",
      description: "Regular competitive tournaments and friendly matches"
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Weekly training sessions and monthly social gatherings"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive facilities and programs designed specifically for veteran cricketers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;