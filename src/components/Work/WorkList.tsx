import React from 'react';
import { motion } from 'framer-motion';
import { workData } from './workData';

const workExperience = workData
  .filter(item => item.type === 'work')
  .map(item => {
    const parts = item.title.split(' | ');
    return {
      company: parts[0] || item.title,
      role: parts[1] || '',
      description: item.description
    };
  });

const projects = workData
  .filter(item => item.type === 'project' || item.type === 'academic')
  .map(item => ({
    title: item.title,
    description: item.description,
    github: item.githubUrl
  }));

const WorkList: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 w-full h-full overflow-y-auto custom-scrollbar pr-2">
      
      {/* Work Experience Section */}
      <div className="flex flex-col gap-6">
        <h3 className="font-editorial text-main text-2xl tracking-tight border-b border-grid pb-4 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-10 pt-2">Work Experience</h3>
        
        <div className="flex flex-col gap-6 font-computational">
          {workExperience.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-6 border border-grid/50 rounded-2xl bg-grid/5 hover:bg-grid/10 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 md:mb-4 gap-2">
                <h4 className="text-main font-medium text-lg md:text-xl">{work.company}</h4>
                <span className="text-muted text-xs tracking-widest uppercase border border-grid px-3 py-1 rounded-full w-fit">
                  {work.role}
                </span>
              </div>
              <p className="text-muted text-xs md:text-sm leading-relaxed text-justify">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col gap-6 pb-8">
        <h3 className="font-editorial text-main text-2xl tracking-tight border-b border-grid pb-4 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-sm z-10 pt-2">Projects</h3>
        
        <div className="flex flex-col gap-6 font-computational">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-6 border border-grid/50 rounded-2xl bg-grid/5 hover:bg-grid/10 transition-colors duration-300 flex flex-col gap-3"
            >
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-main font-medium text-base md:text-lg">{project.title}</h4>
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted hover:text-main transition-colors flex-shrink-0"
                    aria-label="GitHub Repository"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
              
              <p className="text-muted text-xs md:text-sm leading-relaxed text-justify">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default WorkList;
