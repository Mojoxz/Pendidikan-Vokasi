// src/utils/gameUtils.js

export const calculateScore = (baseScore, timeBonus, energyBonus, perfectBonus) => {
  return baseScore + timeBonus + energyBonus + perfectBonus;
};

export const calculateTimeBonus = (timeRemaining, totalTime) => {
  const percentage = (timeRemaining / totalTime) * 100;
  if (percentage > 80) return 100;
  if (percentage > 60) return 75;
  if (percentage > 40) return 50;
  if (percentage > 20) return 25;
  return 0;
};

export const calculateEnergyBonus = (energy) => {
  if (energy >= 80) return 50;
  if (energy >= 60) return 30;
  if (energy >= 40) return 15;
  return 0;
};

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const checkSortingAnswer = (userOrder, correctOrder) => {
  if (userOrder.length !== correctOrder.length) return false;
  return userOrder.every((val, idx) => val === correctOrder[idx]);
};

export const checkMatchingAnswer = (userMatches, correctPairs) => {
  if (Object.keys(userMatches).length !== correctPairs.length) return false;
  
  return correctPairs.every((pair) => {
    return userMatches[pair.left] === pair.right;
  });
};

export const getRandomHint = (task) => {
  const hints = {
    'multiple-choice': [
      "Pikirkan tentang safety dan best practices",
      "Pertimbangkan solusi yang paling efisien",
      "Ingat prinsip preventive maintenance"
    ],
    'sorting': [
      "Pikirkan urutan logis dari awal hingga akhir",
      "Mulai dari persiapan hingga eksekusi",
      "Ikuti metodologi standar industri"
    ],
    'drag-match': [
      "Cocokkan berdasarkan fungsi utama",
      "Pikirkan aplikasi praktis di industri",
      "Perhatikan karakteristik teknologi"
    ]
  };
  
  const taskHints = hints[task.type] || [];
  return taskHints[Math.floor(Math.random() * taskHints.length)];
};

export const generateLeaderboardEntry = (playerName, score, level, time) => {
  return {
    id: Date.now(),
    playerName,
    score,
    level,
    time,
    timestamp: new Date().toISOString()
  };
};

export const sortLeaderboard = (entries) => {
  return [...entries].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.level !== a.level) return b.level - a.level;
    return a.time - b.time;
  });
};

export const getAchievementProgress = (gameState, achievements) => {
  return achievements.map(achievement => ({
    ...achievement,
    unlocked: achievement.condition(gameState)
  }));
};

export const saveGameState = (gameState) => {
  try {
    localStorage.setItem('vokasi_game_state', JSON.stringify(gameState));
    return true;
  } catch (error) {
    console.error('Failed to save game state:', error);
    return false;
  }
};

export const loadGameState = () => {
  try {
    const saved = localStorage.getItem('vokasi_game_state');
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load game state:', error);
    return null;
  }
};

export const clearGameState = () => {
  try {
    localStorage.removeItem('vokasi_game_state');
    return true;
  } catch (error) {
    console.error('Failed to clear game state:', error);
    return false;
  }
};