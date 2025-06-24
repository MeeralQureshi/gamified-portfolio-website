import { useNavigate } from 'react-router-dom';
import { SkillCategory } from '../types';

const SkillsPage: React.FC = () => {
  const navigate = useNavigate();

  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 82, color: 'bg-green-500' },
        { name: 'Python', level: 78, color: 'bg-blue-400' },
        { name: 'SQL', level: 75, color: 'bg-purple-500' },
        { name: 'Express.js', level: 80, color: 'bg-gray-500' }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', level: 85, color: 'bg-red-500' },
        { name: 'Docker', level: 70, color: 'bg-blue-500' },
        { name: 'AWS', level: 65, color: 'bg-orange-500' },
        { name: 'Figma', level: 75, color: 'bg-purple-500' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-green-900 text-green-300 font-pixel p-4 rounded-t-lg border-b-2 border-green-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4">PC Terminal - Skills Database</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-green-800 text-green-200 font-pixel p-6 rounded-b-lg">
          <div className="mb-6">
            <h1 className="text-2xl md:text-4xl mb-2">&gt; SKILLS.EXE</h1>
            <p className="text-sm opacity-80">Loading skill database...</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-green-900 p-4 rounded-lg border border-green-600">
                <h2 className="text-lg mb-4 text-green-300">&gt; {category.name}</h2>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-green-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000`} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-green-900 p-4 rounded-lg border border-green-600">
            <h3 className="text-lg mb-2 text-green-300">&gt; SYSTEM_INFO</h3>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <p><span className="text-green-400">Experience Level:</span> Mid-Senior</p>
                <p><span className="text-green-400">Specialization:</span> Full Stack Development</p>
                <p><span className="text-green-400">Learning Status:</span> Always Active</p>
              </div>
              <div>
                <p><span className="text-green-400">Projects Completed:</span> 25+</p>
                <p><span className="text-green-400">Years Experience:</span> 3+</p>
                <p><span className="text-green-400">Certifications:</span> Multiple</p>
              </div>
            </div>
          </div>

          {/* Command Line */}
          <div className="mt-6 flex items-center">
            <span className="text-green-400 mr-2">&gt;</span>
            <span className="text-green-200">back_to_home</span>
            <button
              onClick={() => navigate('/')}
              className="ml-4 bg-green-600 text-green-100 font-pixel px-4 py-2 rounded hover:bg-green-500 transition-colors duration-300"
            >
              EXECUTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 