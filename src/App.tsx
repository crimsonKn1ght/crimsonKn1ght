import React from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Brain, Cpu, Eye, Zap, Code, Database, BarChart as ChartBar, Activity, X, Star, GitFork, ExternalLink, FileText } from 'lucide-react';
import { motion, useInView, animate, AnimatePresence } from 'motion/react';
import { TimelineDemo } from "./Timeline";
import { Boxes } from "./components/ui/boxes";
import { BackgroundGradient } from "./components/ui/background-gradient";

// Animated Icons
import { ContactIcon } from "./components/ui/ContactIcon";
import { LinkedInIcon } from "./components/ui/LinkedinIcon";
import { MailsIcon } from './components/ui/MailsIcon';
import { GithubIcon } from './components/ui/GithubIcon';
import { BookmarkIcon } from './components/ui/BookmarkIcon';
import { BlocksIcon } from './components/ui/BlocksIcon';
import { BoltIcon } from './components/ui/BoltIcon';
import { StarIcon } from './components/ui/StarIcon';
import { AtomIcon } from './components/ui/AtomIcon';


// Import company logos
import publicationImage1 from './assets/publication1.webp';
import publicationImage2 from './assets/publication2.webp';
import astraqVlImage from './assets/astraq-vl.webp';
import awardImage from './assets/award.webp';
import kaggleMedalImage from './assets/kaggle-medal.webp';
import speakerCertImage from './assets/speaker-certificate.webp';
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import badge1 from './assets/badge1.webp';
import badge2 from './assets/badge2.webp';
import badge5 from './assets/badge5.webp';

const skills = {
  "Programming & Frameworks": [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C/C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Async Programming', icon: <Zap/> },
  ],
  "LLMs, RAG & Agents": [
    { name: 'LangGraph', icon: <Cpu/> },
    { name: 'Multi-agent Systems', icon: <Brain/> },
    { name: 'RAG', icon: <Database/> },
    { name: 'Hybrid/Vector Search', icon: <Database/> },
    { name: 'Semantic Reranking', icon: <ChartBar/> },
    { name: 'Cross-Encoders', icon: <Cpu/> },
    { name: 'Azure AI Search', icon: <Database/> },
    { name: 'FAISS', icon: <Database/> },
    { name: 'SBERT', icon: <Cpu/> },
    { name: 'LLM Streaming', icon: <Zap/> },
  ],
  "Data Science & Computer Vision": [
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png'},
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'CNNs & U-Net', icon: <Cpu/> },
    { name: 'Attention (CBAM)', icon: <Brain/> },
    { name: 'Medical Imaging', icon: <Activity/> },
    { name: 'Image Reconstruction', icon: <Cpu/> },
    { name: 'Segmentation & Classification', icon: <Eye/> },
    { name: 'Time-Series Forecasting', icon: <ChartBar/> },
  ],
  "Tools & Platforms": [
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    { name: 'PySpark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
    { name: 'Databricks', icon: <Database/> },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
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
  {
    name: "AstraQ-VL: Astronomy Vision-Language Model",
    description: "Two-stage LLaVA-style VLM for astronomy: Stage 1 aligns frozen CLIP ViT-L/14 features with Qwen2.5-1.5B-Instruct via a ~3.9M-parameter connector; Stage 2 adds visual instruction tuning with rank-16 LoRA adapters. Trained on 161,653 caption/QA records from NASA APOD, ESO, and Hubble, with reproducible checkpoints and model cards.",
    tags: ["VLM", "LoRA", "CLIP", "Astronomy"],
    repo: "crimsonKn1ght/astraq-vl",
    extraLinks: [
      { label: "Zenodo Preprint", url: "https://zenodo.org/records/21284851" },
      { label: "Stage-1 Weights", url: "https://huggingface.co/grKnight/astraq-vl-stage1" },
      { label: "Stage-2 Weights", url: "https://huggingface.co/grKnight/astraq-vl-stage2" },
    ],
    icon: <AtomIcon size={20} className="text-white" />
  },
  {
    name: "Vision-Language Model (Frozen Encoder Alignment)",
    description: "LLaVA-style Stage-1 feature alignment bridging a frozen CLIP ViT-B/32 encoder and a frozen Qwen2.5-0.5B LLM with a lightweight trainable MLP connector — training only ~1.49M of ~582M params on the full LLaVA-ReCap corpus (~558K samples).",
    tags: ["VLM", "CLIP", "Qwen2.5", "PyTorch"],
    repo: "crimsonKn1ght/vlm-model",
    extraLinks: [{ label: "Weights (HF)", url: "https://huggingface.co/grKnight/vlm-basic-connector-full/tree/main" }],
    icon: <Eye className="w-5 h-5 text-white" />
  },
  {
    name: "LLM Chat Agent",
    description: "Full-stack conversational AI: a React/TypeScript client and an async FastAPI + LangGraph backend with LLM-driven query routing, sub-query decomposition, hand-rolled NDJSON token streaming, resumable sessions, and optional web-search grounding.",
    tags: ["LangGraph", "FastAPI", "Streaming", "Agents"],
    repo: "crimsonKn1ght/llm-app-agent-data-science_v1",
    extraLinks: [{ label: "Frontend", url: "https://github.com/crimsonKn1ght/llm-app-agent-frontend_v1" }],
    icon: <Cpu className="w-5 h-5 text-white" />
  },
  {
    name: "Scalable RAG System",
    description: "Hybrid retrieval pipeline with semantic reranking, vector deduplication, and semantic routing across multi-index stores (OpenAI or local SBERT embeddings), plus advanced query formulation — Multi-query, RAG-Fusion, HyDE, CRAG, and Self-RAG.",
    tags: ["RAG", "SBERT", "Hybrid Search", "Reranking"],
    repo: "crimsonKn1ght/rag-llm",
    icon: <ChartBar className="w-5 h-5 text-white" />
  },
  {
    name: "AI-Powered Document Q&A",
    description: "End-to-end document Q&A with hybrid TF-IDF + FAISS retrieval, multi-format parsing (PDF, DOCX, TXT), a Tesseract OCR pipeline for scanned images, and LLaMA-based generation via the Groq API.",
    tags: ["FAISS", "OCR", "Groq", "Q&A"],
    repo: "crimsonKn1ght/docqnatool",
    icon: <BookmarkIcon className="w-5 h-5 text-white" />
  },
  {
    name: "Movie Recommender System",
    description: "Full-stack hybrid collaborative-filtering recommender with a Python backend and React frontend, containerized with Docker and deployed via a GitHub Actions CI/CD pipeline.",
    tags: ["Recommender", "Docker", "CI/CD", "React"],
    repo: "crimsonKn1ght/movie-recommender",
    icon: <Code className="w-5 h-5 text-white" />
  }
];

const ProjectCard = ({ name, description, tags, repo, icon, extraLinks = [] }) => {
  const [stats, setStats] = React.useState({ stars: 0, forks: 0 });

  React.useEffect(() => {
    const cacheKey = `gh_${repo}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setStats(JSON.parse(cached));
      return;
    }
    fetch(`https://api.github.com/repos/${repo}`)
      .then(res => res.json())
      .then(data => {
        if (data && !data.message) {
          const result = { stars: data.stargazers_count, forks: data.forks_count };
          sessionStorage.setItem(cacheKey, JSON.stringify(result));
          setStats(result);
        }
      })
      .catch(err => console.error("Error fetching repo stats:", err));
  }, [repo]);

  return (
    <figure className="h-full flex flex-col rounded-xl border border-slate-700 bg-slate-800/60 p-4 hover:border-blue-500/50 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug">{name}</h3>
      </div>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map(tag => (
          <span key={tag} className="text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-3 border-t border-slate-700/60">
        <div className="flex justify-between items-center">
          <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-blue-400 font-semibold hover:text-blue-300 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
            View on GitHub
          </a>
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 mr-1" />
              <span>{stats.stars}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="w-3.5 h-3.5 mr-1" />
              <span>{stats.forks}</span>
            </div>
          </div>
        </div>
        {extraLinks.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
            {extraLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[11px] text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </figure>
  );
};

const PublicationCard = ({ pub, openModal }) => (
  <div className="h-full flex flex-col rounded-xl border border-slate-700 bg-slate-800/60 overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
    <div className="relative h-28 w-full shrink-0">
      <img loading="lazy" src={pub.image} alt={pub.title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
      <span className={`absolute top-2 left-2 text-[11px] px-2 py-0.5 rounded-full border border-white/10 ${pub.statusColor}`}>
        {pub.status}
      </span>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-1.5">{pub.meta}</p>
      <h3 className="text-sm font-bold text-white leading-snug mb-2">{pub.title}</h3>
      <p className="text-xs text-slate-300 leading-relaxed mb-3">{pub.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {pub.tags.map((tag) => (
          <span key={tag} className="text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        <button
          onClick={() => openModal(pub.details)}
          className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md font-semibold transition-colors"
        >
          Details
        </button>
        {pub.paperLink && (
          <a
            href={pub.paperLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs border border-blue-500/60 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 px-3 py-1.5 rounded-md font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" />
            {pub.paperLink.label}
          </a>
        )}
        {pub.codeLink && (
          <a
            href={pub.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white px-3 py-1.5 rounded-md font-semibold transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const CredentialRow = ({ title, image, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-700/40 transition-colors group">
        <img loading="lazy" src={image} alt={title} className="w-9 h-9 object-contain shrink-0" />
        <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors flex-grow">{title}</span>
        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 shrink-0" />
    </a>
);

const AwardCard = ({ chip, chipColor, emoji, title, org, description, image }) => (
    <div className="h-full flex flex-col bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-colors duration-300">
        <div className="flex items-center justify-between mb-2">
            <span className={`text-[11px] px-2.5 py-0.5 rounded-full ${chipColor}`}>{chip}</span>
            <span className="text-lg">{emoji}</span>
        </div>
        <h4 className="text-base font-bold text-white mb-1">{title}</h4>
        <p className="text-blue-400 text-xs font-medium mb-2">{org}</p>
        <p className="text-slate-300 text-xs leading-relaxed">{description}</p>
        {image && <img loading="lazy" src={image} alt={title} className="mt-3 rounded-md h-32 w-full object-cover object-top" />}
    </div>
);

function App() {
    const floatingElementsRef = React.useRef<HTMLDivElement>(null);
    const [modalContent, setModalContent] = React.useState(null);
    const [isGreExpanded, setIsGreExpanded] = React.useState(false);
    const [isToeflExpanded, setIsToeflExpanded] = React.useState(false);
    const [isGateExpanded, setIsGateExpanded] = React.useState(false);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    React.useEffect(() => {
        let rafId = 0;
        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const deltaX = (clientX - centerX) * 0.005;
                const deltaY = (clientY - centerY) * 0.005;
                if (floatingElementsRef.current) {
                    floatingElementsRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
                }
            });
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
            cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smoothScrollHandler as EventListener);
            });
        };
    }, []);

    const publications = [
        { id: 'osteoarthritis', image: publicationImage1, status: 'Published • Best Paper', statusColor: 'bg-green-500/20 text-green-300', meta: 'ISAI 2025 • Springer LNNS', title: 'Knee Osteoarthritis Detection and Categorization using Deep Learning Models', description: 'Achieved 80.46% accuracy in classifying knee X-ray images using the Kellgren-Lawrence grading scale.', tags: ['Deep Learning', 'Medical Imaging', 'Classification'], paperLink: { url: 'https://link.springer.com/chapter/10.1007/978-981-96-9239-2_9', label: 'Springer' }, details: { title: "Knee Osteoarthritis Detection and Categorization using Deep Learning Models", content: (<><p className="mb-4">Published in the Proceedings of ISAI 2025, Lecture Notes in Networks and Systems (Springer), and awarded one of three Best Paper Awards out of 78 accepted submissions.</p><p className="mb-4">This research achieved 80.46% accuracy in classifying knee X-ray images based on osteoarthritis severity using a deep learning model trained on the Kellgren-Lawrence (KL) grading scale.</p><a href="https://link.springer.com/chapter/10.1007/978-981-96-9239-2_9" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Read on Springer →</a></>) }, codeLink: 'https://github.com/crimsonkn1ght/Code-OA-detection-model' },
        { id: 'osteoporosis', image: publicationImage2, status: 'Accepted', statusColor: 'bg-green-500/20 text-green-300', meta: 'ICADCML 2026', title: 'Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection', description: 'Novel framework achieving 88% binary and 84% multi-class classification accuracy for osteoporosis detection.', tags: ['U-Net', 'Attention Mechanism', 'Feature Extraction'], details: { title: "Texture-based Feature Extraction and CBAM-Enhanced U-Net for Automated Knee Osteoporosis Detection", content: (<><p className="mb-4">Accepted at the International Conference on Advances in Distributed Computing and Machine Learning (ICADCML 2026).</p><p>A deep learning-based binary classification model was developed for detecting knee osteoporosis from X-ray images, achieving 88% and 84% accuracy in binary and multi-class osteoporosis classification, respectively.</p></>) }, codeLink: 'https://github.com/crimsonkn1ght/Code-OP-detection-model' },
        { id: 'astraqVl', image: astraqVlImage, status: 'Preprint', statusColor: 'bg-blue-500/20 text-blue-300', meta: 'Independent Research • Zenodo', title: 'AstraQ-VL: Efficient Astronomy Vision-Language Model with Frozen Encoder Alignment and LoRA Instruction Tuning', description: 'LLaVA-style astronomy VLM aligning frozen CLIP ViT-L/14 features with Qwen2.5-1.5B-Instruct, extended with LoRA-based visual instruction tuning.', tags: ['Vision-Language Models', 'Multimodal Learning', 'LoRA'], paperLink: { url: 'https://zenodo.org/records/21284851', label: 'Preprint' }, details: { title: "AstraQ-VL: Efficient Astronomy Vision-Language Model", content: (<><p className="mb-4">Independent research project: a LLaVA-style astronomy VLM built by aligning frozen CLIP ViT-L/14 features with Qwen2.5-1.5B-Instruct using a 3.9M-parameter connector, then extending to Stage-2 visual instruction tuning with LoRA adapters.</p><p className="mb-4">Trained on 161,653 caption/QA records with a 591-image held-out split; released reproducible checkpoints and model cards, with a held-out validation-loss improvement from 1.60 to 1.452 in Stage 2.</p><a href="https://zenodo.org/records/21284851" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Zenodo Preprint →</a></>) }, codeLink: 'https://github.com/crimsonKn1ght/astraq-vl' }
    ];

    const certificates = [
        { title: "Machine Learning with Python (With Honors Project)", image: img1, link: "https://www.coursera.org/account/accomplishments/verify/UERHBGUT34WG" },
        { title: "Machine Learning Specialization", image: img2, link: "https://www.coursera.org/account/accomplishments/specialization/YE8JF8JRUZTG" }
    ];

    const badges = [
        { title: "Python Essentials 1", image: badge1, link: "https://www.credly.com/badges/7d07660e-cf20-491d-93cc-d0acbe46a66f" },
        { title: "Machine Learning with Python", image: badge2, link: "https://www.credly.com/badges/9eb4689d-3724-464d-8396-7c07e6728f8b" },
        { title: "Data Analytics Essentials", image: badge5, link: "https://www.credly.com/badges/d0f5445b-37ee-482a-a3af-5300d98a817a" }
    ];

    const sectionVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
    const listContainerVariants = { visible: { transition: { staggerChildren: 0.08 } } };
    const listItemVariants = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="min-h-screen text-white overflow-x-hidden relative bg-[#0d1117]">
            <Boxes className="fixed inset-0 w-full h-full z-0" />

            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-[#0d1117]/80 backdrop-blur-sm border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-base font-bold">Gourab Roy</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-6 text-sm text-slate-300">
                        <a href="#experience" className="hover:text-white transition-colors">Experience & Education</a>
                        <a href="#publications" className="hover:text-white transition-colors">Publications</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#education" className="hover:text-white transition-colors">Awards & Test Scores</a>
                        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                        <a href="mailto:gourab.roy.aiml@gmail.com"  target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-white transition-colors flex items-center text-sm">
                            <ContactIcon className="w-4 h-4 mr-1.5" />
                            Contact
                        </a>
                        </div>
                    </div>
                </nav>

                {/* Hero Section — compact intro band */}
                <section id="hero" className="relative z-10 px-6 pt-32 pb-14 text-center max-w-5xl mx-auto">
                    <div ref={floatingElementsRef} className="absolute inset-0 transition-transform duration-1000 ease-out pointer-events-none">
                        <motion.div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl" animate={{ y: [0, 20, 0], x: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
                        <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
                        <motion.span className="text-white" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>GOURAB </motion.span>
                        <motion.span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}>ROY</motion.span>
                    </h1>
                    <motion.div className="flex flex-wrap items-center justify-center mb-5 gap-2" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}>
                        <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-3 py-1"><span className="text-xs sm:text-sm text-blue-400 font-semibold">Machine Learning Engineer</span></div>
                        <div className="border border-blue-500/50 bg-blue-500/10 backdrop-blur-sm rounded-full px-3 py-1"><span className="text-xs sm:text-sm text-blue-400 font-semibold">Computer Vision Researcher</span></div>
                    </motion.div>
                    <motion.p className="text-slate-400 text-sm md:text-base mb-7 max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}>Building multi-agent LLM systems, RAG pipelines, and deep learning models for medical imaging — published researcher with production exposure across LLM orchestration and real-time streaming workflows</motion.p>
                    <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-3" variants={listContainerVariants} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
                        <motion.a variants={listItemVariants} href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-4 py-2 transition-all duration-300">
                            <MailsIcon size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-xs sm:text-sm text-slate-400 group-hover:text-white transition-colors">Email</span>
                        </motion.a>
                        <motion.a variants={listItemVariants} href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-blue-500/20 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-full px-4 py-2 transition-all duration-300">
                            <LinkedInIcon size={16} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-xs sm:text-sm text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
                        </motion.a>
                        <motion.a variants={listItemVariants} href="https://github.com/crimsonkn1ght/" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-2 bg-white/5 hover:bg-slate-500/20 backdrop-blur-sm border border-white/10 hover:border-slate-500/50 rounded-full px-4 py-2 transition-all duration-300">
                            <GithubIcon size={16} className="text-slate-400 group-hover:text-slate-300 transition-colors" />
                            <span className="text-xs sm:text-sm text-slate-400 group-hover:text-white transition-colors">GitHub</span>
                        </motion.a>
                    </motion.div>
                </section>

                <main className="container mx-auto px-6 relative z-10">
                    <motion.section id="experience" className="py-10 scroll-mt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <TimelineDemo />
                        </div>
                    </motion.section>

                    <motion.section id="publications" className="py-10 scroll-mt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black mb-2 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center">
                                    <BookmarkIcon size={28} className="mr-3 text-purple-400" />
                                    Research Publications
                                </h2>
                                <p className="text-sm text-slate-400 max-w-3xl">Peer-reviewed research and preprints in AI and computer vision</p>
                            </div>
                            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {publications.map((pub) => (
                                    <motion.div key={pub.id} variants={listItemVariants} className="h-full">
                                        <PublicationCard pub={pub} openModal={openModal} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section id="projects" className="py-10 scroll-mt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black mb-2 pb-1 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    <BlocksIcon size={28} className="mr-3 text-blue-400" />
                                    Featured Projects
                                </h2>
                                <p className="text-sm text-slate-400 max-w-3xl">Open-source implementations and practical applications of AI/ML concepts</p>
                            </div>
                            <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                {projects.map((project) => (
                                    <motion.div key={project.repo} variants={listItemVariants} className="h-full">
                                        <ProjectCard {...project} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section id="education" className="py-10 scroll-mt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black mb-2 pb-1 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    <StarIcon size={28} className="mr-3 text-yellow-400" />
                                    Awards & Test Scores
                                </h2>
                                <p className="text-sm text-slate-400 max-w-3xl">Recognition, standardized test performance, and professional credentials</p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                <AwardCard
                                    chip="ISAI 2025" chipColor="bg-yellow-500/20 text-yellow-300" emoji="🏆"
                                    title="Best Paper Award"
                                    org="International Symposium on Artificial Intelligence, NIT Sikkim"
                                    description="One of three Best Paper Awards out of 78 accepted submissions, for outstanding research contribution in AI/ML"
                                    image={awardImage}
                                />
                                <AwardCard
                                    chip="Kaggle" chipColor="bg-orange-500/20 text-orange-300" emoji="🥉"
                                    title="Bronze Medal"
                                    org="CSIRO Biomass Computer Vision Competition"
                                    description="Finished in the top tier among global participants in the CSIRO Biomass computer vision competition on Kaggle"
                                    image={kaggleMedalImage}
                                />
                                <AwardCard
                                    chip="Invited Talk" chipColor="bg-purple-500/20 text-purple-300" emoji="🎤"
                                    title="Distinguished Speaker"
                                    org="6th International Conference on Future of Preventive Medicine and Public Health"
                                    description="Invited as a Distinguished Speaker to present research at the international conference"
                                    image={speakerCertImage}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors duration-300 flex flex-col">
                                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5"><AnimatedCounter to={325} /></div>
                                    <div className="text-xs text-slate-400 mb-1.5">GRE Score</div>
                                    <button onClick={() => setIsGreExpanded(!isGreExpanded)} className="text-blue-400/80 hover:text-blue-400 text-[11px] flex items-center justify-center w-full mb-1 transition-colors mt-auto">Breakdown<ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${isGreExpanded ? 'rotate-180' : ''}`} /></button>
                                    <AnimatePresence>{isGreExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Quant:</span><span className="text-white font-semibold">167/170</span></div><div className="flex justify-between"><span>Verbal:</span><span className="text-white font-semibold">158/170</span></div><div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">4.0/6.0</span></div></div></motion.div>)}</AnimatePresence>
                                </div>
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors duration-300 flex flex-col">
                                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5"><AnimatedCounter to={105} /></div>
                                    <div className="text-xs text-slate-400 mb-1.5">TOEFL Score</div>
                                    <button onClick={() => setIsToeflExpanded(!isToeflExpanded)} className="text-blue-400/80 hover:text-blue-400 text-[11px] flex items-center justify-center w-full mb-1 transition-colors mt-auto">Breakdown<ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${isToeflExpanded ? 'rotate-180' : ''}`} /></button>
                                    <AnimatePresence>{isToeflExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Reading:</span><span className="text-white font-semibold">26/30</span></div><div className="flex justify-between"><span>Speaking:</span><span className="text-white font-semibold">27/30</span></div><div className="flex justify-between"><span>Listening:</span><span className="text-white font-semibold">25/30</span></div><div className="flex justify-between"><span>Writing:</span><span className="text-white font-semibold">27/30</span></div></div></motion.div>)}</AnimatePresence>
                                </div>
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors duration-300 flex flex-col">
                                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5"><AnimatedCounter to={645} /></div>
                                    <div className="text-xs text-slate-400 mb-1.5">GATE Score</div>
                                    <button onClick={() => setIsGateExpanded(!isGateExpanded)} className="text-blue-400/80 hover:text-blue-400 text-[11px] flex items-center justify-center w-full mb-1 transition-colors mt-auto">Breakdown<ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${isGateExpanded ? 'rotate-180' : ''}`} /></button>
                                    <AnimatePresence>{isGateExpanded && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden text-xs text-slate-300 space-y-1 text-left"><div className="pt-2 border-t border-slate-700"><div className="flex justify-between"><span>Score:</span><span className="text-white font-semibold">645 / 1000</span></div><div className="flex justify-between"><span>All India Rank:</span><span className="text-white font-semibold">800</span></div><div className="flex justify-between"><span>Total Candidates:</span><span className="text-white font-semibold">75,680</span></div></div></motion.div>)}</AnimatePresence>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <h3 className="text-base font-bold text-white mb-3 flex items-center">
                                        <Zap className="w-4 h-4 mr-2 text-yellow-400" /> Certifications
                                    </h3>
                                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 divide-y divide-slate-700/60 overflow-hidden">
                                        {certificates.map((cert) => (
                                            <CredentialRow key={cert.title} {...cert}/>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-3 flex items-center">
                                        <StarIcon className="w-4 h-4 mr-2 text-yellow-400" /> Badges
                                    </h3>
                                    <div className="rounded-lg border border-slate-700 bg-slate-800/50 divide-y divide-slate-700/60 overflow-hidden">
                                        {badges.map((badge) => (
                                            <CredentialRow key={badge.title} {...badge} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section id="skills" className="py-10 scroll-mt-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black mb-2 pb-1 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                    <BoltIcon size={28} className="mr-3 text-yellow-400" />
                                    Technical Expertise
                                </h2>
                                <p className="text-sm text-slate-400 max-w-3xl">Skill set spanning AI/ML, computer vision, and data science</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-5 items-start">
                                {Object.entries(skills).map(([category, skillList]) => (
                                  <BackgroundGradient key={category} containerClassName="rounded-2xl h-full" className="h-full">
                                    <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 h-full">
                                        <div className="flex items-center mb-4">
                                            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 shrink-0">
                                                {category === "Programming & Frameworks" && <Code className="w-4 h-4 text-white" />}
                                                {category === "LLMs, RAG & Agents" && <Brain className="w-4 h-4 text-white" />}
                                                {category === "Data Science & Computer Vision" && <Eye className="w-4 h-4 text-white" />}
                                                {category === "Tools & Platforms" && <Database className="w-4 h-4 text-white" />}
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-white">{category}</h3>
                                        </div>
                                        <motion.div className="flex flex-wrap gap-2" variants={listContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                            {skillList.map((skill) => (
                                                <motion.div key={skill.name} variants={listItemVariants} className="inline-flex items-center gap-1.5 bg-slate-700/50 hover:bg-blue-500/20 border border-slate-600 hover:border-blue-500/50 px-2.5 py-1 rounded-md transition-colors duration-300">
                                                    {skill.logo
                                                        ? <img loading="lazy" src={skill.logo} alt={skill.name} className="w-4 h-4" />
                                                        : <span className="text-blue-300">{React.cloneElement(skill.icon, { className: 'w-4 h-4' })}</span>}
                                                    <span className="text-xs sm:text-sm font-medium text-slate-300">{skill.name}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                  </BackgroundGradient>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                </main>

                <footer className="bg-slate-900/30 border-t border-slate-800 mt-12 relative z-10">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                            <div>
                                <div className="flex items-center space-x-2 mb-3">
                                    <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                        <Brain className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-base font-bold text-white">Gourab Roy</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-4">Machine learning engineer and researcher advancing computer vision and medical imaging through deep learning.</p>
                                <div className="flex space-x-4">
                                    <a href="mailto:gourab.roy.aiml@gmail.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><MailsIcon className="w-4 h-4" /></a>
                                    <a href="https://www.linkedin.com/in/gourab-roy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><LinkedInIcon className="w-4 h-4" /></a>
                                    <a href="https://github.com/crimsonkn1ght/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><GithubIcon className="w-4 h-4" /></a>
                                </div>
                            </div>
                            <div className="md:text-right">
                                <p className="text-slate-400 text-sm">Open to research collaborations and AI/ML opportunities.</p>
                                <p className="text-slate-600 text-xs mt-2">© 2026 Gourab Roy</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <Modal isOpen={!!modalContent} onClose={closeModal} title={modalContent?.title}>{modalContent?.content}</Modal>
            </div>
    );
}

export default App;
