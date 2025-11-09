// src/hooks/useGame.js

import { useState, useEffect, useCallback } from 'react';
import { gameLevels, gameConfig } from '../data/gameData';
import {
  initializeGameState,
  processTaskAnswer,
  processLevelCompletion,
  processEnergyRegen,
  processPowerUpUsage,
  processAchievements
} from '../processing/gameProcessing';
import { saveGameState, loadGameState } from '../utils/gameUtils';

export const useGame = () => {
  const [gameState, setGameState] = useState(initializeGameState());
  const [gameStatus, setGameStatus] = useState('menu'); // menu, playing, paused, levelComplete, gameOver, victory
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackData, setFeedbackData] = useState(null);

  // Timer effect
  useEffect(() => {
    if (gameStatus !== 'playing' || gameState.isPaused) return;

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeFreeze > 0) {
          return { ...prev, timeFreeze: prev.timeFreeze - 1 };
        }
        
        const newTime = prev.timeRemaining - 1;
        
        if (newTime <= 0) {
          setGameStatus('gameOver');
          return { ...prev, timeRemaining: 0 };
        }
        
        return { ...prev, timeRemaining: newTime };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStatus, gameState.isPaused, gameState.timeFreeze]);

  // Auto-save effect
  useEffect(() => {
    if (gameStatus === 'playing') {
      saveGameState(gameState);
    }
  }, [gameState, gameStatus]);

  const startGame = useCallback(() => {
    setGameState(initializeGameState());
    setGameStatus('playing');
    setShowFeedback(false);
  }, []);

  const continueGame = useCallback(() => {
    const saved = loadGameState();
    if (saved) {
      setGameState(saved);
      setGameStatus('playing');
    } else {
      startGame();
    }
  }, [startGame]);

  const pauseGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: true }));
    setGameStatus('paused');
  }, []);

  const resumeGame = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: false }));
    setGameStatus('playing');
  }, []);

  const submitAnswer = useCallback((task, userAnswer) => {
    const previousState = { ...gameState };
    const result = processTaskAnswer(task, userAnswer, gameState);
    
    setFeedbackData({
      isCorrect: result.isCorrect,
      explanation: task.explanation,
      scoreGained: result.scoreGained
    });
    setShowFeedback(true);

    const newGameState = {
      ...gameState,
      score: result.newScore,
      energy: result.newEnergy,
      mistakes: result.isCorrect ? gameState.mistakes : gameState.mistakes + 1
    };

    setGameState(newGameState);

    // Process achievements
    const stateWithAchievements = processAchievements(newGameState, previousState);
    setGameState(stateWithAchievements);

    // Auto close feedback after 3 seconds
    setTimeout(() => {
      setShowFeedback(false);
    }, 3000);
  }, [gameState]);

  const nextTask = useCallback(() => {
    const currentLevel = gameLevels.find(l => l.id === gameState.currentLevel);
    const nextTaskIndex = gameState.currentTaskIndex + 1;

    if (nextTaskIndex >= currentLevel.tasks.length) {
      // Level complete
      const completion = processLevelCompletion(
        gameState,
        gameState.timeRemaining,
        gameState.mistakes
      );

      setGameState(prev => ({
        ...prev,
        score: completion.finalScore,
        completedLevels: [...prev.completedLevels, {
          level: gameState.currentLevel,
          stars: completion.stars,
          score: completion.finalScore
        }],
        perfectLevels: completion.isPerfect ? prev.perfectLevels + 1 : prev.perfectLevels,
        energyMaster: gameState.energy >= 80 ? prev.energyMaster + 1 : prev.energyMaster,
        speedRuns: gameState.timeRemaining > gameConfig.timePerLevel * 0.6 ? prev.speedRuns + 1 : prev.speedRuns
      }));

      setFeedbackData({
        ...completion,
        levelTitle: currentLevel.title
      });
      setGameStatus('levelComplete');
    } else {
      // Next task
      setGameState(prev => ({
        ...prev,
        currentTaskIndex: nextTaskIndex,
        energy: processEnergyRegen(prev.energy)
      }));
      setShowFeedback(false);
    }
  }, [gameState]);

  const nextLevel = useCallback(() => {
    const nextLevelId = gameState.currentLevel + 1;
    
    if (nextLevelId > gameLevels.length) {
      setGameStatus('victory');
      return;
    }

    setGameState(prev => ({
      ...prev,
      currentLevel: nextLevelId,
      currentTaskIndex: 0,
      mistakes: 0,
      timeRemaining: gameConfig.timePerLevel,
      energy: gameConfig.initialEnergy
    }));
    setGameStatus('playing');
    setShowFeedback(false);
  }, [gameState]);

  const usePowerUp = useCallback((powerUp) => {
    const result = processPowerUpUsage(powerUp, gameState);
    
    if (result.success) {
      setGameState(result.gameState);
    }
    
    return result;
  }, [gameState]);

  const quitGame = useCallback(() => {
    setGameStatus('menu');
    setShowFeedback(false);
  }, []);

  const restartLevel = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      currentTaskIndex: 0,
      mistakes: 0,
      timeRemaining: gameConfig.timePerLevel,
      energy: gameConfig.initialEnergy
    }));
    setGameStatus('playing');
    setShowFeedback(false);
  }, []);

  return {
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
    usePowerUp,
    quitGame,
    restartLevel
  };
};