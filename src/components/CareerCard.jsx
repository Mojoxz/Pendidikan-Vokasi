import React from 'react';

const CareerCard = ({ career, onClick }) => {
  return (
    <div 
      className="bg-gray-800 border-2 border-gray-600 rounded-2xl cursor-pointer overflow-hidden group hover:border-purple-400 transition-all hover:shadow-xl hover:scale-105 duration-300"
      onClick={onClick}
    >
      <div className={`h-32 bg-gradient-to-br ${career.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
        {career.icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {career.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {career.description}
        </p>
        <div className="flex items-center justify-between text-sm mb-3">
          <span className={`px-3 py-1 rounded-full font-bold ${
            career.demand === 'Sangat Tinggi' 
              ? 'bg-green-900/50 text-green-300' 
              : 'bg-blue-900/50 text-blue-300'
          }`}>
            {career.demand}
          </span>
          <span className="text-purple-300 font-bold">{career.salary}</span>
        </div>
        <div className="text-xs text-gray-400 group-hover:text-purple-300 transition-colors">
          Klik untuk melihat detail & lowongan kerja →
        </div>
      </div>
    </div>
  );
};

export default CareerCard;