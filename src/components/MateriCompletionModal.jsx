import React from 'react';
import { Trophy, Star, Home, ArrowRight } from 'lucide-react';

const MateriCompletionModal = ({ materi, onBackToMenu, onNextMateri }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500 max-w-lg sm:max-w-2xl w-full rounded-2xl p-4 sm:p-8 animate-scaleIn max-h-[95vh] overflow-y-auto">
        {/* Celebration Animation */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-block relative">
            <Trophy className="text-yellow-400 animate-bounce-slow w-16 h-16 sm:w-20 sm:h-20" size={80} />
            <div className="absolute -top-2 -right-2">
              <Star className="text-yellow-300 animate-spin-slow w-6 h-6 sm:w-8 sm:h-8" size={32} />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Star className="text-yellow-300 animate-spin-slow w-5 h-5 sm:w-6 sm:h-6" size={24} style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 sm:mt-6 mb-2">
            🎉 Selamat!
          </h2>
          <p className="text-base sm:text-xl text-gray-300">
            Kamu telah menyelesaikan materi
          </p>
        </div>

        {/* Materi Info */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-3">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${materi.color} flex items-center justify-center text-2xl sm:text-3xl`}>
              {materi.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg sm:text-2xl font-bold text-white">{materi.title}</h3>
              <p className="text-purple-300 text-xs sm:text-sm">{materi.topics.length} topik telah dipelajari</p>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <div className="text-lg sm:text-2xl font-bold text-green-400">{materi.topics.length}</div>
              <div className="text-xs text-gray-400">Topik Selesai</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <div className="text-lg sm:text-2xl font-bold text-blue-400">100%</div>
              <div className="text-xs text-gray-400">Progress</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 text-center">
              <div className="text-lg sm:text-2xl font-bold text-yellow-400">+1</div>
              <div className="text-xs text-gray-400">Materi Selesai</div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-900/30 border-2 border-blue-500 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <h4 className="text-xs sm:text-sm font-bold text-blue-300 mb-2 flex items-center gap-2">
            <span>💡</span>
            <span>Apa yang telah kamu pelajari:</span>
          </h4>
          <ul className="text-xs sm:text-sm text-gray-200 space-y-1">
            {materi.keyPoints.slice(0, 3).map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onBackToMenu}
            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all border-2 border-gray-600 hover:border-purple-400"
          >
            <Home size={18} />
            <span className="text-sm sm:text-base">Kembali ke Menu</span>
          </button>
          
          {onNextMateri && (
            <button
              onClick={onNextMateri}
              className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <span className="text-sm sm:text-base">Materi Selanjutnya</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>

        {/* Motivational Quote */}
        <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm italic">
            "Belajar hari ini adalah investasi untuk masa depan yang lebih baik"
          </p>
        </div>
      </div>

      {/* Custom Styles */}
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

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MateriCompletionModal;