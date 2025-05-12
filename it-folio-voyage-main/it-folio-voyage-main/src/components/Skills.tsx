
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  percentage: number;
  icon?: string;
};

type TechCategory = {
  name: string;
  skills: Skill[];
};

const Skills = () => {
  const techCategories: TechCategory[] = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML & CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React", percentage: 80 },
        { name: "Tailwind CSS", percentage: 85 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", percentage: 75 },
        { name: "Express", percentage: 70 },
        { name: "Python", percentage: 65 },
        { name: "SQL", percentage: 80 },
      ]
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", percentage: 85 },
        { name: "Docker", percentage: 70 },
        { name: "CI/CD", percentage: 65 },
        { name: "Agile/Scrum", percentage: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tech-light-gray to-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-tech-dark">
            My <span className="text-tech-purple">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-6"></div>
          <p className="text-tech-dark/70 max-w-2xl mx-auto">
            With expertise in a variety of technologies and programming languages,
            I bring a versatile skill set to every project I undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 tech-card border border-gray-100 hover:border-tech-purple/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-tech-light-purple flex items-center justify-center mr-3">
                  <span className="text-tech-purple font-bold">{category.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold text-tech-dark">{category.name}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-tech-dark">{skill.name}</span>
                      <span className="text-tech-purple">{skill.percentage}%</span>
                    </div>
                    <Progress 
                      value={skill.percentage} 
                      className="h-2 bg-gray-100" 
                      indicatorStyle={{ backgroundColor: '#8B5CF6' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-tech-dark">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Vue.js", "Next.js", "MongoDB", "AWS", "Firebase", "GraphQL", "Redux"].map((tech, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-white shadow-sm rounded-lg border border-gray-100 text-tech-dark/80 hover:border-tech-purple hover:text-tech-purple hover:-translate-y-1 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
