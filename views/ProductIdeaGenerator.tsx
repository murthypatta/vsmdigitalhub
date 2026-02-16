
import React, { useState, useCallback } from 'react';
import { generateProductIdeas } from '../services/geminiService';
import type { ProductIdea } from '../types';
import { LightBulbIcon } from '../components/IconComponents';
import Card from '../components/Card';

const ProductIdeaGenerator: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [ideas, setIdeas] = useState<ProductIdea[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!niche.trim()) {
      setError('Please enter a niche or industry.');
      return;
    }
    setIsLoading(true);
    setError('');
    setIdeas([]);
    try {
      const generatedIdeas = await generateProductIdeas(niche);
      setIdeas(generatedIdeas);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [niche]);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">Product Idea Generator</h1>
        <p className="mt-2 text-lg text-gray-400">Spark your next bestseller with AI-powered ideas.</p>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl shadow-purple-500/10 mb-12">
        <div className="mb-4">
          <label htmlFor="niche" className="block text-sm font-medium text-gray-300 mb-2">
            Enter your niche or industry
          </label>
          <input
            type="text"
            id="niche"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="e.g., 'sustainable living', 'productivity for developers'"
            className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            disabled={isLoading}
          />
        </div>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Ideas...
            </>
          ) : (
            <>
              <LightBulbIcon className="w-5 h-5" />
              Generate Ideas
            </>
          )}
        </button>
      </div>

      {ideas.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Your Generated Ideas:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ideas.map((idea, index) => (
              <Card key={index} title={idea.name} description={idea.description}>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold text-gray-300">Target Audience:</span> {idea.targetAudience}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductIdeaGenerator;
