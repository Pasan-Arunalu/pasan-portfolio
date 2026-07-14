import React, { useEffect, useState, useRef } from 'react';
import { terminalLogs } from './skillsData';

const Terminal: React.FC = () => {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    // Add first log immediately
    setDisplayedLogs([terminalLogs[0]]);
    currentIndex++;

    const interval = setInterval(() => {
      setDisplayedLogs(prev => {
        // Keep only the last 20 logs to prevent infinite memory growth
        const newLogs = [...prev, terminalLogs[currentIndex % terminalLogs.length]];
        return newLogs.slice(-20);
      });
      currentIndex++;
    }, 600); // New log every 600ms (much faster)

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  return (
    <div className="w-full h-[350px] md:h-[450px] backdrop-blur-md bg-[#0a0a0a]/90 dark:bg-[#050505]/90 border border-grid/50 rounded-lg p-1 shadow-2xl flex flex-col font-mono text-[0.65rem] md:text-[0.7rem] overflow-hidden">
      
      {/* Terminal Header (Windows Style) */}
      <div className="flex items-center justify-between bg-black/40 px-3 py-2 border-b border-grid/20">
        <div className="flex items-center gap-2 text-muted opacity-70 text-[0.6rem] tracking-wider">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2z" />
          </svg>
          <span>Command Prompt - sys_kernel</span>
        </div>
        <div className="flex items-center gap-3 text-muted opacity-50">
          <span className="hover:opacity-100 cursor-pointer">-</span>
          <span className="hover:opacity-100 cursor-pointer text-xs">□</span>
          <span className="hover:opacity-100 cursor-pointer hover:text-red-500">×</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-1.5 p-4"
      >
        {/* Spacer pushes logs to the bottom until the screen fills */}
        <div className="mt-auto"></div>

        {displayedLogs.map((log, index) => {
          const isCommand = log.startsWith('C:\\');
          return (
            <div
              key={`${index}-${log}`}
              className={`${isCommand ? 'text-main font-medium mt-2' : 'text-emerald-500/80'} ${index === displayedLogs.length - 1 && !isCommand ? 'animate-pulse' : ''}`}
            >
              {log}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terminal;
