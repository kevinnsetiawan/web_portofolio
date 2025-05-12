
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-tech-dark/95">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image/Avatar section */}
          <div className="w-full md:w-5/12 relative animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-tech-purple to-blue-500 mx-auto overflow-hidden p-1">
                <div className="w-full h-full rounded-full bg-tech-dark flex items-center justify-center text-6xl font-bold text-white/30">
                  IT
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-tech-purple/20 z-0 animate-pulse-slow"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-tech-purple/10 z-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full md:w-7/12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-2 text-white">
              About <span className="text-tech-purple">Me</span>
            </h2>
            <div className="w-20 h-1 bg-tech-purple mb-6"></div>
            
            <p className="text-white/80 mb-6">
              Hello! I'm a passionate IT professional with a strong background in web development 
              and software engineering. My journey in the tech world began during my university years,
              and since then, I've been constantly learning and adapting to new technologies.
            </p>
            
            <p className="text-white/80 mb-6">
              I specialize in building responsive web applications using modern frameworks 
              and libraries. I'm dedicated to writing clean, maintainable code and delivering 
              high-quality solutions that meet client requirements.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-semibold text-white mb-2">Education</h3>
                <p className="text-white/70 text-sm">Bachelor's in Computer Science</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Location</h3>
                <p className="text-white/70 text-sm">Jakarta, Indonesia</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-white/70 text-sm">contact@itportfolio.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Experience</h3>
                <p className="text-white/70 text-sm">3+ Years</p>
              </div>
            </div>
            
            <Button 
              className="bg-tech-purple hover:bg-tech-purple/90 text-white rounded-md border-0"
              asChild
            >
              <a href="#" download>Download CV</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
