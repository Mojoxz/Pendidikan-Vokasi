// src/components/game/GameContainer.jsx

import React from 'react';
import { gameLevels } from '../../data/gameData';
import GameHUD from './GameHUD';
import MultipleChoiceTask from './tasks/MultipleChoiceTask';
import SortingTask from './tasks/SortingTask';
import DragMatchTask from './tasks/DragMatchTask';
import TaskFeedback from './TaskFeedback';

const GameContainer = ({ 
  gameState, 
  showFeedback,
  feedbackData,
  onPause, 
  onQuit,
  onSubmitAnswer,
  onNextTask
}) => {
  const currentLevel = gameLevels.find(l => l.id === gameState.currentLevel);
  const currentTask = currentLevel?.tasks[gameState.currentTaskIndex];

  if (!currentLevel || !currentTask) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div>Level or Task not found</div>
      </div>
    );
  }

  const renderTask = () => {
    const taskProps = {
      task: currentTask,
      onSubmit: onSubmitAnswer,
      disabled: showFeedback
    };

    switch (currentTask.type) {
      case 'multiple-choice':
        return <MultipleChoiceTask {...taskProps} />;
      case 'sorting':
        return <SortingTask {...taskProps} />;
      case 'drag-match':
        return <DragMatchTask {...taskProps} />;
      default:
        return <div className="text-white">Unknown task type</div>;
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentLevel.bgGradient}`}>
      {/* HUD */}
      <GameHUD
        score={gameState.score}
        energy={gameState.energy}
        timeRemaining={gameState.timeRemaining}
        level={gameState.currentLevel}
        currentTaskIndex={gameState.currentTaskIndex}
        totalTasks={currentLevel.tasks.length}
        onPause={onPause}
        onQuit={onQuit}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Level Info */}
          <div className="text-center mb-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm border-2 border-white/20 rounded-full px-6 py-3 mb-4">
              <span className="text-4xl">{currentLevel.icon}</span>
              <div className="text-left">
                <div className="text-sm text-gray-300">Level {currentLevel.id}</div>
                <div className="text-white font-bold">{currentLevel.title}</div>
              </div>
            </div>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              {currentLevel.description}
            </p>
          </div>

          {/* Task Container */}
          <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-400 font-bold">
                  Task {gameState.currentTaskIndex + 1} of {currentLevel.tasks.length}
                </span>
                <span className="text-gray-400 text-sm">
                  Energy Cost: {currentTask.energy || 10}⚡
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300"
                  style={{ 
                    width: `${((gameState.currentTaskIndex + 1) / currentLevel.tasks.length) * 100}%` 
                  }}
                />
              </div>
            </div>

            {renderTask()}
          </div>
        </div>
      </div>

      {/* Task Feedback Modal */}
      {showFeedback && feedbackData && (
        <TaskFeedback
          isCorrect={feedbackData.isCorrect}
          explanation={feedbackData.explanation}
          scoreGained={feedbackData.scoreGained}
          onNext={onNextTask}
        />
      )}

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

export default GameContainer;