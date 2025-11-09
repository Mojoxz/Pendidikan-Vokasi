// src/components/game/LevelComplete.jsx

import React from 'react';
import { Star, Trophy, Zap, Clock, ArrowRight, Award } from 'lucide-react';

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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Success Banner */}
        <div className="text-center mb-8 animate-fadeInUp">
          <div className="inline-block mb-4 px-4 py-2 bg-green-600/30 border-2 border-green-400 rounded-full">
            <span className="text-sm font-bold text-white">
              {isPerfect ? '✨ SEMPURNA!' : '✅ LEVEL SELESAI'}
            </span>
          </div>
          <div className="text-6xl mb-4">
            {isPerfect ? '🏆' : stars >= 2 ? '⭐' : '✅'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {isPerfect ? 'Perfect Level!' : 'Level Complete!'}
          </h1>
          <p className="text-xl text-purple-300">{levelTitle}</p>
        </div>

        {/* Stars Display */}
        <div className="flex justify-center gap-4 mb-8">
          {[1, 2, 3].map((starNum) => (
            <div
              key={starNum}
              className={`transform transition-all duration-500 animate-fadeInUp ${
                starNum <= stars ? 'scale-100 opacity-100' : 'scale-75 opacity-30'
              }`}
              style={{ animationDelay: `${starNum * 0.2}s` }}
            >
              <Star
                size={60}
                className={starNum <= stars ? 'text-yellow-400 fill-yellow-400 drop-shadow-lg' : 'text-gray-600'}
              />
            </div>
          ))}
        </div>

        {/* Score Summary Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl p-8 mb-6">
          {/* Final Score */}
          <div className="flex items-center justify-between border-b-2 border-gray-700 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <Trophy className="text-yellow-400" size={40} />
              <div>
                <div className="text-sm text-gray-400">Total Score</div>
                <div className="text-3xl font-bold text-white">
                  {finalScore}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Rating</div>
              <div className="text-2xl font-bold text-yellow-400">
                {stars === 3 ? 'S' : stars === 2 ? 'A' : stars === 1 ? 'B' : 'C'}
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Award size={20} className="text-purple-400" />
              Bonus Rewards
            </h3>

            {timeBonus > 0 && (
              <div className="flex items-center justify-between bg-blue-900/30 border border-blue-500/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Clock size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Time Bonus</div>
                    <div className="text-xs text-gray-400">Selesai dengan cepat</div>
                  </div>
                </div>
                <span className="text-green-400 font-bold text-lg">+{timeBonus}</span>
              </div>
            )}

            {energyBonus > 0 && (
              <div className="flex items-center justify-between bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500/20 p-2 rounded-lg">
                    <Zap size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Energy Bonus</div>
                    <div className="text-xs text-gray-400">Energy terjaga tinggi</div>
                  </div>
                </div>
                <span className="text-green-400 font-bold text-lg">+{energyBonus}</span>
              </div>
            )}

            {perfectBonus > 0 && (
              <div className="flex items-center justify-between bg-purple-900/30 border border-purple-500/30 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Star size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Perfect Bonus</div>
                    <div className="text-xs text-gray-400">Tanpa kesalahan!</div>
                  </div>
                </div>
                <span className="text-green-400 font-bold text-lg">+{perfectBonus}</span>
              </div>
            )}

            {timeBonus === 0 && energyBonus === 0 && perfectBonus === 0 && (
              <div className="text-center text-gray-400 py-4">
                Tidak ada bonus kali ini. Coba lebih cepat di level berikutnya! 💪
              </div>
            )}
          </div>
        </div>

        {/* Performance Message */}
        {isPerfect && (
          <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 border-2 border-yellow-500/50 rounded-xl p-5 mb-6 text-center animate-fadeInUp">
            <p className="text-yellow-200 font-bold text-lg">
              🌟 Performa Sempurna! Tidak ada kesalahan sama sekali!
            </p>
          </div>
        )}

        {stars === 3 && !isPerfect && (
          <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border-2 border-green-500/50 rounded-xl p-5 mb-6 text-center animate-fadeInUp">
            <p className="text-green-200 font-bold">
              ⭐ Excellent! Kamu mendapat 3 bintang!
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onNextLevel}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg border-2 border-purple-500"
        >
          {isLastLevel ? '🏆 Selesaikan Game' : '➡️ Level Selanjutnya'}
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