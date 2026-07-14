import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h3 className="font-editorial text-main text-lg md:text-2xl tracking-tight border-b border-grid pb-2 md:pb-4 text-center md:text-left">Education</h3>

      <div className="flex flex-col gap-3 md:gap-6 font-computational">
        <div className="group">
          <div className="flex justify-between items-baseline mb-0.5 md:mb-1">
            <h4 className="text-main font-medium text-xs md:text-base">BSc (Hons) in Data Science</h4>
            <span className="text-muted text-[0.6rem] md:text-xs tracking-widest uppercase">2023 — Present</span>
          </div>
          <p className="text-muted text-[0.65rem] md:text-sm">Cardiff Metropolitan University</p>
        </div>

        <div className="group">
          <div className="flex justify-between items-baseline mb-0.5 md:mb-1">
            <h4 className="text-main font-medium text-xs md:text-base">HD in Computing &<br/> Software Engineering</h4>
            <span className="text-muted text-[0.6rem] md:text-xs tracking-widest uppercase">2023 — 2025</span>
          </div>
          <p className="text-muted text-[0.65rem] md:text-sm">Cardiff Metropolitan University</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
