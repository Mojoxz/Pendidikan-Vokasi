import { useState } from 'react';

export const useMateriProgress = () => {
  const [completedMateris, setCompletedMateris] = useState([]);

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
  };

  return {
    completedMateris,
    markAsCompleted,
    isCompleted,
    getTotalProgress,
    resetProgress
  };
};