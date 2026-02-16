
import React from 'react';
import type { View } from '../App';
import Card from '../components/Card';
import { BrushIcon, SparklesIcon, TemplateIcon, BookOpenIcon, LightBulbIcon } from '../components/IconComponents';

interface DashboardProps {
  navigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ navigate }) => {
  const features = [
    {
      view: 'design' as View,
      title: 'Design Tools',
      description: 'Access a suite of tools to create stunning visuals for your digital products.',
      icon: <BrushIcon className="w-8 h-8" />,
    },
    {
      view: 'ai-content' as View,
      title: 'AI Content Tools',
      description: 'Generate high-quality written content in seconds with our AI-powered writer.',
      icon: <SparklesIcon className="w-8 h-8" />,
    },
    {
      view: 'templates' as View,
      title: 'Template Marketplace',
      description: 'Browse and use professionally designed templates to kickstart your projects.',
      icon: <TemplateIcon className="w-8 h-8" />,
    },
    {
      view: 'prompts' as View,
      title: 'Prompt Library',
      description: 'Find the perfect prompts to get the best results from our AI tools.',
      icon: <BookOpenIcon className="w-8 h-8" />,
    },
    {
      view: 'idea-generator' as View,
      title: 'Product Idea Generator',
      description: 'Never run out of ideas again. Generate your next bestselling digital product idea.',
      icon: <LightBulbIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          The Ultimate <span className="text-purple-400">All-in-One Platform</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          Everything you need to ideate, create, and launch successful digital products.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.view}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            onClick={() => navigate(feature.view)}
          />
        ))}
         <div className="md:col-span-2 lg:col-span-1">
             <Card
                title="Your Creative Hub"
                description="All your tools, centrally located. Simplify your workflow and focus on what you do best: creating."
                onClick={() => navigate('dashboard')}
            />
         </div>
      </div>
    </div>
  );
};

export default Dashboard;
