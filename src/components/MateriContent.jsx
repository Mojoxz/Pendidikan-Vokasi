import React, { useState } from 'react';
import { Home, ChevronLeft, ChevronRight, CheckCircle, BookOpen, Lightbulb } from 'lucide-react';

const MateriContent = ({ materi, onBackToMenu, onComplete }) => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [showTopicDetail, setShowTopicDetail] = useState(false);

  const currentTopic = materi.topics[currentTopicIndex];
  const progress = ((completedTopics.length / materi.topics.length) * 100).toFixed(0);
  const isLastTopic = currentTopicIndex === materi.topics.length - 1;
  const allTopicsCompleted = completedTopics.length === materi.topics.length;

  const handleNextTopic = () => {
    // Mark current topic as completed
    if (!completedTopics.includes(currentTopicIndex)) {
      setCompletedTopics([...completedTopics, currentTopicIndex]);
    }

    if (currentTopicIndex < materi.topics.length - 1) {
      // Go to next topic
      setCurrentTopicIndex(currentTopicIndex + 1);
      setShowTopicDetail(false);
    } else {
      // All topics completed, call onComplete
      if (!completedTopics.includes(currentTopicIndex)) {
        // If current topic not yet marked, add it before completing
        const finalCompleted = [...completedTopics, currentTopicIndex];
        setCompletedTopics(finalCompleted);
      }
      onComplete(materi.id);
    }
  };

  const handlePrevTopic = () => {
    if (currentTopicIndex > 0) {
      setCurrentTopicIndex(currentTopicIndex - 1);
      setShowTopicDetail(false);
    }
  };

  const handleTopicClick = (index) => {
    setCurrentTopicIndex(index);
    setShowTopicDetail(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 animate-fadeInDown">
          <button
            onClick={onBackToMenu}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700 border-2 border-gray-600 hover:border-purple-400 rounded-xl text-white font-bold transition-all backdrop-blur-sm"
          >
            <Home size={20} />
            <span className="hidden sm:inline">Kembali ke Menu</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gray-800/80 border-2 border-gray-600 rounded-xl backdrop-blur-sm">
              <span className="text-gray-400 text-sm">Progress: </span>
              <span className="text-purple-400 font-bold">{progress}%</span>
            </div>
            <div className="px-4 py-2 bg-gray-800/80 border-2 border-gray-600 rounded-xl backdrop-blur-sm">
              <span className="text-gray-400 text-sm">Topik: </span>
              <span className="text-white font-bold">{currentTopicIndex + 1}/{materi.topics.length}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fadeInDown" style={{ animationDelay: '0.1s' }}>
          <div className="w-full bg-gray-800/50 rounded-full h-4 border-2 border-gray-700 backdrop-blur-sm overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 h-full transition-all duration-500 rounded-full relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Topic Navigation */}
          <div className="lg:col-span-1 animate-fadeInLeft">
            <div className="bg-gray-800/50 border-2 border-gray-700 rounded-2xl p-6 backdrop-blur-sm sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-purple-400" size={20} />
                <h3 className="text-lg font-bold text-white">Daftar Topik</h3>
              </div>

              <div className="space-y-2">
                {materi.topics.map((topic, index) => (
                  <button
                    key={index}
                    onClick={() => handleTopicClick(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      currentTopicIndex === index
                        ? 'bg-purple-600 text-white border-2 border-purple-400'
                        : completedTopics.includes(index)
                        ? 'bg-green-900/30 text-green-300 border-2 border-green-600 hover:bg-green-900/50'
                        : 'bg-gray-700/50 text-gray-300 border-2 border-gray-600 hover:bg-gray-700 hover:border-purple-400'
                    }`}
                  >
                    <div className="text-2xl flex-shrink-0">{topic.image}</div>
                    <div className="flex-grow min-w-0">
                      <div className="text-sm font-bold truncate">{topic.name}</div>
                    </div>
                    {completedTopics.includes(index) && (
                      <CheckCircle size={18} className="flex-shrink-0 text-green-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 animate-fadeInRight">
            <div className="bg-gray-800/50 border-2 border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              {/* Materi Header */}
              <div className="text-center mb-8">
                <div className={`inline-block w-24 h-24 rounded-2xl bg-gradient-to-br ${materi.color} flex items-center justify-center text-5xl mb-4 animate-bounce-slow`}>
                  {materi.icon}
                </div>
                <div className="mb-2">
                  <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">
                    {materi.title}
                  </span>
                </div>
              </div>

              {/* Current Topic Content */}
              <div className="mb-8">
                {/* Topic Header */}
                <div className="flex items-start gap-4 mb-6 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-xl">
                  <div className="text-6xl">{currentTopic.image}</div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-2">{currentTopic.name}</h2>
                    <p className="text-gray-200 text-lg">{currentTopic.description}</p>
                  </div>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Lightbulb className="text-yellow-400" size={24} />
                    Contoh Penerapan:
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {currentTopic.examples.map((example, idx) => (
                      <div key={idx} className="p-4 bg-gray-700/50 border-2 border-gray-600 rounded-xl hover:border-purple-400 transition-all">
                        <div className="text-center">
                          <div className="text-3xl mb-2">✓</div>
                          <div className="text-sm text-white font-medium">{example}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detail Content Button */}
                {currentTopic.detailContent && (
                  <button
                    onClick={() => setShowTopicDetail(!showTopicDetail)}
                    className="w-full mb-6 p-4 bg-blue-900/30 hover:bg-blue-900/50 border-2 border-blue-500 rounded-xl transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="text-blue-400" size={24} />
                      <span className="text-white font-bold">
                        {showTopicDetail ? 'Sembunyikan' : 'Lihat'} Detail Penjelasan
                      </span>
                    </div>
                    <ChevronRight 
                      className={`text-blue-400 transition-transform ${showTopicDetail ? 'rotate-90' : ''}`} 
                      size={24} 
                    />
                  </button>
                )}

                {/* Detail Content (Collapsible) */}
                {showTopicDetail && currentTopic.detailContent && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500 rounded-xl animate-fadeIn">
                    <p className="text-gray-200 text-lg leading-relaxed">{currentTopic.detailContent}</p>
                  </div>
                )}
              </div>

              {/* Key Points (shown when all topics completed) */}
              {allTopicsCompleted && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500 rounded-xl animate-fadeIn">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="text-green-400" size={24} />
                    <h3 className="text-xl font-bold text-white">🎉 Selamat! Poin Penting dari Materi Ini:</h3>
                  </div>
                  <div className="space-y-3">
                    {materi.keyPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-200 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrevTopic}
                  disabled={currentTopicIndex === 0}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                    currentTopicIndex === 0
                      ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-700 hover:bg-gray-600 text-white border-2 border-gray-600 hover:border-purple-400'
                  }`}
                >
                  <ChevronLeft size={20} />
                  <span>Topik Sebelumnya</span>
                </button>

                {!isLastTopic ? (
                  <button
                    onClick={handleNextTopic}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <span>Topik Selanjutnya</span>
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handleNextTopic}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    <CheckCircle size={20} />
                    <span>Selesai Materi</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fadeInDown { animation: fadeInDown 0.6s ease-out; }
        .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out; }
        .animate-fadeInRight { animation: fadeInRight 0.6s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default MateriContent;