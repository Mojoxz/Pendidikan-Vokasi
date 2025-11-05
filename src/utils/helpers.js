export const formatScore = (score, total) => {
  const percentage = (score / total) * 100;
  return {
    score,
    total,
    percentage: percentage.toFixed(1),
    grade: getGrade(percentage)
  };
};

export const getGrade = (percentage) => {
  if (percentage >= 90) return { letter: 'A', label: 'Sangat Baik', color: 'text-green-600' };
  if (percentage >= 80) return { letter: 'B', label: 'Baik', color: 'text-blue-600' };
  if (percentage >= 70) return { letter: 'C', label: 'Cukup', color: 'text-yellow-600' };
  if (percentage >= 60) return { letter: 'D', label: 'Kurang', color: 'text-orange-600' };
  return { letter: 'E', label: 'Perlu Belajar Lagi', color: 'text-red-600' };
};

export const getMotivationalMessage = (percentage) => {
  if (percentage >= 90) return "Luar biasa! Kamu sudah sangat memahami pendidikan vokasi! 🌟";
  if (percentage >= 80) return "Bagus sekali! Pemahaman kamu sangat baik! 👏";
  if (percentage >= 70) return "Cukup baik! Terus tingkatkan pemahamanmu! 💪";
  if (percentage >= 60) return "Lumayan! Masih ada ruang untuk berkembang! 📚";
  return "Jangan menyerah! Belajar lagi dan kamu pasti bisa! 🚀";
};