
import React from 'react';
import type { View } from '../App';
import { SparklesIcon } from './IconComponents';

interface HeaderProps {
  currentView: View;
  navigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, navigate }) => {
  const navItems: { view: View; label: string }[] = [
    { view: 'dashboard', label: 'Dashboard' },
    { view: 'design', label: 'Design Tools' },
    { view: 'ai-content', label: 'AI Content' },
    { view: 'templates', label: 'Templates' },
    { view: 'prompts', label: 'Prompts' },
    { view: 'idea-generator', label: 'Idea Generator' },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => navigate('dashboard')} className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-xl">
              <SparklesIcon className="h-8 w-8 text-purple-400" />
              Creator's Hub
            </button>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => navigate(item.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentView === item.view
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
