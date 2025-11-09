import React, { useState } from 'react';
import { Target, Brain, BookOpen } from 'lucide-react';
import QuizQuestion from '../components/QuizQuestion';
import MaterialPage from '../components/MaterialPage';
import QuizResults from '../components/QuizResults';
import CareerCard from '../components/CareerCard';
import CareerDetailModal from '../components/CareerDetailModal';
import MateriLandingPage from '../components/MateriLandingPage';
import MateriMenu from '../components/MateriMenu';
import MateriContent from '../components/MateriContent';
import MateriCompletionModal from '../components/MateriCompletionModal';
import FinalConclusionModal from '../components/FinalConclusionModal';
import { useQuiz } from '../hooks/useQuiz';
import { useMateriProgress } from '../hooks/useMateriProgress';
import { quizData } from '../data/quizData';
import { careerPaths } from '../data/careerData';
import { materiData } from '../data/materiData';

const Interactive = () => {
  const [activeTab, setActiveTab] = useState('materi');
  const [selectedCareer, setSelectedCareer] = useState(null);
  
  // Materi navigation state
  const [selectedMateriId, setSelectedMateriId] = useState(null);
  const [materiView, setMateriView] = useState('landing'); // 'landing', 'menu', 'content', or 'completion'
  const [showFinalConclusion, setShowFinalConclusion] = useState(false);

  // Materi progress hook
  const { completedMateris, markAsCompleted, getTotalProgress, resetProgress } = useMateriProgress();

  // Quiz Logic
  const {
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
  } = useQuiz(quizData);

  // Handlers for Materi Navigation
  const handleStartLearning = () => {
    setMateriView('menu');
  };

  const handleSelectMateri = (materiId) => {
    setSelectedMateriId(materiId);
    setMateriView('content');
  };

  const handleBackToMateriMenu = () => {
    setMateriView('menu');
    setSelectedMateriId(null);
  };

  const handleMateriComplete = (materiId) => {
    markAsCompleted(materiId);
    setMateriView('completion');
  };

  const handleNextMateri = () => {
    const currentIndex = materiData.findIndex(m => m.id === selectedMateriId);
    if (currentIndex < materiData.length - 1) {
      const nextMateri = materiData[currentIndex + 1];
      setSelectedMateriId(nextMateri.id);
      setMateriView('content');
    } else {
      // Last materi, go back to menu
      handleBackToMateriMenu();
    }
  };

  const handleCompletionBackToMenu = () => {
    const allCompleted = completedMateris.length >= materiData.length || 
                        (completedMateris.length === materiData.length - 1 && 
                         !completedMateris.includes(selectedMateriId));
    
    setMateriView('menu');
    setSelectedMateriId(null);
    
    // Check if all materis completed to show final conclusion
    if (allCompleted) {
      setTimeout(() => {
        setShowFinalConclusion(true);
      }, 500);
    }
  };

  const handleCloseFinalConclusion = () => {
    setShowFinalConclusion(false);
  };

  const handleRestartAllMateris = () => {
    resetProgress();
    setShowFinalConclusion(false);
    setMateriView('landing');
    setSelectedMateriId(null);
  };

  // Get selected materi data
  const selectedMateri = selectedMateriId 
    ? materiData.find(m => m.id === selectedMateriId)
    : null;

  // Quiz Section Component
  const QuizSection = () => {
    // Show Results
    if (showScore) {
      return (
        <QuizResults 
          score={score}
          total={quizData.length}
          answers={answers}
          quizData={quizData}
          onReset={resetQuiz}
        />
      );
    }

    // Show Material Page
    if (showMaterialPage) {
      const lastAnswer = answers[answers.length - 1];
      return (
        <MaterialPage
          material={quizData[currentQuestion].material}
          questionNumber={currentQuestion + 1}
          isCorrect={lastAnswer.isCorrect}
          onContinue={handleContinueFromMaterial}
        />
      );
    }

    // Show Question
    return (
      <QuizQuestion
        question={quizData[currentQuestion]}
        currentIndex={currentQuestion}
        total={quizData.length}
        score={score}
        selectedAnswer={selectedAnswer}
        showExplanation={showExplanation}
        onAnswerClick={handleAnswerClick}
        onNext={handleNextQuestion}
      />
    );
  };

  // Career Section Component
  const CareerSection = () => {
    return (
      <div className="max-w-6xl mx-auto animate-fadeInUp">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Eksplorasi Jalur Karier Vokasi
          </h2>
          <p className="text-xl text-gray-200 mb-2">
            Klik pada kartu untuk melihat detail setiap bidang keahlian
          </p>
          <p className="text-sm text-blue-300">
            ✨ Dilengkapi dengan link referensi lowongan pekerjaan terkini
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((career) => (
            <CareerCard
              key={career.id}
              career={career}
              onClick={() => setSelectedCareer(career)}
            />
          ))}
        </div>

        {/* Career Detail Modal */}
        <CareerDetailModal
          career={selectedCareer}
          onClose={() => setSelectedCareer(null)}
        />
      </div>
    );
  };

  // Materi Section Component
  const MateriSection = () => {
    // Show Landing Page
    if (materiView === 'landing') {
      return (
        <MateriLandingPage
          onStartLearning={handleStartLearning}
        />
      );
    }

    // Show Completion Modal
    if (materiView === 'completion' && selectedMateri) {
      const currentIndex = materiData.findIndex(m => m.id === selectedMateriId);
      const hasNextMateri = currentIndex < materiData.length - 1;
      
      return (
        <MateriCompletionModal
          materi={selectedMateri}
          onBackToMenu={handleCompletionBackToMenu}
          onNextMateri={hasNextMateri ? handleNextMateri : null}
        />
      );
    }

    // Show Materi Content
    if (materiView === 'content' && selectedMateri) {
      return (
        <MateriContent
          materi={selectedMateri}
          onBackToMenu={handleBackToMateriMenu}
          onComplete={handleMateriComplete}
        />
      );
    }

    // Show Materi Menu (default)
    return (
      <MateriMenu
        onSelectMateri={handleSelectMateri}
        totalProgress={getTotalProgress(materiData.length)}
        completedMateris={completedMateris}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header - Only show when in menu view and not in materi landing/content */}
        {materiView === 'menu' && (
          <>
            <div className="text-center mb-12 text-white animate-fadeInUp">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-600/30 border-2 border-purple-400 rounded-full">
                <span className="text-sm font-bold text-white">🎮 Media Interaktif</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Belajar Sambil Bermain
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Uji pengetahuanmu, pelajari materi, dan jelajahi berbagai jalur karier
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('materi')}
                className={`px-6 py-3 rounded-xl font-bold text-base md:text-lg transition-all ${
                  activeTab === 'materi'
                    ? 'bg-purple-600 text-white shadow-xl scale-105 border-2 border-purple-400'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600'
                }`}
              >
                <BookOpen className="inline mr-2" size={20} />
                Materi Pembelajaran
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-6 py-3 rounded-xl font-bold text-base md:text-lg transition-all ${
                  activeTab === 'quiz'
                    ? 'bg-purple-600 text-white shadow-xl scale-105 border-2 border-purple-400'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600'
                }`}
              >
                <Target className="inline mr-2" size={20} />
                Kuis Edukatif
              </button>
              <button
                onClick={() => setActiveTab('career')}
                className={`px-6 py-3 rounded-xl font-bold text-base md:text-lg transition-all ${
                  activeTab === 'career'
                    ? 'bg-purple-600 text-white shadow-xl scale-105 border-2 border-purple-400'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600'
                }`}
              >
                <Brain className="inline mr-2" size={20} />
                Eksplorasi Karier
              </button>
            </div>
          </>
        )}

        {/* Content */}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'career' && <CareerSection />}
      </div>

      {/* Final Conclusion Modal */}
      {showFinalConclusion && (
        <FinalConclusionModal
          onClose={handleCloseFinalConclusion}
          onRestart={handleRestartAllMateris}
        />
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Interactive;