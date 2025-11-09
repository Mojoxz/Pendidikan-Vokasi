// src/pages/Game.jsx

import React, { useEffect } from 'react';
import { useGame } from '../hooks/useGame';
import { gameLevels } from '../data/gameData';
import { loadGameState } from '../utils/gameUtils';
import GameMenu from '../components/game/GameMenu';
import GameContainer from '../components/game/GameContainer';
import LevelComplete from '../components/game/LevelComplete';
import { PauseModal, GameOver, Victory } from '../components/game/PauseModal';

const Game = () => {
  const {
    gameState,
    gameStatus,
    showFeedback,
    feedbackData,
    startGame,
    continueGame,
    pauseGame,
    resumeGame,
    submitAnswer,
    nextTask,
    nextLevel,
    quitGame,
    restartLevel
  } = useGame();

  const [hasSavedGame, setHasSavedGame] = React.useState(false);

  useEffect(() => {
    // Check for saved game on mount
    const savedGame = loadGameState();
    setHasSavedGame(!!savedGame);
  }, []);

  const handleSubmitAnswer = (answer) => {
    const currentLevel = gameLevels.find(l => l.id === gameState.currentLevel);
    const currentTask = currentLevel?.tasks[gameState.currentTaskIndex];
    
    if (currentTask) {
      submitAnswer(currentTask, answer);
    }
  };

  // Render based on game status
  switch (gameStatus) {
    case 'menu':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-full max-w-7xl">
                <GameMenu
                  onStartGame={startGame}
                  onContinueGame={continueGame}
                  hasSavedGame={hasSavedGame}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 'playing':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="w-full max-w-7xl mx-auto">
              <GameContainer
                gameState={gameState}
                showFeedback={showFeedback}
                feedbackData={feedbackData}
                onPause={pauseGame}
                onQuit={quitGame}
                onSubmitAnswer={handleSubmitAnswer}
                onNextTask={nextTask}
              />
            </div>
          </div>
        </div>
      );

    case 'paused':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="w-full max-w-7xl mx-auto">
              <GameContainer
                gameState={gameState}
                showFeedback={showFeedback}
                feedbackData={feedbackData}
                onPause={pauseGame}
                onQuit={quitGame}
                onSubmitAnswer={handleSubmitAnswer}
                onNextTask={nextTask}
              />
            </div>
          </div>
          
          <PauseModal
            onResume={resumeGame}
            onRestart={restartLevel}
            onQuit={quitGame}
          />
        </div>
      );

    case 'levelComplete':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-full max-w-7xl">
                <LevelComplete
                  levelTitle={feedbackData?.levelTitle || ''}
                  finalScore={feedbackData?.finalScore || gameState.score}
                  stars={feedbackData?.stars || 0}
                  timeBonus={feedbackData?.timeBonus || 0}
                  energyBonus={feedbackData?.energyBonus || 0}
                  perfectBonus={feedbackData?.perfectBonus || 0}
                  isPerfect={feedbackData?.isPerfect || false}
                  onNextLevel={nextLevel}
                  isLastLevel={gameState.currentLevel >= gameLevels.length}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 'gameOver':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-full max-w-7xl">
                <GameOver
                  score={gameState.score}
                  level={gameState.currentLevel}
                  onRestart={restartLevel}
                  onQuit={quitGame}
                />
              </div>
            </div>
          </div>
        </div>
      );

    case 'victory':
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="w-full max-w-7xl">
                <Victory
                  finalScore={gameState.score}
                  completedLevels={gameState.completedLevels}
                  onRestart={startGame}
                  onQuit={quitGame}
                />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="min-h-screen bg-gray-900 relative overflow-hidden">
          {/* Background Pattern - mirip dengan Home */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <div className="text-white text-2xl md:text-3xl lg:text-4xl mb-8">Loading...</div>
              {/* Logo placeholder dengan ukuran yang lebih besar */}
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl bg-gray-800 flex items-center justify-center shadow-2xl">
                <span className="text-purple-400 text-5xl md:text-6xl lg:text-8xl font-bold">LOGO</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Game;