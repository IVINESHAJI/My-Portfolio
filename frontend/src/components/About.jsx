import { useState } from "react";
import Image1 from "./../assets/profile.png";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React", level: 90, category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", level: 85, category: "Backend", color: "from-green-400 to-green-600" },
    { name: "Python", level: 90, category: "Programming", color: "from-yellow-400 to-yellow-600" },
    { name: "C++", level: 80, category: "Programming", color: "from-purple-400 to-purple-600" },
    { name: "Cybersecurity", level: 88, category: "Security", color: "from-red-400 to-red-600" },
    { name: "Penetration Testing", level: 85, category: "Security", color: "from-gray-400 to-gray-600" },
    { name: "Reverse Engineering", level: 60, category: "Security", color: "from-orange-400 to-orange-600" },
    { name: "CTF Challenges", level: 75, category: "Security", color: "from-indigo-400 to-indigo-600" }
  ];

  const certifications = [
    {
      name: "eJPT (Junior Penetration Tester)",
      issuer: "eLearnSecurity",
      icon: "🛡️"
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      icon: "🔒"
    }
  ];

  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 min-h-screen overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="w-34 h-24 sm:w-42 sm:h-32 md:w-50 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img src={Image1} alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-sm sm:text-xl">👨‍💻</span>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ivine Shaji Kakkanat</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-4">
            Cybersecurity Enthusiast & Software Developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-16">
          
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 dark:border-gray-700/50 shadow-lg">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3 sm:mr-4"></div>
                About Me
              </h2>
              
              <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-sm sm:text-base">
                  A passionate <strong>fourth-year BTech Computer Science student</strong> at Vellore Institute of Technology with a strong focus on <strong className="text-blue-600 dark:text-blue-400">cybersecurity and software development</strong>.
                </p>
                
                <p className="text-sm sm:text-base">
                  I enjoy working at the intersection of <strong className="text-purple-600 dark:text-purple-400">technology and security</strong>, where I build secure applications and analyze vulnerabilities through penetration testing and reverse engineering.
                </p>
                
                <p className="text-sm sm:text-base">
                  Over the years, I've gained hands-on experience in solving Capture-the-Flag (CTF) challenges on platforms like <strong className="text-green-600 dark:text-green-400">TryHackMe, Hack The Box, and picoCTF</strong>, which sharpened my problem-solving and ethical hacking skills.
                </p>
                
                <p className="text-sm sm:text-base">
                  Beyond security, I also love <strong className="text-indigo-600 dark:text-indigo-400">software engineering</strong>—designing and developing applications using <strong>React, Node.js, Python, and C++</strong>. My interest lies in building <strong>scalable, secure, and user-friendly solutions</strong> that tackle real-world challenges.
                </p>
                
                <p className="text-sm sm:text-base">
                  When I'm not coding or hunting vulnerabilities, I enjoy exploring <strong className="text-orange-600 dark:text-orange-400">reverse engineering, experimenting with AI applications in security</strong>, and contributing to the cybersecurity community.
                </p>
                
                <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 dark:text-white border-l-4 border-blue-500 pl-3 sm:pl-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-r-lg py-2">
                  I believe in <strong>continuous learning, collaboration, and pushing my boundaries</strong> to grow both as a developer and a cybersecurity professional.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Stats */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Certifications */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🏆</span>
                Certifications
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200/50 dark:border-green-700/50">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-0.5">{cert.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white break-words">{cert.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Status Cards */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/50 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🏆</span>
                Live Status Cards
              </h3>
              
            <div className="space-y-4 sm:space-y-6">
            
              {/* TryHackMe Badge */}
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-green-200/50 dark:border-green-700/50">
                <div className="flex items-center mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🎯</span>
                  <span className="font-bold text-base sm:text-lg text-green-600 dark:text-green-400">TryHackMe</span>
                  <div className="ml-auto w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
            
                <div className="flex justify-center overflow-hidden">
                  <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3132940"
                    style={{ border: "none", maxHeight: "200px" }}
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-w-full h-auto"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>


                {/* LeetCode Card */}
                <div className="group relative bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/30 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-orange-200/50 dark:border-orange-700/50">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3">💻</span>
                    <span className="font-bold text-base sm:text-lg text-orange-600 dark:text-orange-400">LeetCode</span>
                    <div className="ml-auto w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-center overflow-hidden">
                    <img 
                      src="https://leetcard.jacoblin.cool/IVINE_SHAJI?theme=unicorn&extension=activity" 
                      alt="LeetCode Stats" 
                      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 max-w-full h-auto"
                      style={{ maxHeight: '200px' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Stats loading...</span>
                    </div>
                  </div>
                </div>

                {/* Other Platforms - Hack The Box & picoCTF */}
                {/* <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center">
                        <span className="text-xl sm:text-2xl mr-2">📦</span>
                        <span className="font-bold text-base sm:text-lg text-green-500">Hack The Box</span>
                      </div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="text-center p-2 bg-white/60 dark:bg-gray-600/30 rounded-lg">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">Hacker</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Rank</div>
                      </div>
                      <div className="text-center p-2 bg-white/60 dark:bg-gray-600/30 rounded-lg">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">25</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Machines</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center">
                        <span className="text-xl sm:text-2xl mr-2">🏁</span>
                        <span className="font-bold text-base sm:text-lg text-blue-600">picoCTF</span>
                      </div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="text-center p-2 bg-white/60 dark:bg-gray-600/30 rounded-lg">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">8500+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Score</div>
                      </div>
                      <div className="text-center p-2 bg-white/60 dark:bg-gray-600/30 rounded-lg">
                        <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">75+</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Challenges</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 dark:border-gray-700/50 shadow-lg mb-8 sm:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between items-start sm:items-center mb-2 gap-2">
                  <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400 whitespace-nowrap">
                      {skill.category}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left ${hoveredSkill === index ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                    style={{ 
                      width: `${skill.level}%`,
                      transform: hoveredSkill === index ? 'scaleX(1)' : 'scaleX(0.8)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center flex items-center justify-center">
              <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🎓</span>
              My Journey
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-yellow-400 via-blue-500 via-purple-500 to-green-500 rounded-full shadow-sm"></div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* Born */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg z-20 flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="ml-12 sm:ml-20 flex-1 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-xl p-4 sm:p-6 border border-yellow-200/50 dark:border-yellow-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🌟</span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Born</h4>
                        <p className="text-yellow-700 dark:text-yellow-300 font-semibold text-base sm:text-lg">2004</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">The beginning of the journey!</p>
                  </div>
                </div>

                {/* Primary & Secondary Education */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg z-20 flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 sm:ml-20 flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-4 sm:p-6 border border-blue-200/50 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 mt-1">🏫</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Primary & Secondary School</h4>
                        <p className="text-blue-700 dark:text-blue-300 font-semibold text-base sm:text-lg mb-1">KG1 to 10th Grade</p>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">2008 - 2020</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base break-words">The Emirates National School, Sharjah</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative flex items-start">
                  <div className="absolute left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg z-20 flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 sm:ml-20 flex-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-4 sm:p-6 border border-purple-200/50 dark:border-purple-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 mt-1">📚</span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Higher Secondary Education</h4>
                        <p className="text-purple-700 dark:text-purple-300 font-semibold text-base sm:text-lg mb-1">11th to 12th Grade</p>
                        <p className="text-purple-600 dark:text-purple-400 font-medium text-sm sm:text-base">2020 - 2022</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base break-words">Chavara Public School, Pala</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current - BTech */}
                <div className="relative flex items-start">
                  <div className="absolute left-1 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-xl z-20 flex items-center justify-center animate-pulse border-2 border-white dark:border-gray-800">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-ping"></div>
                  </div>
                  <div className="ml-10 sm:ml-20 flex-1 min-w-0 max-w-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-3 sm:p-6 border-2 border-green-300/50 dark:border-green-600/50 shadow-lg hover:shadow-xl sm:hover:scale-105 transition-all duration-300 ring-2 ring-green-200/30 dark:ring-green-700/30">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 gap-2">
                      <div className="flex items-start min-w-0 flex-1">
                        <span className="text-xl sm:text-3xl mr-2 sm:mr-3 mt-1 flex-shrink-0">🎯</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Bachelor of Technology</h4>
                          <p className="text-green-700 dark:text-green-300 font-semibold text-sm sm:text-lg mb-1 break-words">Computer Science & Engineering</p>
                          <p className="text-green-600 dark:text-green-400 font-medium text-xs sm:text-base">2022 - Present</p>
                          <p className="text-gray-600 dark:text-gray-400 mt-2 text-xs sm:text-base break-words">Vellore Institute of Technology, Vellore</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 sm:px-3 py-1 rounded-full font-semibold animate-pulse whitespace-nowrap self-start">Current</span>
                    </div>
                    <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3 text-sm">
                      <div className="bg-white/70 dark:bg-gray-600/40 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                        <div className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">4th Year</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Current Status</div>
                      </div>
                      <div className="bg-white/70 dark:bg-gray-600/40 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm">
                        <div className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white">2026</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Expected Grad</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Future - Dotted */}
                {/* <div className="relative flex items-start opacity-60">
                  <div className="absolute left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full z-20 flex items-center justify-center border-3 border-gray-300 dark:border-gray-600 border-dashed">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="ml-12 sm:ml-20 flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 rounded-xl p-4 sm:p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:opacity-80 transition-all duration-300">
                    <div className="flex items-start mb-2 sm:mb-3">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">🚀</span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-400">Next Chapter</h4>
                        <p className="text-gray-500 dark:text-gray-500 font-semibold text-base sm:text-lg">Career in Cybersecurity & Development</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-400 dark:text-gray-600">The journey continues...</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
