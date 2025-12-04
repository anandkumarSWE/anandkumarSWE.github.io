import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Latest Writings</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Thoughts on software engineering, architecture, and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group shadow-sm dark:shadow-none"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-slate-400 dark:text-slate-300 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};