import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pokemon-beige to-pokemon-cream p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-pixel text-pokemon-dark mb-4">
            About Me 📚
          </h1>
          <p className="text-lg font-pixel text-pokemon-dark opacity-80">
            Welcome to my story!
          </p>
        </div>

        <div className="bg-white pixel-border rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-pixel text-pokemon-dark mb-4">Profile</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="font-pixel text-sm text-pokemon-dark w-20">Name:</span>
                  <span className="font-pixel text-sm">Your Name</span>
                </div>
                <div className="flex items-center">
                  <span className="font-pixel text-sm text-pokemon-dark w-20">Level:</span>
                  <span className="font-pixel text-sm">Developer</span>
                </div>
                <div className="flex items-center">
                  <span className="font-pixel text-sm text-pokemon-dark w-20">Type:</span>
                  <span className="font-pixel text-sm">Full Stack</span>
                </div>
                <div className="flex items-center">
                  <span className="font-pixel text-sm text-pokemon-dark w-20">Region:</span>
                  <span className="font-pixel text-sm">Earth</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-pixel text-pokemon-dark mb-4">Stats</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm font-pixel">
                    <span>Problem Solving</span>
                    <span>85/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-pixel">
                    <span>Creativity</span>
                    <span>90/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-pixel">
                    <span>Teamwork</span>
                    <span>80/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-pixel">
                    <span>Learning</span>
                    <span>95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-pixel text-pokemon-dark mb-4">Bio</h2>
            <p className="font-pixel text-sm text-pokemon-dark leading-relaxed">
              Hello! I'm a passionate developer who loves creating amazing digital experiences. 
              Just like a Pokémon trainer, I'm always learning new techniques and evolving my skills. 
              I believe in writing clean, efficient code and building applications that make a difference.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-pokemon-brown text-white font-pixel px-6 py-3 rounded-lg pixel-border hover:bg-pokemon-dark transition-colors duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 