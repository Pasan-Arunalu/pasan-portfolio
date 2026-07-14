export interface WorkItem {
  id: string;
  title: string;
  category: string;
  type: 'work' | 'project' | 'academic';
  description: string;
  githubUrl?: string;
}

export const workData: WorkItem[] = [
  {
    id: 'cynon-tech',
    title: 'Cynon Tech | Co-Founder & CEO',
    category: 'Work Experience',
    type: 'work',
    description: 'Spearheading business operations, product management, marketing, and sales strategy. Currently driving the market vision and go-to-market strategy for Flow by Cynon, a specialized SaaS platform designed to streamline tracking and operations for the freight forwarding and logistics industry.'
  },
  {
    id: 'news-factory',
    title: 'News-Factory',
    category: 'Project',
    type: 'project',
    description: 'An automated Python data pipeline that scrapes live political news and leverages the Gemini API to intelligently rewrite and synthesize articles into concise, up-to-date summaries.',
    githubUrl: 'https://github.com/'
  },
  {
    id: 'discord-bot',
    title: 'Discord Media & Moderation Bot',
    category: 'Project',
    type: 'project',
    description: 'A Python-based server bot built with discord.py and FFmpeg. Features seamless audio streaming and automated message and link filtering to maintain channel safety.',
    githubUrl: 'https://github.com/'
  },
  {
    id: 'cs2-predictor',
    title: 'CS2 Esports Match Predictor',
    category: 'Academic Final Project',
    type: 'academic',
    description: 'A predictive data science model engineered to forecast round-by-round and overall match outcomes for competitive Counter-Strike 2 esports using statistical analysis.'
  }
];
