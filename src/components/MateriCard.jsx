import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';

const MateriCard = ({ materi, onClick }) => {
  return (
    <div 
      className="bg-gray-800 border-2 border-gray-600 rounded-2xl cursor-pointer overflow-hidden group hover:border-purple-400 transition-all hover:shadow-xl hover:scale-105 duration-300"
      onClick={onClick}
    >
      <div className={`h-32 bg-gradient-to-br ${materi.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
        {materi.icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {materi.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {materi.description}
        </p>
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="px-3 py-1 rounded-full font-bold bg-blue-900/50 text-blue-300 flex items-center gap-1">
            <BookOpen size={14} />
            {materi.topics.length} Topik
          </span>
          <span className="text-purple-300 font-bold flex items-center gap-1">
            Detail
            <ChevronRight size={16} />
          </span>
        </div>
        <div className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors">
          Klik untuk mempelajari materi →
        </div>
      </div>
    </div>
  );
};

export default MateriCard;