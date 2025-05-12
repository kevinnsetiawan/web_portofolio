
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-dark via-[#2A2E3C] to-tech-dark text-white pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-36 h-36 rounded-full bg-tech-purple/10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-tech-purple/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-tech-purple/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-[#5B5CFF]/10 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-tech-purple/20"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 8 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-tech-purple/10 border border-tech-purple/20 mb-6 animate-fade-in backdrop-blur-sm">
            <p className="text-tech-purple font-medium text-sm">Full Stack Developer</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            IT <span className={cn("text-transparent bg-clip-text bg-gradient-to-r from-tech-purple to-[#5B5CFF]")}>Professional</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full-stack developer specializing in building exceptional digital experiences. Currently focused on creating accessible, responsive web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-tech-purple to-[#5B5CFF] hover:from-tech-purple/90 hover:to-[#5B5CFF]/90 text-white rounded-md border-0 shadow-lg shadow-tech-purple/20"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/5 text-white rounded-md backdrop-blur-sm"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          {/* Tech stack logos */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-white/40 text-sm mb-4">Tech Stack</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {["React", "Node.js", "Python", "MongoDB", "AWS"].map((tech, i) => (
                <div key={i} className="text-white/60 font-medium hover:text-tech-purple transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
