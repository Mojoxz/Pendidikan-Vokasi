import React, { useState } from 'react';
import { Lightbulb, Users, Award, TrendingUp, Factory, Cpu, Target, Zap, BookOpen, ChevronDown, ChevronUp, ExternalLink, Brain, Rocket, Shield, ArrowRight } from 'lucide-react';

// ===== REUSABLE COMPONENTS =====
const Card = ({ children, className = "" }) => (
  <div className={`bg-gray-800 border border-gray-700 rounded-2xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ title, subtitle, isZigzagLeft = false }) => (
  <div className={`mb-16 ${isZigzagLeft ? 'text-left' : 'text-right'}`}>
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
    <p className="text-xl text-gray-400 max-w-3xl inline-block">{subtitle}</p>
  </div>
);

const StatCard = ({ number, label, icon }) => (
  <Card className="p-6 text-center hover:scale-105 hover:border-purple-500">
    <div className="inline-block p-4 bg-purple-900/30 rounded-full mb-4">
      {icon}
    </div>
    <div className="text-4xl font-bold text-purple-400 mb-2">{number}</div>
    <div className="text-gray-300 text-sm">{label}</div>
  </Card>
);

// ===== CAROUSEL ZIGZAG COMPONENT =====
const CarouselZigzag = ({ items, type = 'default', isZigzagLeft = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const currentItem = items[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isZigzagLeft ? 'ml-0' : 'mr-0'}`}>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 mb-8`}>
        {/* Content Side */}
        <div className="flex-1 w-full">
          <Card className="p-8 hover:border-purple-500">
            {type === 'benefit' && (
              <>
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-4">
                  {currentItem.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{currentItem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{currentItem.description}</p>
              </>
            )}
            {type === 'technology' && (
              <>
                <div className="inline-block p-3 bg-gray-700 rounded-lg mb-4">
                  {currentItem.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{currentItem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{currentItem.description}</p>
              </>
            )}
            {type === 'opportunity' && (
              <>
                <div className="inline-block p-4 bg-gray-700 rounded-full mb-4">
                  {currentItem.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{currentItem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{currentItem.description}</p>
              </>
            )}
            {type === 'curriculum' && (
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 font-bold text-xl">
                  {currentIndex + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{currentItem.title}</h3>
                  <p className="text-gray-400">{currentItem.desc}</p>
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Image/Visual Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden group shadow-2xl">
            <img 
              src={currentItem.image} 
              alt={currentItem.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900/80 backdrop-blur-sm flex items-center justify-center border-2 border-purple-500/50">
              <span className="text-2xl font-bold text-purple-400">{String(currentIndex + 1).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={`flex items-center gap-4 mt-8 ${isZigzagLeft ? 'justify-start' : 'justify-end'}`}>
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all flex items-center justify-center text-white"
        >
          ←
        </button>
        
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-purple-500 w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all flex items-center justify-center text-white"
        >
          →
        </button>
      </div>

      {/* Counter */}
      <div className={`${isZigzagLeft ? 'text-left' : 'text-right'} mt-6`}>
        <span className="text-gray-400 text-sm">
          {currentIndex + 1} / {items.length}
        </span>
      </div>
    </div>
  );
};

// ===== ACCORDION COMPONENT =====
const AccordionItem = ({ title, content, isOpen, onClick, isZigzagLeft = false }) => (
  <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden mb-4">
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-700 transition-colors"
    >
      <span className="text-lg font-bold text-white">{title}</span>
      {isOpen ? <ChevronUp className="text-purple-400" /> : <ChevronDown className="text-purple-400" />}
    </button>
    {isOpen && (
      <div className="px-6 pb-4 text-gray-400 leading-relaxed">
        {content}
      </div>
    )}
  </div>
);

// ===== TIMELINE COMPONENT =====
const Timeline = ({ items, isZigzagLeft = false }) => (
  <div className={`space-y-6 ${isZigzagLeft ? 'ml-0' : 'mr-0'}`}>
    {items.map((item, index) => (
      <div key={index} className={`flex items-center gap-6 ${isZigzagLeft ? '' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
          {item.era}
        </div>
        <Card className="flex-grow p-6 hover:border-purple-500">
          <div className="text-sm text-gray-400 font-semibold mb-1">{item.year}</div>
          <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
          <p className="text-gray-400">{item.desc}</p>
        </Card>
      </div>
    ))}
  </div>
);

// ===== REFERENCE CARD COMPONENT =====
const ReferenceCard = ({ title, description, url, isZigzagLeft = false }) => (
  <Card className="p-6 hover:border-purple-500">
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm mb-3">{description}</p>
    <a 
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm"
    >
      Baca Selengkapnya <ExternalLink className="ml-1" size={14} />
    </a>
  </Card>
);

// ===== HERO COMPONENT =====
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
        alt="Vocational Education"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-900/95"></div>
    </div>
    
    <div className="relative z-10 container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-6 py-3 bg-purple-900/30 border border-purple-500/30 rounded-full backdrop-blur-sm">
          <span className="text-sm font-semibold">📚 Tentang Pendidikan Vokasi</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Pendidikan Vokasi
          <br />
          <span className="text-purple-400">Era Industri 4.0</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Pendidikan vokasi membekali peserta didik dengan 
          <span className="font-bold text-purple-400"> keterampilan praktis, pengetahuan teknis, dan sikap profesional </span> 
          yang dibutuhkan untuk sukses di era digital
        </p>
      </div>
    </div>
  </section>
);

// ===== MAIN COMPONENT =====
const About = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const benefits = [
    {
      icon: <Award className="text-yellow-500" size={40} />,
      title: "Keterampilan Praktis",
      description: "70% pembelajaran berbasis praktik langsung di workshop dan laboratorium industri dengan standar profesional",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80"
    },
    {
      icon: <Users className="text-blue-500" size={40} />,
      title: "Link and Match",
      description: "Kurikulum yang disesuaikan dengan kebutuhan industri melalui kerja sama strategis dengan perusahaan",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      icon: <TrendingUp className="text-green-500" size={40} />,
      title: "Siap Kerja",
      description: "Lulusan langsung dapat bekerja dengan sertifikasi kompetensi yang diakui industri nasional dan internasional",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
    },
    {
      icon: <Factory className="text-purple-500" size={40} />,
      title: "Magang Industri",
      description: "Pengalaman kerja nyata di industri selama 6-12 bulan sebagai bagian integral dari kurikulum pembelajaran",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    }
  ];

  const technologies = [
    {
      icon: <Cpu className="text-blue-400" size={32} />,
      title: "Internet of Things (IoT)",
      description: "Koneksi antar perangkat untuk mengumpulkan dan bertukar data secara otomatis dalam ekosistem produksi cerdas",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
    },
    {
      icon: <Lightbulb className="text-yellow-400" size={32} />,
      title: "Artificial Intelligence",
      description: "Kecerdasan buatan untuk analisis data, prediksi, dan pengambilan keputusan otomatis yang efisien dan akurat",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      icon: <Factory className="text-purple-400" size={32} />,
      title: "Automation & Robotics",
      description: "Otomasi proses produksi dengan robot cerdas untuk meningkatkan efisiensi dan produktivitas maksimal",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
    },
    {
      icon: <Zap className="text-green-400" size={32} />,
      title: "Big Data & Cloud",
      description: "Pengolahan data besar dan penyimpanan cloud untuk analisis bisnis dan operasional yang lebih baik",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    }
  ];

  const opportunities = [
    {
      icon: <Brain className="text-purple-400" size={32} />,
      title: "Kompetensi Digital Tinggi",
      description: "Lulusan vokasi yang menguasai teknologi 4.0 memiliki nilai jual tinggi di pasar kerja global dengan gaji kompetitif",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      icon: <Rocket className="text-blue-400" size={32} />,
      title: "Peluang Wirausaha",
      description: "Teknologi digital membuka peluang berwirausaha dengan modal minimal melalui platform digital dan e-commerce",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    },
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "Sertifikasi Internasional",
      description: "Akses ke sertifikasi kompetensi internasional yang diakui di berbagai negara untuk karir global",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80"
    },
    {
      icon: <Target className="text-yellow-400" size={32} />,
      title: "Karir Beragam",
      description: "Berbagai pilihan karir di bidang teknologi, manufaktur, layanan digital, dan startup dengan prospek cerah",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
    }
  ];

  const curriculumFeatures = [
    {
      title: "Competency-Based Learning",
      desc: "Pembelajaran berbasis kompetensi yang terukur dan sesuai standar industri untuk hasil optimal",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
      title: "Project-Based Learning",
      desc: "Pendekatan pembelajaran melalui proyek nyata yang relevan dengan dunia kerja dan kebutuhan industri",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
      title: "Industry Partnership",
      desc: "Kolaborasi dengan industri untuk magang, teaching factory, dan job placement yang efektif",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
    },
    {
      title: "Digital Literacy",
      desc: "Integrasi literasi digital dalam setiap aspek pembelajaran vokasi untuk era digital",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80"
    }
  ];

  const challenges = [
    {
      title: "Kesiapan Infrastruktur Digital",
      content: "Implementasi teknologi 4.0 memerlukan infrastruktur digital yang memadai. Institusi vokasi perlu berinvestasi dalam perangkat IoT, laboratorium digital, dan koneksi internet berkecepatan tinggi untuk mendukung pembelajaran berbasis teknologi."
    },
    {
      title: "Kompetensi SDM Pengajar",
      content: "Dosen dan instruktur vokasi harus terus mengupgrade kemampuan mereka dalam teknologi digital, AI, big data, dan IoT. Pelatihan berkelanjutan dan sertifikasi industri menjadi kunci untuk memastikan kualitas pengajaran."
    },
    {
      title: "Adaptasi Kurikulum",
      content: "Kurikulum tradisional perlu ditransformasi untuk mengintegrasikan kompetensi digital, computational thinking, dan soft skills seperti critical thinking, creativity, communication, dan collaboration (4C)."
    },
    {
      title: "Kolaborasi Industri",
      content: "Membangun kemitraan yang kuat dengan industri untuk memastikan relevansi kurikulum, akses ke teknologi terkini, dan peluang magang/kerja bagi lulusan. Model teaching factory perlu diperluas."
    }
  ];

  const timelineData = [
    { era: "1.0", year: "1784", title: "Mesin Uap", desc: "Mekanisasi produksi menggunakan tenaga air dan uap", color: "from-gray-600 to-gray-800" },
    { era: "2.0", year: "1870", title: "Listrik & Produksi Massal", desc: "Produksi massal dengan bantuan listrik dan jalur perakitan", color: "from-blue-600 to-blue-800" },
    { era: "3.0", year: "1969", title: "Komputer & Otomasi", desc: "Penggunaan elektronik dan IT untuk otomasi produksi", color: "from-green-600 to-green-800" },
    { era: "4.0", year: "Sekarang", title: "Cyber-Physical Systems", desc: "Integrasi digital: IoT, AI, Big Data, Cloud Computing", color: "from-purple-600 to-pink-600" }
  ];

  const references = [
    {
      title: "Pendidikan Vokasi di Tengah Revolusi Industri 4.0",
      description: "Analisis tantangan dan peluang pendidikan vokasi dalam menghadapi era digital",
      url: "https://pnn.ac.id/pendidikan-vokasi-di-tengah-revolusi-industri-4-0-tantangan-dan-peluang/"
    },
    {
      title: "Studium General: Peluang dan Tantangan Vokasi",
      description: "Perspektif Dirjen Pendidikan Vokasi tentang masa depan pendidikan vokasi Indonesia",
      url: "https://fv.uny.ac.id/en/berita/studium-general-fakultas-vokasi-hadirkan-dirjen-pendidikan-vokasi-peluang-dan-tantangan"
    },
    {
      title: "Kurikulum Pendidikan Vokasi Era Revolusi Industri 4.0",
      description: "Studi tentang transformasi kurikulum vokasi untuk menghadapi Industry 4.0",
      url: "https://www.researchgate.net/publication/338542831_KURIKULUM_PENDIDIKAN_VOKASI_PADA_ERA_REVOLUSI_INDUSTRI_40"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <StatCard number="14K+" label="SMK di Indonesia" icon={<Factory className="text-purple-400" size={32} />} />
            <StatCard number="5M+" label="Siswa Vokasi" icon={<Users className="text-blue-400" size={32} />} />
            <StatCard number="90%+" label="Siap Kerja" icon={<TrendingUp className="text-green-400" size={32} />} />
            <StatCard number="400+" label="Program Studi" icon={<BookOpen className="text-yellow-400" size={32} />} />
          </div>
        </div>
      </section>

      {/* Benefits Carousel */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Keunggulan Pendidikan Vokasi"
            subtitle="Mengapa memilih pendidikan vokasi sebagai jalur pendidikanmu?"
            isZigzagLeft={true}
          />
          <CarouselZigzag items={benefits} type="benefit" isZigzagLeft={true} />
        </div>
      </section>

      {/* Technology Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Teknologi Revolusi Industri 4.0"
            subtitle="Era di mana teknologi digital mengubah cara kita bekerja, belajar, dan berinovasi"
            isZigzagLeft={false}
          />
          <CarouselZigzag items={technologies} type="technology" isZigzagLeft={false} />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Evolusi Revolusi Industri"
            subtitle="Perjalanan transformasi industri dari masa ke masa"
            isZigzagLeft={true}
          />
          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineData} isZigzagLeft={true} />
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Tantangan & Solusi"
            subtitle="Pendidikan vokasi menghadapi berbagai tantangan di era digital yang memerlukan strategi adaptif"
            isZigzagLeft={false}
          />
          <div className={`max-w-4xl mx-auto ${false ? 'ml-0' : 'mr-0'}`}>
            {challenges.map((challenge, index) => (
              <AccordionItem
                key={index}
                title={challenge.title}
                content={challenge.content}
                isOpen={openAccordion === index}
                onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                isZigzagLeft={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Carousel */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Peluang Karir & Masa Depan"
            subtitle="Industri 4.0 membuka peluang besar bagi lulusan pendidikan vokasi"
            isZigzagLeft={true}
          />
          <CarouselZigzag items={opportunities} type="opportunity" isZigzagLeft={true} />
        </div>
      </section>

      {/* Curriculum Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Kurikulum Pendidikan Vokasi 4.0"
            subtitle="Dirancang untuk menghasilkan lulusan yang kompeten dan siap menghadapi tantangan industri"
            isZigzagLeft={false}
          />
          <CarouselZigzag items={curriculumFeatures} type="curriculum" isZigzagLeft={false} />
        </div>
      </section>


      {/* References */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Referensi"
            subtitle="Sumber informasi dan bacaan lebih lanjut"
            isZigzagLeft={false}
          />
          <div className={`max-w-4xl mx-auto space-y-4 ${false ? 'ml-0' : 'mr-0'}`}>
            {references.map((ref, index) => (
              <ReferenceCard key={index} {...ref} isZigzagLeft={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Mengembangkan Kompetensimu?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Coba kuis interaktif kami untuk menguji pemahamanmu tentang pendidikan vokasi dan Industri 4.0
          </p>
          <a href="/interactive">
            <button className="text-lg bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
              Mulai Kuis Sekarang <ArrowRight className="inline ml-2" size={20} />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;