import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Ranosys Technologics Pvt. Ltd.",
      position: "Software Engineer",
      duration: "June 2024 – Present",
      location: "Jaipur, Rajasthan",
      description: [
        "Designed and implemented a conversational Agentforce assistant for hotel operations (Hotel Poohemya).",
        "Developed REST API integrations for seamless data exchange between systems",
        "Designed schema & relationships between Room, Booking, and Customer for real-time operations.",
        "Demonstrated end-to-end lifecycle: booking → check-in → food order → room service → checkout & billing."
      ]
    },
    {
      company: "Life-Up Software Park Pvt. Ltd.",
      position: "Salesforce Developer",
      duration: "Nov 2024 – Mar 2025",
      location: "Jaipur, Rajasthan",
      description: [
        "Built Lightning Web Components (LWCs) and Aura Components for enhanced user experience",
        "Developed REST API integrations for seamless data exchange between systems",
        "Optimized Salesforce performance through efficient code architecture and best practices",
        "Collaborated with cross-functional teams to deliver scalable business solutions"
      ]
    },
    {
      company: "Appronic Software Pvt. Ltd.",
      position: "Salesforce Developer",
      duration: "Jul 2022 – Aug 2024",
      location: "Jaipur, Rajasthan",
      description: [
        "Designed and implemented comprehensive Apex solutions for complex business requirements",
        "Integrated multiple third-party APIs to extend Salesforce functionality",
        "Enhanced CRM performance through custom development and configuration",
        "Mentored junior developers on Salesforce best practices and coding standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A track record of delivering innovative Salesforce solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Company Info */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;