import React from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Brain, Cpu, Eye, Zap, Code, Database, BarChart as ChartBar, Activity, X } from 'lucide-react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { TimelineDemo } from "./Timeline";
import { Marquee } from "./components/magicui/marquee";
import { cn } from "./lib/utils";
import { Carousel } from "./components/ui/carousel";
import { CometCard } from "./components/ui/comet-card";

// Animated Icons
import { ContactIcon } from "./components/ui/ContactIcon";
import { LinkedInIcon } from "./components/ui/LinkedinIcon";
import { MailsIcon } from './components/ui/MailsIcon';
import { GithubIcon } from './components/ui/GithubIcon';
import { BookmarkIcon } from './components/ui/BookmarkIcon';
import { BlocksIcon } from './components/ui/BlocksIcon';
import { BoltIcon } from './components/ui/BoltIcon';
import { StarIcon } from './components/ui/StarIcon';
import { CircleChevronDownIcon } from './components/ui/CircleChevronDownIcon';


// Import company logos
import glitchBackground from './assets/glitch-background.jpg';
import publicationImage1 from './assets/publication1.png';
import publicationImage2 from './assets/publication2.png';
import publicationImage3 from './assets/publication3.png';
import awardImage from './assets/award.png';

const skills = {
  "Programming & Frameworks": [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
  ],
  "Data Science & Computer Vision": [
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png'},
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'CNNs', icon: <Cpu/> },
    { name: 'Image Reconstruction', icon: <Cpu/> },
    { name: 'Image Segmentation', icon: <Eye/> },
    { name: 'Object Detection', icon: <Zap/> },
  ],
  "Tools & Platforms": [
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'ETL', icon: <Database/> },
  ]
};

const AnimatedCounter = ({ to, isFloat = false }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
        if (isInView) {
            animate(0, to, {
                duration: 1.5,
                onUpdate(value) {
                    if (ref.current) {
                        (ref.current as HTMLElement).textContent = isFloat ? value.toFixed(2) : Math.round(value).toString();
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
        <span className="flex items-center justify-center">
            {isFloat && <span className="text-slate-400 text-sm mr-1">GPA: </span>}
            <span ref={ref} className="text-white font-semibold">{isFloat ? "0.00" : "0"}</span>
            {!isFloat && <span className="text-white font-semibold">{suffix}</span>}
            {isFloat && <span className="text-white font-semibold">/10.0</span>}
        </span>
    );
};

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
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
        </div>,
        document.body
    );
};

const projects = [
    { name: "Real-Time Object Detector", description: "Web-based real-time object detection application using YOLO and TensorFlow.js.", tags: ["YOLO", "TensorFlow.js"], link: "https://github.com/crimsonkn1ght/real-time-object-detector", icon: <Eye className="w-6 h-6 text-white" /> },
    { name: "Movie Recommender System", description: "Content-based filtering system that suggests movies using advanced feature extraction.", tags: ["Recommendation", "Filtering"], link: "https://github.com/crimsonkn1ght/movie-recommender", icon: <ChartBar className="w-6 h-6 text-white" /> },
    { name: "My AI/ML Implementations", description: "Collection of AI and ML models and algorithms built from scratch for learning.", tags: ["From Scratch", "Algorithms"], link: "https://github.com/crimsonkn1ght/my-ai-ml-codes", icon: <Code className="w-6 h-6 text-white" /> },
    { name: "dirStrike", description: "High-performance directory and file bruteforcing tool for web security assessments.", tags: ["Security", "Penetration Testing"], link: "https://github.com/crimsonkn1ght/dirstrike", icon: <Zap className="w-6 h-6 text-white" /> },
    { name: "Image generation tool with diffusion models", description: "Image generation using huggingface models.", tags: ["huggingface models", "diffusion models"], link: "https://github.com/crimsonKn1ght/img-gen", icon: <Cpu className="w-6 h-6 text-white" /> },
    { name: "PDF OCR and summarizer", description: "Multimodal PDF Q&A Assistant that allows you to upload PDFs and ask questions about their content.", tags: ["OCR", "PDF", "Q&A"], link: "https://github.com/crimsonkn1ght/pdf-qna", icon: <BookmarkIcon className="w-6 h-6 text-white" /> }
];

const ProjectCard = ({ name, description, tags, link, icon }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <figure className={cn("relative w-80 h-full cursor-pointer overflow-hidden rounded-xl border p-4", "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]", "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]")}>
            <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <h3 className="flex items-center text-base sm:text-lg font-bold text-white mb-3">{name}</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => <span key={tag} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{tag}</span>)}
            </div>
            <div className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-auto">
                <GithubIcon className="w-4 h-4 mr-2" />
                View on GitHub
            </div>
        </figure>
    </a>
);

function App() {
    const heroRef = React.useRef<HTMLDivElement>(null);
    const floatingElementsRef = React.useRef<HTMLDivElement>(null);
    const [modalContent, setModalContent] = React.useState(null);
    const [isGreExpanded, setIsGreExpanded] = React.useState(false);
    const [isToeflExpanded, setIsToeflExpanded] = React.useState(false);
    const [isGateExpanded, setIsGateExpanded] = React.useState(false);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

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

        const smoothScrollHandler = function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScrollHandler as EventListener);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smoothScrollHandler as EventListener);
            });
        };
    }, []);

    const scrollToContent = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    const publications = [
        { id: 'osteoarthritis', image: publicationImage1, status: 'To be published soon', statusColor: 'bg-green-500/20 text-green-300', meta: 'ISAI 2025 • Springer', title: 'Knee Osteoarthritis Detection and Categorization using Deep Learning Models', description: 'Achieved 80.12% accuracy in classifying knee X-ray images using the Kellgren-Lawrence grading scale.', tags: ['Deep Learning', 'Medical Imaging', 'Classification'], details: { title: "Knee Osteoarthritis Detection and Categorization using Deep Learning Models", content: (<><p className="mb-4">To be published in the Proceedings of ISAI (2025), Lecture Notes in Networks and Systems (Springer).</p><p>This research achieved 80.12% accuracy in classifying knee X-ray images based on osteoarthritis severity using a deep learning model trained on the Kellgren-Lawrence (KL) grading scale.</p></>) }, codeLink: 'https://github.com/crimsonkn1ght/Code-OA-detection-model' },
        { id: 'osteoporosis', image: publicationImage2, status: 'Under Review', statusColor: 'bg-yellow-500/20 text-yellow-300', meta: 'ICDSINC 2025', title: 'Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection', description: 'Novel framework achieving 88% binary and 84% multi-class classification accuracy for osteoporosis detection.', tags: ['U-Net', 'Attention Mechanism', 'Feature Extraction'], details: { title: "Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection", content: (<><p className="mb-4">Manuscript communicated with ICDSINC conference (2025).</p><p>A deep learning-based binary classification model was developed for detecting knee osteoporosis from X-ray images, achieving 88% and 84% accuracy in binary and multi-class osteoporosis classification, respectively.</p></>) }, codeLink: 'https://github.com/crimsonkn1ght/Code-OP-detection-model' },
        { id: 'ctReconstruction', image: publicationImage3, status: 'In Preparation', statusColor: 'bg-blue-500/20 text-blue-300', meta: '2025', title: 'End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI', description: 'Developing an interpretable CT reconstruction pipeline that combines high-quality image generation with explainable AI.', tags: ['CT Reconstruction', 'Explainable AI', 'Medical Imaging'], details: { title: "End-to-End Deep Learning for CT Scan Reconstruction with Integrated Explainable AI", content: (<><p className="mb-4">Manuscript in preparation for submission to a reputed peer-reviewed journal (2025).</p><p>This work involves designing an end-to-end deep learning pipeline for CT image reconstruction, integrating explainable AI techniques to enhance model interpretability and trustworthiness.</p></>) }, codeLink: null }
    ];

    const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
    const secondRow = projects.slice(Math.ceil(projects.length / 2));

    const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
    const listContainerVariants = { visible: { transition: { staggerChildren: 0.1 } } };
    const listItemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="min-h-screen text-white overflow-x-hidden font-mono" style={{ backgroundImage: `url(${glitchBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="min-h-screen bg-black/80 backdrop-blur-sm">
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
                        <a href="mailto:gourab.roy.aiml@gmail.com"  target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors flex items-center">
                            <ContactIcon className="w-5 h-5 mr-2" />
                            Contact
                        </a>
                        </div>
                    </div>
                </nav>

                <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <div ref={floatingElementsRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
                        <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl" animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                        <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 md:mt-20">
                            <motion.span className="block text-white" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>GOURAB</motion.span>
                            <motion.span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>ROY</motion.span>
                        </h1>
                        <motion.div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-2 sm:gap-4 md:gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}>
                            <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2"><span className="text-sm md:text-xl text-blue-400 font-semibold">AI/ML</span></div>
                            <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-4 py-2"><span className="text-sm md:text-xl text-blue-400 font-semibold">Computer Vision Researcher</span></div>
                        </motion.div>
                        <motion.p className="text-slate-400 text-base md:text-xl mb-12 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>Specializing in deep learning for computer vision, developing robust architectures for challenging environments</motion.p>
                        <motion.div className="flex flex-wrap justify-center gap-2 sm:space-x-6 mb-32" variants={listContainerVariants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
                            <motion.a variants={listItemVariants} href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300">
                                <MailsIcon size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs sm:text-base text-slate-400 group-hover:text-white transition-colors">Email</span>
                            </motion.a>
                            <motion.a variants={listItemVariants} href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300">
                                <LinkedInIcon size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                                <span className="text-xs sm:text-base text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
                            </motion.a>
                            <motion.a variants={listItemVariants} href="https://github.com/crimsonkn1ght/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-slate-500/20 backdrop-blur-sm border border-white/10 hover:border-slate-500/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300">
                                <GithubIcon size={20} className="text-slate-400 group-hover:text-slate-300 transition-colors" />
                                <span className="text-xs sm:text-base text-slate-400 group-hover:text-white transition-colors">GitHub</span>
                            </motion.a>
                            <motion.a variants={listItemVariants} href="/research.html" className="group flex items-center space-x-2 bg-white/5 hover:bg-purple-500/20 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300">
                                <BookmarkIcon size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
                                <span className="text-xs sm:text-base text-slate-400 group-hover:text-white transition-colors">Research</span>
                            </motion.a>
                        </motion.div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
                        <span className="text-sm text-slate-400">Scroll to explore</span>
                        <button onClick={scrollToContent} className="w-10 h-10 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full flex items-center justify-center transition-all duration-300">
                            <CircleChevronDownIcon size={20} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                <main className="container mx-auto px-6">
                    <motion.section id="experience" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <TimelineDemo />
                        </div>
                    </motion.section>

                    <motion.section id="publications" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-4xl sm:text-5xl font-black mb-6 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center">
                                    <BookmarkIcon size={40} className="mr-4 text-purple-400" />
                                    Research Publications
                                </h2>
                                <p className="text-md md:text-lg text-slate-400 max-w-3xl">Contributing to the advancement of AI and computer vision through peer-reviewed research</p>
                            </div>
                            <div className="relative overflow-hidden w-full h-full py-20">
                                <Carousel slides={publications} openModal={openModal} />
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="projects" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-4xl sm:text-5xl font-black mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 pb-2">
                                    <BlocksIcon size={40} className="mr-4 text-blue-400" />
                                    Featured Projects
                                </h2>
                                <p className="text-md md:text-lg text-slate-400 max-w-3xl">Some more open-source implementations and practical applications of AI/ML concepts</p>
                            </div>
                            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                                <Marquee pauseOnHover className="[--duration:10s]">{firstRow.map((project) => (<ProjectCard key={project.name} {...project} />))}</Marquee>
                                <Marquee reverse pauseOnHover className="[--duration:10s]">{secondRow.map((project) => (<ProjectCard key={project.name} {...project} />))}</Marquee>
                                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-stone-900"></div>
                                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-stone-900"></div>
                            </div>
                        </div>
                    </motion.section>


                    <motion.section id="education" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-4xl sm:text-5xl font-black mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 pb-2">
                                    <StarIcon size={40} className="mr-4 text-yellow-400" />
                                    Awards & Test Scores
                                </h2>
                                <p className="text-md md:text-lg text-slate-400 max-w-3xl">Achievements & Test Scores</p>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 lg:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-lg flex items-center justify-center mr-3"><span className="text-white text-sm">🏆</span></div>
                                        Awards & Achievements
                                    </h3>
                                    <CometCard rotateDepth={10} translateDepth={10}>
                                        <motion.div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 w-full h-full" transition={{ type: 'spring', stiffness: 300 }}>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">2025</span>
                                                <span className="text-2xl">🏆</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2">Best Paper Award</h4>
                                            <p className="text-blue-400 font-medium mb-3">International Symposium on Artificial Intelligence</p>
                                            <p className="text-slate-300 text-sm">Recognized among 78 accepted submissions for outstanding research contribution in AI/ML</p>
                                            <img src={awardImage} alt="Award" className="mt-4 rounded-lg" />
                                        </motion.div>
                                    </CometCard>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                                        <ChartBar className="w-5 h-5 mr-3 text-blue-400" /> Test Scores
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <CometCard rotateDepth={10} translateDepth={10}>
                                            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1"><AnimatedCounter to={325} /></div>
                                                <div className="text-sm text-slate-400 mb-2">GRE Score</div>
                                                <button onClick={() => setIsGreExpanded(!isGreExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors mt-auto">Click to expand<ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isGreExpanded ? 'rotate-180' : ''}`} /></button>
                                                <AnimatePresence>{isGreExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Quant:</span><span className="text-white font-semibold">167/170</span></div><div className="flex justify-between"><span>Verbal:</span><span className="text-white font-semibold">158/170</span></div><div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">4.0/6.0</span></div></div></motion.div>)}</AnimatePresence>
                                            </div>
                                        </CometCard>
                                        <CometCard rotateDepth={10} translateDepth={10}>
                                            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                                                <div className="text-2xl sm:text-3xl font-bold text-white mb-1"><AnimatedCounter to={105} /></div>
                                                <div className="text-sm text-slate-400 mb-2">TOEFL Score</div>
                                                <button onClick={() => setIsToeflExpanded(!isToeflExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors mt-auto">Click to expand<ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isToeflExpanded ? 'rotate-180' : ''}`} /></button>
                                                <AnimatePresence>{isToeflExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Reading:</span><span className="text-white font-semibold">26/30</span></div><div className="flex justify-between"><span>Speaking:</span><span className="text-white font-semibold">27/30</span></div><div className="flex justify-between"><span>Listening:</span><span className="text-white font-semibold">25/30</span></div><div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">27/30</span></div></div></motion.div>)}</AnimatePresence>
                                            </div>
                                        </CometCard>
                                        <div className="md:col-span-2">
                                            <CometCard rotateDepth={10} translateDepth={10}>
                                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1"><AnimatedCounter to={645} /></div>
                                                    <div className="text-sm text-slate-400 mb-2">GATE Score</div>
                                                    <button onClick={() => setIsGateExpanded(!isGateExpanded)} className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mb-2 transition-colors mt-auto">Click to expand<ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isGateExpanded ? 'rotate-180' : ''}`} /></button>
                                                    <AnimatePresence>{isGateExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Score:</span><span className="text-white font-semibold">645 / 1000</span></div><div className="flex justify-between"><span>All India Rank:</span><span className="text-white font-semibold">800</span></div><div className="flex justify-between"><span>Total Candidates:</span><span className="text-white font-semibold">75,680</span></div></div></motion.div>)}</AnimatePresence>
                                                </div>
                                            </CometCard>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                                        <motion.section id="skills" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-4xl sm:text-5xl font-black mb-6 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 pb-2">
                                    <BoltIcon size={40} className="mr-4 text-yellow-400" />
                                    Technical Expertise
                                </h2>
                                <p className="text-md md:text-lg text-slate-400 max-w-3xl">My skill set spanning AI/ML, Computer Vision, and Data Science</p>
                            </div>
                            <div className="grid lg:grid-cols-3 gap-8 lg:items-start">
                                {Object.entries(skills).map(([category, skillList]) => (
                                    <CometCard key={category} rotateDepth={10} translateDepth={10}>
                                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
                                            <div className="flex items-center mb-6">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                                    {category === "Programming & Frameworks" && <Code className="w-6 h-6 text-white" />}
                                                    {category === "Data Science & Computer Vision" && <Eye className="w-6 h-6 text-white" />}
                                                    {category === "Tools & Platforms" && <Database className="w-6 h-6 text-white" />}
                                                </div>
                                                <h3 className="text-xl font-bold text-white">{category}</h3>
                                            </div>
                                            <motion.div className="grid grid-cols-2 gap-4" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                                {skillList.map((skill) => (
                                                    <motion.div key={skill.name} variants={listItemVariants} className={`flex items-center space-x-3 bg-slate-700/50 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-500/50 p-3 rounded-lg transition-all duration-300 ${skill.name.length > 15 ? 'col-span-2' : ''}`}>
                                                        {skill.logo ? <img src={skill.logo} alt={skill.name} className="w-6 h-6" /> : <div className="w-6 h-6 text-white">{skill.icon}</div>}
                                                        <span className="font-medium text-slate-300 hover:text-white transition-colors duration-300">{skill.name}</span>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </CometCard>
                                ))}
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
                                <p className="text-slate-400 mb-6">AI/ML researcher passionate about advancing computer vision and medical imaging through innovative deep learning solutions.</p>
                                <div className="flex space-x-4">
                                    <a href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><MailsIcon className="w-5 h-5" /></a>
                                    <a href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
                                    <a href="https://github.com/crimsonkn1ght/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><GithubIcon className="w-5 h-5" /></a>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-slate-500 text-sm">© 2025 Gourab Roy. All rights reserved.</p>
                                <p className="text-slate-600 text-xs mt-2">Built with React & Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <Modal isOpen={!!modalContent} onClose={closeModal} title={modalContent?.title}>{modalContent?.content}</Modal>
            </div>
        </div>
    );
}

export default App;
