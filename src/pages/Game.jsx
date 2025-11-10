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
        <div className="min-h-screen bg-gray-900 pt-20 pb-20">
          <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12 text-white animate-fadeInUp">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-600/30 border-2 border-purple-400 rounded-full">
                <span className="text-sm font-bold text-white">🎮 Game Interaktif</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Industry 4.0 Challenge
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Uji kemampuanmu dalam menghadapi tantangan teknologi Vokasi 4.0
              </p>
            </div>

            <GameMenu
              onStartGame={startGame}
              onContinueGame={continueGame}
              hasSavedGame={hasSavedGame}
            />
          </div>

          {/* Custom Animations */}
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

    case 'playing':
      return (
        <GameContainer
          gameState={gameState}
          showFeedback={showFeedback}
          feedbackData={feedbackData}
          showPauseModal={false}
          onPause={pauseGame}
          onQuit={quitGame}
          onResume={resumeGame}
          onRestart={restartLevel}
          onSubmitAnswer={handleSubmitAnswer}
          onNextTask={nextTask}
        />
      );

    case 'paused':
      return (
        <GameContainer
          gameState={gameState}
          showFeedback={showFeedback}
          feedbackData={feedbackData}
          showPauseModal={true}
          onPause={pauseGame}
          onQuit={quitGame}
          onResume={resumeGame}
          onRestart={restartLevel}
          onSubmitAnswer={handleSubmitAnswer}
          onNextTask={nextTask}
        />
      );

    case 'levelComplete':
      return (
        <div className="min-h-screen bg-gray-900 pt-20 pb-20">
          <div className="container mx-auto px-4 py-8">
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
      );

    case 'gameOver':
      return (
        <div className="min-h-screen bg-gray-900 pt-20 pb-20">
          <div className="container mx-auto px-4 py-8">
            <GameOver
              score={gameState.score}
              level={gameState.currentLevel}
              onRestart={restartLevel}
              onQuit={quitGame}
            />
          </div>
        </div>
      );

    case 'victory':
      return (
        <div className="min-h-screen bg-gray-900 pt-20 pb-20">
          <div className="container mx-auto px-4 py-8">
            <Victory
              finalScore={gameState.score}
              completedLevels={gameState.completedLevels}
              onRestart={startGame}
              onQuit={quitGame}
            />
          </div>
        </div>
      );

    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <div className="text-gray-400">Loading game...</div>
          </div>
        </div>
      );
  }
};

export default Game;