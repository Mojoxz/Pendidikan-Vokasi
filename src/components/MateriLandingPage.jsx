import React from 'react';
import { Play, BookOpen, Target, Sparkles, Award, TrendingUp, Users } from 'lucide-react';

const MateriLandingPage = ({ onStartLearning }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-5xl w-full">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-6 py-3 bg-purple-600/30 border-2 border-purple-400 rounded-full backdrop-blur-sm">
                <Sparkles className="text-yellow-400 animate-pulse" size={24} />
                <span className="text-xl font-bold text-white">Pendidikan Vokasi di Era Industri 4.0</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
              Materi Pembelajaran
            </h1>

            <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">
              Jelajahi Dunia Pendidikan Vokasi Modern
            </p>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Pelajari 8 materi lengkap tentang teknologi, keterampilan, dan sistem pendidikan yang mempersiapkan generasi siap kerja di era digital
            </p>

            {/* Play Button */}
            <button
              onClick={onStartLearning}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-2xl transition-all shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transform"
            >
              <Play size={32} fill="white" className="group-hover:scale-110 transition-transform" />
              <span>Mulai Belajar</span>
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Gratis • Interaktif • Mudah Dipahami
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-2 border-purple-500 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">8 Materi Lengkap</h3>
              <p className="text-gray-300 text-sm">
                Dari Teknologi 4.0 hingga Sertifikasi Kompetensi
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-2 border-blue-500 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">32+ Topik Pembelajaran</h3>
              <p className="text-gray-300 text-sm">
                Pembahasan mendalam dengan contoh nyata
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 border-2 border-pink-500 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform">
              <div className="bg-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sertifikat Pembelajaran</h3>
              <p className="text-gray-300 text-sm">
                Dapatkan kesimpulan lengkap setelah menyelesaikan semua materi
              </p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-2 border-gray-700 rounded-2xl p-8 backdrop-blur-sm animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Apa yang Akan Kamu Pelajari?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Teknologi Industri 4.0</h4>
                  <p className="text-gray-400 text-sm">IoT, AI, Big Data, dan Cloud Computing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Keunggulan Pendidikan Vokasi</h4>
                  <p className="text-gray-400 text-sm">Praktik, Magang, dan Sertifikasi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Evolusi Revolusi Industri</h4>
                  <p className="text-gray-400 text-sm">Dari Industri 1.0 hingga 4.0</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  4
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Keterampilan Abad 21</h4>
                  <p className="text-gray-400 text-sm">Critical Thinking & Digital Literacy</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  5
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Sistem Pendidikan SMK</h4>
                  <p className="text-gray-400 text-sm">Teaching Factory & Prakerin</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  6
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Program Link and Match</h4>
                  <p className="text-gray-400 text-sm">Kurikulum Industri & Job Placement</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  7
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Spektrum Bidang Keahlian</h4>
                  <p className="text-gray-400 text-sm">140+ Program Keahlian Vokasi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mt-1">
                  8
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Pentingnya Sertifikasi</h4>
                  <p className="text-gray-400 text-sm">BNSP & Standar Internasional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-gray-400 text-sm">Materi Lengkap</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">32+</div>
              <div className="text-gray-400 text-sm">Topik Pembelajaran</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">120+</div>
              <div className="text-gray-400 text-sm">Menit Pembelajaran</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default MateriLandingPage;