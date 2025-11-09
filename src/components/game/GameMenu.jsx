// src/components/game/GameMenu.jsx

import React from 'react';
import { Play, RotateCcw, Trophy, BookOpen, Zap, Target, Clock } from 'lucide-react';
import { gameLevels } from '../../data/gameData';

const GameMenu = ({ onStartGame, onContinueGame, hasSavedGame }) => {
  return (
    <div className="max-w-6xl mx-auto animate-fadeInUp">
      {/* Game Description Card */}
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-2 border-purple-500/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl md:text-7xl">🎮</div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-3">
              Selamat Datang di Industry 4.0 Challenge!
            </h2>
            <p className="text-gray-200 leading-relaxed">
              Game interaktif yang menguji pengetahuan dan kemampuan problem-solving kamu dalam menghadapi 
              berbagai tantangan teknologi Industry 4.0. Selesaikan 5 level dengan berbagai tipe misi dan raih 
              skor tertinggi!
            </p>
          </div>
        </div>
      </div>

      {/* Game Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-xl p-5 text-center hover:border-purple-500 transition-all">
          <div className="text-4xl mb-2">🏭</div>
          <div className="text-2xl font-bold text-white mb-1">{gameLevels.length}</div>
          <div className="text-sm text-gray-400">Level Tantangan</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-blue-500/30 rounded-xl p-5 text-center hover:border-blue-500 transition-all">
          <div className="text-4xl mb-2">⚡</div>
          <div className="text-2xl font-bold text-white mb-1">100</div>
          <div className="text-sm text-gray-400">Energy System</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-yellow-500/30 rounded-xl p-5 text-center hover:border-yellow-500 transition-all">
          <div className="text-4xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-white mb-1">1-3</div>
          <div className="text-sm text-gray-400">Star Rating</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-5 text-center hover:border-green-500 transition-all">
          <div className="text-4xl mb-2">🏆</div>
          <div className="text-2xl font-bold text-white mb-1">5+</div>
          <div className="text-sm text-gray-400">Achievements</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {hasSavedGame && (
          <button
            onClick={onContinueGame}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg border-2 border-green-500"
          >
            <RotateCcw size={24} />
            <div className="text-left">
              <div className="text-sm opacity-80">Continue</div>
              <div>Lanjutkan Game</div>
            </div>
          </button>
        )}
        
        <button
          onClick={onStartGame}
          className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 text-lg border-2 border-purple-500 ${
            hasSavedGame ? '' : 'md:col-span-2'
          }`}
        >
          <Play size={24} />
          <div className="text-left">
            <div className="text-sm opacity-80">Start</div>
            <div>{hasSavedGame ? 'Game Baru' : 'Mulai Bermain'}</div>
          </div>
        </button>
      </div>

      {/* Level Preview */}
      <div className="bg-gray-800/30 border-2 border-gray-700 rounded-2xl p-6 mb-8">
        <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
          <Target size={24} className="text-purple-400" />
          5 Level Tantangan
        </h3>
        <div className="grid md:grid-cols-5 gap-3">
          {gameLevels.map((level) => (
            <div 
              key={level.id}
              className="bg-gray-700/50 rounded-xl p-4 text-center hover:bg-gray-700 transition-all"
            >
              <div className="text-3xl mb-2">{level.icon}</div>
              <div className="text-xs text-gray-400 mb-1">Level {level.id}</div>
              <div className="text-sm text-white font-bold">{level.title}</div>
              <div className="text-xs text-gray-500 mt-2">{level.tasks.length} Tasks</div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Features */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Game Modes */}
        <div className="bg-gray-800/30 border-2 border-gray-700 rounded-xl p-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-400" />
            Tipe Misi
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">📝</span>
              <div>
                <div className="font-bold text-white">Multiple Choice</div>
                <div className="text-gray-400">Pilih jawaban yang paling tepat</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">🔄</span>
              <div>
                <div className="font-bold text-white">Sorting Task</div>
                <div className="text-gray-400">Urutkan item dengan benar</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">🔗</span>
              <div>
                <div className="font-bold text-white">Drag & Match</div>
                <div className="text-gray-400">Pasangkan item yang sesuai</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Scoring System */}
        <div className="bg-gray-800/30 border-2 border-gray-700 rounded-xl p-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-yellow-400" />
            Sistem Scoring
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-yellow-400" />
                <span>Jawaban Benar</span>
              </div>
              <span className="text-green-400 font-bold">+100</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span>Time Bonus</span>
              </div>
              <span className="text-green-400 font-bold">+0-100</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-yellow-400" />
                <span>Energy Bonus</span>
              </div>
              <span className="text-green-400 font-bold">+0-50</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-purple-400" />
                <span>Perfect Level</span>
              </div>
              <span className="text-green-400 font-bold">+200</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 bg-blue-900/20 border-2 border-blue-500/30 rounded-xl p-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
          💡 Tips Bermain
        </h3>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Kelola energy dengan bijak - setiap task mengkonsumsi energy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Selesaikan level dengan cepat untuk mendapat time bonus</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Baca penjelasan setelah menjawab untuk belajar lebih dalam</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 mt-1">•</span>
            <span>Raih 3 bintang di setiap level untuk performa maksimal</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GameMenu;