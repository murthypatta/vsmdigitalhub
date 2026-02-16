
import React, { useState, useMemo } from 'react';
import Card from '../components/Card';
import type { Template } from '../types';

const allTemplates: Template[] = [
  { id: 1, title: 'Minimalist E-book Template', description: 'A clean and modern template for any non-fiction e-book.', imageUrl: 'https://picsum.photos/seed/ebook1/600/400', category: 'E-books' },
  { id: 2, title: 'Vibrant Instagram Post Pack', description: '30 eye-catching templates for your Instagram feed.', imageUrl: 'https://picsum.photos/seed/insta1/600/400', category: 'Social Media' },
  { id: 3, title: 'Ultimate Digital Planner', description: 'A comprehensive planner for GoodNotes and Notability.', imageUrl: 'https://picsum.photos/seed/planner1/600/400', category: 'Planners' },
  { id: 4, title: 'Professional Resume Template', description: 'Stand out from the crowd with this sleek resume design.', imageUrl: 'https://picsum.photos/seed/resume1/600/400', category: 'Documents' },
  { id: 5, title: 'Creative Business E-book', description: 'A stylish e-book template for creative entrepreneurs.', imageUrl: 'https://picsum.photos/seed/ebook2/600/400', category: 'E-books' },
  { id: 6, title: 'Food Blogger Social Kit', description: 'A complete set of templates for food bloggers.', imageUrl: 'https://picsum.photos/seed/social2/600/400', category: 'Social Media' },
  { id: 7, title: 'Fitness Goal Planner', description: 'Track your fitness journey with this detailed planner.', imageUrl: 'https://picsum.photos/seed/planner2/600/400', category: 'Planners' },
  { id: 8, title: 'Invoice & Business Docs', description: 'Professional templates for your business correspondence.', imageUrl: 'https://picsum.photos/seed/docs2/600/400', category: 'Documents' },
];

const categories = ['All', 'E-books', 'Social Media', 'Planners', 'Documents'];

const TemplateMarketplace: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTemplates = useMemo(() => {
    if (activeCategory === 'All') {
      return allTemplates;
    }
    return allTemplates.filter(template => template.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Template Marketplace</h1>
        <p className="mt-2 text-lg text-gray-400">Professionally designed templates to fast-track your success.</p>
      </div>

      <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredTemplates.map(template => (
          <Card
            key={template.id}
            title={template.title}
            description={template.description}
            imageUrl={template.imageUrl}
          >
            <div className="flex justify-between items-center mt-4">
                 <span className="text-xs font-semibold bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full">{template.category}</span>
                 <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">Preview</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateMarketplace;
