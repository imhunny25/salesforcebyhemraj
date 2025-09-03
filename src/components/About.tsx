import React from 'react';
import { Code, Users, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "2+ Years Experience",
      description: "Specialized in Salesforce development and customization"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Team Collaboration",
      description: "Strong focus on collaborative development and best practices"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Business Solutions",
      description: "Delivering scalable, high-performing solutions for business growth"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Quality Code",
      description: "Committed to 80%+ test coverage and industry best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                A certified Salesforce Developer with 2+ years of IT experience, specializing in 
                <span className="font-semibold text-gray-800"> Apex, Lightning Web Components (LWC)</span>, 
                and <span className="font-semibold text-gray-800">Salesforce integrations</span>. 
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Proven ability to deliver scalable, high-performing solutions that drive business growth. 
                Strong focus on best practices and maintaining 80%+ test coverage across all development projects.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Passionate about leveraging Salesforce's powerful platform to create innovative solutions 
                that streamline business processes and enhance user experiences.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;