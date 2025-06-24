import { useNavigate } from 'react-router-dom';
import { SocialLink } from '../types';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/yourusername',
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/yourusername',
      color: 'bg-blue-600 hover:bg-blue-500'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername',
      color: 'bg-blue-400 hover:bg-blue-300'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:your.email@example.com',
      color: 'bg-red-600 hover:bg-red-500'
    },
    {
      name: 'Portfolio',
      icon: '🌐',
      url: 'https://yourportfolio.com',
      color: 'bg-green-600 hover:bg-green-500'
    },
    {
      name: 'Blog',
      icon: '📝',
      url: 'https://yourblog.com',
      color: 'bg-purple-600 hover:bg-purple-500'
    }
  ];

  const handleSocialClick = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        {/* TV Console Header */}
        <div className="bg-gray-700 text-white font-pixel p-4 rounded-t-lg border-b-2 border-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4">TV Console - Contact Channels</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-800 text-white font-pixel p-6 rounded-b-lg">
          {/* TV Screen */}
          <div className="bg-blue-900 p-8 rounded-lg border-4 border-gray-600 mb-8">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl mb-4 text-blue-200">
                📺 Contact Me
              </h1>
              <p className="text-blue-300 mb-6">
                Let's connect and build something amazing together!
              </p>
              
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h3 className="text-lg mb-3 text-blue-200">Personal Info</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-blue-300">Name:</span> Your Name</p>
                    <p><span className="text-blue-300">Location:</span> Your City, Country</p>
                    <p><span className="text-blue-300">Timezone:</span> UTC+/-X</p>
                    <p><span className="text-blue-300">Available:</span> For new opportunities</p>
                  </div>
                </div>
                
                <div className="bg-blue-800 p-4 rounded-lg">
                  <h3 className="text-lg mb-3 text-blue-200">Quick Stats</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-blue-300">Response Time:</span> &lt; 24 hours</p>
                    <p><span className="text-blue-300">Languages:</span> English, [Others]</p>
                    <p><span className="text-blue-300">Work Style:</span> Remote/Hybrid</p>
                    <p><span className="text-blue-300">Availability:</span> Open to discuss</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Grid */}
          <div className="mb-8">
            <h2 className="text-xl mb-6 text-center">Connect With Me</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  className={`${social.color} text-white font-pixel p-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span>{social.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <h3 className="text-lg mb-4 text-center">Send a Message</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-600 text-white font-pixel p-3 rounded border border-gray-500 focus:border-blue-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-600 text-white font-pixel p-3 rounded border border-gray-500 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full bg-gray-600 text-white font-pixel p-3 rounded border border-gray-500 focus:border-blue-400 focus:outline-none mb-4"
            ></textarea>
            <div className="text-center">
              <button className="bg-blue-600 text-white font-pixel px-6 py-3 rounded hover:bg-blue-500 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>

          {/* Command Line */}
          <div className="mt-6 flex items-center justify-center">
            <span className="text-blue-400 mr-2">&gt;</span>
            <span className="text-blue-200">back_to_home</span>
            <button
              onClick={() => navigate('/')}
              className="ml-4 bg-blue-600 text-blue-100 font-pixel px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-300"
            >
              EXECUTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 