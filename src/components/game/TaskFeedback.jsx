// src/components/game/TaskFeedback.jsx

import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Lightbulb, ArrowRight } from 'lucide-react';

const TaskFeedback = ({ isCorrect, explanation, scoreGained, onNext }) => {
  useEffect(() => {
    // Auto advance after showing feedback
    const timer = setTimeout(() => {
      onNext();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className={`max-w-2xl w-full rounded-2xl border-4 p-8 animate-scaleIn ${
        isCorrect 
          ? 'bg-gradient-to-br from-green-900 to-green-800 border-green-500' 
          : 'bg-gradient-to-br from-red-900 to-red-800 border-red-500'
      }`}>
        {/* Icon & Title */}
        <div className="text-center mb-6">
          <div className="inline-block mb-4">
            {isCorrect ? (
              <CheckCircle className="text-green-400 animate-bounce" size={80} />
            ) : (
              <XCircle className="text-red-400 animate-shake" size={80} />
            )}
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            {isCorrect ? '🎉 Benar!' : '😔 Belum Tepat'}
          </h2>
          {isCorrect && scoreGained > 0 && (
            <div className="text-2xl font-bold text-yellow-400">
              +{scoreGained} Points!
            </div>
          )}
        </div>

        {/* Explanation */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-white font-bold mb-2">Penjelasan:</h3>
              <p className="text-gray-200 leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-xl"
        >
          Lanjut
          <ArrowRight size={24} />
        </button>

        {/* Auto-advance indicator */}
        <div className="text-center mt-4 text-sm text-gray-300">
          Otomatis lanjut dalam 4 detik...
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TaskFeedback;