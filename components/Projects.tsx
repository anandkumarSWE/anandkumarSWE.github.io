
import React from 'react';
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
        </div>

        <div className="flex items-center gap-4">
           {/* Scroll Hint */}
           <div className="hidden md:flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 animate-pulse">
              <span>Scroll</span>
              <ArrowRight className="w-4 h-4" />
           </div>
           
           <a href="https://github.com/anandkumarSWE" className="hidden sm:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors ml-4 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800">
              View all <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-x-auto pb-12 pt-4 px-6 scrollbar-hide snap-x snap-mandatory overscroll-x-contain">
        <div className="flex items-stretch gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="flex-none w-[85vw] sm:w-[350px] md:w-[400px] snap-center group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col animate-in fade-in slide-in-from-right-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for end padding - increased to w-8 */}
          <div className="w-8 flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:hidden mt-4 text-center">
         <a href="https://github.com/anandkumarSWE" className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            View all projects <ArrowUpRight className="w-4 h-4" />
         </a>
      </div>
    </section>
  );
};
