
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Button';
import { SOCIAL_LINKS } from '../constants';

const PAST_COMPANIES = [
  { name: 'Airbnb', logo: 'https://cdn.simpleicons.org/airbnb/FF5A5F', solidTheme: true },
  { name: 'Yelp', logo: 'https://cdn.simpleicons.org/yelp/D32323', solidTheme: true },
  { name: 'Uber', logo: 'https://cdn.simpleicons.org/uber/000000', solidTheme: true },
  { name: 'NASA', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg', solidTheme: false },
  { name: 'UC San Diego', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/University_of_California%2C_San_Diego_logo.svg/512px-University_of_California%2C_San_Diego_logo.svg.png', solidTheme: true }
];

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Github': return <Github className="w-5 h-5" />;
    case 'Linkedin': return <Linkedin className="w-5 h-5" />;
    case 'Twitter': return <Twitter className="w-5 h-5" />;
    default: return null;
  }
};

const CodeGraphic = () => (
  <div className="mx-auto w-full max-w-[500px] lg:max-w-none transition-opacity duration-1000 ease-out opacity-100">
    <div className="relative group">
       {/* Decorative box behind */}
       <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl -rotate-2 opacity-20 dark:opacity-30 blur-sm transform group-hover:rotate-0 transition-transform duration-500"></div>
       
       {/* Main Card */}
       <div className="relative z-10 bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-3 sm:pb-4">
             <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
             <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
             <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
             <div className="ml-auto text-[9px] sm:text-[10px] lg:text-xs text-slate-400 dark:text-slate-500 font-mono">Anand.java</div>
          </div>
          <pre className="font-mono text-[9px] sm:text-[10px] lg:text-sm leading-relaxed whitespace-pre">
            <code className="text-slate-800 dark:text-slate-300">
              <span className="text-purple-600 dark:text-purple-400">public class</span> <span className="text-yellow-600 dark:text-yellow-400">Anand</span> <span className="text-purple-600 dark:text-purple-400">extends</span> <span className="text-yellow-600 dark:text-yellow-400">Engineer</span> <span className="text-slate-500">{'{'}</span><br/><br/>
              
              &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">public</span> <span className="text-yellow-600 dark:text-yellow-400">Anand</span>() <span className="text-slate-500">{'{'}</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">this</span>.location = <span className="text-green-600 dark:text-green-400">"San Francisco"</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">super</span>.education = <span className="text-green-600 dark:text-green-400">"UC San Diego"</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">super</span>.focus = <span className="text-green-600 dark:text-green-400">"Backend Engineering"</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">super</span>.languages = <span className="text-blue-600 dark:text-blue-400">List</span>.of(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">"Java"</span>, <span className="text-green-600 dark:text-green-400">"Python"</span>, <span className="text-green-600 dark:text-green-400">"C++"</span>);<br/>
              &nbsp;&nbsp;<span className="text-slate-500">{'}'}</span><br/>
              <span className="text-slate-500">{'}'}</span>
            </code>
          </pre>
       </div>
    </div>
  </div>
);

const LogoStrip = () => (
  <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards">
    <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold mb-4 text-center sm:text-left">
      Previously at
    </p>
    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
      {PAST_COMPANIES.map((company) => (
        <img 
          key={company.name} 
          src={company.logo} 
          alt={company.name} 
          className={`h-6 w-auto object-contain transition-all duration-300 ${
            company.solidTheme 
              ? 'grayscale dark:brightness-0 dark:invert hover:grayscale-0 dark:hover:invert-0 dark:hover:brightness-100' 
              : 'grayscale hover:grayscale-0'
          } ${company.name === 'Uber' ? 'dark:hover:invert dark:hover:brightness-0' : ''}`}
        />
      ))}
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-12 md:pt-0 overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* NAME SECTION - Mobile: Top, Landscape: Left Col, Desktop: Left Col */}
          <div className="sm:col-span-5 lg:col-span-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="text-center sm:text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full uppercase">
                  Software Engineer
                </span>
                <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 whitespace-normal leading-[1.1]">
                  Anand <br className="hidden sm:block lg:hidden" /> Kumar
                </h1>
             </div>
          </div>

          {/* CODE GRAPHIC SECTION - Mobile: Middle, Landscape: Right Col (tall), Desktop: Right Col (tall) */}
          {/* Using sm:order-last on small screens to push it to the side, but on purely mobile (xs) it should be in middle of dom order for stacking?
              Actually, simpler to use grid placement.
          */}
          <div className="sm:col-span-7 lg:col-span-6 sm:row-span-2 lg:row-span-3 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
             <CodeGraphic />
          </div>

          {/* LOGO STRIP SECTION - Mobile: Below Graphic, Landscape: Below Name (Left Col), Desktop: Below Name (Left Col) */}
          <div className="sm:col-span-5 lg:col-span-6">
             <LogoStrip />
          </div>

          {/* BIO SECTION - Mobile: Bottom, Landscape: Full Width Bottom, Desktop: Left Col Bottom */}
          <div className={`sm:col-span-12 lg:col-span-6 transition-all duration-1000 ease-out ${
             hasScrolled ? 'opacity-100 max-h-[500px] translate-y-0' : 'opacity-0 max-h-0 translate-y-8'
          }`}>
             <div className="pt-8 text-center sm:text-left">
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl lg:max-w-none mx-auto sm:mx-0">
                  I specialize in building scalable backend systems and high-performance pricing architectures. 
                  Currently focusing on distributed systems and full-stack development to create seamless user experiences.
                </p>
                
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
                  <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                    View Work <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" onClick={() => window.open('/resume.pdf', '_blank')}>
                    <Download className="w-4 h-4 mr-2" /> Resume
                  </Button>
                  <div className="flex items-center gap-4 ml-4 border-l border-slate-200 dark:border-slate-700 pl-4">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.platform}
                      >
                        <SocialIcon name={link.icon} />
                      </a>
                    ))}
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
