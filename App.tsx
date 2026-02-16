
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './views/Dashboard';
import DesignTools from './views/DesignTools';
import AiContentTools from './views/AiContentTools';
import TemplateMarketplace from './views/TemplateMarketplace';
import PromptLibrary from './views/PromptLibrary';
import ProductIdeaGenerator from './views/ProductIdeaGenerator';

export type View = 'dashboard' | 'design' | 'ai-content' | 'templates' | 'prompts' | 'idea-generator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const navigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'design':
        return <DesignTools />;
      case 'ai-content':
        return <AiContentTools />;
      case 'templates':
        return <TemplateMarketplace />;
      case 'prompts':
        return <PromptLibrary />;
      case 'idea-generator':
        return <ProductIdeaGenerator />;
      case 'dashboard':
      default:
        return <Dashboard navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 font-sans">
      <Header currentView={currentView} navigate={navigate} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
