// src/components/game/LevelComplete.jsx

import React from 'react';
import { Star, Trophy, Zap, Clock, ArrowRight } from 'lucide-react';

const LevelComplete = ({ 
  levelTitle, 
  finalScore, 
  stars, 
  timeBonus, 
  energyBonus, 
  perfectBonus,
  isPerfect,
  onNextLevel,
  isLastLevel
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="max-w-2xl w-full">
        {/* Success Banner */}
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="text-6xl mb-4">
            {isPerfect ? '🏆' : stars >= 2 ? '⭐' : '✅'}
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">
            {isPerfect ? 'Perfect!' : 'Level Complete!'}
          </h1>
          <p className="text-xl text-purple-300">{levelTitle}</p>
        </div>

        {/* Stars Display */}
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3].map((starNum) => (
            <div
              key={starNum}
              className={`transform transition-all duration-500 ${
                starNum <= stars ? 'scale-100 opacity-100' : 'scale-75 opacity-30'
              }`}
              style={{ animationDelay: `${starNum * 0.2}s` }}
            >
              <Star
                size={60}
                className={starNum <= stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
              />
            </div>
          ))}
        </div>

        {/* Score Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 mb-8">
          <div className="space-y-4">
            {/* Final Score */}
            <div className="flex items-center justify-between text-white border-b border-gray-700 pb-4">
              <div className="flex items-center gap-3">
                <Trophy className="text-yellow-400" size={32} />
                <span className="text-2xl font-bold">Total Score</span>
              </div>
              <span className="text-4xl font-bold text-yellow-400">{finalScore}</span>
            </div>

            {/* Bonuses */}
            <div className="space-y-3">
              {timeBonus > 0 && (
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Clock size={20} className="text-blue-400" />
                    <span>Time Bonus</span>
                  </div>
                  <span className="text-green-400 font-bold">+{timeBonus}</span>
                </div>
              )}

              {energyBonus > 0 && (
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    <span>Energy Bonus</span>
                  </div>
                  <span className="text-green-400 font-bold">+{energyBonus}</span>
                </div>
              )}

              {perfectBonus > 0 && (
                <div className="flex items-center justify-between text-gray-300">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-purple-400" />
                    <span>Perfect Bonus</span>
                  </div>
                  <span className="text-green-400 font-bold">+{perfectBonus}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Performance Messages */}
        {isPerfect && (
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 border-2 border-yellow-500/50 rounded-xl p-4 mb-6 text-center">
            <p className="text-yellow-200 font-bold">
              🌟 Sempurna! Tidak ada kesalahan sama sekali!
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onNextLevel}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg"
        >
          {isLastLevel ? 'Selesaikan Game' : 'Level Selanjutnya'}
          <ArrowRight size={24} />
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LevelComplete;