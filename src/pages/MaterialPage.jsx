import React, { useState } from 'react';
import { BookOpen, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react';

const MaterialPage = ({ material, questionNumber, isCorrect, onContinue }) => {
  const [activeTopicId, setActiveTopicId] = useState(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-purple-500 rounded-2xl p-8 md:p-12 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-block mb-4 p-4 rounded-full ${
            isCorrect ? 'bg-green-500/20' : 'bg-blue-500/20'
          }`}>
            <Lightbulb className={isCorrect ? 'text-green-400' : 'text-blue-400'} size={48} />
          </div>
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">
              Materi Pembelajaran #{questionNumber}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">{material.title}</h1>
          <p className="text-gray-300 text-lg">{material.description}</p>
        </div>

        {/* Topics Grid - Now Interactive */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-purple-400" size={20} />
            <h3 className="text-xl font-bold text-white">
              Topik Pembelajaran
            </h3>
            <span className="text-sm text-gray-400">(Klik untuk melihat detail)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {material.topics.map((topic, index) => (
            <div 
              key={index}
              onClick={() => setActiveTopicId(activeTopicId === topic.name ? null : topic.name)}
              className={`cursor-pointer rounded-xl p-6 transition-all duration-300 border-2 ${
                activeTopicId === topic.name
                  ? 'bg-purple-600 border-purple-400 scale-105 shadow-xl'
                  : 'bg-gray-700/50 border-gray-600 hover:border-purple-400 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-5xl">
                  {topic.image}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${
                    activeTopicId === topic.name ? 'text-white' : 'text-white group-hover:text-purple-300'
                  }`}>
                    {topic.name}
                  </h3>
                  <p className={`text-sm mb-3 leading-relaxed ${
                    activeTopicId === topic.name ? 'text-purple-100' : 'text-gray-300'
                  }`}>
                    {topic.description}
                  </p>
                  <div className="space-y-1">
                    <div className={`text-xs font-semibold mb-1 ${
                      activeTopicId === topic.name ? 'text-purple-200' : 'text-purple-300'
                    }`}>
                      Contoh:
                    </div>
                    {topic.examples.map((example, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm ${
                        activeTopicId === topic.name ? 'text-purple-100' : 'text-gray-400'
                      }`}>
                        <ChevronRight size={14} className={activeTopicId === topic.name ? 'text-purple-200' : 'text-purple-400'} />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detail Content when Active */}
              {activeTopicId === topic.name && topic.detailContent && (
                <div className="mt-4 pt-4 border-t border-purple-400 animate-fadeIn">
                  <p className="text-sm text-purple-50 leading-relaxed">
                    <span className="font-bold text-purple-200">Detail: </span>
                    {topic.detailContent}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Points */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-purple-300" size={24} />
            <h3 className="text-xl font-bold text-white">Poin Penting yang Harus Diingat</h3>
          </div>
          <div className="space-y-3">
            {material.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  {index + 1}
                </div>
                <p className="text-gray-200 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <BookOpen className="inline mr-2" size={20} />
            Lanjutkan Quiz →
          </button>
          <p className="text-gray-400 text-sm mt-3">
            Klik untuk melanjutkan ke pertanyaan berikutnya
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MaterialPage;