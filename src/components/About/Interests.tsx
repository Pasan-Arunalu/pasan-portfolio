import React from 'react';

const Interests: React.FC = () => {
  const interests = [
    'Machine Learning',
    'Data Engineering',
    'AI',
    'UI/UX Design'
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h3 className="font-editorial text-main text-lg md:text-2xl tracking-tight border-b border-grid pb-2 md:pb-4 text-center md:text-left">Interests</h3>
      
      <div className="flex flex-wrap gap-2 md:gap-3 font-computational justify-center md:justify-start">
        {interests.map((interest, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-grid text-muted text-[0.65rem] md:text-xs tracking-wide hover:text-main hover:border-main transition-colors"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Interests;
