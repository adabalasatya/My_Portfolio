import React from 'react';

const SkillsSection = ({ scrollToSection }) => {
  const skills = {
    frontend: [
      { name: "HTML", level: "Experienced", icon: "🔷" },
      { name: "CSS", level: "Experienced", icon: "🎨" },
      { name: "Bootstrap CSS", level: "Intermediate", icon: "⚡" },
      { name: "Tailwind CSS", level: "Intermediate", icon: "💨" },
      { name: "MaterialUI", level: "Intermediate", icon: "📦" },
      { name: "ChakraUI", level: "Intermediate", icon: "⚡" },
      { name: "SASS", level: "Intermediate", icon: "💎" },
      { name: "JavaScript", level: "Intermediate", icon: "🟨" },
      { name: "React JS", level: "Intermediate", icon: "⚛️" },
      { name: "Next JS", level: "Intermediate", icon: "▲" },
      { name: "Vite JS", level: "Intermediate", icon: "⚡" },
      { name: "UX & UI Design", level: "Intermediate", icon: "🎯" }
    ],
    backend: [
      { name: "Version Control", level: "Intermediate", icon: "📚" },
      { name: "Node JS", level: "Basic", icon: "🟢" },
      { name: "Express JS", level: "Intermediate", icon: "🚂" },
      { name: "Mongo DB", level: "Intermediate", icon: "🍃" },
      { name: "State Management", level: "Intermediate", icon: "🔄" },
      { name: "APIs", level: "Intermediate", icon: "🔗" },
      { name: "Database Management", level: "Intermediate", icon: "🗄️" },
      { name: "Middleware", level: "Intermediate", icon: "⚙️" },
      { name: "Git & GitHub", level: "Intermediate", icon: "🐙" },
      { name: "Testing Debugging", level: "Intermediate", icon: "🐛" }
    ]
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Experienced': return 'from-green-500 to-emerald-600';
      case 'Intermediate': return 'from-blue-500 to-purple-600';
      case 'Basic': return 'from-orange-400 to-red-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-blue-100/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-2">My Technical Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
              Frontend Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.frontend.map((skill, index) => (
                <div key={skill.name} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className={`w-16 h-2 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}></div>
                        <span className={`text-xs font-medium ${
                          skill.level === 'Experienced' ? 'text-green-600' :
                          skill.level === 'Intermediate' ? 'text-blue-600' : 'text-orange-600'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-3"></span>
              Backend Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.backend.map((skill, index) => (
                <div key={skill.name} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                        {skill.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className={`w-16 h-2 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}></div>
                        <span className={`text-xs font-medium ${
                          skill.level === 'Experienced' ? 'text-green-600' :
                          skill.level === 'Intermediate' ? 'text-blue-600' : 'text-orange-600'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Arrow */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex flex-col items-center text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-sm font-medium mb-2">View Projects</span>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;