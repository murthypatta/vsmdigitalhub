
import React, { useState, useMemo, useCallback } from 'react';
import Card from '../components/Card';
import type { Prompt } from '../types';
import { CopyIcon, CheckIcon } from '../components/IconComponents';

const allPrompts: Prompt[] = [
  { id: 1, title: 'Blog Post Idea Generator', prompt: 'Generate 10 engaging blog post titles about [topic]. For each title, provide a brief 1-2 sentence summary.', category: 'Blogging' },
  { id: 2, title: 'Instagram Caption Creator', prompt: 'Write 5 creative and engaging Instagram captions for a post about [product/event]. Include relevant hashtags and a call-to-action.', category: 'Social Media' },
  { id: 3, title: 'Product Description Writer', prompt: 'Write a persuasive product description for [product name], a [product category]. Highlight its key features: [feature 1], [feature 2], [feature 3], and its main benefit: [main benefit]. The target audience is [target audience].', category: 'E-commerce' },
  { id: 4, title: 'Email Newsletter Subject Lines', prompt: 'Generate 10 catchy and click-worthy email subject lines for a newsletter about [newsletter topic]. The tone should be [tone, e.g., friendly, professional, urgent].', category: 'Marketing' },
  { id: 5, title: 'Explain Like I\'m 5', prompt: 'Explain the concept of [complex topic] in simple terms, as if you were explaining it to a 5-year-old.', category: 'Content Simplification' },
  { id: 6, title: 'Create a Mini-Saga', prompt: 'Write a complete story in exactly 50 words about [theme or character].', category: 'Creative Writing' },
  { id: 7, title: 'Marketing Campaign Slogans', prompt: 'Create 10 memorable slogans for a new marketing campaign for [brand/product]. The campaign is focused on [key message].', category: 'Marketing' },
  { id: 8, title: 'YouTube Video Script Intro', prompt: 'Write a compelling 15-30 second intro hook for a YouTube video titled "[video title]". The intro should grab the viewer\'s attention and clearly state what the video is about.', category: 'Blogging' },
];

const categories = ['All', 'Blogging', 'Social Media', 'E-commerce', 'Marketing', 'Content Simplification', 'Creative Writing'];

const PromptLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = useCallback((prompt: string, id: number) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const filteredPrompts = useMemo(() => {
    if (activeCategory === 'All') return allPrompts;
    return allPrompts.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Prompt Library</h1>
        <p className="mt-2 text-lg text-gray-400">Unlock the full potential of AI with expertly crafted prompts.</p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors ${
              activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPrompts.map(prompt => (
          <div key={prompt.id} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-500/20 transition-shadow">
            <h3 className="font-bold text-lg text-white mb-2">{prompt.title}</h3>
            <p className="text-gray-400 bg-gray-900 p-4 rounded-md font-mono text-sm mb-4">{prompt.prompt}</p>
            <div className="flex justify-between items-center">
                <span className="text-xs font-semibold bg-purple-500/20 text-purple-300 py-1 px-3 rounded-full">{prompt.category}</span>
                <button
                    onClick={() => handleCopy(prompt.prompt, prompt.id)}
                    className="flex items-center gap-2 bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors"
                >
                    {copiedId === prompt.id ? <CheckIcon /> : <CopyIcon />}
                    {copiedId === prompt.id ? 'Copied!' : 'Copy'}
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptLibrary;
