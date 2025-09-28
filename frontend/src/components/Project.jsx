import { useState, useEffect } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  // Load projects from embedded JSON data
  useEffect(() => {
    // Simulating JSON file structure - in a real app, this would come from a file
    const projectsData = {
      projects: [
        {
          id: 1,
          title: "CryptoCurrency Matching Machine",
          shortDesc: "A simplified crypto matching engine inspired by real-world exchanges and regulatory guidelines like REG NMS...",
          fullDesc: "This is a simplified crypto matching engine inspired by real-world exchanges and regulatory guidelines like REG NMS. It supports placing and matching various order types, maintaining order logs, and updating clients in real-time via Web Sockets. The system handles order book management, price-time priority matching, and real-time market data distribution.",
          githubLink: "https://github.com/IVINESHAJI/Cryptocurrency-Matching-Engine",
          tags: ["WebSocket", "Node.js", "Trading", "REG NMS"],
          color: "from-orange-400 to-red-500"
        },
        {
          id: 2,
          title: "Simple Web Scrapper API",
          shortDesc: "A lightweight and efficient web scraping API built with FastAPI and SQLAlchemy. This...",
          fullDesc: "A lightweight and efficient web scraping API built with FastAPI and SQLAlchemy. This API allows users to submit URLs for scraping, processes them asynchronously, and stores the results in a SQLite database.",
          githubLink: "https://github.com/IVINESHAJI/Simple-Web-Scrapper-API",
          tags: ["Encryption", "WebSocket", "Security", "Real-time"],
          color: "from-purple-400 to-pink-500"
        },
        {
          id: 3,
          title: "Encrypted Messenger",
          shortDesc: "Built a real-time, bidirectional messaging system using X25519 key exchange, AES-GCM encryption...",
          fullDesc: "Built a real-time, bidirectional messaging system using X25519 key exchange, AES-GCM encryption, and HKDF. Implemented secure identity handling, socket-based communication, and perfect forward secrecy. Added tamper detection and multi-threaded message handling for live chats. The system ensures end-to-end encryption with forward secrecy and message integrity verification.",
          githubLink: "https://github.com/IVINESHAJI/Encrypted-Messenger",
          tags: ["Encryption", "WebSocket", "Security", "Real-time"],
          color: "from-green-400 to-blue-500"
        },
        {
          id: 4,
          title: "UrbanSafe",
          shortDesc: "An innovative website built with React and Vite, aimed at providing comprehensive insights into crime rates...",
          fullDesc: "This is an innovative website built with React and Vite, aimed at providing comprehensive insights into crime rates and details across various states in India. The primary objective of the site is to serve as a resource for users seeking to understand the safety landscape in different regions of the country. Features include interactive maps, crime statistics visualization, and safety recommendations.",
          githubLink: "https://github.com/IVINESHAJI/UrbanSafe",
          tags: ["React", "Vite", "Data Visualization", "Google Looker Studio"],
          color: "from-blue-400 to-purple-500"
        }
      ]
    };

    // Set projects from the embedded data
    setProjects(projectsData.projects);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
        <br></br>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my latest projects that showcase my skills in full-stack development, 
            security, and real-time systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => openModal(project)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.shortDesc}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{project.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                {/* Click indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Click to view details
                  </span>
                  <svg 
                    className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-Optimized Premium Glassmorphism Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 animate-fade-in">
          <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/30 dark:border-gray-600/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-full max-w-sm sm:max-w-2xl lg:max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden mt-4 sm:mt-0">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-gray-700/20 rounded-3xl"></div>
            
            {/* Mobile-optimized Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-red-500/80 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 z-20 shadow-lg active:scale-95 sm:hover:scale-110 touch-manipulation"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="relative z-10 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
              {/* Header with enhanced gradient */}
              <div className={`bg-gradient-to-r ${selectedProject.color} p-4 sm:p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 drop-shadow-lg pr-8">
                    {selectedProject.title}
                  </h3>
                  <div className="w-12 sm:w-20 h-1 bg-white/50 rounded-full"></div>
                </div>
              </div>

              {/* Content with better contrast */}
              <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
                {/* Description */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center">
                    <div className="w-1 h-4 sm:h-6 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed bg-gray-50/80 dark:bg-gray-700/50 p-4 sm:p-6 rounded-lg sm:rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 flex items-center">
                    <div className="w-1 h-4 sm:h-6 bg-green-500 rounded-full mr-2 sm:mr-3"></div>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 font-medium text-xs sm:text-sm rounded-full border border-gray-200/80 dark:border-gray-600/50 backdrop-blur-sm touch-manipulation"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 active:from-gray-900 active:to-black text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 text-center flex items-center justify-center gap-2 sm:gap-3 shadow-lg active:scale-95 sm:hover:shadow-xl sm:transform sm:hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  <button
                    onClick={closeModal}
                    className="w-full bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border-2 border-gray-300/80 dark:border-gray-600/50 text-gray-700 dark:text-gray-200 py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold active:scale-95 sm:hover:bg-gray-50 dark:sm:hover:bg-gray-600/80 transition-all duration-200 touch-manipulation text-sm sm:text-base"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <br></br>
    </section>
  );
};

export default Projects;