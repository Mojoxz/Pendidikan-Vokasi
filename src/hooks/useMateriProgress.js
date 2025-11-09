import { useState, useEffect } from 'react';

export const useMateriProgress = () => {
  const [completedMateris, setCompletedMateris] = useState([]);

  // Load progress from memory on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('materiProgress');
    if (saved) {
      try {
        setCompletedMateris(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, []);

  // Save progress to memory whenever it changes
  useEffect(() => {
    sessionStorage.setItem('materiProgress', JSON.stringify(completedMateris));
  }, [completedMateris]);

  const markAsCompleted = (materiId) => {
    if (!completedMateris.includes(materiId)) {
      setCompletedMateris([...completedMateris, materiId]);
    }
  };

  const isCompleted = (materiId) => {
    return completedMateris.includes(materiId);
  };

  const getTotalProgress = (totalMateris) => {
    return Math.round((completedMateris.length / totalMateris) * 100);
  };

  const resetProgress = () => {
    setCompletedMateris([]);
    sessionStorage.removeItem('materiProgress');
  };

  return {
    completedMateris,
    markAsCompleted,
    isCompleted,
    getTotalProgress,
    resetProgress
  };
};