// src/components/game/tasks/DragMatchTask.jsx

import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { shuffleArray } from '../../../utils/gameUtils';

const DragMatchTask = ({ task, onSubmit, disabled }) => {
  const [leftItems] = useState(task.pairs.map(p => p.left));
  const [rightItems] = useState(shuffleArray(task.pairs.map(p => p.right)));
  const [matches, setMatches] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);

  const handleLeftClick = (item) => {
    if (disabled) return;
    setSelectedLeft(item);
  };

  const handleRightClick = (item) => {
    if (disabled || !selectedLeft) return;
    
    // If already matched, remove the match
    if (matches[selectedLeft] === item) {
      const newMatches = { ...matches };
      delete newMatches[selectedLeft];
      setMatches(newMatches);
    } else {
      // Create new match
      setMatches({ ...matches, [selectedLeft]: item });
    }
    
    setSelectedLeft(null);
  };

  const isLeftMatched = (item) => item in matches;
  const isRightMatched = (item) => Object.values(matches).includes(item);
  const getMatchForLeft = (item) => matches[item];

  const handleSubmit = () => {
    if (!disabled && Object.keys(matches).length === task.pairs.length) {
      onSubmit(matches);
    }
  };

  const allMatched = Object.keys(matches).length === task.pairs.length;

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-gray-800/50 border-2 border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl text-white font-bold mb-2">
          {task.question}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>🔗 Klik item kiri, lalu klik pasangannya di kanan</span>
        </div>
      </div>

      {/* Matching Interface */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="text-center text-sm font-bold text-purple-400 mb-3">
            TEKNOLOGI
          </div>
          {leftItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLeftClick(item)}
              disabled={disabled}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                selectedLeft === item
                  ? 'bg-purple-600 border-purple-400 text-white scale-105 shadow-lg'
                  : isLeftMatched(item)
                  ? 'bg-green-600/20 border-green-500 text-white'
                  : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-purple-500'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item}</span>
                {isLeftMatched(item) && (
                  <CheckCircle className="text-green-400" size={20} />
                )}
              </div>
              {isLeftMatched(item) && (
                <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                  <ArrowRight size={16} />
                  <span>{getMatchForLeft(item)}</span>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <div className="text-center text-sm font-bold text-purple-400 mb-3">
            FUNGSI
          </div>
          {rightItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleRightClick(item)}
              disabled={disabled || !selectedLeft}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                isRightMatched(item)
                  ? 'bg-green-600/20 border-green-500 text-white'
                  : selectedLeft
                  ? 'bg-gray-800/50 border-purple-500 text-gray-300 hover:bg-purple-600/20 cursor-pointer'
                  : 'bg-gray-800/50 border-gray-600 text-gray-300'
              } ${disabled || !selectedLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item}</span>
                {isRightMatched(item) && (
                  <CheckCircle className="text-green-400" size={20} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="text-center text-sm text-gray-400">
        Terpasangkan: {Object.keys(matches).length} / {task.pairs.length}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!allMatched || disabled}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          !allMatched || disabled
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg transform hover:scale-105'
        }`}
      >
        {disabled ? 'Menunggu...' : allMatched ? 'Submit Pasangan' : 'Lengkapi Semua Pasangan'}
      </button>
    </div>
  );
};

export default DragMatchTask;