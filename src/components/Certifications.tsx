import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Associate",
      issuer: "Salesforce",
      year: "2023",
      description: "Foundation-level certification demonstrating understanding of Salesforce platform fundamentals",
      image: "/associate.jpeg"
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issuer: "Salesforce",
      year: "2024",
      description: "Professional certification validating skills in custom application development using Apex and Visualforce",
      image: "/pd1.jpeg"
    },
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      year: "2025",
      description: "Professional certification validating skills in custom application development using Apex and Visualforce",
      image: "/agent.jpeg"
    },
    {
      title: "Devops Launchapad Certified Lightning Web Component Specialist",
      issuer: "Salesforce",
      year: "2023",
      description: "Professional certification validating skills in custom application development using Apex and Visualforce",
      image: "/lwc.jpeg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Verified expertise in Salesforce platform development and administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{
                backgroundImage: `url(${cert.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center text-blue-600 font-semibold mb-3">
                    <span className="mr-4">{cert.issuer}</span>
                    <div className="flex items-center text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;