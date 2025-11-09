// src/components/game/tasks/SortingTask.jsx

import React, { useState } from 'react';
import { GripVertical, ArrowUp, ArrowDown } from 'lucide-react';

const SortingTask = ({ task, onSubmit, disabled }) => {
  const [items, setItems] = useState(
    task.items.map((item, index) => ({ id: index, text: item, originalIndex: index }))
  );

  const moveItem = (index, direction) => {
    if (disabled) return;
    
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setItems(newItems);
  };

  const handleSubmit = () => {
    if (!disabled) {
      const order = items.map(item => item.originalIndex);
      onSubmit(order);
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
          <span>🔄 Gunakan tombol panah untuk mengurutkan</span>
        </div>
      </div>

      {/* Sortable Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-800/50 border-2 border-gray-600 rounded-xl p-4 flex items-center gap-4 transition-all hover:border-purple-500"
          >
            {/* Drag Handle */}
            <div className="text-gray-500">
              <GripVertical size={24} />
            </div>

            {/* Order Number */}
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">{index + 1}</span>
            </div>

            {/* Item Text */}
            <div className="flex-grow text-white font-medium">
              {item.text}
            </div>

            {/* Move Buttons */}
            <div className="flex flex-col gap-1">
              <button
                onClick={() => moveItem(index, 'up')}
                disabled={disabled || index === 0}
                className={`p-1 rounded ${
                  disabled || index === 0
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <ArrowUp size={20} />
              </button>
              <button
                onClick={() => moveItem(index, 'down')}
                disabled={disabled || index === items.length - 1}
                className={`p-1 rounded ${
                  disabled || index === items.length - 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          disabled
            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white shadow-lg transform hover:scale-105'
        }`}
      >
        {disabled ? 'Menunggu...' : 'Submit Urutan'}
      </button>
    </div>
  );
};

export default SortingTask;