// src/components/game/GameHUD.jsx

import React from 'react';
import { Trophy, Zap, Clock, Pause, X } from 'lucide-react';
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
    <div className="bg-gray-800/90 backdrop-blur-sm border-b-2 border-purple-500/30 py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left: Level & Progress */}
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 px-4 py-2 rounded-lg">
              <span className="text-white font-bold text-sm">LEVEL {level}</span>
            </div>
            <div className="text-gray-300 text-sm">
              Task {currentTaskIndex + 1} / {totalTasks}
            </div>
          </div>

          {/* Center: Stats */}
          <div className="flex items-center gap-6">
            {/* Score */}
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-400" size={20} />
              <div>
                <div className="text-xs text-gray-400">Score</div>
                <div className="text-white font-bold">{score}</div>
              </div>
            </div>

            {/* Energy Bar */}
            <div className="flex items-center gap-2">
              <Zap className="text-yellow-400" size={20} />
              <div className="w-32">
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
              <Clock className={timeColor} size={20} />
              <div>
                <div className="text-xs text-gray-400">Time</div>
                <div className={`font-bold font-mono ${timeColor}`}>
                  {formatTime(timeRemaining)}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onPause}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              title="Pause"
            >
              <Pause className="text-white" size={20} />
            </button>
            <button
              onClick={onQuit}
              className="p-2 bg-red-600 hover:bg-red-500 rounded-lg transition-colors"
              title="Quit Game"
            >
              <X className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHUD;