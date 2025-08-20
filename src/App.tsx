import React from 'react';
import { Mail, Linkedin, Github, FileText, ChevronDown, ChevronLeft, ChevronRight, Brain, Cpu, Eye, Zap, Code, Database, BarChart as ChartBar, Activity, X } from 'lucide-react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import Timeline from "./Timeline";

// Import carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import company logos
import iitKharagpurLogo from './assets/iit-kharagpur-logo.png';
import axtriaLogo from './assets/axtria-logo.png';
import virtuallyTestingLogo from './assets/virtually-testing-logo.png';


// --- Reusable Animated Counter Component ---
const AnimatedCounter = ({ to, isFloat = false }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            animate(0, to, {
                duration: 1.5,
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = isFloat ? value.toFixed(2) : Math.round(value).toString();
                    }
                },
            });
        }
    }, [isInView, to, isFloat]);
    
    const suffix = 
        to === 325 ? "/340" :
        to === 105 ? "/120" :
        to === 93 ? "%" :
        "";

    return (
        <span className="flex items-center">
            {isFloat && <span className="text-slate-400 text-sm mr-1">GPA: </span>}
            <span ref={ref} className="text-white font-semibold">{isFloat ? "0.00" : "0"}</span>
            {!isFloat && <span className="text-white font-semibold">{suffix}</span>}
            {isFloat && <span className="text-white font-semibold">/10.0</span>}
        </span>
    );
};


// --- Custom Slider Arrows ---
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next-arrow`}
            onClick={onClick}
        >
            <ChevronRight size={24} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            onClick={onClick}
        >
            <ChevronLeft size={24} />
        </div>
    );
};


const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div 
        className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="text-slate-300 leading-relaxed">{children}</div>
      </motion.div>
    </div>
  );
};


function App() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const floatingElementsRef = React.useRef<HTMLDivElement>(null);
  const [modalContent, setModalContent] = React.useState(null);
  const [isGreExpanded, setIsGreExpanded] = React.useState(false);
  const [isToeflExpanded, setIsToeflExpanded] = React.useState(false);
  const [isGateExpanded, setIsGateExpanded] = React.useState(false); // Corrected: Added missing state

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };


  React.useEffect(() => {
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

    const smoothScrollHandler = function (e: Event) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', smoothScrollHandler);
    });
    
    // Corrected: Added cleanup for all event listeners
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        anchors.forEach(anchor => {
            anchor.removeEventListener('click', smoothScrollHandler);
        });
    };
  }, []);

  const scrollToContent = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  // --- Data for Sliders ---
  const publications = [
      {
        id: 'osteoarthritis',
        status: 'To be published soon',
        statusColor: 'bg-green-500/20 text-green-300',
        meta: 'ISAI 2025 • Springer',
        title: 'Knee Osteoarthritis Detection and Categorization using Deep Learning Models',
        description: 'Achieved 80.12% accuracy in classifying knee X-ray images using the Kellgren-Lawrence grading scale, providing automated diagnosis capabilities for clinical assessment.',
        tags: ['Deep Learning', 'Medical Imaging', 'Classification'],
        details: {
            title: "Knee Osteoarthritis Detection and Categorization using Deep Learning Models",
            content: (
                <>
                <p className="mb-4">To be published in the Proceedings of ISAI (2025), Lecture Notes in Networks and Systems (Springer).</p>
                <p>This research achieved 80.12% accuracy in classifying knee X-ray images based on osteoarthritis severity using a deep learning model trained on the Kellgren-Lawrence (KL) grading scale.</p>
                </>
            )
        },
        codeLink: 'https://github.com/crimsonKn1ght/Code-OA-detection-model'
      },
      {
        id: 'osteoporosis',
        status: 'Under Review',
        statusColor: 'bg-yellow-500/20 text-yellow-300',
        meta: 'ICDSINC 2025',
        title: 'Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection',
        description: 'Novel framework achieving 88% binary and 84% multi-class classification accuracy by integrating texture features with attention mechanisms for osteoporosis detection.',
        tags: ['U-Net', 'Attention Mechanism', 'Feature Extraction'],
        details: {
            title: "Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection",
            content: (
                <>
                <p className="mb-4">Manuscript communicated with ICDSINC conference (2025).</p>
                <p>A deep learning-based binary classification model was developed for detecting knee osteoporosis from X-ray images, achieving 88% and 84% accuracy in binary and multi-class osteoporosis classification, respectively.</p>
                </>
            )
        },
        codeLink: 'https://github.com/crimsonKn1ght/Code-OP-detection-model'
      },
      {
        id: 'ctReconstruction',
        status: 'In Preparation',
        statusColor: 'bg-blue-500/20 text-blue-300',
        meta: '2025',
        title: 'End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI',
        description: 'Developing an interpretable CT reconstruction pipeline that combines high-quality image generation with explainable AI for clinical transparency and trust.',
        tags: ['CT Reconstruction', 'Explainable AI', 'Medical Imaging'],
        details: {
            title: "End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI",
            content: (
                <>
                <p className="mb-4">Manuscript in preparation for submission to a reputed peer-reviewed journal (2025).</p>
                <p>This work involves designing an end-to-end deep learning pipeline for CT image reconstruction, integrating explainable AI techniques to enhance model interpretability and trustworthiness.</p>
                </>
            )
        },
        codeLink: null
      }
  ];

  const educationHistory = [
      {
          degree: 'M.Tech in Computer Science and Engineering',
          institution: 'IIT Dhanbad',
          period: '2023 - 2025',
          gpa: 8.57,
          isFloat: true,
          status: 'Completed'
      },
      {
          degree: 'B.Tech in Electronics & Telecommunications',
          institution: 'IIEST Shibpur',
          period: '2019 - 2023',
          gpa: 7.58,
          isFloat: true,
          status: 'Completed'
      },
      {
          degree: 'Higher Secondary Certificate (XII)',
          institution: 'CBSE Board',
          period: '2019',
          gpa: 93,
          isFloat: false,
          unit: 'Percentage',
          status: 'Completed'
      },
      {
          degree: 'Secondary School Certificate (X)',
          institution: 'CBSE Board',
          period: '2017',
          gpa: 10.0,
          isFloat: true,
          unit: 'CGPA',
          status: 'Completed'
      }
  ];
  
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
    },
    cyberSecuredIndia: {
      title: "Cyber Secured India - Digital Forensics Intern",
      content: (
        <>
          <p className="mb-4">Gained practical experience in offensive and defensive security through an 8-week internship, executing real-world red and blue team operations.</p>
          <p className="mb-4">Participated in penetration testing, threat analysis, and incident response exercises as part of a hands-on cybersecurity training program.</p>
          <p>Implemented and tested defensive measures against simulated attacks, enhancing skills in network monitoring and intrusion detection.</p>
        </>
      )
    },
    sistmrAustralia: {
      title: "SISTMR Australia - Cyber Security Intern",
      content: (
        <>
        <p className="mb-4">Successfully completed an 8-week internship in cybersecurity, gaining hands-on experience with practical red team (offensive) and blue team (defensive) operations.</p>
        <p>Executed simulated cyber-attacks, performed vulnerability assessments, and contributed to defense strategy planning to enhance system security.</p>
      </>
      )
    }
  };

  const experiences = [
    {
      id: 'iitKharagpur',
      status: 'Current',
      title: 'Research Intern',
      company: 'IIT Kharagpur',
      date: 'May 2025 - Present',
      description: 'Deep Learning for Medical Imaging - CT reconstruction, U-Nets, 3D CNNs',
      icon: <Brain className="w-6 h-6 text-white" />,
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-600',
      logo: iitKharagpurLogo,
      details: experienceDetails.iitKharagpur
    },
    {
      id: 'axtria',
      status: '2024',
      title: 'Data Engineering Intern',
      company: 'Axtria',
      date: 'May 2024 - July 2024',
      description: 'Enhanced ETL pipelines, reduced latency by 18%, improved data quality',
      icon: <Database className="w-6 h-6 text-white" />,
      iconBg: 'bg-gradient-to-br from-green-500 to-teal-600',
      logo: axtriaLogo,
      details: experienceDetails.axtria
    },
    {
      id: 'virtuallyTesting',
      status: '2022',
      title: 'Security Intern',
      company: 'Virtually Testing Foundation',
      date: 'May 2022 - July 2022',
      description: 'Cybersecurity training, red/blue team exercises, vulnerability assessments',
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
      logo: virtuallyTestingLogo,
      details: experienceDetails.virtuallyTesting
    },
    {
      id: 'cyberSecuredIndia',
      status: '2022',
      title: 'Digital Forensics Intern',
      company: 'Cyber Secured India',
      date: '2022',
      description: 'Gained practical experience in offensive and defensive security, executing real-world red and blue team operations.',
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
      details: experienceDetails.cyberSecuredIndia
    },
    {
      id: 'sistmrAustralia',
      status: '2022',
      title: 'Cyber Security Intern',
      company: 'SISTMR Australia',
      date: '2022',
      description: 'Completed an 8-week internship, gaining hands-on experience with practical red team and blue team operations.',
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
      details: experienceDetails.sistmrAustralia
    }
  ];

  // --- Animation Variants ---
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const listContainerVariants = {
      visible: {
          transition: {
              staggerChildren: 0.1
          }
      }
  };

  const listItemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
  };
  
  // --- Updated Carousel Settings ---
  const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
  };

  const experienceSettings = {
        ...slickSettings,
        dots: true,
        infinite: true,       // don't loop
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,       // start with first array item
        centerMode: false,     // strict left alignment
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

      responsive: [
          {
              breakpoint: 1280,
              settings: { slidesToShow: 2 }
          },
          {
              breakpoint: 768,
              settings: { slidesToShow: 1 }
          }
      ]
  };

  const projectSettings = {
    ...slickSettings,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
          {
              breakpoint: 1024,
              settings: { slidesToShow: 1 }
          }
      ]
  };

  const publicationSettings = {
    ...slickSettings,
    centerPadding: '80px',
    slidesToShow: 1,
  };

  const educationSettings = {
    ...slickSettings,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
          {
              breakpoint: 768,
              settings: { slidesToShow: 1 }
          }
      ]
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white overflow-x-hidden font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0d1117]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Technical Expertise</a>
            <a href="#education" className="hover:text-white transition-colors">Education & Recognition</a>
            <a href="mailto:gourab.roy.aiml@gmail.com"  target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={floatingElementsRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
            <motion.div 
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl"
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6">
                <motion.span 
                    className="block text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    GOURAB
                </motion.span>
                <motion.span 
                    className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    ROY
                </motion.span>
            </h1>
          
            <motion.div 
                className="flex items-center justify-center mb-8 gap-2 sm:gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
                <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-blue-400 font-semibold text-lg md:text-xl">AI/ML</span>
                </div>
                <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-blue-400 font-semibold text-lg md:text-xl">Computer Vision Researcher</span>
                </div>            
            </motion.div>

            <motion.p 
                className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                Specializing in deep learning for computer vision, developing robust architectures for challenging environments
            </motion.p>

            <motion.div 
                className="flex justify-center space-x-6 mb-16"
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
            >
                <motion.a variants={listItemVariants} href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-6 py-3 transition-all duration-300">
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">Email</span>
                </motion.a>
                <motion.a variants={listItemVariants} href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-6 py-3 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
                </motion.a>
                <motion.a variants={listItemVariants} href="https://github.com/crimsonKn1ght/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-slate-500/20 backdrop-blur-sm border border-white/10 hover:border-slate-500/50 rounded-full px-6 py-3 transition-all duration-300">
                    <Github className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">GitHub</span>
                </motion.a>
                <motion.a variants={listItemVariants} href="/research.html" className="group flex items-center space-x-2 bg-white/5 hover:bg-purple-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 rounded-full px-6 py-3 transition-all duration-300">
                    <FileText className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    <span className="text-slate-400 group-hover:text-white transition-colors">Research</span>
                </motion.a>
            </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
            <span className="text-sm text-slate-400">Scroll to explore</span>
            <button onClick={scrollToContent} className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full flex items-center justify-center transition-all duration-300">
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </button>
        </div>
      </div>

        <main className="container mx-auto px-6">
            {/* Experience Section */}
            <motion.section
                id="experience"
                className="py-16"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6 text-white">Timeline</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    A journey across academics, research, and professional experiences
                </p>
                </div>
                <Timeline />
            </div>
            </motion.section>

          
            {/* Education Section */}
            <motion.section id="publications" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6 text-white">Research Publications</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Contributing to the advancement of AI and computer vision through peer-reviewed research</p>
                    </div>
                     <div className="relative">
                        <Slider {...publicationSettings}>
                            {publications.map(pub => (
                                <div key={pub.id} className="px-4 group">
                                    <motion.div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-colors duration-300 relative group-hover:z-20" whileHover={{ scale: 1.02, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`text-xs ${pub.statusColor} px-3 py-1 rounded-full`}>{pub.status}</span>
                                                    <span className="text-xs text-slate-400">{pub.meta}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3">{pub.title}</h3>
                                                <p className="text-slate-300 leading-relaxed mb-4">{pub.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {pub.tags.map(tag => <span key={tag} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{tag}</span>)}
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-3">
                                                <button onClick={() => openModal(pub.details)} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                                                    More details
                                                </button>
                                                {pub.codeLink ? (
                                                    <a href={pub.codeLink} target="_blank"  rel="noopener noreferrer" className="inline-flex items-center justify-center border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center">
                                                        <Github className="w-4 h-4 mr-2" />
                                                        View Code
                                                    </a>
                                                ) : (
                                                    <button className="border border-slate-600 text-slate-400 px-6 py-2 rounded-lg font-semibold cursor-not-allowed">
                                                        Code Soon
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </motion.section>

            <motion.section id="projects" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6 text-white">Featured Projects</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Open-source implementations and practical applications of AI/ML concepts</p>
                    </div>
                    <div className="relative">
                        <Slider {...projectSettings}>
                            <div className="px-4 group">
                                <motion.div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-colors duration-300 h-[340px] flex flex-col relative group-hover:z-20" whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                                            <Eye className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Live Demo</span>
                                    </div>
                                    <h3 className="flex items-center text-xl font-bold text-white mb-3">
                                      Real-Time Object Detector
                                      <span className="glowing-light ml-3"></span>
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        Web-based real-time object detection application using YOLO and TensorFlow.js.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">YOLO</span>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">TensorFlow.js</span>
                                    </div>
                                    <a href="https://github.com/crimsonkn1ght/real-time-object-detector" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto">
                                        <Github className="w-4 h-4 mr-2" />
                                        View on GitHub
                                    </a>
                                </motion.div>
                            </div>
                            <div className="px-4 group">
                                <motion.div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-colors duration-300 h-[340px] flex flex-col relative group-hover:z-20" whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                                            <ChartBar className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">ML System</span>
                                    </div>
                                    <h3 className="flex items-center text-xl font-bold text-white mb-3">
                                      Movie Recommender System
                                      <span className="glowing-light ml-3"></span>
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        Content-based filtering system that suggests movies using advanced feature extraction.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Recommendation</span>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Filtering</span>
                                    </div>
                                    <a href="https://github.com/crimsonkn1ght/movie-recommender" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto">
                                        <Github className="w-4 h-4 mr-2" />
                                        View on GitHub
                                    </a>
                                </motion.div>
                            </div>
                            <div className="px-4 group">
                                <motion.div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-colors duration-300 h-[340px] flex flex-col relative group-hover:z-20" whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                            <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">Educational</span>
                                    </div>
                                    <h3 className="flex items-center text-xl font-bold text-white mb-3">
                                      My AI/ML Implementations
                                      <span className="glowing-light ml-3"></span>
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        Collection of AI and ML models and algorithms built from scratch for learning.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">From Scratch</span>
                                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Algorithms</span>
                                    </div>
                                    <a href="https://github.com/crimsonkn1ght/my-ai-ml-codes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto">
                                        <Github className="w-4 h-4 mr-2" />
                                        View on GitHub
                                    </a>
                                </motion.div>
                            </div>
                            <div className="px-4 group">
                                <motion.div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-colors duration-300 h-[340px] flex flex-col relative group-hover:z-20" whileHover={{ scale: 1.03, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-blue-600 rounded-xl flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-xs bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Security Tool</span>
                                    </div>
                                    <h3 className="flex items-center text-xl font-bold text-white mb-3">
                                      dirStrike
                                      <span className="glowing-light ml-3"></span>
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        High-performance directory and file bruteforcing tool for web security assessments.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">Security</span>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Penetration Testing</span>
                                    </div>
                                    <a href="https://github.com/crimsonkn1ght/dirstrike" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto">
                                        <Github className="w-4 h-4 mr-2" />
                                        View on GitHub
                                    </a>
                                </motion.div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </motion.section>

            <motion.section id="skills" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                 <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6 text-white">Technical Expertise</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive skill set spanning AI/ML, software engineering, and data science</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4"><Code className="w-6 h-6 text-white" /></div>
                                <h3 className="text-xl font-bold text-white">Programming & Frameworks</h3>
                            </div>
                            <motion.div className="flex flex-wrap gap-3" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {['Python', 'C/C++', 'PyTorch', 'TensorFlow', 'Keras'].map((skill) => (
                                    <motion.span key={skill} variants={listItemVariants} className="bg-slate-700/50 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-500/50 py-2 px-4 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all duration-300">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4"><Eye className="w-6 h-6 text-white" /></div>
                                <h3 className="text-xl font-bold text-white">Data Science & Computer Vision</h3>
                            </div>
                            <motion.div className="flex flex-wrap gap-3" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'OpenCV', 'Image Reconstruction', 'Image Segmentation', 'Object Detection'].map((skill) => (
                                    <motion.span key={skill} variants={listItemVariants} className="bg-slate-700/50 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-500/50 py-2 px-4 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all duration-300">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center mr-4"><Database className="w-6 h-6 text-white" /></div>
                                <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
                            </div>
                            <motion.div className="flex flex-wrap gap-3" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {['Docker', 'Git', 'Jupyter', 'Linux', 'SQL', 'ETL'].map((skill) => (
                                    <motion.span key={skill} variants={listItemVariants} className="bg-slate-700/50 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-500/50 py-2 px-4 rounded-full text-sm font-medium text-slate-300 hover:text-white transition-all duration-300">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Awards Section */}
            <motion.section id="education" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-6 text-white">Awards & Test Scores</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Achievements in computer science and engineering</p>
                    </div>
                    <div>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-lg flex items-center justify-center mr-3"><span className="text-white text-sm">🏆</span></div>
                                    Awards & Achievements
                                </h3>
                                    <motion.div 
                                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm 
                                                border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 
                                                transition-all duration-300 w-full" 
                                    whileHover={{ scale: 1.02, y: -4 }} 
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">2025</span>
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Best Paper Award</h4>
                                    <p className="text-blue-400 font-medium mb-3">International Symposium on Artificial Intelligence</p>
                                    <p className="text-slate-300 text-sm">Recognized among 78 accepted submissions for outstanding research contribution in AI/ML</p>
                                    </motion.div>
                            </div>
                                <div>
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                    <ChartBar className="w-5 h-5 mr-3 text-blue-400" /> Test Scores
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                                    {/* GRE */}
                                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-white mb-1"><AnimatedCounter to={325} /></div>
                                    <div className="text-sm text-slate-400 mb-2">GRE Score</div>
                                    <button onClick={() => setIsGreExpanded(!isGreExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors">
                                        Click to expand
                                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isGreExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isGreExpanded && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"
                                        >
                                            <div className="pt-2 border-t border-slate-700">
                                            <div className="flex justify-between"><span>Quant:</span><span className="text-white font-semibold">167/170</span></div>
                                            <div className="flex justify-between"><span>Verbal:</span><span className="text-white font-semibold">158/170</span></div>
                                            <div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">4.0/6.0</span></div>
                                            </div>
                                        </motion.div>
                                        )}
                                    </AnimatePresence>
                                    </div>

                                    {/* TOEFL */}
                                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-white mb-1"><AnimatedCounter to={105} /></div>
                                    <div className="text-sm text-slate-400 mb-2">TOEFL Score</div>
                                    <button onClick={() => setIsToeflExpanded(!isToeflExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors">
                                        Click to expand
                                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToeflExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isToeflExpanded && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"
                                        >
                                            <div className="pt-2 border-t border-slate-700">
                                            <div className="flex justify-between"><span>Reading:</span><span className="text-white font-semibold">26/30</span></div>
                                            <div className="flex justify-between"><span>Speaking:</span><span className="text-white font-semibold">27/30</span></div>
                                            <div className="flex justify-between"><span>Listening:</span><span className="text-white font-semibold">25/30</span></div>
                                            <div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">27/30</span></div>
                                            </div>
                                        </motion.div>
                                        )}
                                    </AnimatePresence>
                                    </div>

                                    {/* GATE */}
                                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-white mb-1"><AnimatedCounter to={645} /></div>
                                    <div className="text-sm text-slate-400 mb-2">GATE Score</div>
                                    <button onClick={() => setIsGateExpanded(!isGateExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors">
                                        Click to expand
                                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isGateExpanded ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isGateExpanded && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"
                                        >
                                            <div className="pt-2 border-t border-slate-700">
                                            <div className="flex justify-between"><span>Score:</span><span className="text-white font-semibold">645 / 1000</span></div>
                                            <div className="flex justify-between"><span>All India Rank:</span><span className="text-white font-semibold">800</span></div>
                                            <div className="flex justify-between"><span>Total Candidates:</span><span className="text-white font-semibold">75,680</span></div>
                                            </div>
                                        </motion.div>
                                        )}
                                    </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </main>

        <footer className="bg-slate-900/30 border-t border-slate-800 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <Brain className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Gourab Roy</span>
                        </div>
                        <p className="text-slate-400 mb-6">
                            AI/ML researcher passionate about advancing computer vision and medical imaging through innovative deep learning solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/crimsonKn1ght/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-slate-500 text-sm">
                            © 2025 Gourab Roy. All rights reserved.
                        </p>
                        <p className="text-slate-600 text-xs mt-2">
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
