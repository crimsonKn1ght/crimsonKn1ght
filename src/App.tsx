import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, FileText, ChevronDown, Brain, Cpu, Eye, Zap, Code, Database, BarChart as ChartBar, Activity, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-stone-800 border border-stone-600 rounded-2xl p-8 max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="text-gray-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};


function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const [modalContent, setModalContent] = useState(null);
  const [isGreExpanded, setIsGreExpanded] = useState(false);
  const [isToeflExpanded, setIsToeflExpanded] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) * 0.005;
      const deltaY = (clientY - centerY) * 0.005;
      
      if (floatingElementsRef.current) {
        floatingElementsRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' });
  };

  const publicationDetails = {
    osteoarthritis: {
      title: "Knee Osteoarthritis Detection and Categorization using Deep Learning Models",
      content: (
        <>
          <p className="mb-4">To be published in the Proceedings of ISAI (2025), Lecture Notes in Networks and Systems (Springer).</p>
          <p>This research achieved 80.12% accuracy in classifying knee X-ray images based on osteoarthritis severity using a deep learning model trained on the Kellgren-Lawrence (KL) grading scale.</p>
        </>
      )
    },
    osteoporosis: {
      title: "Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection",
      content: (
        <>
        <p className="mb-4">Manuscript communicated with ICDSINC conference (2025).</p>
        <p>A deep learning-based binary classification model was developed for detecting knee osteoporosis from X-ray images, achieving 88% and 84% accuracy in binary and multi-class osteoporosis classification, respectively.</p>
      </>
      )
    },
    ctReconstruction: {
      title: "End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI",
      content: (
        <>
        <p className="mb-4">Manuscript in preparation for submission to a reputed peer-reviewed journal (2025).</p>
        <p>This work involves designing an end-to-end deep learning pipeline for CT image reconstruction, integrating explainable AI techniques to enhance model interpretability and trustworthiness.</p>
      </>
      )
    }
  };
  
  const experienceDetails = {
    iitKharagpur: {
      title: "IIT Kharagpur - Research Intern",
      content: (
        <>
          <p className="mb-4">Conducting ongoing research on CT image reconstruction as part of a deep learning internship, using a parallel-beam, fan-beam, cone-beam datasets consisting of 20,000+ sinogram-image pairs to improve reconstruction quality from sparse and noisy projections, with a focus on real-world medical imaging challenges.</p>
          <p className="mb-4">Developing various deep learning architectures, including U-Nets for 2D slices and experimenting with 3D CNNs for volumetric reconstruction, to improve image quality from low-signal, noisy sinogram data.</p>
          <p>Employed a combined SSIM and MSE loss function to optimize both structural and pixel-level accuracy, achieving a test SSIM of 0.9+.</p>
        </>
      )
    },
    axtria: {
      title: "Axtria - Data Engineering Intern",
      content: (
        <p>Developed and optimized data processing workflows and ETL pipelines using Python and SQL, ensuring efficient integration, transformation, and validation of large, heterogeneous data.</p>
      )
    },
    virtuallyTesting: {
      title: "Virtually Testing Foundation - Security Intern",
      content: (
        <p>Completed 8-week hands-on training in offensive and defensive cybersecurity, applying red and blue team techniques using Python-based tools.</p>
      )
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-stone-900/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <a href="#summary" className="hover:text-white transition-colors">Research</a>
            {/* <a href="#experience" className="hover:text-white transition-colors">Experience</a> */}
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Technical Expertise</a>
            <a href="#education" className="hover:text-white transition-colors">Education & Recognition</a>
            <a href="mailto:gourab.roy.aiml@gmail.com"  target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
          {/* Research Papers */}
          <div className="absolute top-20 left-16 w-32 h-20 bg-gradient-to-br from-orange-500/20 to-amber-600/20 backdrop-blur-sm border border-orange-500/30 rounded-lg rotate-12 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex flex-col justify-between">
              <div className="w-full h-2 bg-orange-400/40 rounded"></div>
              <div className="space-y-1">
                <div className="w-3/4 h-1 bg-gray-400/40 rounded"></div>
                <div className="w-1/2 h-1 bg-gray-400/40 rounded"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-32 right-24 w-28 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-lg -rotate-6 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex flex-col items-center justify-center">
              <Eye className="w-8 h-8 text-blue-400/60 mb-2" />
              <div className="w-full h-1 bg-blue-400/40 rounded"></div>
            </div>
          </div>

          <div className="absolute bottom-32 left-32 w-36 h-24 bg-gradient-to-br from-green-500/20 to-teal-600/20 backdrop-blur-sm border border-green-500/30 rounded-lg rotate-6 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex items-center">
              <Code className="w-6 h-6 text-green-400/60 mr-3" />
              <div className="flex-1 space-y-1">
                <div className="w-full h-1 bg-green-400/40 rounded"></div>
                <div className="w-2/3 h-1 bg-green-400/40 rounded"></div>
                <div className="w-3/4 h-1 bg-green-400/40 rounded"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-16 w-24 h-28 bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg rotate-12 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex flex-col items-center justify-center">
              <Cpu className="w-8 h-8 text-purple-400/60 mb-2" />
              <ChartBar className="w-6 h-6 text-purple-400/40" />
            </div>
          </div>

          <div className="absolute bottom-20 right-32 w-30 h-22 bg-gradient-to-br from-red-500/20 to-orange-600/20 backdrop-blur-sm border border-red-500/30 rounded-lg -rotate-3 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-red-400/60" />
            </div>
          </div>

          <div className="absolute top-1/3 left-20 w-28 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg -rotate-12 transform hover:scale-105 transition-transform duration-300">
            <div className="p-3 h-full flex items-center">
              <Database className="w-6 h-6 text-yellow-400/60 mr-2" />
              <div className="flex-1 space-y-1">
                <div className="w-full h-1 bg-yellow-400/40 rounded"></div>
                <div className="w-1/2 h-1 bg-yellow-400/40 rounded"></div>
              </div>
            </div>
          </div>

          {/* Additional floating elements */}
          <div className="absolute top-16 right-1/3 w-20 h-20 bg-gradient-to-br from-indigo-500/15 to-blue-600/15 backdrop-blur-sm border border-indigo-500/25 rounded-full rotate-45 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <Zap className="w-6 h-6 text-indigo-400/60" />
          </div>

          <div className="absolute bottom-1/3 left-1/4 w-24 h-16 bg-gradient-to-br from-teal-500/15 to-green-600/15 backdrop-blur-sm border border-teal-500/25 rounded-lg rotate-8 transform hover:scale-105 transition-transform duration-300">
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="block text-white">GOURAB</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              ROY
            </span>
          </h1>
          
          <div className="flex items-center justify-center mb-8 gap-2 sm:gap-4 md:gap-6">
            <div className="border border-orange-500/50 bg-orange-500/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-orange-400 font-semibold text-lg md:text-xl">AI/ML</span>
            </div>
              
            <div className="border border-orange-500/50 bg-orange-500/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-orange-400 font-semibold text-lg md:text-xl">Computer Vision Researcher</span>
            </div>            
          </div>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Specializing in deep learning for computer vision, developing robust architectures for challenging environments
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="mailto:gourab.roy.aiml@gmail.com"
              target="_blank" rel="noopener noreferrer" 
              className="group flex items-center space-x-2 bg-white/10 hover:bg-orange-500/20 backdrop-blur-sm border border-white/20 hover:border-orange-500/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Email</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/gourab-roy/" 
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white/10 hover:bg-blue-500/20 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/crimsonKn1ght/" 
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white/10 hover:bg-gray-500/20 backdrop-blur-sm border border-white/20 hover:border-gray-500/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">GitHub</span>
            </a>
            
            <a 
              href="./research-statement" 
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm border border-white/20 hover:border-purple-500/50 rounded-full px-6 py-3 transition-all duration-300"
            >
              <FileText className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              <span className="text-gray-400 group-hover:text-white transition-colors">Research</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 flex items-center space-x-2 text-gray-400">
          <span className="text-sm hidden md:block">Scroll to explore</span>
          <button 
            onClick={scrollToContent}
            className="w-10 h-10 bg-white/10 hover:bg-orange-500/20 backdrop-blur-sm border border-white/20 hover:border-orange-500/50 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Rest of the content */}
      <main className="container mx-auto px-6">
        {/* Summary Section */}
        {/* <section id="summary" className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black mb-8 text-white leading-tight">
                  Building the Future of AI Through Vision
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Specializing in deep learning for computer vision, developing robust and interpretable architectures for challenging, data-scarce environments.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Research
                  </button>
                  <button className="border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Download CV
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Research Focus</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">Computer Vision</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Brain className="w-4 h-4 text-purple-400" />
                      </div>
                      <span className="text-gray-300">Deep Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300">Medical Imaging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building expertise across research, engineering, and security domains
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* IIT Kharagpur */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-green-400 bg-green-400/10 px-3 py-1 rounded-full">Current</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Research Intern</h3>
                <p className="text-orange-400 font-medium mb-1">IIT Kharagpur</p>
                <p className="text-sm text-gray-400 mb-4">May 2025 - Present</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Deep Learning for Medical Imaging - CT reconstruction, U-Nets, 3D CNNs
                </p>
                <button onClick={() => openModal(experienceDetails.iitKharagpur)} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">View Details &rarr;</button>
              </div>
              
              {/* Axtria */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-400/10 px-3 py-1 rounded-full">2024</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data Engineering Intern</h3>
                <p className="text-orange-400 font-medium mb-1">Axtria</p>
                <p className="text-sm text-gray-400 mb-4">May 2024 - July 2024</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Enhanced ETL pipelines, reduced latency by 18%, improved data quality
                </p>
                <button onClick={() => openModal(experienceDetails.axtria)} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">View Details &rarr;</button>
              </div>
              
              {/* Virtually Testing Foundation */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-400/10 px-3 py-1 rounded-full">2022</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Security Intern</h3>
                <p className="text-orange-400 font-medium mb-1">Virtually Testing Foundation</p>
                <p className="text-sm text-gray-400 mb-4">May 2022 - July 2022</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Cybersecurity training, red/blue team exercises, vulnerability assessments
                </p>
                <button onClick={() => openModal(experienceDetails.virtuallyTesting)} className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">View Details &rarr;</button>
              </div>
            </div>
          </div>
        </section>

         {/* Publications Section */}
        <section id="publications" className="py-16">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 text-white">
                Research Publications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Contributing to the advancement of AI and computer vision through peer-reviewed research
            </p>
            </div>
            
            <div className="space-y-8">
            {/* Publication 1 */}
            <div className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">To be published soon</span>
                    <span className="text-xs text-gray-400">ISAI 2025 • Springer</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Knee Osteoarthritis Detection and Categorization using Deep Learning Models</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                    Achieved 80.12% accuracy in classifying knee X-ray images using the Kellgren-Lawrence grading scale, providing automated diagnosis capabilities for clinical assessment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Deep Learning</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Medical Imaging</span>
                    <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Classification</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                <button onClick={() => openModal(publicationDetails.osteoarthritis)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    More details
                    </button>
                    <a href="https://github.com/crimsonKn1ght/Code-OA-detection-model" target="_blank"  rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                    </a>
                </div>
                </div>
            </div>
            
            {/* Publication 2 */}
            <div className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">Under Review</span>
                    <span className="text-xs text-gray-400">ICDSINC 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                    Novel framework achieving 88% binary and 84% multi-class classification accuracy by integrating texture features with attention mechanisms for osteoporosis detection.
                    </p>
                    <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">U-Net</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Attention Mechanism</span>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Feature Extraction</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                <button onClick={() => openModal(publicationDetails.osteoporosis)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    More details
                    </button>
                    <a href="https://github.com/crimsonKn1ght/Code-OP-detection-model" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                    </a>
                </div>
                </div>
            </div>
            
            {/* Publication 3 */}
            <div className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">In Preparation</span>
                    <span className="text-xs text-gray-400">2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                    Developing an interpretable CT reconstruction pipeline that combines high-quality image generation with explainable AI for clinical transparency and trust.
                    </p>
                    <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">CT Reconstruction</span>
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Explainable AI</span>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Medical Imaging</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                <button onClick={() => openModal(publicationDetails.ctReconstruction)} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    More details
                    </button>
                    <button className="border border-gray-600 text-gray-400 px-6 py-2 rounded-lg font-semibold cursor-not-allowed">
                    Code Soon
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>        
        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Open-source implementations and practical applications of AI/ML concepts
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Live Demo</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Object Detector</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Web-based real-time object detection application using YOLO and TensorFlow.js for browser-based AI inference.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">YOLO</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">TensorFlow.js</span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Real-time</span>
                </div>
                <a href="https://github.com/crimsonkn1ght/real-time-object-detector" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
              
              {/* Project 2 */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <ChartBar className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">ML System</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Movie Recommender System</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Content-based filtering system that suggests movies using advanced feature extraction and similarity algorithms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Recommendation</span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Content Filtering</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Python</span>
                </div>
                <a href="https://github.com/crimsonkn1ght/movie-recommender" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
              
              {/* Project 3 */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Educational</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">My AI/ML Implementations</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Collection of self-implemented AI and ML models and algorithms built from scratch for educational purposes.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">From Scratch</span>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Algorithms</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Educational</span>
                </div>
                <a href="https://github.com/crimsonkn1ght/my-ai-ml-codes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
              
              {/* Project 4 */}
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Security Tool</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">dirStrike</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  High-performance directory and file bruteforcing tool designed for comprehensive web security assessments.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">Security</span>
                  <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Penetration Testing</span>
                  <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded">CLI Tool</span>
                </div>
                <a href="https://github.com/crimsonkn1ght/dirstrike" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive skill set spanning AI/ML, software engineering, and data science
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Programming & Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'C/C++', 'PyTorch', 'TensorFlow', 'Keras'].map((skill) => (
                    <span key={skill} className="bg-stone-700/50 hover:bg-orange-500/20 border border-stone-600 hover:border-orange-500/50 py-2 px-4 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Data Science & Computer Vision</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'OpenCV', 'Image Reconstruction', 'Image Segmentation', 'Object Detection'].map((skill) => (
                    <span key={skill} className="bg-stone-700/50 hover:bg-orange-500/20 border border-stone-600 hover:border-orange-500/50 py-2 px-4 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            
              <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Docker', 'Git', 'Jupyter', 'Linux', 'SQL', 'ETL'].map((skill) => (
                    <span key={skill} className="bg-stone-700/50 hover:bg-orange-500/20 border border-stone-600 hover:border-orange-500/50 py-2 px-4 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education and Awards Section */}
        <section id="education" className="py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">
                Education & Recognition
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Academic foundation and achievements in computer science and engineering
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Completed</span>
                      <span className="text-sm text-gray-400">2023 - 2025</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">M.Tech in Computer Science and Engineering</h4>
                    <p className="font-medium text-orange-400 mb-2">IIT Dhanbad</p>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">GPA: </span>
                      <span className="text-white font-semibold ml-1">8.57/10.0</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full">Completed</span>
                      <span className="text-sm text-gray-400">2019 - 2023</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">B.Tech in Electronics & Telecommunications</h4>
                    <p className="font-medium text-orange-400 mb-2">IIEST Shibpur</p>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">GPA: </span>
                      <span className="text-white font-semibold ml-1">7.58/10.0</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full">Completed</span>
                      <span className="text-sm text-gray-400">2019</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Higher Secondary Certificate (XII)</h4>
                    <p className="font-medium text-orange-400 mb-2">CBSE Board</p>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">Percentage: </span>
                      <span className="text-white font-semibold ml-1">93%</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full">Completed</span>
                      <span className="text-sm text-gray-400">2017</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Secondary School Certificate (X)</h4>
                    <p className="font-medium text-orange-400 mb-2">CBSE Board</p>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">CGPA: </span>
                      <span className="text-white font-semibold ml-1">10.0/10.0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  Awards & Achievements
                </h3>
                
                <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-8 mb-8 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">2025</span>
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Best Paper Award</h4>
                  <p className="text-orange-400 font-medium mb-3">International Symposium on Artificial Intelligence</p>
                  <p className="text-gray-300 text-sm">
                    Recognized among 78 accepted submissions for outstanding research contribution in AI/ML
                  </p>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <ChartBar className="w-5 h-5 mr-2 text-orange-400" />
                  Test Scores
                </h4>
                <div className="grid grid-cols-2 gap-4 items-start">
                  {/* GRE Score */}
                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-1">325/340</div>
                    <div className="text-sm text-gray-400 mb-2">GRE Score</div>
                    <button onClick={() => setIsGreExpanded(!isGreExpanded)} className="text-orange-400/80 hover:text-orange-400 text-xs flex items-center justify-center w-full mb-2 transition-colors">
                      Click to expand
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isGreExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isGreExpanded && (
                      <div className="text-xs text-gray-300 space-y-1 text-left pt-2 border-t border-stone-700">
                        <div className="flex justify-between">
                          <span>Quant:</span>
                          <span className="text-white font-semibold">167/170</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Verbal:</span>
                          <span className="text-white font-semibold">158/170</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Writing:</span>
                          <span className="text-white font-semibold">4.0/6.0</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* TOEFL Score */}
                  <div className="bg-gradient-to-br from-stone-800/50 to-stone-700/50 backdrop-blur-sm border border-stone-600 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold text-white mb-1">105/120</div>
                    <div className="text-sm text-gray-400 mb-2">TOEFL Score</div>
                     <button onClick={() => setIsToeflExpanded(!isToeflExpanded)} className="text-orange-400/80 hover:text-orange-400 text-xs flex items-center justify-center w-full mb-2 transition-colors">
                      Click to expand
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToeflExpanded ? 'rotate-180' : ''}`} />
                    </button>
                    {isToeflExpanded && (
                      <div className="text-xs text-gray-300 space-y-1 text-left pt-2 border-t border-stone-700">
                        <div className="flex justify-between">
                          <span>Reading:</span>
                          <span className="text-white font-semibold">26/30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Speaking:</span>
                          <span className="text-white font-semibold">27/30</span>
                        </div>
                         <div className="flex justify-between">
                          <span>Listening:</span>
                          <span className="text-white font-semibold">25/30</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Writing:</span>
                          <span className="text-white font-semibold">27/30</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        

      </main>

      {/* Footer */}
      <footer className="bg-stone-800/30 border-t border-stone-700 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Gourab Roy</span>
              </div>
              <p className="text-gray-400 mb-6">
                AI/ML researcher passionate about advancing computer vision and medical imaging through innovative deep learning solutions.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/crimsonKn1ght/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-sm">
                © 2025 Gourab Roy. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Modal isOpen={!!modalContent} onClose={closeModal} title={modalContent?.title}>
        {modalContent?.content}
      </Modal>
    </div>
  );
}

export default App;

