import React from 'react';
import { ChevronRight } from 'lucide-react';

const MateriTopicCard = ({ topic, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-xl p-6 transition-all duration-300 border-2 ${
        isActive 
          ? 'bg-purple-600 border-purple-400 scale-105 shadow-xl' 
          : 'bg-gray-700/50 border-gray-600 hover:border-purple-400 hover:bg-gray-700'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-5xl transition-transform group-hover:scale-110">
          {topic.image}
        </div>
        <div className="flex-grow">
          <h3 className={`text-xl font-bold mb-2 transition-colors ${
            isActive ? 'text-white' : 'text-white group-hover:text-purple-300'
          }`}>
            {topic.name}
          </h3>
          <p className={`text-sm mb-3 leading-relaxed ${
            isActive ? 'text-purple-100' : 'text-gray-300'
          }`}>
            {topic.description}
          </p>
          <div className="space-y-1">
            <div className={`text-xs font-semibold mb-1 ${
              isActive ? 'text-purple-200' : 'text-purple-300'
            }`}>
              Contoh:
            </div>
            {topic.examples.slice(0, 2).map((example, idx) => (
              <div key={idx} className={`flex items-center gap-2 text-sm ${
                isActive ? 'text-purple-100' : 'text-gray-400'
              }`}>
                <ChevronRight size={14} className={isActive ? 'text-purple-200' : 'text-purple-400'} />
                <span>{example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {isActive && (
        <div className="mt-4 pt-4 border-t border-purple-400">
          <p className="text-sm text-purple-50 leading-relaxed">
            {topic.detailContent}
          </p>
        </div>
      )}
    </div>
  );
};

export default MateriTopicCard;