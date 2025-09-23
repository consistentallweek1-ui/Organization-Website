import React from 'react';
import { Trophy } from 'lucide-react';

const BoardMembersSection: React.FC = () => {
  const boardMembers = [
    {
      name: "Rajesh Kumar",
      position: "President",
      experience: "Former State Captain",
      image: "https://github.com/user-attachments/assets/b80f5186-6a89-415b-8e42-af081dcedebc"
    },
    {
      name: "Amit Sharma",
      position: "Vice President",
      experience: "25 Years Experience",
      image: "https://github.com/user-attachments/assets/c5fb8547-4ba9-497f-b9df-bb7f21099a3f"
    },
    {
      name: "Vikash Singh",
      position: "Secretary",
      experience: "Cricket Coach",
      image: "https://github.com/user-attachments/assets/f723771d-8c3c-4a68-a250-d831a4bf6ca5"
    },
    {
      name: "Suresh Patel",
      position: "Treasurer",
      experience: "Tournament Director",
      image: "https://github.com/user-attachments/assets/287507ae-4e38-4719-ad53-72595753ea9a"
    }
  ];

  return (
    <section id="board-members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Board Members</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced leaders who guide our cricket community with passion and dedication
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                {/* Photo Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Trophy className="w-6 h-6 mx-auto mb-1" />
                      <p className="text-sm font-semibold">{member.experience}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center relative">
                  {/* Decorative Element */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transform transition-all duration-300 group-hover:text-blue-600">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-1 transform transition-all duration-300 group-hover:scale-105">
                    {member.position}
                  </p>
                  
                  {/* Animated Underline */}
                  <div className="w-0 h-0.5 bg-blue-600 mx-auto transition-all duration-500 group-hover:w-12"></div>
                </div>
              </div>
              
              {/* Floating Shadow Effect */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl transform translate-x-2 translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembersSection;