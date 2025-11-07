import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm text-white mt-20 border-t border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg opacity-70"></div>
                <div className="relative bg-purple-600 p-2 rounded-full">
                  <Sparkles className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold">Vokasi 4.0</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform edukasi interaktif untuk memahami pendidikan vokasi di era Revolusi Industri 4.0. 
              Menyiapkan generasi siap kerja dengan keterampilan masa depan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-purple-400 transition-colors">Beranda</a></li>
              <li><a href="/about" className="hover:text-purple-400 transition-colors">Tentang Vokasi</a></li>
              <li><a href="/interactive" className="hover:text-purple-400 transition-colors">Media Interaktif</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Mail size={18} className="text-purple-400 mt-1" />
                <span>info@vokasi40.edu</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={18} className="text-purple-400 mt-1" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-purple-400 mt-1" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vokasi 4.0. Dibuat untuk Pendidikan Indonesia.</p>
          <p className="mt-2">Sumber: Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;