import React from 'react';
import { CheckCircle, XCircle, Trophy, RefreshCw, BookOpen } from 'lucide-react';
import { formatScore, getMotivationalMessage } from '../utils/quizHelpers';

const QuizResults = ({ score, total, answers, quizData, onReset }) => {
  const result = formatScore(score, total);
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-2xl p-8 md:p-12 text-center">
        {/* Header */}
        <div className="mb-6">
          <Trophy className="mx-auto text-yellow-400 mb-4" size={80} />
          <h2 className="text-4xl font-bold text-white mb-2">Kuis Selesai!</h2>
          <p className="text-gray-200 text-lg">Berikut adalah hasil kamu:</p>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 mb-6">
          <div className="text-6xl font-bold mb-2">{result.percentage}%</div>
          <div className="text-2xl font-semibold mb-4">
            Nilai: {result.grade.letter} - {result.grade.label}
          </div>
          <div className="text-lg">
            Kamu menjawab benar {score} dari {total} pertanyaan
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-gray-700 border-2 border-gray-500 rounded-xl p-6 mb-6">
          <p className="text-lg text-white font-semibold">
            {getMotivationalMessage(parseFloat(result.percentage))}
          </p>
        </div>

        {/* Review Answers */}
        <div className="text-left mb-6">
          <h3 className="text-2xl font-bold text-white mb-4">Review Jawaban & Materi:</h3>
          <div className="space-y-4">
            {answers.map((answer, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg border-2 ${
                  answer.isCorrect 
                    ? 'bg-green-900/50 border-green-400' 
                    : 'bg-red-900/50 border-red-400'
                }`}
              >
                {/* Question Result */}
                <div className="flex items-start gap-3 mb-3">
                  {answer.isCorrect ? (
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  ) : (
                    <XCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                  )}
                  <div className="flex-grow">
                    <div className="font-semibold text-white mb-1">
                      Pertanyaan {index + 1}: {answer.question}
                    </div>
                    <div className="text-sm text-gray-200">
                      {answer.isCorrect ? (
                        <span className="text-green-300">✓ Jawaban kamu benar!</span>
                      ) : (
                        <span className="text-red-300">
                          ✗ Jawaban yang benar: {quizData[index].options[answer.correct]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Material Summary */}
                {answer.material && (
                  <div className="ml-9 mt-3 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="text-blue-400" size={18} />
                      <h5 className="font-bold text-white text-sm">
                        Materi: {answer.material.title}
                      </h5>
                    </div>
                    <p className="text-xs text-gray-300 mb-2">
                      {answer.material.description}
                    </p>
                    <div className="text-xs text-blue-300">
                      {answer.material.topics.length} topik pembelajaran tersedia
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <button 
          onClick={onReset} 
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
        >
          <RefreshCw className="inline mr-2" size={20} />
          Coba Lagi
        </button>
      </div>
    </div>
  );
};

export default QuizResults;