import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveArea from './InteractiveArea';
import { InteractiveArea as InteractiveAreaType } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const interactiveAreas: InteractiveAreaType[] = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn about my journey',
      icon: '📚',
      position: 'top-4 left-1/4',
      route: '/about',
      type: 'bookshelf'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'My technical abilities',
      icon: '💻',
      position: 'top-1/3 right-4',
      route: '/skills',
      type: 'pc-terminal'
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'See my work',
      icon: '🚪',
      position: 'bottom-1/3 left-4',
      route: '/projects',
      type: 'door'
    },
    {
      id: 'blog',
      title: 'Blog',
      description: 'Coming soon...',
      icon: '📖',
      position: 'bottom-4 left-1/4',
      route: null,
      type: 'bookshelf',
      disabled: true
    },
    {
      id: 'contact',
      title: 'Contact',
      description: 'Get in touch',
      icon: '📺',
      position: 'bottom-1/3 right-4',
      route: '/contact',
      type: 'tv-console'
    }
  ];

  const handleAreaClick = (area: InteractiveAreaType): void => {
    if (area.disabled) return;
    if (area.route) {
      navigate(area.route);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden room-wall">
      {/* Room Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pokemon-beige via-pokemon-cream to-pokemon-warm opacity-80"></div>
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pokemon-brown to-pokemon-warm pixel-border"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Interactive Areas */}
        <div className="relative w-full max-w-6xl h-96 md:h-[500px]">
          {interactiveAreas.map((area) => (
            <InteractiveArea
              key={area.id}
              area={area}
              isHovered={hoveredArea === area.id}
              onHover={() => setHoveredArea(area.id)}
              onLeave={() => setHoveredArea(null)}
              onClick={() => handleAreaClick(area)}
            />
          ))}
        </div>

        {/* Hover Info */}
        {hoveredArea && (
          <div className="fixed top-4 right-4 bg-pokemon-dark text-white p-4 rounded pixel-border animate-fade-in z-50">
            <h3 className="font-pixel text-sm mb-1">
              {interactiveAreas.find(a => a.id === hoveredArea)?.title}
            </h3>
            <p className="font-pixel text-xs opacity-80">
              {interactiveAreas.find(a => a.id === hoveredArea)?.description}
            </p>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-pokemon-warm pixel-border opacity-60"></div>
      <div className="absolute top-8 right-8 w-12 h-12 bg-pokemon-beige pixel-border opacity-60"></div>
      <div className="absolute bottom-20 left-12 w-8 h-8 bg-pokemon-dark pixel-border opacity-40"></div>
      <div className="absolute bottom-20 right-12 w-10 h-10 bg-pokemon-warm pixel-border opacity-40"></div>
    </div>
  );
};

export default HomePage; 