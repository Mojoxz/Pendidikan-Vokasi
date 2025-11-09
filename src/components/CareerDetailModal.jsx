import React from 'react';
import { ExternalLink, ChevronRight, X } from 'lucide-react';

const CareerDetailModal = ({ career, onClose }) => {
  if (!career) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 border-2 border-gray-600 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Icon */}
        <div className={`h-40 bg-gradient-to-br ${career.color} flex items-center justify-center text-8xl relative`}>
          {career.icon}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-8">
          {/* Title & Description */}
          <h2 className="text-3xl font-bold text-white mb-4">{career.title}</h2>
          <p className="text-gray-200 mb-6 leading-relaxed">{career.description}</p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700 border-2 border-gray-500 p-4 rounded-lg">
              <div className="text-sm text-gray-300 mb-1">Gaji Rata-rata</div>
              <div className="text-2xl font-bold text-purple-300">{career.salary}</div>
            </div>
            <div className="bg-gray-700 border-2 border-gray-500 p-4 rounded-lg">
              <div className="text-sm text-gray-300 mb-1">Permintaan Industri</div>
              <div className="text-2xl font-bold text-green-300">{career.demand}</div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Keterampilan yang Dibutuhkan:</h3>
            <div className="flex flex-wrap gap-2">
              {career.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Job Reference Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <ExternalLink size={20} className="text-blue-400" />
              Referensi Lowongan Pekerjaan:
            </h3>
            <div className="space-y-3">
              {career.jobLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-700 hover:bg-gray-600 border-2 border-gray-500 hover:border-blue-400 rounded-lg transition-all group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ExternalLink size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-blue-300 transition-colors">
                        {link.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        Platform: {link.platform}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" size={24} />
                </a>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/50 rounded-lg">
              <p className="text-sm text-blue-200 flex items-start gap-2">
                <span className="text-lg">💡</span>
                <span>
                  <strong>Tips:</strong> Siapkan CV yang menarik, portfolio kerja, dan latih kemampuan interview sebelum melamar pekerjaan.
                </span>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition-all"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailModal;