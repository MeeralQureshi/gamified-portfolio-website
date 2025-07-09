import React from 'react';
import { InteractiveArea as InteractiveAreaType } from '../types';

interface InteractiveAreaProps {
  area: InteractiveAreaType;
}

const InteractiveArea: React.FC<InteractiveAreaProps> = ({ area }) => {
  return (
    <a
      href={area.route || '#'}
      tabIndex={area.disabled ? -1 : 0}
      aria-disabled={area.disabled}
      className={`group block transition-transform duration-200 ${
        area.disabled ? 'opacity-50 pointer-events-none' : 'cursor-pointer'
      }`}
      style={{ pointerEvents: area.disabled ? 'none' : undefined }}
    >
      <div
        className="w-32 h-32 flex items-end justify-center bg-transparent rounded-lg shadow-lg transition-transform duration-200 group-hover:scale-110"
        style={{ imageRendering: 'pixelated' }}
      >
        <img
          src={area.sprite}
          alt={area.title}
          className="w-full h-full object-contain drop-shadow-lg pointer-events-none"
          draggable={false}
        />
      </div>
    </a>
  );
};

export default InteractiveArea; 