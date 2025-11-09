// src/components/game/PauseModal.jsx

import React from 'react';
import { Play, RotateCcw, X, Home } from 'lucide-react';

export const PauseModal = ({ onResume, onRestart, onQuit }) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-gray-800 border-2 border-purple-500 rounded-2xl p-8 max-w-md w-full animate-scaleIn">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⏸️</div>
          <h2 className="text-3xl font-bold text-white mb-2">Game Paused</h2>
          <p className="text-gray-400">Ambil napas sejenak...</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={onResume}
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 border-2 border-green-500"
          >
            <Play size={20} />
            Lanjutkan
          </button>

          <button
            onClick={onRestart}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border-2 border-gray-600"
          >
            <RotateCcw size={20} />
            Restart Level
          </button>

          <button
            onClick={onQuit}
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border-2 border-red-500"
          >
            <Home size={20} />
            Kembali ke Menu
          </button>
        </div>
      </div>
    </div>
  );
};

// src/components/game/GameOver.jsx

export const GameOver = ({ score, level, onRestart, onQuit }) => {
  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-red-600/30 border-2 border-red-400 rounded-full">
              <span className="text-sm font-bold text-white">⏰ WAKTU HABIS</span>
            </div>
            <div className="text-6xl mb-4">😅</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Time's Up!</h1>
            <p className="text-xl text-gray-300">Level {level}</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-gray-400 text-sm mb-2">Final Score</div>
              <div className="text-5xl font-bold text-white mb-4">{score}</div>
              <p className="text-gray-300">
                Jangan menyerah! Coba lagi dan kelola waktu dengan lebih baik.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-white font-bold mb-3">💡 Tips:</h3>
              <ul className="text-sm text-gray-400 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Baca pertanyaan dengan cepat tapi teliti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Fokus pada task yang energy-nya lebih rendah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Jangan terlalu lama memikirkan satu soal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-lg border-2 border-purple-500"
            >
              <RotateCcw size={24} />
              Coba Lagi
            </button>

            <button
              onClick={onQuit}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-600 flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Kembali ke Menu
            </button>
          </div>
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
  const starPercentage = (totalStars / maxStars) * 100;

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-600/30 border-2 border-yellow-400 rounded-full">
              <span className="text-sm font-bold text-white">🎊 SELAMAT!</span>
            </div>
            <div className="text-8xl mb-4 animate-bounce">👑</div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Victory!</h1>
            <p className="text-2xl text-yellow-400 font-bold">
              Vocational 4.0 Master
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-gray-400 text-sm mb-2">Total Score</div>
                <div className="text-5xl font-bold text-yellow-400">{finalScore}</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
                <div className="text-gray-400 text-sm mb-2">Stars Collected</div>
                <div className="text-5xl font-bold text-yellow-400">{totalStars}/{maxStars}</div>
                <div className="mt-2">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-1000"
                      style={{ width: `${starPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Level Performance */}
            <div className="border-t-2 border-gray-700 pt-6">
              <h3 className="text-white font-bold mb-4">📊 Level Performance</h3>
              <div className="grid grid-cols-5 gap-3">
                {completedLevels.map((level) => (
                  <div 
                    key={level.level} 
                    className="bg-gray-700/50 border border-gray-600 rounded-xl p-3 hover:border-yellow-500 transition-all"
                  >
                    <div className="text-xs text-gray-400 mb-2">Level {level.level}</div>
                    <div className="flex justify-center gap-0.5 mb-2">
                      {[...Array(3)].map((_, i) => (
                        <span 
                          key={i} 
                          className={i < level.stars ? 'text-yellow-400' : 'text-gray-600'}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">{level.score} pts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievement Message */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 rounded-xl p-6 mb-8">
            <p className="text-white text-lg leading-relaxed">
              Selamat! Kamu telah menyelesaikan semua tantangan Industry 4.0! 
              Pengetahuan tentang Smart Manufacturing, Digital Twin, Robotics, Big Data Analytics, 
              dan Cybersecurity sudah kamu kuasai. Kamu siap menghadapi dunia Vokasi 4.0! 🚀
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-lg border-2 border-purple-500"
            >
              <RotateCcw size={24} />
              Main Lagi
            </button>

            <button
              onClick={onQuit}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-600 flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Kembali ke Menu
            </button>
          </div>
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};