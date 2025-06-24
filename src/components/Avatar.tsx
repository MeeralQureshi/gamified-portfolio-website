import { useState } from 'react';

const Avatar: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="relative">
      {/* Rug */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-red-600 via-red-500 to-red-600 pixel-border rounded-lg"></div>
      
      {/* Avatar Sprite */}
      <div 
        className={`relative w-24 h-24 bg-gradient-to-b from-blue-400 to-blue-600 pixel-border rounded-lg cursor-pointer transition-all duration-300 animate-float ${
          isAnimating ? 'animate-bounce-glow' : ''
        }`}
        onClick={handleClick}
        style={{
          imageRendering: 'pixelated'
        }}
      >
        {/* Face */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-yellow-300 rounded-full"></div>
        
        {/* Eyes */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-1 bg-black rounded-full"></div>
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 translate-y-1 w-1 h-1 bg-black rounded-full"></div>
        
        {/* Smile */}
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-full"></div>
        
        {/* Body */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-blue-500 rounded-lg"></div>
        
        {/* Arms */}
        <div className="absolute bottom-4 left-2 w-2 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-4 right-2 w-2 h-4 bg-blue-500 rounded-full"></div>
        
        {/* Legs */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-blue-600 rounded-full"></div>
      </div>
      
      {/* Name Tag */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white pixel-border px-3 py-1 rounded">
        <span className="font-pixel text-xs text-pokemon-dark">You</span>
      </div>
      
      {/* Click hint */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-pixel text-xs text-pokemon-dark opacity-60">Click me!</p>
      </div>
    </div>
  );
};

export default Avatar; 