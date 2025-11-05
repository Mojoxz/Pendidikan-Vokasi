import React from 'react';
import { Lightbulb, Users, Award, TrendingUp, Factory, Cpu } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const benefits = [
    {
      icon: <Award className="text-yellow-500" size={40} />,
      title: "Keterampilan Praktis",
      description: "70% pembelajaran berbasis praktik langsung di workshop dan laboratorium industri"
    },
    {
      icon: <Users className="text-blue-500" size={40} />,
      title: "Link and Match",
      description: "Kurikulum yang disesuaikan dengan kebutuhan industri melalui kerja sama dengan perusahaan"
    },
    {
      icon: <TrendingUp className="text-green-500" size={40} />,
      title: "Siap Kerja",
      description: "Lulusan langsung dapat bekerja dengan sertifikasi kompetensi yang diakui industri"
    },
    {
      icon: <Factory className="text-purple-500" size={40} />,
      title: "Magang Industri",
      description: "Pengalaman kerja nyata di industri selama 6-12 bulan sebagai bagian dari kurikulum"
    }
  ];

  const industry40 = [
    {
      icon: <Cpu className="text-blue-600" size={32} />,
      title: "Internet of Things (IoT)",
      description: "Koneksi antar perangkat untuk mengumpulkan dan bertukar data secara otomatis"
    },
    {
      icon: <Lightbulb className="text-yellow-600" size={32} />,
      title: "Artificial Intelligence",
      description: "Kecerdasan buatan untuk analisis data dan pengambilan keputusan otomatis"
    },
    {
      icon: <Factory className="text-purple-600" size={32} />,
      title: "Automation & Robotics",
      description: "Otomasi proses produksi dengan robot cerdas untuk efisiensi maksimal"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span className="text-sm font-semibold">📚 Tentang Pendidikan Vokasi</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Apa itu Pendidikan Vokasi?
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Pendidikan vokasi adalah jenis pendidikan yang membekali peserta didik dengan 
              <span className="font-bold text-yellow-400"> keterampilan praktis, pengetahuan teknis, dan sikap profesional </span> 
              yang dibutuhkan untuk memasuki dunia kerja di bidang atau profesi tertentu.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Keunggulan Pendidikan Vokasi</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Mengapa memilih pendidikan vokasi sebagai jalur pendidikanmu?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Revolusi Industri 4.0</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Era di mana teknologi digital mengubah cara kita bekerja dan belajar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {industry40.map((tech, index) => (
              <Card key={index} className="p-8">
                <div className="inline-block p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Evolusi Revolusi Industri</h3>
            <div className="space-y-6">
              {[
                { era: "1.0", year: "1784", title: "Mesin Uap", desc: "Mekanisasi produksi menggunakan tenaga air dan uap", color: "from-gray-600 to-gray-800" },
                { era: "2.0", year: "1870", title: "Listrik & Produksi Massal", desc: "Produksi massal dengan bantuan listrik dan jalur perakitan", color: "from-blue-600 to-blue-800" },
                { era: "3.0", year: "1969", title: "Komputer & Otomasi", desc: "Penggunaan elektronik dan IT untuk otomasi produksi", color: "from-green-600 to-green-800" },
                { era: "4.0", year: "Sekarang", title: "Cyber-Physical Systems", desc: "Integrasi digital: IoT, AI, Big Data, Cloud Computing", color: "from-purple-600 to-pink-600" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {item.era}
                  </div>
                  <Card className="flex-grow p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-gray-500 font-semibold mb-1">{item.year}</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/90"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12 text-white">
            <h2 className="section-title text-white">Video Pembelajaran</h2>
            <p className="section-subtitle text-gray-300">
              Memahami lebih dalam tentang Industri 4.0
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/kpW9JcWxKq0"
                  title="Revolusi Industri 4.0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Mengembangkan Kompetensimu?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Coba kuis interaktif kami untuk menguji pemahamanmu tentang pendidikan vokasi dan Industri 4.0
          </p>
          <a href="/interactive">
            <button className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Mulai Kuis Sekarang →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;