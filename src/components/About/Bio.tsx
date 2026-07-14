import React from 'react';

interface BioProps {
  isExpanded?: boolean;
}

const Bio: React.FC<BioProps> = ({ isExpanded = true }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-editorial text-main text-xl md:text-3xl tracking-tight mb-2 md:mb-4 border-b border-grid pb-1 md:pb-2 inline-block">About Me</h2>

      <div className="font-computational text-main text-xs md:text-sm leading-relaxed space-y-2 md:space-y-4 text-justify">
        <p className={!isExpanded ? "line-clamp-2 md:line-clamp-none" : ""}>
          I am a Data Science undergraduate and Designer with a passion for building intelligent,
          beautifully crafted digital experiences. My work exists at the intersection of rigorous engineering
          and thoughtful design, ensuring that every interface is not only functional but also emotionally resonant.
          Whether I'm training models or writing rendering shaders, the goal remains the same:
          to create seamless interactions.
        </p>
      </div>
    </div>
  );
};

export default Bio;
