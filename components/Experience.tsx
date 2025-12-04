
import React, { useState } from 'react';
import { ChevronDown, Calendar, Code2, ArrowRight } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE, INTERNSHIP_EXPERIENCE } from '../constants';
import { Experience as ExperienceType } from '../types';

interface ExperienceCardProps {
  job: ExperienceType;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative flex-none w-[85vw] sm:w-[400px] md:w-[450px] snap-center group min-h-[400px]"
      style={{ 
        '--accent-light': job.color,
        '--accent-dark': job.darkColor || job.color 
      } as React.CSSProperties}
    >
      {/* Timeline Connector Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 bg-[var(--accent-light)] dark:bg-[var(--accent-dark)]"
      />

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full h-full text-left bg-white dark:bg-slate-800 rounded-2xl border transition-all duration-300 overflow-hidden outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex flex-col
          ${isExpanded 
            ? 'shadow-xl translate-y-[-4px] border-[var(--accent-light)] dark:border-[var(--accent-dark)]' 
            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg hover:translate-y-[-2px]'
          }`}
        style={{ 
          '--tw-ring-color': `var(--accent-light)`,
        } as React.CSSProperties}
      >
        <div className="p-6 md:p-8 flex flex-col h-full w-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 p-2 flex items-center justify-center overflow-hidden">
               <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-contain" />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2.5 py-1 rounded-full whitespace-nowrap">
              <Calendar className="w-3 h-3" />
              {job.period}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
              {job.role}
            </h3>
            <div 
              className="text-lg font-medium transition-colors text-[var(--accent-light)] dark:text-[var(--accent-dark)]"
            >
              {job.company}
            </div>
          </div>

          {/* Technologies Preview (Always Visible) */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Code2 className="w-4 h-4 text-slate-400 dark:text-slate-500 mr-1" />
            {job.technologies.slice(0, 3).map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
            {job.technologies.length > 3 && (
              <span className="text-xs text-slate-400 dark:text-slate-500">
                +{job.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Spacer to push expand arrow to bottom if content is short */}
          <div className="flex-grow"></div>

          {/* Expanded Content */}
          <div 
            className={`grid transition-all duration-300 ease-in-out border-t border-slate-100 dark:border-slate-700/50 w-full ${
              isExpanded ? 'grid-rows-[1fr] opacity-100 pt-6 mt-2' : 'grid-rows-[0fr] opacity-0 pt-0 mt-0'
            }`}
          >
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Key Achievements</h4>
              <ul className="space-y-3 mb-6">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span 
                      className="mr-2.5 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--accent-light)] dark:bg-[var(--accent-dark)]"
                    ></span>
                    {desc}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50">
                 <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Full Stack</h4>
                 <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs font-medium bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600 rounded-full text-[var(--accent-light)] dark:text-[var(--accent-dark)]"
                      style={{ borderColor: `color-mix(in srgb, var(--accent-light), transparent 80%)` }}
                    >
                      {tech}
                    </span>
                  ))}
                 </div>
              </div>
            </div>
          </div>
          
          {/* Chevron Indicator */}
          <div className="flex justify-center mt-4 w-full">
             <div 
               className={`p-1.5 rounded-full transition-all duration-300 ${
                 isExpanded ? 'rotate-180 bg-slate-100 dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-700/50'
               }`}
               style={{ color: isExpanded ? `var(--accent-light)` : undefined }} // Keep chevron accent in light mode color if expanded
             >
               <ChevronDown className={`w-5 h-5 ${isExpanded ? '' : 'text-slate-400'}`} />
             </div>
          </div>
        </div>
      </button>
    </div>
  );
};

interface ExperienceSectionProps {
  title: string;
  data: ExperienceType[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, data }) => (
  <div className="mb-20 last:mb-0">
    <div className="mb-6 flex items-center justify-between px-6 max-w-7xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200">{title}</h3>
      <div className="hidden md:flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500">
        <span>Scroll</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>

    {/* Scroll Container */}
    <div className="relative w-full overflow-x-auto pb-12 pt-4 px-6 scrollbar-hide snap-x snap-mandatory overscroll-x-contain">
      {/* 
        Container for items. 
        Note: We explicitly remove max-w constraints on the flex container to allow natural overflow scrolling
        and ensure the end spacer works correctly.
      */}
      <div className="flex items-start gap-6">
        {data.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
        {/* Spacer for end padding - w-8 ensures decent padding (32px) is preserved after the last card */}
        <div className="w-8 flex-shrink-0" />
      </div>
    </div>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative transition-colors duration-300">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
        </div>

        <ExperienceSection title="Professional Experience" data={PROFESSIONAL_EXPERIENCE} />
        <ExperienceSection title="Internship Experience" data={INTERNSHIP_EXPERIENCE} />
      </div>
    </section>
  );
};
