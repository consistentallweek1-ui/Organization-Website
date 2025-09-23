import React from 'react';
import { Trophy, Users, Calendar } from 'lucide-react';

const AchievementsBar: React.FC = () => {
  const achievements = [
    { icon: Trophy, text: "State Champions 2023" },
    { icon: Users, text: "500+ Active Members" },
    { icon: Calendar, text: "25 Years of Excellence" },
    { icon: Trophy, text: "Regional Cup Winners" },
    { icon: Users, text: "100+ Tournaments Played" },
    { icon: Trophy, text: "Best Sportsmanship Award" }
  ];

  return (
    <section className="py-8 bg-blue-600 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {/* First set of achievements */}
          <div className="flex items-center space-x-16 px-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <achievement.icon className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">{achievement.text}</span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8">
            {achievements.map((achievement, index) => (
              <div key={`duplicate-${index}`} className="flex items-center space-x-3 text-white">
                <achievement.icon className="w-6 h-6 text-yellow-300" />
                <span className="text-lg font-semibold">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsBar;