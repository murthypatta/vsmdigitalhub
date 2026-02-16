
import React from 'react';
import Card from '../components/Card';
import { BrushIcon, TemplateIcon } from '../components/IconComponents';
import type { Tool } from '../types';

const designTools: Tool[] = [
  {
    id: 1,
    name: 'CanvaClone Image Editor',
    description: 'A powerful, user-friendly image editor for creating social media graphics, presentations, and more.',
    icon: <BrushIcon className="w-8 h-8" />,
    link: '#',
  },
  {
    id: 2,
    name: 'VectorArt Pro',
    description: 'Create and edit scalable vector graphics for logos, icons, and illustrations with professional-grade tools.',
    icon: <BrushIcon className="w-8 h-8" />,
    link: '#',
  },
  {
    id: 3,
    name: 'E-book Cover Designer',
    description: 'Design beautiful, high-converting e-book covers in minutes with our specialized templates and tools.',
    icon: <TemplateIcon className="w-8 h-8" />,
    link: '#',
  },
  {
    id: 4,
    name: 'Mockup Generator',
    description: 'Visualize your digital products in realistic settings. Perfect for marketing and product listings.',
    icon: <TemplateIcon className="w-8 h-8" />,
    link: '#',
  },
    {
    id: 5,
    name: 'Infographic Builder',
    description: 'Turn complex data into beautiful and shareable infographics with our drag-and-drop builder.',
    icon: <BrushIcon className="w-8 h-8" />,
    link: '#',
  },
  {
    id: 6,
    name: 'Font Pairing Tool',
    description: 'Find the perfect font combinations for your brand and projects with AI-powered suggestions.',
    icon: <TemplateIcon className="w-8 h-8" />,
    link: '#',
  },
];

const DesignTools: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Design Tools</h1>
        <p className="mt-2 text-lg text-gray-400">Your creative arsenal for stunning digital products.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designTools.map((tool) => (
          <Card key={tool.id} title={tool.name} description={tool.description} icon={tool.icon}>
            <a href={tool.link} className="inline-block mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              Launch Tool
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DesignTools;
