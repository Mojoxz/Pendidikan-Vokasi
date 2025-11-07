import React, { useState, useEffect } from 'react';
import { ArrowRight, Target, Zap, BookOpen, Sparkles, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// 3D Carousel Component
const Carousel3D = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + items.length) % items.length;
    const totalItems = items.length;
    
    if (diff === 0) {
      return {
        transform: 'translateX(0) translateZ(0) scale(1.1)',
        opacity: 1,
        zIndex: 10
      };
    } else if (diff === 1 || diff === -totalItems + 1) {
      return {
        transform: 'translateX(110%) translateZ(-100px) rotateY(-25deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 5
      };
    } else if (diff === totalItems - 1 || diff === -1) {
      return {
        transform: 'translateX(-110%) translateZ(-100px) rotateY(25deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 5
      };
    } else {
      return {
        transform: 'translateX(0) translateZ(-200px) scale(0.6)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
      <div className="relative w-full max-w-md h-80">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-600 ease-out"
            style={{
              ...getCardStyle(index),
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="w-full h-full bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <div className="flex flex-col items-center text-center h-full justify-center">
                <div className="mb-4 p-4 bg-purple-900/30 rounded-full">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 z-20 p-3 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 z-20 p-3 rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-0 flex gap-2 justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
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
            <button className="text-lg bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all">
              Mulai Belajar Interaktif <ArrowRight className="inline ml-2" size={20} />
            </button>
            <button className="text-lg bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 px-8 py-3 rounded-full transition-all">
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

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video relative bg-gray-900 flex items-center justify-center cursor-pointer group"
                   onClick={() => setIsVideoOpen(true)}>
                <img 
                  src="https://img.youtube.com/vi/4OTIMWBt2a0/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                />
                <div className="relative z-10 w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-700 group-hover:scale-110 transition-all">
                  <Play className="text-white ml-1" size={32} fill="white" />
                </div>
              </div>
              <div className="p-6 bg-gray-800">
                <h3 className="text-xl font-bold mb-2 text-white">Pendidikan Vokasi: Investasi Masa Depan</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Pelajari bagaimana pendidikan vokasi mempersiapkan generasi muda menghadapi tantangan Industri 4.0
                </p>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Tonton Video <ArrowRight className="inline ml-1" size={16} />
                </button>
              </div>
            </div>
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
          <button className="text-lg bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all">
            Mulai Petualangan <ArrowRight className="inline ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId="4OTIMWBt2a0"
      />
    </div>
  );
};

export default Home;