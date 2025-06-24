import { useNavigate } from 'react-router-dom';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      color: 'bg-green-500'
    },
    {
      id: 2,
      name: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      status: 'In Progress',
      color: 'bg-yellow-500'
    },
    {
      id: 3,
      name: 'Portfolio Website',
      description: 'This very website - a gamified portfolio with Pokémon theme',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      status: 'Completed',
      color: 'bg-blue-500'
    },
    {
      id: 4,
      name: 'Weather Dashboard',
      description: 'A weather application with interactive maps and forecasts',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      status: 'Completed',
      color: 'bg-purple-500'
    },
    {
      id: 5,
      name: 'Social Media Clone',
      description: 'A social media platform with posts, comments, and user profiles',
      technologies: ['React', 'Firebase', 'Material-UI'],
      status: 'Planning',
      color: 'bg-red-500'
    },
    {
      id: 6,
      name: 'AI Chat Bot',
      description: 'An intelligent chatbot using natural language processing',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      status: 'In Progress',
      color: 'bg-indigo-500'
    }
  ];

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Planning': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pokemon-beige to-pokemon-cream p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-pixel text-pokemon-dark mb-4">
            My Projects 🚪
          </h1>
          <p className="text-lg font-pixel text-pokemon-dark opacity-80">
            Explore the doors to my creations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white pixel-border rounded-lg p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-4 h-4 ${project.color} rounded-full`}></div>
                <span className={`px-2 py-1 rounded-full text-xs font-pixel ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-lg font-pixel text-pokemon-dark mb-2">
                {project.name}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-pokemon-dark opacity-80 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-pokemon-warm text-pokemon-dark text-xs font-pixel rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Button */}
              <button className="w-full bg-pokemon-brown text-white font-pixel py-2 rounded hover:bg-pokemon-dark transition-colors duration-300">
                View Project
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white pixel-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-pixel text-pokemon-dark mb-4">Project Statistics</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-pixel text-pokemon-dark">6</div>
              <div className="text-sm font-pixel text-pokemon-dark opacity-80">Total Projects</div>
            </div>
            <div>
              <div className="text-2xl font-pixel text-green-600">3</div>
              <div className="text-sm font-pixel text-pokemon-dark opacity-80">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-pixel text-yellow-600">2</div>
              <div className="text-sm font-pixel text-pokemon-dark opacity-80">In Progress</div>
            </div>
            <div>
              <div className="text-2xl font-pixel text-blue-600">1</div>
              <div className="text-sm font-pixel text-pokemon-dark opacity-80">Planning</div>
            </div>
          </div>
        </div>

        {/* Back Button */}
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

export default ProjectsPage; 