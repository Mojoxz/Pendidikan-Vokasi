import React, { useState } from 'react';
import { X, CheckCircle, BookOpen, Lightbulb } from 'lucide-react';
import MateriTopicCard from './MateriTopicCard';

const MateriDetailModal = ({ materi, onClose }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  if (!materi) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 border-2 border-gray-600 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Icon */}
        <div className={`h-40 bg-gradient-to-br ${materi.color} flex items-center justify-center text-8xl relative`}>
          {materi.icon}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
          >
            <X className="text-white" size={24} />
          </button>
        </div>

        <div className="p-8">
          {/* Title & Description */}
          <div className="text-center mb-8">
            <div className="inline-block mb-3 px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">
              <BookOpen className="inline mr-1" size={14} />
              Materi Pembelajaran
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">{materi.title}</h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
              {materi.description}
            </p>
          </div>

          {/* Topics Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-400" size={24} />
              <h3 className="text-2xl font-bold text-white">
                Topik Pembelajaran
              </h3>
              <span className="text-sm text-gray-400">
                (Klik untuk melihat detail)
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {materi.topics.map((topic) => (
                <MateriTopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => setActiveTopic(activeTopic === topic.id ? null : topic.id)}
                  isActive={activeTopic === topic.id}
                />
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-purple-300" size={24} />
              <h3 className="text-xl font-bold text-white">Poin Penting yang Harus Diingat</h3>
            </div>
            <div className="space-y-3">
              {materi.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-200 leading-relaxed">{point}</p>
                </div>
              ))}
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

export default MateriDetailModal;