// src/components/game/PauseModal.jsx

import React from 'react';
import { Play, RotateCcw, X } from 'lucide-react';

export const PauseModal = ({ onResume, onRestart, onQuit }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 border-2 border-purple-500 rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⏸️</div>
          <h2 className="text-3xl font-bold text-white mb-2">Game Paused</h2>
          <p className="text-gray-400">Ambil napas sejenak...</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onResume}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Play size={20} />
            Lanjutkan
          </button>

          <button
            onClick={onRestart}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Restart Level
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <X size={20} />
            Quit ke Menu
          </button>
        </div>
      </div>
    </div>
  );
};

// src/components/game/GameOver.jsx

export const GameOver = ({ score, level, onRestart, onQuit }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-gray-900 to-gray-900 p-4">
      <div className="max-w-xl w-full text-center">
        <div className="mb-8 animate-fadeInUp">
          <div className="text-6xl mb-4">⏰</div>
          <h1 className="text-5xl font-bold text-white mb-2">Time's Up!</h1>
          <p className="text-xl text-gray-300">Level {level}</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <div className="text-gray-400 mb-2">Final Score</div>
            <div className="text-5xl font-bold text-white">{score}</div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-lg"
          >
            <RotateCcw size={24} />
            Coba Lagi
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-600"
          >
            Kembali ke Menu
          </button>
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

// src/components/game/Victory.jsx

export const Victory = ({ finalScore, completedLevels, onRestart, onQuit }) => {
  const totalStars = completedLevels.reduce((sum, level) => sum + level.stars, 0);
  const maxStars = completedLevels.length * 3;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-900 via-purple-900 to-gray-900 p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 animate-fadeInUp">
          <div className="text-8xl mb-4">👑</div>
          <h1 className="text-6xl font-bold text-white mb-2">Victory!</h1>
          <p className="text-2xl text-yellow-400 font-bold">
            Vocational 4.0 Master
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-gray-400 text-sm mb-2">Total Score</div>
              <div className="text-4xl font-bold text-yellow-400">{finalScore}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-2">Stars Collected</div>
              <div className="text-4xl font-bold text-yellow-400">{totalStars}/{maxStars} ⭐</div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <div className="text-gray-300 text-sm mb-3">Level Performance</div>
            <div className="grid grid-cols-5 gap-2">
              {completedLevels.map((level) => (
                <div key={level.level} className="bg-gray-700/50 rounded-lg p-2">
                  <div className="text-xs text-gray-400 mb-1">L{level.level}</div>
                  <div className="flex justify-center">
                    {[...Array(level.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onRestart}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-lg"
          >
            <RotateCcw size={24} />
            Main Lagi
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-600"
          >
            Kembali ke Menu
          </button>
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