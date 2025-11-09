// src/components/game/GameOver.jsx

export const GameOver = ({ score, level, onRestart, onQuit }) => {
  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left animate-fadeInUp">
              <div className="inline-block mb-4 px-4 py-2 bg-red-600/30 border-2 border-red-400 rounded-full">
                <span className="text-sm font-bold text-white">⏰ WAKTU HABIS</span>
              </div>
              <div className="text-6xl md:text-7xl mb-4">😅</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Time's Up!</h1>
              <p className="text-xl text-gray-300">Level {level}</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-gray-400 text-sm mb-2">Final Score</div>
                <div className="text-5xl font-bold text-white mb-4">{score}</div>
                <p className="text-gray-300">
                  Jangan menyerah! Coba lagi dan kelola waktu dengan lebih baik.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-white font-bold mb-3">💡 Tips:</h3>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Baca pertanyaan dengan cepat tapi teliti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Fokus pada task yang energy-nya lebih rendah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Jangan terlalu lama memikirkan satu soal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <button
              onClick={onRestart}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-lg border-2 border-purple-500"
            >
              <RotateCcw size={24} />
              Coba Lagi
            </button>

            <button
              onClick={onQuit}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-600 flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Kembali ke Menu
            </button>
          </div>
        </div>
      </div>

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

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};