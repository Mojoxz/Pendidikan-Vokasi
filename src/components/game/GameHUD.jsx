// src/components/game/GameHUD.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Zap, Clock, Pause, X, Home } from 'lucide-react';
import { formatTime } from '../../utils/gameUtils';

const GameHUD = ({ 
  score, 
  energy, 
  timeRemaining, 
  level, 
  onPause, 
  onQuit,
  currentTaskIndex,
  totalTasks 
}) => {
  const energyPercentage = energy;
  const energyColor = energy > 60 ? 'bg-green-500' : energy > 30 ? 'bg-yellow-500' : 'bg-red-500';
  const timeColor = timeRemaining > 60 ? 'text-green-400' : timeRemaining > 30 ? 'text-yellow-400' : 'text-red-400';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg">
      {/* Navbar Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-8 h-8 bg-purple-600 rounded-full overflow-hidden group-hover:rotate-12 transition-transform flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-cc463c95eb17?w=40&h=40&fit=crop&crop=center" 
                    alt="Logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://picsum.photos/seed/vokasi40/40/40.jpg";
                    }}
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-white">Pendidikan Vokasi Era 4.0</h1>
              </div>
            </Link>
            
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="px-3 py-1.5 rounded-full font-medium text-sm text-gray-300 hover:text-white transition-all flex items-center gap-1"
              >
                <Home size={16} />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link
                to="/about"
                className="px-3 py-1.5 rounded-full font-medium text-sm text-gray-300 hover:text-white transition-all hidden md:inline-block"
              >
                About
              </Link>
              <Link
                to="/interactive"
                className="px-3 py-1.5 rounded-full font-medium text-sm text-gray-300 hover:text-white transition-all hidden md:inline-block"
              >
                Interaktif
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Game HUD Section */}
      <div className="border-b-2 border-purple-500/30 bg-gray-800/90">
        <div className="container mx-auto px-4 py-2">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-4">
            {/* Left: Level & Progress */}
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 px-3 py-1.5 rounded-lg shadow-md">
                <span className="text-white font-bold text-sm">LEVEL {level}</span>
              </div>
              <div className="text-gray-300 text-sm">
                Task {currentTaskIndex + 1} / {totalTasks}
              </div>
            </div>

            {/* Center: Stats */}
            <div className="flex items-center gap-4">
              {/* Score */}
              <div className="flex items-center gap-2">
                <Trophy className="text-yellow-400" size={18} />
                <div>
                  <div className="text-xs text-gray-400">Score</div>
                  <div className="text-white font-bold text-sm">{score}</div>
                </div>
              </div>

              {/* Energy Bar */}
              <div className="flex items-center gap-2">
                <Zap className="text-yellow-400" size={18} />
                <div className="w-28">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Energy</span>
                    <span>{energy}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${energyColor} transition-all duration-300`}
                      style={{ width: `${energyPercentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-2">
                <Clock className={timeColor} size={18} />
                <div>
                  <div className="text-xs text-gray-400">Time</div>
                  <div className={`font-bold font-mono text-sm ${timeColor}`}>
                    {formatTime(timeRemaining)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPause}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all hover:scale-105 shadow-md"
                title="Pause"
              >
                <Pause className="text-white" size={20} />
              </button>
              <button
                onClick={onQuit}
                className="p-2 bg-red-600 hover:bg-red-500 rounded-lg transition-all hover:scale-105 shadow-md"
                title="Quit Game"
              >
                <X className="text-white" size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-2">
            {/* Row 1: Level, Score, Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-purple-600 px-2 py-1 rounded-lg">
                  <span className="text-white font-bold text-xs">LVL {level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Trophy className="text-yellow-400" size={14} />
                  <span className="text-white font-bold text-sm">{score}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={onPause}
                  className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all active:scale-95"
                  title="Pause"
                >
                  <Pause className="text-white" size={18} />
                </button>
                <button
                  onClick={onQuit}
                  className="p-1.5 bg-red-600 hover:bg-red-500 rounded-lg transition-all active:scale-95"
                  title="Quit"
                >
                  <X className="text-white" size={18} />
                </button>
              </div>
            </div>

            {/* Row 2: Energy, Timer */}
            <div className="flex items-center justify-between gap-3">
              {/* Energy */}
              <div className="flex items-center gap-2 flex-1">
                <Zap className="text-yellow-400" size={14} />
                <div className="flex-1">
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${energyColor} transition-all duration-300`}
                      style={{ width: `${energyPercentage}%` }}
                    />
                  </div>
                </div>
                <span className="text-gray-400 text-xs">{energy}%</span>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-1">
                <Clock className={timeColor} size={14} />
                <span className={`font-bold font-mono text-xs ${timeColor}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>

              {/* Progress */}
              <div className="text-gray-400 text-xs whitespace-nowrap">
                {currentTaskIndex + 1}/{totalTasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHUD;