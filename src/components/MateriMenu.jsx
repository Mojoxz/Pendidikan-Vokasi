import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Trophy, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const MateriMenu = ({ onSelectMateri, totalProgress, completedMateris = [] }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 确保组件完全加载后再触发动画
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const menuItems = [
    {
      id: 1,
      title: "Teknologi Industri 4.0",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      description: "Pelajari IoT, AI, Big Data, dan Cloud Computing",
      difficulty: "Pemula",
      duration: "15 menit"
    },
    {
      id: 2,
      title: "Keunggulan Pendidikan Vokasi",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      description: "Praktik Langsung, Magang, dan Sertifikasi",
      difficulty: "Pemula",
      duration: "12 menit"
    },
    {
      id: 3,
      title: "Evolusi Revolusi Industri",
      icon: "⚙️",
      color: "from-orange-500 to-red-500",
      description: "Dari Industri 1.0 hingga 4.0",
      difficulty: "Menengah",
      duration: "18 menit"
    },
    {
      id: 4,
      title: "Keterampilan Abad 21",
      icon: "💡",
      color: "from-green-500 to-emerald-500",
      description: "Critical Thinking, Creativity, Digital Literacy",
      difficulty: "Menengah",
      duration: "15 menit"
    },
    {
      id: 5,
      title: "Sistem Pendidikan SMK",
      icon: "🏫",
      color: "from-indigo-500 to-purple-500",
      description: "Teaching Factory, Prakerin, dan Sertifikasi",
      difficulty: "Pemula",
      duration: "14 menit"
    },
    {
      id: 6,
      title: "Program Link and Match",
      icon: "🔗",
      color: "from-pink-500 to-rose-500",
      description: "Kurikulum Industri dan Job Placement",
      difficulty: "Menengah",
      duration: "13 menit"
    },
    {
      id: 7,
      title: "Spektrum Bidang Keahlian",
      icon: "🎯",
      color: "from-cyan-500 to-blue-500",
      description: "Teknik, IT, Bisnis, dan Kesehatan",
      difficulty: "Pemula",
      duration: "16 menit"
    },
    {
      id: 8,
      title: "Pentingnya Sertifikasi",
      icon: "🏅",
      color: "from-yellow-500 to-orange-500",
      description: "BNSP, Standar Internasional, dan Daya Saing",
      difficulty: "Lanjut",
      duration: "14 menit"
    }
  ];

  const isCompleted = (itemId) => completedMateris.includes(itemId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isLoaded ? 'animate-fadeInDown' : ''}`}>
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-purple-600/30 border-2 border-purple-400 rounded-full backdrop-blur-sm">
              <Sparkles className="text-yellow-400" size={20} />
              <span className="text-lg font-bold text-white">Pusat Pembelajaran Interaktif</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
            Materi Pembelajaran
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Pilih topik yang ingin kamu pelajari dan mulai petualangan belajarmu!
          </p>

          {/* Stats Bar */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
              <BookOpen className="text-blue-400" size={20} />
              <span className="text-white font-bold">{menuItems.length} Materi</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
              <Trophy className="text-yellow-400" size={20} />
              <span className="text-white font-bold">{totalProgress || 0}% Selesai</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
              <CheckCircle className="text-green-400" size={20} />
              <span className="text-white font-bold">{completedMateris.length}/{menuItems.length} Materi</span>
            </div>
          </div>
        </div>

        {/* Menu Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" style={{ gridAutoRows: '1fr' }}>
          {menuItems.map((item, index) => {
            const completed = isCompleted(item.id);
            
            return (
              <div
                key={item.id}
                onClick={() => onSelectMateri(item.id)}
                className={`group cursor-pointer relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isLoaded ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: isLoaded ? `${index * 0.1}s` : '0s' }}
              >
                <div className={`relative h-full bg-gray-800/50 border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 flex flex-col ${
                  completed 
                    ? 'border-green-500 shadow-green-500/20' 
                    : 'border-gray-700 hover:border-purple-400 hover:shadow-purple-500/20'
                }`}>
                  
                  {/* Completed Badge */}
                  {completed && (
                    <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2 shadow-lg z-10 animate-bounce-slow">
                      <CheckCircle size={24} />
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl transform transition-transform group-hover:rotate-12 group-hover:scale-110 flex-shrink-0 ${
                    completed ? 'opacity-80' : ''
                  }`}>
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-2 text-center transition-colors line-clamp-2 flex-grow-0 ${
                    completed 
                      ? 'text-green-300' 
                      : 'text-white group-hover:text-purple-300'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 text-center line-clamp-3 flex-grow">
                    {item.description}
                  </p>

                  {/* Spacer for consistent height */}
                  <div className="flex-grow"></div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className={`px-2 py-1 rounded-full font-bold flex-shrink-0 ${
                      item.difficulty === 'Pemula' 
                        ? 'bg-green-900/50 text-green-300'
                        : item.difficulty === 'Menengah'
                        ? 'bg-yellow-900/50 text-yellow-300'
                        : 'bg-red-900/50 text-red-300'
                    }`}>
                      {item.difficulty}
                    </span>
                    <span className="text-gray-400 flex-shrink-0">⏱️ {item.duration}</span>
                  </div>

                  {/* Play Button */}
                  <button className={`w-full font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group-hover:shadow-lg flex-shrink-0 ${
                    completed
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                  }`}>
                    {completed ? (
                      <>
                        <CheckCircle size={18} />
                        <span>Pelajari Lagi</span>
                      </>
                    ) : (
                      <>
                        <Play size={18} fill="white" />
                        <span>Mulai Belajar</span>
                      </>
                    )}
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity -z-10 blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tips */}
        <div className={`mt-12 max-w-4xl mx-auto transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Tips Belajar Efektif</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-200">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-lg">→</span>
                    <span>Klik pada materi untuk memulai pembelajaran</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-lg">→</span>
                    <span>Ikuti urutan topik untuk pemahaman maksimal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-lg">→</span>
                    <span>Selesaikan semua topik di setiap materi</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 text-lg">→</span>
                    <span>Catat poin penting untuk review nanti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default MateriMenu;