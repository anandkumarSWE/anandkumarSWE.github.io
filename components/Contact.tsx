
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Calendar, ArrowLeft, ArrowRight, Clock, X, Linkedin } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [view, setView] = useState<'selection' | 'form'>('selection');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Thanks for reaching out! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      setView('selection');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl dark:shadow-2xl transition-all duration-300">
          
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">Let's work together</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-center max-w-lg mx-auto leading-relaxed">
              Choose how you'd like to connect.
            </p>

            {view === 'selection' ? (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Send Message Option */}
                <button 
                  onClick={() => setView('form')}
                  className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    Fill out a quick form with your details and I'll get back to you via email.
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2 transition-all">
                    Write Message <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </button>

                {/* Book Call Option */}
                <button 
                  onClick={() => setIsCalendarOpen(true)}
                  className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Schedule a Call</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                    Skip the back-and-forth and schedule a 30-minute chat directly on my calendar.
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                    View Availability <Clock className="w-4 h-4 ml-1" />
                  </span>
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <button 
                  onClick={() => setView('selection')}
                  className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to options
                </button>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get in touch</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        I usually respond within 24 hours.
                      </p>
                    </div>
                    
                    <a 
                      href="mailto:anandkumar.SWE@gmail.com"
                      className="flex items-center gap-4 text-slate-600 dark:text-slate-300 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-[1.02] group"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                        <p className="font-medium truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">anandkumar.SWE@gmail.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/anandkumar-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-slate-600 dark:text-slate-300 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-[1.02] group"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#0077b5]/10 dark:bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] dark:text-[#389ce3] shrink-0 group-hover:bg-[#0077b5]/20 dark:group-hover:bg-[#0077b5]/30 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                        <p className="font-medium group-hover:text-[#0077b5] dark:group-hover:text-[#389ce3] transition-colors">@anandkumar-</p>
                      </div>
                    </a>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        placeholder="name@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-1">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                        placeholder="Tell me about yourself..."
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[80vh] md:h-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 relative animate-in zoom-in-95 duration-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="flex justify-between items-center p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
               <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Schedule a Call</h3>
               <button 
                onClick={() => setIsCalendarOpen(false)}
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
             </div>
             
             <div className="flex-grow bg-white overflow-hidden">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-jvKX89nJLU9Tl2ob8iGJLPmPKuiGzjKUyVVvViGuxZ3zOytypY1b6QknRm9S1zqUTtqVc-lk?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  title="Google Calendar Booking"
                  className="w-full h-full min-h-[500px]"
                ></iframe>
             </div>
          </div>
          {/* Close on backdrop click */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsCalendarOpen(false)}></div>
        </div>
      )}
    </section>
  );
};
