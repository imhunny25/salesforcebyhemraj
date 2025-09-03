import React from 'react';
import { Trophy, Target, Lightbulb, CheckCircle } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      title: "4 Major Salesforce Implementations",
      description: "Successfully delivered complete Salesforce solutions across healthcare, entertainment, and service industries"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Reusable Component Library",
      description: "Built comprehensive library of reusable Salesforce components, reducing development time by 40%"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      title: "Innovation Recognition",
      description: "Recognized for developing innovative solutions to complex business challenges and technical requirements"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Measurable impact through innovative Salesforce solutions and technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2+", label: "Years Experience" },
            { number: "4", label: "Major Projects" },
            { number: "80%+", label: "Test Coverage" },
            { number: "100%", label: "Client Satisfaction" }
  ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;