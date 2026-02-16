
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, icon, onClick, children }) => {
  const isClickable = !!onClick;

  return (
    <div
      className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-purple-500/30 hover:-translate-y-1 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {imageUrl && <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />}
      <div className="p-6">
        <div className="flex items-center gap-3">
            {icon && <div className="text-purple-400">{icon}</div>}
            <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-base">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
