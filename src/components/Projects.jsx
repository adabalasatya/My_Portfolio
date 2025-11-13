import React, { useState } from 'react';

const Projects = ({ scrollToSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Margda Workplace Company Own Prjoect (CRM + LMS Platform)',
      tech: 'React, Tailwind CSS, JavaScript, REST APIs, Figma, Postman',
      link: 'https://margda-old-desgin-react-js.vercel.app/',
      category: 'professional',
      image: '/assets/margda-workplace.jpg',
      description: 'Comprehensive CRM and LMS platform with multiple interactive modules',
      features: [
        'Secure login/signup with form validation',
        'Dynamic leads management with omnichannel communication',
        'Team creation and activity tracking',
        'Google Calendar-like study scheduler',
        'HR interview module with video recording',
        'Service exchange platform for advisors',
        'Institute management with courses and fees',
        'Mart section for course purchases'
      ]
    },
    {
      title: 'Margda collaboration with Miraj Project (CRM + LMS Platform)',
      tech: 'Next JS, Tailwind CSS, JavaScript, REST APIs, Figma, Postman',
      link: 'https://margda-work-place-miraj-group-next.vercel.app/',
      category: 'professional',
      image: '/assets/margda-workplace.jpg',
      description: 'Comprehensive CRM and LMS platform with multiple interactive modules',
      features: [
        'Secure login/signup with form validation',
        'Dynamic leads management with omnichannel communication',
        'Team creation and activity tracking',
        'Google Calendar-like study scheduler',
        'HR interview module with video recording',
        'Service exchange platform for advisors',
        'Institute management with courses and fees',
        'Mart section for course purchases'
      ]
    },
    {
      title: 'Little Lemon Restaurant',
      tech: 'HTML5, CSS3, JavaScript, React',
      link: 'https://little-lemon-restuarant-website.vercel.app/',
      category: 'frontend',
      image: '/assets/little-lemon.jpg',
      description: 'Modern restaurant website with responsive design and intuitive UI',
      features: [
        'Fully responsive across all devices',
        'Modern React components',
        'Clean and appealing user interface',
        'Optimized performance',
        'Reusable component architecture'
      ]
    },
    {
      title: 'Portfolio Website',
      tech: 'HTML5, CSS3, JavaScript, React JS, TailwindCSS',
      link: 'https://portfolio-bootstrap-satya-adabalas-projects.vercel.app/',
      category: 'frontend',
      image: '/assets/portfolio.jpg',
      description: 'Dynamic portfolio showcasing modern web development skills',
      features: [
        'Bootstrap-powered responsive design',
        'Clean layouts and bold typography',
        'Smooth scrolling navigation',
        'Project showcase gallery',
        'Mobile-optimized experience'
      ]
    },
    {
      title: 'Suby (Swiggy Clone)',
      tech: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB',
      link: 'https://swiggy-clone-frontend-react.vercel.app/',
      category: 'frontend',
      image: '/assets/suby.jpg',
      description: 'Food delivery platform clone with full-stack functionality',
      features: [
        'Restaurant listing and menu display',
        'User authentication and profiles',
        'Cart and checkout system',
        'Order tracking functionality',
        'Admin dashboard for restaurant management'
      ]
    }
    
   
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'professional', name: 'Professional' },
    { id: 'frontend', name: 'Personal Project' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-purple-600 uppercase tracking-wider font-semibold mb-2">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'professional' ? 'bg-green-100 text-green-600' :
                    project.category === 'fullstack' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 font-medium mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.split(', ').map(tech => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <p className="text-xs text-gray-500 font-medium mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-purple-600 font-medium">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Live Demo
                  </a>
                  <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Arrow */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('contact')}
            className="group inline-flex flex-col items-center text-purple-600 hover:text-purple-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-sm font-medium mb-2">Get In Touch</span>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;