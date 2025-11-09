import React from 'react';
import { Trophy, Star, Sparkles, RefreshCw, Award, Target, Lightbulb, TrendingUp, X } from 'lucide-react';

const FinalConclusionModal = ({ onClose, onRestart }) => {
  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
      <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 border-4 border-yellow-500 max-w-6xl w-full rounded-3xl p-8 md:p-12 animate-scaleIn my-8 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-50"
        >
          <X className="text-white" size={24} />
        </button>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>

        {/* Celebration Header */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-block relative mb-6">
            <Trophy className="text-yellow-400 animate-bounce-slow mx-auto" size={100} />
            <div className="absolute -top-4 -right-4">
              <Star className="text-yellow-300 animate-spin-slow" size={40} />
            </div>
            <div className="absolute -bottom-4 -left-4">
              <Star className="text-yellow-300 animate-spin-slow" size={32} style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute top-0 left-0">
              <Sparkles className="text-pink-400 animate-pulse" size={24} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4 animate-gradient">
            🎉 SELAMAT! 🎉
          </h1>
          <p className="text-2xl md:text-3xl text-white font-bold mb-2">
            Kamu Telah Menyelesaikan Semua Materi!
          </p>
          <p className="text-lg text-purple-300">
            Perjalanan pembelajaran tentang Pendidikan Vokasi di Era Industri 4.0
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 relative z-10">
          <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 border-2 border-green-500 rounded-xl p-4 text-center">
            <Award className="text-green-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white">8/8</div>
            <div className="text-xs text-green-300">Materi Selesai</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-2 border-blue-500 rounded-xl p-4 text-center">
            <Target className="text-blue-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-blue-300">Progress</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500 rounded-xl p-4 text-center">
            <Lightbulb className="text-purple-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white">32+</div>
            <div className="text-xs text-purple-300">Topik Dipelajari</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 border-2 border-yellow-500 rounded-xl p-4 text-center">
            <TrendingUp className="text-yellow-400 mx-auto mb-2" size={32} />
            <div className="text-3xl font-bold text-white">Expert</div>
            <div className="text-xs text-yellow-300">Level Dicapai</div>
          </div>
        </div>

        {/* Main Conclusion - LENGKAP */}
        <div className="bg-gradient-to-r from-purple-900/70 to-pink-900/70 border-3 border-purple-400 rounded-2xl p-8 md:p-10 mb-8 relative z-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-14 h-14 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Kesimpulan: Pendidikan Vokasi di Era Industri 4.0
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-100 text-base md:text-lg leading-relaxed">
            {/* Paragraf 1: Pentingnya Pendidikan Vokasi */}
            <div className="bg-purple-800/30 border-l-4 border-yellow-400 p-5 rounded-r-xl">
              <p className="font-bold text-yellow-300 text-xl mb-3">
                🎯 Pendidikan Vokasi: Kunci Sukses di Era Digital
              </p>
              <p className="leading-relaxed">
                Pendidikan vokasi merupakan pilar utama dalam mempersiapkan tenaga kerja yang siap menghadapi tantangan <span className="font-bold text-purple-300">Revolusi Industri 4.0</span>. Dengan pendekatan pembelajaran yang mengutamakan praktik langsung dan kerjasama erat dengan industri, pendidikan vokasi memastikan lulusannya tidak hanya memiliki pengetahuan teoritis, tetapi juga <span className="font-bold text-green-300">keterampilan praktis yang langsung dapat diterapkan di dunia kerja</span>.
              </p>
            </div>

            {/* Paragraf 2: Teknologi 4.0 */}
            <div className="bg-blue-800/30 border-l-4 border-blue-400 p-5 rounded-r-xl">
              <p className="font-bold text-blue-300 text-xl mb-3">
                🤖 Integrasi Teknologi Digital dalam Pembelajaran
              </p>
              <p className="leading-relaxed">
                Era Industri 4.0 ditandai dengan penggunaan teknologi canggih seperti <span className="font-bold text-cyan-300">Internet of Things (IoT), Artificial Intelligence (AI), Big Data Analytics, dan Cloud Computing</span>. Pendidikan vokasi modern mengintegrasikan teknologi-teknologi ini dalam kurikulumnya, memungkinkan siswa untuk langsung berinteraksi dengan tools dan sistem yang akan mereka gunakan di industri. Pembelajaran berbasis teknologi ini tidak hanya membuat siswa familiar dengan peralatan modern, tetapi juga mengembangkan <span className="font-bold text-blue-300">mindset adaptif terhadap perubahan teknologi</span> yang terus berkembang pesat.
              </p>
            </div>

            {/* Paragraf 3: Keunggulan Sistem Vokasi */}
            <div className="bg-green-800/30 border-l-4 border-green-400 p-5 rounded-r-xl">
              <p className="font-bold text-green-300 text-xl mb-3">
                🎓 Pembelajaran Berbasis Praktik dan Pengalaman Nyata
              </p>
              <p className="leading-relaxed">
                Dengan rasio <span className="font-bold text-green-300">70% praktik dan 30% teori</span>, sistem pendidikan vokasi memberikan pengalaman belajar yang jauh lebih efektif dibanding pendidikan konvensional. Program <span className="font-bold text-yellow-300">Teaching Factory, Praktek Kerja Industri (Prakerin), dan magang</span> memberikan siswa kesempatan untuk bekerja di lingkungan industri sesungguhnya, memahami standar kerja profesional, dan membangun jaringan dengan praktisi industri. Pengalaman hands-on ini membuat lulusan vokasi <span className="font-bold text-emerald-300">siap kerja tanpa memerlukan training tambahan</span>, sehingga lebih diminati oleh perusahaan.
              </p>
            </div>

            {/* Paragraf 4: Link and Match */}
            <div className="bg-pink-800/30 border-l-4 border-pink-400 p-5 rounded-r-xl">
              <p className="font-bold text-pink-300 text-xl mb-3">
                🔗 Program Link and Match: Menjembatani Pendidikan dan Industri
              </p>
              <p className="leading-relaxed">
                Program <span className="font-bold text-pink-300">Link and Match</span> memastikan kurikulum pendidikan vokasi selalu relevan dengan kebutuhan industri terkini. Kolaborasi antara institusi pendidikan dengan perusahaan-perusahaan membuat <span className="font-bold text-purple-300">materi pembelajaran, peralatan praktik, bahkan instruktur</span> disesuaikan dengan standar industri. Sistem ini juga memfasilitasi <span className="font-bold text-yellow-300">job placement</span> setelah lulus, memastikan siswa tidak hanya mendapat pendidikan berkualitas tetapi juga memiliki jalur karier yang jelas.
              </p>
            </div>

            {/* Paragraf 5: Sertifikasi */}
            <div className="bg-orange-800/30 border-l-4 border-orange-400 p-5 rounded-r-xl">
              <p className="font-bold text-orange-300 text-xl mb-3">
                🏅 Sertifikasi Kompetensi: Bukti Kemampuan yang Terstandar
              </p>
              <p className="leading-relaxed">
                Lulusan pendidikan vokasi tidak hanya mendapat ijazah, tetapi juga <span className="font-bold text-orange-300">sertifikat kompetensi dari BNSP (Badan Nasional Sertifikasi Profesi)</span> dan lembaga sertifikasi internasional. Sertifikasi ini menjadi bukti objektif bahwa lulusan telah memenuhi standar kompetensi yang ditetapkan industri. Penelitian menunjukkan bahwa kandidat bersertifikasi memiliki <span className="font-bold text-yellow-300">peluang diterima kerja 60% lebih tinggi</span> dan dapat menegosiasikan gaji awal <span className="font-bold text-green-300">20-30% lebih besar</span> dibanding yang tidak bersertifikasi.
              </p>
            </div>

            {/* Paragraf 6: Keterampilan Abad 21 */}
            <div className="bg-indigo-800/30 border-l-4 border-indigo-400 p-5 rounded-r-xl">
              <p className="font-bold text-indigo-300 text-xl mb-3">
                💡 Pengembangan Keterampilan Abad 21
              </p>
              <p className="leading-relaxed">
                Selain hard skills teknis, pendidikan vokasi juga fokus mengembangkan <span className="font-bold text-indigo-300">soft skills yang esensial di era digital</span>: Critical Thinking untuk memecahkan masalah kompleks, Creativity untuk berinovasi, Digital Literacy untuk beradaptasi dengan teknologi baru, dan Collaboration & Communication untuk bekerja dalam tim lintas disiplin. Kombinasi antara <span className="font-bold text-purple-300">kompetensi teknis dan interpersonal</span> ini membuat lulusan vokasi tidak hanya siap bekerja, tetapi juga siap memimpin dan berkembang dalam karier mereka.
              </p>
            </div>

            {/* Paragraf 7: Kesimpulan Akhir */}
            <div className="bg-gradient-to-r from-purple-700/50 to-pink-700/50 border-2 border-yellow-400 p-6 rounded-xl mt-6">
              <p className="font-bold text-2xl text-center text-yellow-300 mb-4">
                ⭐ Kesimpulan Akhir ⭐
              </p>
              <p className="text-center text-white text-lg leading-relaxed">
                Pendidikan vokasi di era Industri 4.0 bukan hanya tentang mengajarkan keterampilan teknis, tetapi tentang <span className="font-bold text-yellow-300">mempersiapkan generasi yang adaptif, kompeten, dan siap bersaing di pasar global</span>. Dengan <span className="font-bold text-green-300">140+ program keahlian</span> yang tersedia, setiap siswa dapat menemukan jalur karier yang sesuai dengan minat dan bakatnya. Investasi dalam pendidikan vokasi adalah investasi untuk masa depan yang lebih cerah, baik bagi individu maupun bangsa.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6 border-t-2 border-purple-600">
              <p className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-gradient">
                "Pendidikan Vokasi adalah Investasi Terbaik untuk Masa Depan Karier yang Sukses di Era Digital!"
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-blue-900/40 border-2 border-blue-400 rounded-2xl p-6 mb-8 relative z-10">
          <h3 className="text-2xl font-bold text-blue-300 mb-5 flex items-center gap-2">
            <Star className="text-yellow-400" size={28} />
            <span>8 Materi yang Telah Kamu Kuasai:</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Teknologi Industri 4.0</div>
                <div className="text-gray-400">IoT, AI, Big Data, Cloud Computing</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Keunggulan Pendidikan Vokasi</div>
                <div className="text-gray-400">Praktik, Magang, Sertifikasi</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Evolusi Revolusi Industri</div>
                <div className="text-gray-400">Perjalanan Industri 1.0 - 4.0</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Keterampilan Abad 21</div>
                <div className="text-gray-400">Critical Thinking, Digital Literacy</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Sistem Pendidikan SMK</div>
                <div className="text-gray-400">Teaching Factory, Prakerin</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Program Link and Match</div>
                <div className="text-gray-400">Kurikulum & Job Placement</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Spektrum Bidang Keahlian</div>
                <div className="text-gray-400">140+ Program Keahlian</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-xl">
              <span className="text-green-400 text-2xl flex-shrink-0">✓</span>
              <div>
                <div className="font-bold text-white mb-1">Pentingnya Sertifikasi</div>
                <div className="text-gray-400">BNSP & Standar Internasional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button
            onClick={onClose}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            <Trophy size={24} />
            <span>Tutup & Kembali</span>
          </button>
          
          <button
            onClick={onRestart}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold text-lg rounded-xl transition-all border-2 border-gray-600 hover:border-yellow-400"
          >
            <RefreshCw size={24} />
            <span>Ulangi Semua Materi</span>
          </button>
        </div>

        {/* Motivational Quote */}
        <div className="text-center mt-8 pt-8 border-t-2 border-gray-700 relative z-10">
          <p className="text-gray-300 text-xl italic font-medium mb-2">
            "Pendidikan adalah senjata paling ampuh untuk mengubah dunia"
          </p>
          <p className="text-purple-400 text-base">- Nelson Mandela</p>
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
            transform: scale(0.95);
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

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default FinalConclusionModal;