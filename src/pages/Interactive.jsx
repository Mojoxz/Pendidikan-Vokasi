import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy, Target, Brain } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useQuizLogic } from '../hooks/useQuizLogic';
import { quizData, careerPaths } from '../processing/quizData';
import { formatScore, getMotivationalMessage } from '../utils/helpers';

const Interactive = () => {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' or 'career'
  const {
    currentQuestion,
    score,
    showScore,
    selectedAnswer,
    showExplanation,
    answers,
    handleAnswerClick,
    handleNextQuestion,
    resetQuiz
  } = useQuizLogic(quizData);

  const [selectedCareer, setSelectedCareer] = useState(null);

  // Quiz Component
  const QuizSection = () => {
    if (showScore) {
      const result = formatScore(score, quizData.length);
      
      return (
        <div className="max-w-3xl mx-auto animate-fadeInUp">
          <Card className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <Trophy className="mx-auto text-yellow-500 mb-4" size={80} />
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Kuis Selesai!</h2>
              <p className="text-gray-600">Berikut adalah hasil kamu:</p>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mb-6">
              <div className="text-6xl font-bold mb-2">{result.percentage}%</div>
              <div className="text-2xl font-semibold mb-4">
                Nilai: {result.grade.letter} - {result.grade.label}
              </div>
              <div className="text-lg">
                Kamu menjawab benar {score} dari {quizData.length} pertanyaan
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-700 font-semibold">
                {getMotivationalMessage(parseFloat(result.percentage))}
              </p>
            </div>

            {/* Review Answers */}
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Review Jawaban:</h3>
              <div className="space-y-4">
                {answers.map((answer, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-2 ${
                      answer.isCorrect 
                        ? 'bg-green-50 border-green-300' 
                        : 'bg-red-50 border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {answer.isCorrect ? (
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                      ) : (
                        <XCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                      )}
                      <div className="flex-grow">
                        <div className="font-semibold text-gray-800 mb-1">
                          Pertanyaan {index + 1}: {answer.question}
                        </div>
                        <div className="text-sm text-gray-600">
                          {answer.isCorrect ? (
                            <span className="text-green-700">✓ Jawaban kamu benar!</span>
                          ) : (
                            <span className="text-red-700">
                              ✗ Jawaban yang benar: {quizData[index].options[answer.correct]}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="primary" onClick={resetQuiz} className="w-full md:w-auto">
              <RefreshCw className="inline mr-2" size={20} />
              Coba Lagi
            </Button>
          </Card>
        </div>
      );
    }

    const question = quizData[currentQuestion];

    return (
      <div className="max-w-3xl mx-auto animate-fadeInUp">
        <Card className="p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Pertanyaan {currentQuestion + 1} dari {quizData.length}
              </span>
              <span className="text-sm font-semibold text-primary">
                Skor: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                {currentQuestion + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex-grow">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                
                let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium ";
                
                if (selectedAnswer === null) {
                  buttonClass += "border-gray-300 hover:border-primary hover:bg-blue-50 cursor-pointer";
                } else {
                  if (isSelected) {
                    buttonClass += isCorrect 
                      ? "border-green-500 bg-green-50 text-green-800" 
                      : "border-red-500 bg-red-50 text-red-800";
                  } else if (isCorrect && showExplanation) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800";
                  } else {
                    buttonClass += "border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                        selectedAnswer === null 
                          ? "bg-gray-200 text-gray-700"
                          : isSelected
                            ? isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            : isCorrect && showExplanation
                              ? "bg-green-500 text-white"
                              : "bg-gray-300 text-gray-600"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                      {showExplanation && isCorrect && (
                        <CheckCircle className="ml-auto text-green-500" size={24} />
                      )}
                      {showExplanation && isSelected && !isCorrect && (
                        <XCircle className="ml-auto text-red-500" size={24} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mb-6 p-6 rounded-xl ${
              selectedAnswer === question.correct 
                ? 'bg-green-50 border-2 border-green-300' 
                : 'bg-blue-50 border-2 border-blue-300'
            }`}>
              <div className="flex items-start gap-3">
                <Brain className={selectedAnswer === question.correct ? 'text-green-600' : 'text-blue-600'} size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Penjelasan:</h4>
                  <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <Button 
              variant="primary" 
              onClick={handleNextQuestion}
              className="w-full"
            >
              {currentQuestion < quizData.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil'} →
            </Button>
          )}
        </Card>
      </div>
    );
  };

  // Career Path Explorer Component
  const CareerSection = () => {
    return (
      <div className="max-w-6xl mx-auto animate-fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Eksplorasi Jalur Karier Vokasi</h2>
          <p className="text-xl text-gray-600">
            Klik pada kartu untuk melihat detail setiap bidang keahlian
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careerPaths.map((career) => (
            <Card 
              key={career.id}
              className="cursor-pointer overflow-hidden group"
              onClick={() => setSelectedCareer(career)}
            >
              <div className={`h-32 bg-gradient-to-br ${career.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
                {career.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{career.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{career.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className={`px-3 py-1 rounded-full font-semibold ${
                    career.demand === 'Sangat Tinggi' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {career.demand}
                  </span>
                  <span className="text-primary font-bold">{career.salary}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Career Detail Modal */}
        {selectedCareer && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCareer(null)}
          >
            <Card 
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-40 bg-gradient-to-br ${selectedCareer.color} flex items-center justify-center text-8xl`}>
                {selectedCareer.icon}
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedCareer.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedCareer.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Gaji Rata-rata</div>
                    <div className="text-2xl font-bold text-primary">{selectedCareer.salary}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Permintaan Industri</div>
                    <div className="text-2xl font-bold text-green-600">{selectedCareer.demand}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Keterampilan yang Dibutuhkan:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="primary" 
                  onClick={() => setSelectedCareer(null)}
                  className="w-full"
                >
                  Tutup
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen pt-20 pb-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/95 via-purple-900/95 to-blue-900/95"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 text-white animate-fadeInUp">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
            <span className="text-sm font-semibold">🎮 Media Interaktif</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Belajar Sambil Bermain
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Uji pengetahuanmu dan jelajahi berbagai jalur karier di dunia vokasi
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === 'quiz'
                ? 'bg-white text-primary shadow-xl scale-105'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
          >
            <Target className="inline mr-2" size={24} />
            Kuis Edukatif
          </button>
          <button
            onClick={() => setActiveTab('career')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              activeTab === 'career'
                ? 'bg-white text-secondary shadow-xl scale-105'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
          >
            <Brain className="inline mr-2" size={24} />
            Eksplorasi Karier
          </button>
        </div>

        {/* Content */}
        {activeTab === 'quiz' ? <QuizSection /> : <CareerSection />}
      </div>
    </div>
  );
};

export default Interactive;