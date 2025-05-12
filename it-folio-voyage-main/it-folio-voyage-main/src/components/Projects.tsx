
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A Kanban-style project management tool for teams to organize and track work progress.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop",
      category: "Web App",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A mobile-friendly weather application showing forecasts and historical weather data.",
      image: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1174&auto=format&fit=crop",
      category: "Mobile App",
      technologies: ["React Native", "API Integration", "Geolocation"],
      link: "#"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for visualizing and analyzing business metrics and KPIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop",
      category: "Data",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A social networking site with user profiles, feeds, and real-time messaging.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop",
      category: "Web App",
      technologies: ["React", "Socket.io", "Redux", "MongoDB"],
      link: "#"
    },
    {
      id: 6,
      title: "AI Image Recognition",
      description: "A machine learning application that identifies objects and scenes in uploaded images.",
      image: "https://images.unsplash.com/photo-1633555338305-f944d3436ee4?q=80&w=1074&auto=format&fit=crop",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "Flask", "AWS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-tech-dark">
            My <span className="text-tech-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-6"></div>
          <p className="text-tech-dark/70 max-w-2xl mx-auto">
            Here are some of my recent works that demonstrate my skills and expertise.
            Each project represents a unique challenge I've tackled.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all" className="data-[state=active]:bg-tech-purple data-[state=active]:text-white">All</TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-tech-purple data-[state=active]:text-white">Web Apps</TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-tech-purple data-[state=active]:text-white">Mobile</TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-tech-purple data-[state=active]:text-white">AI/ML</TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-tech-purple data-[state=active]:text-white">Data</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Web App").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Mobile App").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "AI/ML").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="data" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.category === "Data").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card rounded-xl overflow-hidden bg-white shadow-md animate-fade-in">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-tech-light-purple text-tech-purple rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-tech-dark">{project.title}</h3>
        <p className="text-tech-dark/70 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">
              {tech}
            </span>
          ))}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white transition-colors duration-300"
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
