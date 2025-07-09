import InteractiveArea from './InteractiveArea';
import { InteractiveArea as InteractiveAreaType } from '../types';
import aboutMeSprite from '../assets/aboutMeSprite.png';
import projectsSprite from '../assets/projectsSprite.png';
import skillsSprite from '../assets/skillsSprite.png';
import blogSprite from '../assets/blogSprite.png';
import contactSprite from '../assets/contactSprite.png';
import grassSprite from '../assets/grassSprite.png';
import flowerGardenSprite from '../assets/flowerGardenSprite.png';

const HomePage: React.FC = () => {
  const interactiveAreas: InteractiveAreaType[] = [
    { id: 'about', title: 'About Me', sprite: aboutMeSprite, route: '/about', disabled: false },
    { id: 'skills', title: 'Skills', sprite: skillsSprite, route: '/skills', disabled: false },
    { id: 'projects', title: 'Projects', sprite: projectsSprite, route: '/projects', disabled: false },
    { id: 'blog', title: 'Blog', sprite: blogSprite, route: '/blog', disabled: false },
    { id: 'contact', title: 'Contact', sprite: contactSprite, route: '/contact', disabled: false },
  ];

  // Pentagon layout with absolute positioning, scaled up
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${grassSprite})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    >
      <div className="relative" style={{ width: 1400, height: 900, maxWidth: '98vw', maxHeight: '90vh' }}>
        {/* Center flower garden */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={flowerGardenSprite} alt="Flower Garden" className="object-contain" style={{ width: 256, height: 256, imageRendering: 'pixelated' }} />
        </div>
        {/* About Me - top center */}
        <div style={{ position: 'absolute', left: '50%', top: '0%', transform: 'translate(-50%, 0)' }}>
          <div className="w-56 h-44">
            <InteractiveArea area={interactiveAreas[0]} />
          </div>
        </div>
        {/* Skills - upper left */}
        <div style={{ position: 'absolute', left: '17%', top: '40%', transform: 'translate(-50%, -50%)' }}>
          <div className="w-56 h-44">
            <InteractiveArea area={interactiveAreas[1]} />
          </div>
        </div>
        {/* Projects - upper right */}
        <div style={{ position: 'absolute', left: '83%', top: '40%', transform: 'translate(-50%, -50%)' }}>
          <div className="w-56 h-44">
            <InteractiveArea area={interactiveAreas[2]} />
          </div>
        </div>
        {/* Blog - lower left */}
        <div style={{ position: 'absolute', left: '28%', top: '80%', transform: 'translate(-50%, -50%)' }}>
          <div className="w-56 h-44">
            <InteractiveArea area={interactiveAreas[3]} />
          </div>
        </div>
        {/* Contact - lower right */}
        <div style={{ position: 'absolute', left: '72%', top: '80%', transform: 'translate(-50%, -50%)' }}>
          <div className="w-56 h-44">
            <InteractiveArea area={interactiveAreas[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 