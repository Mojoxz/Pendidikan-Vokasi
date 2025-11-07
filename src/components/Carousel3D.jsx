import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
            <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Background Image with Overlay */}
              <div className="relative w-full h-full">
                <img 
                  src={item.image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60"></div>
                
                {/* Content */}
                <div className="relative flex flex-col items-center text-center h-full justify-center p-8 z-10">
                  <div className="mb-4 p-4 bg-purple-900/50 backdrop-blur-sm rounded-full border border-purple-500/30">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed drop-shadow-md">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 z-20 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white hover:bg-gray-700 disabled:opacity-50 transition-all"
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

export default Carousel3D;