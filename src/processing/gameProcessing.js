// src/processing/gameProcessing.js

import { gameConfig } from '../data/gameData';
import { 
  calculateScore, 
  calculateTimeBonus, 
  calculateEnergyBonus,
  checkSortingAnswer,
  checkMatchingAnswer 
} from '../utils/gameUtils';

export const processTaskAnswer = (task, userAnswer, gameState) => {
  let isCorrect = false;
  
  switch (task.type) {
    case 'multiple-choice':
      isCorrect = userAnswer === task.correctAnswer;
      break;
      
    case 'sorting':
      isCorrect = checkSortingAnswer(userAnswer, task.correctOrder);
      break;
      
    case 'drag-match':
      isCorrect = checkMatchingAnswer(userAnswer, task.pairs);
      break;
      
    default:
      isCorrect = false;
  }
  
  const scoreGained = isCorrect ? gameConfig.scorePerCorrectAnswer : 0;
  const energyCost = task.energy || gameConfig.energyCostPerAction;
  
  return {
    isCorrect,
    scoreGained,
    energyCost,
    newScore: gameState.score + scoreGained,
    newEnergy: Math.max(0, gameState.energy - energyCost)
  };
};

export const processLevelCompletion = (gameState, timeRemaining, mistakes) => {
  const isPerfect = mistakes === 0;
  const timeBonus = calculateTimeBonus(timeRemaining, gameConfig.timePerLevel);
  const energyBonus = calculateEnergyBonus(gameState.energy);
  const perfectBonus = isPerfect ? gameConfig.bonusScoreForPerfect : 0;
  
  const totalBonus = timeBonus + energyBonus + perfectBonus;
  const finalScore = gameState.score + totalBonus;
  
  return {
    finalScore,
    timeBonus,
    energyBonus,
    perfectBonus,
    isPerfect,
    totalBonus,
    nextLevel: gameState.currentLevel + 1,
    stars: calculateStars(mistakes, timeRemaining, gameConfig.timePerLevel)
  };
};

const calculateStars = (mistakes, timeRemaining, totalTime) => {
  if (mistakes === 0 && timeRemaining > totalTime * 0.5) return 3;
  if (mistakes <= 1 && timeRemaining > totalTime * 0.3) return 2;
  if (mistakes <= 2) return 1;
  return 0;
};

export const processEnergyRegen = (currentEnergy) => {
  const newEnergy = Math.min(
    currentEnergy + gameConfig.energyRegenPerTurn,
    gameConfig.initialEnergy
  );
  return newEnergy;
};

export const processPowerUpUsage = (powerUp, gameState) => {
  if (gameState.score < powerUp.cost) {
    return {
      success: false,
      message: 'Score tidak cukup untuk membeli power-up ini',
      gameState
    };
  }
  
  const newGameState = powerUp.effect({
    ...gameState,
    score: gameState.score - powerUp.cost
  });
  
  return {
    success: true,
    message: `${powerUp.name} activated!`,
    gameState: newGameState
  };
};

export const processAchievements = (gameState, previousState) => {
  const newAchievements = [];
  
  // Check for new level completion
  if (gameState.currentLevel > previousState.currentLevel) {
    if (gameState.currentLevel === 2) {
      newAchievements.push('first_level');
    }
    if (gameState.currentLevel > gameConfig.maxLevel) {
      newAchievements.push('game_master');
    }
  }
  
  // Check for perfect level
  if (gameState.perfectLevels > previousState.perfectLevels) {
    newAchievements.push('perfect_level');
  }
  
  // Check for energy master
  if (gameState.energyMaster > previousState.energyMaster) {
    newAchievements.push('energy_master');
  }
  
  // Check for speed run
  if (gameState.speedRuns > previousState.speedRuns) {
    newAchievements.push('speed_runner');
  }
  
  return {
    ...gameState,
    achievements: [...new Set([...gameState.achievements, ...newAchievements])]
  };
};

export const initializeGameState = () => {
  return {
    currentLevel: 1,
    score: gameConfig.initialScore,
    energy: gameConfig.initialEnergy,
    currentTaskIndex: 0,
    mistakes: 0,
    timeRemaining: gameConfig.timePerLevel,
    isPaused: false,
    perfectLevels: 0,
    energyMaster: 0,
    speedRuns: 0,
    achievements: [],
    hintAvailable: false,
    timeFreeze: 0,
    completedLevels: []
  };
};

export const validateGameState = (gameState) => {
  if (!gameState) return false;
  
  const required = [
    'currentLevel',
    'score',
    'energy',
    'currentTaskIndex',
    'mistakes',
    'timeRemaining'
  ];
  
  return required.every(key => key in gameState);
};