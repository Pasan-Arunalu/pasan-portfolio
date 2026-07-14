import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ParticleSpinner = () => {
  return (
    <div className="relative w-5 h-5 ml-2 flex items-center justify-center animate-bounce">
      {/* Central core */}
      <div className="w-2 h-2 bg-bg-main rounded-full shadow-sm" />
    </div>
  );
};

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm('xaqrnqbo');

  return (
    <section id="contact" className="w-full flex-1 relative px-6 pt-24 pb-6 md:px-20 md:pt-32 md:pb-12 flex flex-col items-center justify-center overflow-hidden z-10">
      
      <div className="w-full max-w-[1600px] mx-auto flex flex-col backdrop-blur-md bg-bg-main/60 dark:bg-bg-main/40 border border-grid/50 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-10 text-center md:text-left"
        >
          <h2 className="font-editorial text-main text-3xl md:text-5xl tracking-tight inline-block border-b border-grid pb-2">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 flex-1 items-center">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-4 w-full"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-computational w-full">
              {/* Anti-spam honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-main text-sm md:text-base font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="bg-bg-main/50 border border-grid/50 rounded-xl p-3 md:p-4 text-main placeholder-muted/50 focus:outline-none focus:border-main/50 transition-colors w-full"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-main text-sm md:text-base font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="bg-bg-main/50 border border-grid/50 rounded-xl p-3 md:p-4 text-main placeholder-muted/50 focus:outline-none focus:border-main/50 transition-colors w-full"
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-main text-sm md:text-base font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows={3}
                  className="bg-bg-main/50 border border-grid/50 rounded-xl p-3 text-main placeholder-muted/50 focus:outline-none focus:border-main/50 transition-colors resize-none custom-scrollbar w-full"
                  placeholder="How can I help you?"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <button 
                type="submit" 
                disabled={state.submitting || state.succeeded}
                className="group relative overflow-hidden rounded-full bg-main text-bg-main font-medium py-3 px-8 mt-2 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 w-fit"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {!state.submitting && !state.succeeded && 'Send Message'}
                  {state.submitting && 'Sending...'}
                  {state.succeeded && 'Message Sent!'}
                  
                  {!state.submitting && !state.succeeded && (
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                  {state.submitting && <ParticleSpinner />}
                  {state.succeeded && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </form>
          </motion.div>

          {/* Right Side: Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col justify-center gap-8 h-full"
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-editorial text-main text-2xl md:text-3xl">Connect With Me</h3>
              <p className="text-muted font-computational text-sm md:text-base leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/pasa._.a" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-grid/50 bg-bg-main/30 hover:bg-grid/10 transition-colors w-fit md:min-w-[280px]"
              >
                <div className="p-3 bg-grid/10 rounded-xl group-hover:scale-110 group-hover:text-[#E1306C] transition-all duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-main font-computational font-medium block">Instagram</span>
                  <span className="text-muted text-xs font-computational">@pasa._.a</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Pasan-Arunalu" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-grid/50 bg-bg-main/30 hover:bg-grid/10 transition-colors w-fit md:min-w-[280px]"
              >
                <div className="p-3 bg-grid/10 rounded-xl group-hover:scale-110 group-hover:text-main transition-all duration-300 text-muted">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <span className="text-main font-computational font-medium block">GitHub</span>
                  <span className="text-muted text-xs font-computational">github.com/Pasan-Arunalu</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/pasan-arunalu/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-grid/50 bg-bg-main/30 hover:bg-grid/10 transition-colors w-fit md:min-w-[280px]"
              >
                <div className="p-3 bg-grid/10 rounded-xl group-hover:scale-110 group-hover:text-[#0A66C2] transition-all duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-main font-computational font-medium block">LinkedIn</span>
                  <span className="text-muted text-xs font-computational">linkedin.com/in/Pasan-Arunalu</span>
                </div>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
