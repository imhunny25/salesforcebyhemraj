import React from 'react';
import { ExternalLink, Calendar, Users, Database, Cloud, BedDouble } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
    title: "Hotel Management Assistant (Agentforce + Salesforce)",
    description:
      "Conversational Agentforce assistant for Hotel Poohemya enabling room availability, booking, food orders, room service, and checkout with automated billing.",
    technologies: [
      "Agentforce (Einstein)",
      "Salesforce Flows",
      "Apex",
      "Experience Cloud",
      "Custom Objects (Room__c, Booking__c, Customer__c)"
    ],
    features: [
      "Room inventory & availability lookup",
      "Booking lifecycle (Ready → Check-in → Check-out)",
      "Auto-update Room.Status via Record-Triggered Flow",
      "Food ordering with bill generation & linking to customer",
      "Room service requests and validation",
      "Checkout with final bill summary"
    ],
    icon: <BedDouble className="w-8 h-8 text-emerald-600" />
  },
    {
      title: "Healthcare Appointment Scheduling System",
      description: "Developed a comprehensive LWC scheduling application with Google Calendar API integration for healthcare providers.",
      technologies: ["Lightning Web Components", "Apex", "Google Calendar API", "REST Integration"],
      features: [
        "Real-time appointment booking",
        "Google Calendar synchronization",
        "Patient management system",
        "Automated notifications"
      ],
      icon: <Calendar className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Evisort – Contract Lifecycle Management",
      description: "Built real-time Salesforce-Evisort API integration for streamlined contract management and lifecycle tracking.",
      technologies: ["Apex", "REST API", "Integration", "Custom Objects"],
      features: [
        "Real-time contract syncing",
        "Automated lifecycle tracking",
        "Custom contract fields",
        "Advanced reporting capabilities"
      ],
      icon: <Database className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Viacom 18 CRM Enhancement",
      description: "Enhanced Salesforce Lightning components and developed Apex automation for improved CRM functionality.",
      technologies: ["Lightning Components", "Apex Automation", "Workflow Rules", "Process Builder"],
      features: [
        "Enhanced user interface",
        "Automated business processes",
        "Custom reporting dashboards",
        "Performance optimization"
      ],
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Tulip Cremation Services Platform",
      description: "Created custom Lightning Web Components, data management solutions, and automated workflows.",
      technologies: ["LWC", "Data Management", "Workflow Automation", "Custom Fields"],
      features: [
        "Custom data entry forms",
        "Automated service workflows",
        "Client communication system",
        "Document management"
      ],
      icon: <Cloud className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world implementations and innovative Salesforce solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;