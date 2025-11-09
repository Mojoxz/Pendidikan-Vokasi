// src/components/game/tasks/MultipleChoiceTask.jsx

import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const MultipleChoiceTask = ({ task, onSubmit, disabled }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption !== null && !disabled) {
      onSubmit(selectedOption);
    }
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-gray-800/50 border-2 border-purple-500/30 rounded-xl p-6">
        <h3 className="text-xl text-white font-bold mb-2">
          {task.question}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>💡 Pilih jawaban yang paling tepat</span>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {task.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !disabled && setSelectedOption(index)}
            disabled={disabled}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selectedOption === index
                ? 'bg-purple-600 border-purple-400 text-white shadow-lg scale-105'
                : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-purple-500 hover:bg-gray-700'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedOption === index
                  ? 'border-white bg-white/20'
                  : 'border-gray-500'
              }`}>
                <span className="font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <span className="font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={selectedOption === null || disabled}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          selectedOption === null || disabled
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg transform hover:scale-105'
        }`}
      >
        {disabled ? 'Menunggu...' : 'Submit Jawaban'}
      </button>
    </div>
  );
};

export default MultipleChoiceTask;