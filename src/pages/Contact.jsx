import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, BookOpen, ExternalLink } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. (Demo - tidak benar-benar terkirim)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const references = [
    {
      title: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      url: "https://www.kemdikbud.go.id/",
      description: "Portal resmi Kemendikbudristek RI"
    },
    {
      title: "Direktorat Jenderal Pendidikan Vokasi",
      url: "https://vokasi.kemdikbud.go.id/",
      description: "Informasi lengkap tentang pendidikan vokasi di Indonesia"
    },
    {
      title: "Sistem Informasi SMK",
      url: "https://datapokok.ditpsmk.net/",
      description: "Database SMK dan program keahlian se-Indonesia"
    },
    {
      title: "Making Indonesia 4.0",
      url: "https://www.kemenperin.go.id/",
      description: "Roadmap implementasi Industri 4.0 di Indonesia"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-blue-900/95"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
            <span className="text-sm font-semibold">📞 Hubungi Kami</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kontak & Referensi
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ada pertanyaan? Kami siap membantu Anda memahami lebih lanjut tentang pendidikan vokasi
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Mari Berdiskusi!</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Kami terbuka untuk pertanyaan, saran, dan kolaborasi terkait pengembangan 
                  pendidikan vokasi di Indonesia.
                </p>
              </div>

              <Card className="p-6 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@vokasi40.edu</p>
                    <p className="text-sm text-gray-500">Respon dalam 1-2 hari kerja</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Phone className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                    <p className="text-sm text-gray-500">Senin - Jumat, 08:00 - 17:00 WIB</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="text-secondary" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">Jakarta Pusat, DKI Jakarta</p>
                    <p className="text-sm text-gray-500">Indonesia 10110</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  <Send className="inline mr-2" size={20} />
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <BookOpen className="text-primary" size={40} />
            </div>
            <h2 className="section-title">Sumber & Referensi</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Pelajari lebih lanjut dari sumber-sumber terpercaya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {references.map((ref, index) => (
              <Card key={index} className="p-6 hover:scale-105">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{ref.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{ref.description}</p>
                <a 
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors"
                >
                  Kunjungi Website <ExternalLink className="ml-2" size={16} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Bergabunglah dengan Revolusi Pendidikan!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Mari bersama-sama membangun masa depan pendidikan vokasi Indonesia yang lebih baik
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/interactive">
              <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">
                Coba Kuis Interaktif
              </Button>
            </a>
            <a href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Pelajari Lebih Lanjut
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;