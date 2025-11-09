// src/components/game/GameMenu.jsx

import React from 'react';
import { Play, RotateCcw, Trophy, BookOpen } from 'lucide-react';

const GameMenu = ({ onStartGame, onContinueGame, hasSavedGame }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-2xl w-full mx-4">
        {/* Title */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-6xl">🎮</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Industry 4.0
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Challenge
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Uji kemampuanmu dalam menghadapi tantangan teknologi Vokasi 4.0
          </p>
        </div>

        {/* Game Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🏭</div>
            <div className="text-sm text-gray-400">5 Level</div>
            <div className="text-white font-bold">Tantangan</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-sm text-gray-400">Real-time</div>
            <div className="text-white font-bold">Strategy</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-sm text-gray-400">Unlock</div>
            <div className="text-white font-bold">Achievements</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {hasSavedGame && (
            <button
              onClick={onContinueGame}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg"
            >
              <RotateCcw size={24} />
              Lanjutkan Game
            </button>
          )}
          
          <button
            onClick={onStartGame}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg"
          >
            <Play size={24} />
            {hasSavedGame ? 'Game Baru' : 'Mulai Bermain'}
          </button>

        </div>

        {/* Features List */}
        <div className="mt-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-white font-bold mb-4 text-center">✨ Fitur Game</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Multiple choice, sorting, dan drag-match challenges</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Energy management system</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Power-ups dan bonus scoring</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Achievement system & star rating</span>
            </li>
          </ul>
        </div>
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

export default GameMenu;