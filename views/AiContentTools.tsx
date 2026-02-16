
import React, { useState, useCallback } from 'react';
import { generateContent } from '../services/geminiService';
import { SparklesIcon } from '../components/IconComponents';

const AiContentTools: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError('');
    setGeneratedContent('');
    try {
      const content = await generateContent(topic);
      setGeneratedContent(content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white">AI Content Generator</h1>
        <p className="mt-2 text-lg text-gray-400">Generate high-quality blog posts and articles in seconds.</p>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl shadow-purple-500/10">
        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-2">
            Enter your topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., 'The Future of Remote Work'"
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
              Generating...
            </>
          ) : (
            <>
              <SparklesIcon className="w-5 h-5" />
              Generate Content
            </>
          )}
        </button>

        {generatedContent && (
          <div className="mt-8 border-t border-gray-700 pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Generated Content:</h2>
            <div className="prose prose-invert max-w-none bg-gray-900 p-6 rounded-lg whitespace-pre-wrap">
              {generatedContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiContentTools;
