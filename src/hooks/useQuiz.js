import { useState } from 'react';

export const useQuiz = (quizData) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [showMaterialPage, setShowMaterialPage] = useState(false);

  const handleAnswerClick = (selectedIndex) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(selectedIndex);
    setShowExplanation(true);
    
    const isCorrect = selectedIndex === quizData[currentQuestion].correct;
    
    setAnswers([...answers, {
      questionIndex: currentQuestion,
      question: quizData[currentQuestion].question,
      selected: selectedIndex,
      correct: quizData[currentQuestion].correct,
      isCorrect,
      material: quizData[currentQuestion].material
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    // Tampilkan halaman materi
    setShowMaterialPage(true);
  };

  const handleContinueFromMaterial = () => {
    setShowMaterialPage(false);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setShowMaterialPage(false);
  };

  return {
    currentQuestion,
    score,
    showScore,
    selectedAnswer,
    showExplanation,
    answers,
    showMaterialPage,
    handleAnswerClick,
    handleNextQuestion,
    handleContinueFromMaterial,
    resetQuiz
  };
};