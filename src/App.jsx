import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Brain, Users, Award, Calendar, ArrowRight, Menu, X, Shield, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const skills = {
    "Languages": ["Java", "JavaScript", "HTML5", "CSS3", "Python"],
    "Frameworks": ["React.js", "Node.js", "Express.js", "Solidity"],
    "Databases & Tools": ["MySQL", "MongoDB", "Git", "Docker", "Jenkins", "AWS"],
    "Concepts": ["OOP", "DSA", "SDLC", "RESTful APIs", "Agile & Scrum", "Blockchain"]
  };

  const projects = [
    {
      title: "Intrusion Detection System",
      tech: "Python, Scapy, MongoDB, ML (Random Forest)",
      description: "Built a real-time IDS to capture live TCP packets and detect anomalies using machine learning algorithms.",
      features: ["Real-time packet capture", "ML-based anomaly detection", "Improved analysis accuracy"]
    },
    {
      title: "Blockchain Car Pooling System",
      tech: "Solidity, Truffle, Ganache, Ethereum",
      description: "Developed an Ethereum-based ride-sharing platform with secure, transparent ride bookings through smart contracts.",
      features: ["Smart contract integration", "Ethereum blockchain", "Secure ride booking"]
    },
    {
      title: "Travelling Chatbot Assistance",
      tech: "React.js, Node.js, Google Maps API",
      description: "Created an intelligent chatbot leveraging Google Maps API for personalized travel planning and assistance.",
      features: ["Google Maps integration", "Hotel booking", "Geolocation suggestions"]
    }
  ];

  const experience = [
    {
      title: "Cybersecurity Intern",
      company: "Jt Wisdom Technology Pvt. Ltd",
      period: "Jul – Aug 2023",
      description: "Analyzed and implemented encryption protocols, enhancing data security efficiency by 35%. Monitored network traffic and identified 20+ suspicious activities.",
      achievements: ["35% security improvement", "20+ threat detections", "Network monitoring"]
    },
    {
      title: "Web Development Intern",
      company: "Internshala",
      period: "Jun – Jul 2023",
      description: "Designed and deployed responsive webpages using HTML, CSS, and JavaScript with optimized performance across devices.",
      achievements: ["Responsive design", "UI/UX optimization", "Cross-device compatibility"]
    }
  ];

  const certifications = [
    "NVIDIA: Getting Started with AI on Jetson Nano",
    "IBM SkillsBuild: Data Virtualization Internship",
    "Mastercard Forage: Cybersecurity Virtual Experience",
    "Power BI Simulation, Advanced Software Engineering",
    "LinkedIn Learning: Sustainability Foundations",
    "Blockchain and Full-Stack Certifications"
  ];

  const leadership = [
    "Documentation & Finance Head - FAMT Students Council (2023-25)",
    "Hackathon CC & ACM Member - FAMT IT Department (2023-24)",
    "DLLE Student Member - Mumbai University Extension Cell (2023-24)"
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 100 ? 'bg-gray-900/90 backdrop-blur-lg shadow-xl border-b border-blue-800' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Rutuja Deshmukh
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${activeSection === item
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-blue-800/50 hover:text-blue-300 hover:shadow-md'
                      }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-blue-800/50 hover:bg-blue-700/50 inline-flex items-center justify-center p-2 rounded-xl text-blue-300 hover:text-blue-200 transition-all duration-300 hover:scale-105"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-blue-800 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:bg-blue-800/50 hover:text-blue-300 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300 hover:scale-105"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-purple-500/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rutuja Deshmukh
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light">
              Information Technology Engineer
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-400 mb-8 font-medium">
              Full-Stack Developer | Cybersecurity & Blockchain Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 text-sm sm:text-base">
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <MapPin size={20} className="mr-2 text-blue-400" />
                Khatav, Maharashtra
              </div>
              <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Phone size={20} className="mr-2 text-blue-400" />
                +91 8605384340
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://drive.google.com/file/d/13u4xTvjC7VDPT3bruwrNTUGsHPjGkAre/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/rutuja1308"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-purple-400 border-2 border-purple-500 hover:border-purple-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              >
                <Linkedin size={20} className="mr-2 group-hover:animate-bounce" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400 hover:text-blue-300 transition-colors duration-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Detail-oriented and motivated IT Engineer with hands-on experience in full-stack development,
                cybersecurity, and blockchain. Proven ability to build and deploy scalable applications,
                mitigate threats, and drive impactful project outcomes.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Strong leadership in student organizations with a commitment to lifelong learning and team collaboration.
                Passionate about creating innovative solutions that make a real-world impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-900/50 hover:bg-blue-800/50 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-blue-800/50">
                  <Shield size={32} className="mx-auto mb-2 text-blue-400 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base text-gray-200">Cybersecurity</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Threat detection and network security</p>
                </div>
                <div className="bg-purple-900/50 hover:bg-purple-800/50 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-purple-800/50">
                  <Code size={32} className="mx-auto mb-2 text-purple-400 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base text-gray-200">Full-Stack Dev</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Modern web technologies and frameworks</p>
                </div>
                <div className="bg-pink-900/50 hover:bg-pink-800/50 p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group border border-pink-800/50">
                  <Brain size={32} className="mx-auto mb-2 text-pink-400 group-hover:animate-pulse" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base text-gray-200">Blockchain</h3>
                  <p className="text-xs sm:text-sm text-gray-400">Ethereum and smart contract development</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-base sm:text-lg text-gray-200">Bachelor of Engineering - Information Technology</h4>
                  <p className="text-blue-400 text-sm sm:text-base">Finolex Academy of Management & Technology</p>
                  <p className="text-gray-400 text-xs sm:text-sm">University of Mumbai • May 2025</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-sm sm:text-base text-gray-200">Higher Secondary School Certificate (HSC)</h4>
                  <p className="text-purple-400 text-sm">Sadguru Gadge Maharaj Junior College, Karad</p>
                  <p className="text-gray-400 text-xs sm:text-sm">85.50% • June 2021</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4 hover:pl-6 transition-all duration-300">
                  <h4 className="font-bold text-sm sm:text-base text-gray-200">Secondary School Certificate (SSC)</h4>
                  <p className="text-pink-400 text-sm">Chhatrapati Shivaji Maharaj Highschool, Vaduj</p>
                  <p className="text-gray-400 text-xs sm:text-sm">89.40% • June 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="bg-gray-800/70 hover:bg-gray-700/70 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-700/50">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">{category}</h3>
                <div className="space-y-3">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm sm:text-base">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-800/50">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-purple-400">Soft Skills & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-blue-400">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {["Communication", "Team Leadership", "Problem Solving", "Time Management"].map((skill) => (
                    <span key={skill} className="bg-blue-800/50 hover:bg-blue-700/50 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4 text-purple-400">Achievements</h4>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">🏆 Gold Medalist in Kho-Kho at intercollegiate tournaments</p>
                  <p className="text-gray-300 text-sm">🏆 Gold Medalist in Dodgeball at intercollegiate tournaments</p>
                  <p className="text-gray-300 text-sm">📚 Consistent academic performer with 85% in SSC and HSC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="bg-gray-800/80 hover:bg-gray-700/80 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-gray-700/50 hover:border-blue-600/50">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
                </div>
                <p className="text-purple-400 text-xs sm:text-sm mb-3 font-medium">{project.tech}</p>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={16} className="text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-8 mb-16">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800/70 hover:bg-gray-700/70 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-blue-600/50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-lg sm:text-xl text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                    <Calendar size={20} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <span key={achIndex} className="bg-blue-800/50 hover:bg-blue-700/50 text-blue-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-blue-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Certifications */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-800/50">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-purple-400 flex items-center">
                <Users size={24} className="mr-2" />
                Leadership & Activities
              </h3>
              <div className="space-y-3">
                {leadership.map((role, index) => (
                  <div key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-400 flex items-center">
                <Award size={24} className="mr-2" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.slice(0, 4).map((cert, index) => (
                  <div key={index} className="flex items-start hover:translate-x-1 transition-transform duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{cert}</span>
                  </div>
                ))}
                <p className="text-gray-400 text-sm italic">+ 2 more certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on innovative AI/ML projects or discuss opportunities in full-stack development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="text-center p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 group border border-gray-700/50">
                <div className="w-16 h-16 bg-blue-900/50 hover:bg-blue-800/70 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Mail size={32} className="text-blue-400 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <a href="mailto:naikvedant82@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">
                  rutujadeshmukh267@gmail.com
                </a>
              </div>

              <div className="text-center p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group border border-gray-700/50">
                <div className="w-16 h-16 bg-purple-900/50 hover:bg-purple-800/70 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Phone size={32} className="text-purple-400 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                <a href="tel:+919503657153" className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base">
                  +91 8605384340
                </a>
              </div>

              <div className="text-center p-6 bg-gray-800/50 hover:bg-gray-800/70 rounded-2xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105 group sm:col-span-2 lg:col-span-1 border border-gray-700/50">
                <div className="w-16 h-16 bg-pink-900/50 hover:bg-pink-800/70 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
                  <Linkedin size={32} className="text-pink-400 group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">LinkedIn</h3>
                <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors text-sm sm:text-base">
                  rutu1308
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4 hover:scale-105 transition-transform duration-300">
                <MapPin size={24} className="text-blue-400 mr-2" />
                <span className="text-gray-300 text-base sm:text-lg">Satara, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              © 2025 Rutuja Deshmukh. Crafted with passion for innovation in AI & ML.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom hover animations */
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .group:hover .group-hover\\:animate-bounce {
          animation: bounce 1s infinite;
        }
        
        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: 0.875rem;
          }
        }
        
        /* Enhanced mobile responsiveness */
        @media (max-width: 768px) {
          .hero-spacing {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio; 
