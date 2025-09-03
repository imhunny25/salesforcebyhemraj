import React from 'react';
import { Phone, Mail, MapPin, Download, Send } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank'); // Place resume.pdf in your public folder
  };

  const handleContactMe = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg')] bg-cover bg-center"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">HK</span>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hemraj Kumawat
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-light">
              Salesforce Developer
            </h2>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <Phone size={18} />
              <span>9358808040</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={18} />
              <span>kumawathemraj816@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
            <button
              onClick={handleContactMe}
              className="flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              <Send size={20} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Brief Professional Summary */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-lg text-blue-100 leading-relaxed">
              Certified Salesforce Developer with 2+ years of experience in Apex, Lightning Web Components, 
              and Salesforce integrations, delivering scalable solutions that drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;