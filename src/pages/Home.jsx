import React, { useState } from 'react';
import { ArrowRight, Target, Zap, BookOpen, Sparkles, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Carousel3D from '../components/Carousel3D';

// Zigzag Feature Cards Component
const ZigzagFeatures = ({ features }) => {
  return (
    <div className="space-y-12">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center gap-8`}
        >
          <div className="flex-1">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-purple-500 transition-all duration-300">
              <div className="inline-block p-4 bg-purple-900/30 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-4 border-purple-500/30 flex items-center justify-center">
              <span className="text-4xl font-bold text-purple-400">0{index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
        >
          ✕ Tutup
        </button>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

// Video Card Component
const VideoCard = ({ videoId, thumbnail, title, description, onPlay }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
      <div className="aspect-video relative bg-gray-900 flex items-center justify-center cursor-pointer group"
           onClick={() => onPlay(videoId)}>
        <img 
          src={thumbnail}
          alt="Video Thumbnail"
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
        />
        <div className="relative z-10 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-700 group-hover:scale-110 transition-all">
          <Play className="text-white ml-1" size={32} fill="white" />
        </div>
      </div>
      <div className="p-6 bg-gray-800">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <button
          onClick={() => onPlay(videoId)}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          Tonton Video <ArrowRight className="inline ml-1" size={16} />
        </button>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const openVideo = (videoId) => {
    setCurrentVideoId(videoId);
    setIsVideoOpen(true);
  };

  const carouselItems = [
    {
      icon: <Target className="text-purple-400" size={40} />,
      title: "Fokus Praktis",
      description: "Pembelajaran berorientasi pada keterampilan praktis yang langsung dapat diterapkan di dunia kerja."
    },
    {
      icon: <Zap className="text-purple-400" size={40} />,
      title: "Teknologi 4.0",
      description: "Integrasi teknologi digital, IoT, AI, dan big data dalam kurikulum pembelajaran."
    },
    {
      icon: <BookOpen className="text-purple-400" size={40} />,
      title: "Link and Match",
      description: "Kurikulum disesuaikan dengan kebutuhan industri untuk menghasilkan lulusan yang kompeten."
    }
  ];

  const zigzagFeatures = [
    {
      icon: <Target className="text-purple-400" size={32} />,
      title: "Kurikulum Industri",
      description: "Dirancang bersama industri untuk memastikan relevansi dengan kebutuhan pasar kerja terkini."
    },
    {
      icon: <Zap className="text-purple-400" size={32} />,
      title: "Teknologi Terkini",
      description: "Fasilitas dan peralatan modern yang mendukung pembelajaran berbasis teknologi Industry 4.0."
    },
    {
      icon: <BookOpen className="text-purple-400" size={32} />,
      title: "Sertifikasi Kompetensi",
      description: "Lulusan mendapat sertifikat kompetensi yang diakui industri nasional dan internasional."
    }
  ];

  const videos = [
    {
      videoId: "S8eLyf8JPwY",
      thumbnail: "https://img.youtube.com/vi/S8eLyf8JPwY/maxresdefault.jpg",
      title: "Pendidikan Vokasi: Investasi Masa Depan",
      description: "Pelajari bagaimana pendidikan vokasi mempersiapkan generasi muda menghadapi tantangan Industri 4.0"
    },
    {
      videoId: "RPOC45Um8iU",
      thumbnail: "https://img.youtube.com/vi/RPOC45Um8iU/maxresdefault.jpg",
      title: "Revolusi Industri 4.0 dan Pendidikan",
      description: "Memahami peran pendidikan vokasi dalam era transformasi digital dan otomasi industri"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image dengan Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/80 to-gray-900/95"></div>
        </div>
        
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, purple 1px, transparent 1px), radial-gradient(circle at 80% 80%, purple 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-purple-900/30 border border-purple-500/30 rounded-full">
            <span className="text-sm font-semibold">✨ Masa Depan Pendidikan Indonesia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pendidikan Vokasi
            <br />
            <span className="text-purple-400">
              Era Industri 4.0
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Mempersiapkan generasi muda Indonesia dengan keterampilan praktis dan kompetensi digital 
            untuk menghadapi tantangan masa depan
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => navigate('/interactive')}
              className="text-lg bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Mulai Belajar Interaktif <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full transition-all"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-20">
            <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">14K+</div>
              <div className="text-sm md:text-base text-gray-300">SMK di Indonesia</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">5 Juta+</div>
              <div className="text-sm md:text-base text-gray-300">Siswa Vokasi</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">90%+</div>
              <div className="text-sm md:text-base text-gray-300">Siap Kerja</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Mengapa Pendidikan Vokasi?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pendidikan vokasi memberikan bekal keterampilan praktis yang dibutuhkan industri modern
            </p>
          </div>

          <Carousel3D items={carouselItems} />
        </div>
      </section>

      {/* Zigzag Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Keunggulan Program</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fasilitas dan program unggulan untuk mendukung pembelajaran berkualitas
            </p>
          </div>

          <ZigzagFeatures features={zigzagFeatures} />
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Tonton & Pelajari</h2>
            <p className="text-xl text-gray-400">
              Video edukatif tentang pendidikan vokasi dan Industri 4.0
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <VideoCard 
                key={index}
                videoId={video.videoId}
                thumbnail={video.thumbnail}
                title={video.title}
                description={video.description}
                onPlay={openVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="mx-auto mb-6 text-purple-400" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Menjelajahi Dunia Vokasi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Coba kuis interaktif kami dan temukan jalur karier vokasi yang tepat untukmu!
          </p>
          <button 
            onClick={() => navigate('/adventure')}
            className="text-lg bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Mulai Petualangan <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId={currentVideoId}
      />
    </div>
  );
};

export default Home;