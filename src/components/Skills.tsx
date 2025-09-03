import React from 'react';
import { Cloud, Settings, Code2, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Salesforce Development",
      skills: [
        "Apex Programming",
        "Lightning Web Components (LWC)",
        "Aura Components",
        "Visualforce",
        "SOQL & SOSL",
        "Batch Apex",
        "Trigger Development",
        "Process Builder"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Salesforce Administration",
      skills: [
        "Workflows & Flows",
        "Profiles & Permission Sets",
        "Security Configuration",
        "Custom Objects & Fields",
        "Validation Rules",
        "Data Management",
        "Reports & Dashboards",
        "User Management"
      ]
    },
    {
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      title: "Integrations",
      skills: [
        "REST API Development",
        "API Callouts",
        "Evisort Integration",
        "Third-party Integrations",
        "Google Calendar API",
        "Web Services",
        "Data Migration",
        "Middleware Solutions"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Tools & Technologies",
      skills: [
        "VS Code",
        "GitHub & GitLab",
        "Postman",
        "SFDX CLI",
        "Data Loader",
        "Bitbucket",
        "Salesforce DX",
        "Version Control"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across the Salesforce ecosystem, from development to administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mx-auto mb-6">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;