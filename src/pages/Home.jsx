import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Zap, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      icon: <Target className="text-purple-600" size={32} />,
      title: "Fokus Praktis",
      description: "Pembelajaran berorientasi pada keterampilan praktis yang langsung dapat diterapkan di dunia kerja."
    },
    {
      icon: <Zap className="text-purple-600" size={32} />,
      title: "Teknologi 4.0",
      description: "Integrasi teknologi digital, IoT, AI, dan big data dalam kurikulum pembelajaran."
    },
    {
      icon: <BookOpen className="text-purple-600" size={32} />,
      title: "Link and Match",
      description: "Kurikulum disesuaikan dengan kebutuhan industri untuk menghasilkan lulusan yang kompeten."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/70 to-indigo-900/80"></div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full">
            <span className="text-sm font-semibold">✨ Masa Depan Pendidikan Indonesia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pendidikan Vokasi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Era Industri 4.0
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
            Mempersiapkan generasi muda Indonesia dengan keterampilan praktis dan kompetensi digital 
            untuk menghadapi tantangan masa depan
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/interactive">
              <Button variant="primary" className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg">
                Mulai Belajar Interaktif <ArrowRight className="inline ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-lg bg-white/20 backdrop-blur-md border-white text-white hover:bg-white/30 px-8 py-3 rounded-full">
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mt-20">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-pink-400">14K+</div>
              <div className="text-sm md:text-base text-gray-200">SMK di Indonesia</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">5 Juta+</div>
              <div className="text-sm md:text-base text-gray-200">Siswa Vokasi</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-indigo-400">90%+</div>
              <div className="text-sm md:text-base text-gray-200">Siap Kerja</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Mengapa Pendidikan Vokasi?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pendidikan vokasi memberikan bekal keterampilan praktis yang dibutuhkan industri modern
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl hover:-translate-y-1">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Tonton & Pelajari</h2>
            <p className="text-xl text-gray-600">
              Video edukatif tentang pendidikan vokasi dan Industri 4.0
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-lg rounded-2xl">
              <div className="aspect-video relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/4OTIMWBt2a0?rel=0&modestbranding=1"
                  title="Pendidikan Vokasi Indonesia"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <h3 className="text-xl font-bold mb-2">Pendidikan Vokasi: Investasi Masa Depan</h3>
                <p className="text-sm text-gray-100">
                  Pelajari bagaimana pendidikan vokasi mempersiapkan generasi muda menghadapi tantangan Industri 4.0
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=4OTIMWBt2a0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-white underline hover:no-underline"
                >
                  Buka di YouTube <ArrowRight className="inline ml-1" size={16} />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-pink-900/90"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Sparkles className="mx-auto mb-6 text-yellow-400" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Menjelajahi Dunia Vokasi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Coba kuis interaktif kami dan temukan jalur karier vokasi yang tepat untukmu!
          </p>
          <Link to="/interactive">
            <Button variant="primary" className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg">
              Mulai Petualangan <ArrowRight className="inline ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;