import React from 'react';
import { InteractiveArea as InteractiveAreaType } from '../types';

interface InteractiveAreaProps {
  area: InteractiveAreaType;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: (area: InteractiveAreaType) => void;
}

const InteractiveArea: React.FC<InteractiveAreaProps> = ({ 
  area, 
  isHovered, 
  onHover, 
  onLeave, 
  onClick 
}) => {
  const getAreaStyle = (): string => {
    const baseClasses = `absolute ${area.position} interactive-area transition-all duration-300`;
    const hoverClasses = isHovered ? 'scale-110 brightness-110' : '';
    const disabledClasses = area.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${hoverClasses} ${disabledClasses}`;
  };

  const renderAreaContent = (): React.JSX.Element => {
    switch (area.type) {
      case 'bookshelf':
        return (
          <div className="w-20 h-16 bg-gradient-to-b from-pokemon-brown to-pokemon-dark pixel-border rounded-lg relative">
            {/* Books */}
            <div className="absolute inset-1 flex flex-col gap-1">
              <div className="w-full h-2 bg-red-500 rounded-sm"></div>
              <div className="w-full h-2 bg-blue-500 rounded-sm"></div>
              <div className="w-full h-2 bg-green-500 rounded-sm"></div>
              <div className="w-full h-2 bg-yellow-500 rounded-sm"></div>
            </div>
            {/* Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
              {area.icon}
            </div>
          </div>
        );
      
      case 'pc-terminal':
        return (
          <div className="w-24 h-16 bg-gradient-to-b from-gray-600 to-gray-800 pixel-border rounded-lg relative">
            {/* Screen */}
            <div className="absolute inset-2 bg-green-900 rounded-sm">
              <div className="absolute inset-1 bg-green-700 rounded-sm flex items-center justify-center">
                <span className="text-green-300 text-xs font-pixel">PC</span>
              </div>
            </div>
            {/* Buttons */}
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
            {/* Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
              {area.icon}
            </div>
          </div>
        );
      
      case 'door':
        return (
          <div className="w-16 h-20 bg-gradient-to-b from-pokemon-brown to-pokemon-dark pixel-border rounded-lg relative">
            {/* Door panels */}
            <div className="absolute inset-2 border-2 border-pokemon-warm rounded-sm">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pokemon-warm rounded-full"></div>
            </div>
            {/* Handle */}
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-2 h-4 bg-yellow-500 rounded-full"></div>
            {/* Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
              {area.icon}
            </div>
          </div>
        );
      
      case 'tv-console':
        return (
          <div className="w-28 h-16 bg-gradient-to-b from-gray-700 to-gray-900 pixel-border rounded-lg relative">
            {/* TV Screen */}
            <div className="absolute inset-2 bg-blue-900 rounded-sm">
              <div className="absolute inset-1 bg-blue-700 rounded-sm flex items-center justify-center">
                <span className="text-blue-300 text-xs font-pixel">TV</span>
              </div>
            </div>
            {/* Antenna */}
            <div className="absolute -top-2 left-2 w-1 h-2 bg-gray-600"></div>
            <div className="absolute -top-2 right-2 w-1 h-2 bg-gray-600"></div>
            {/* Icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
              {area.icon}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="w-16 h-16 bg-gradient-to-b from-pokemon-warm to-pokemon-brown pixel-border rounded-lg relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-2xl">
              {area.icon}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={getAreaStyle()}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => onClick(area)}
    >
      {renderAreaContent()}
      
      {/* Label */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-pixel text-xs text-pokemon-dark whitespace-nowrap">
          {area.title}
        </p>
      </div>
      
      {/* Hover glow effect */}
      {isHovered && !area.disabled && (
        <div className="absolute inset-0 bg-yellow-300 opacity-20 rounded-lg animate-pulse"></div>
      )}
    </div>
  );
};

export default InteractiveArea; 