import React from 'react';
import { BookOpen, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react';

const MaterialPage = ({ material, questionNumber, isCorrect, onContinue }) => {
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

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {material.topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-gray-700/50 border-2 border-gray-600 rounded-xl p-6 hover:border-purple-400 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-5xl">
                  {topic.image}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {topic.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-purple-300 mb-1">Contoh:</div>
                    {topic.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <ChevronRight size={14} className="text-purple-400" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default MaterialPage;