import React from 'react';
import { CheckCircle, XCircle, Brain } from 'lucide-react';

const QuizQuestion = ({ 
  question, 
  currentIndex, 
  total, 
  score, 
  selectedAnswer, 
  showExplanation,
  onAnswerClick, 
  onNext 
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gray-800 border-2 border-gray-600 rounded-2xl p-8 md:p-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-white">
              Pertanyaan {currentIndex + 1} dari {total}
            </span>
            <span className="text-sm font-bold text-purple-300">
              Skor: {score}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 border border-gray-600">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              {currentIndex + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex-grow">
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
                buttonClass += "border-gray-500 hover:border-purple-400 hover:bg-gray-700 cursor-pointer text-white";
              } else {
                if (isSelected) {
                  buttonClass += isCorrect 
                    ? "border-green-400 bg-green-900/50 text-green-200" 
                    : "border-red-400 bg-red-900/50 text-red-200";
                } else if (isCorrect && showExplanation) {
                  buttonClass += "border-green-400 bg-green-900/50 text-green-200";
                } else {
                  buttonClass += "border-gray-600 bg-gray-700 text-gray-400 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => onAnswerClick(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                      selectedAnswer === null 
                        ? "bg-gray-600 text-white"
                        : isSelected
                          ? isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                          : isCorrect && showExplanation
                            ? "bg-green-500 text-white"
                            : "bg-gray-500 text-gray-300"
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-white text-left">{option}</span>
                    {showExplanation && isCorrect && (
                      <CheckCircle className="ml-auto text-green-400" size={24} />
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <XCircle className="ml-auto text-red-400" size={24} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mb-6 p-6 rounded-xl border-2 ${
            selectedAnswer === question.correct 
              ? 'bg-green-900/50 border-green-400' 
              : 'bg-gray-700 border-gray-500'
          }`}>
            <div className="flex items-start gap-3">
              <Brain className={selectedAnswer === question.correct ? 'text-green-400' : 'text-purple-400'} size={24} />
              <div>
                <h4 className="font-bold text-white mb-2">Penjelasan:</h4>
                <p className="text-gray-200 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <button 
            onClick={onNext}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all mt-6"
          >
            Lanjut ke Materi →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;