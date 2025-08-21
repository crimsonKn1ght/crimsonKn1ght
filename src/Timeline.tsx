// src/Timeline.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Briefcase, ChevronDown } from "lucide-react";

const monthOrder: { [key: string]: number } = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4,
  May: 5, Jun: 6, Jul: 7, Aug: 8,
  Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

const rawEvents = [
  // Experience
  {
    side: "right",
    title: "Research Intern",
    subtitle: "IIT Kharagpur",
    date: "June 2025 – Aug 2025",
    year: 2025,
    month: "Aug",
    details: "CT image reconstruction from sinograms using end-to-end DL models.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    fullDetails: (
      <>
        <p className="mb-2">• Conducting ongoing research on CT image reconstruction as part of a deep learning internship, using a parallel-beam, fan-beam, cone-beam datasets consisting of 20,000+ sinogram-image pairs to improve reconstruction quality from sparse and noisy projections, with a focus on real-world medical imaging challenges.</p>
        <p className="mb-2">• Developing various deep learning architectures, including U-Nets for 2D slices and experimenting with 3D CNNs for volumetric reconstruction, to improve image quality from low-signal, noisy sinogram data.</p>
        <p>• Employed a combined SSIM and MSE loss function to optimize both structural and pixel-level accuracy, achieving a test SSIM of 0.9+.</p>
      </>
    ),
  },
  {
    side: "left",
    title: "M.Tech in Computer Science and Engineering",
    subtitle: "IIT Dhanbad",
    date: "2023 – 2025",
    year: 2025,
    month: "May",
    details:
      "GPA: 8.57/10.",
    icon: <Brain className="w-4 h-4 text-white" />,
    fullDetails: (
      <>
        <p className="mb-2">• <b>Thesis:</b> Deep Learning based Multi-Stage Framework for Automated Detection and
        Grading of Knee Osteoarthritis and Osteoporosis. Achieved 80% accuracy in multiclass
        classification of osteoarthritis severity and 88% accuracy in binary classification
        of osteoporosis from knee X-ray images.</p>
        <p className="mb-2">• <b>Technical Proficiencies:</b>
        Programming & ML Frameworks: Python, PyTorch, NumPy, OpenCV, SciPy, sklearn.</p>
        <p>• <b>Relevant courses:</b> Deep Learning, Pattern Recognition, Information Retrieval, Data
        Analytics, Advanced Data Structures and Algorithms.</p>
      </>
    ),
  },
  {
    side: "right",
    title: "Data Engineering Intern",
    subtitle: "Axtria, Bengaluru",
    date: "May – July 2024",
    year: 2024,
    month: "May",
    details: "Optimized ETL workflows with Python & SQL.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    fullDetails: (
        <p>• Developed and optimized data processing workflows and ETL pipelines using Python and SQL, ensuring efficient integration, transformation, and validation of large, het- erogeneous data.</p>
    ),
  },
  {
    side: "left",
    title: "B.Tech in Electronics & Telecommunications",
    subtitle: "IIEST Shibpur",
    date: "2019 – 2023",
    year: 2023,
    month: "Jun",
    details: "GPA: 7.58/10.",
    icon: <Brain className="w-4 h-4 text-white" />,
    fullDetails: (
      <>
        <p className="mb-2">• <b>Relevant courses:</b> Signals and Systems, Digital Signal Processing, Image Processing</p>
        <p className="mb-2">• Graduated with <b>First class distintion</b></p>
      </>
    ),    
  },
  {
    side: "right",
    title: "Security Intern",
    subtitle: "Virtually Testing Foundation",
    date: "May – July 2022",
    year: 2022,
    month: "May",
    details: "Hands-on cybersecurity, red & blue team techniques.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
    fullDetails: (
      <>
        <p>• Accomplished hands-on training in offensive and defensive cybersecurity measured by completion of an 8-week internship with practical red and blue team exercises.</p>
        <p>• Simulated cyber-attack scenarios, vulnerability assessments, and defense planning.</p>
      </>
    ),
  },
  {
    side: "right",
    title: "Digital Forensics Intern",
    subtitle: "Cyber Secured India",
    date: "Mar - May 2022",
    year: 2022,
    month: "Mar",
    details:
      "Worked on penetration testing, threat analysis, and incident response.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
      fullDetails: (
      <>
        <p>• Gained practical experience in offensive and defensive security through an 8-week internship, executing real-world red and blue team operations.</p>
        <p>• Participated in penetration testing, threat analysis, and incident response exercises as part of a hands-on cybersecurity training program.</p>
        <p>• Implemented and tested defensive measures against simulated attacks, enhancing skills in network monitoring and intrusion detection.</p>
      </>
    ),
  },
  {
    side: "right",
    title: "Cyber Security Intern",
    subtitle: "SISTMR Australia",
    date: "Jan - Mar 2022",
    year: 2022,
    month: "Jan",
    details: "Practical red & blue team operations, simulated cyber-attacks.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
      fullDetails: (
      <>
        <p>• Successfully completed an 8-week internship in cybersecurity, gaining hands-on experience with practical red team (offensive) and blue team (defensive) operations.</p>
        <p>• Executed simulated cyber-attacks, performed vulnerability assessments, and contributed to defense strategy planning to enhance system security.</p>
      </>
    ),
  },
  {
    side: "left",
    title: "All India Senior School Certificate Examination (AISSCE)",
    subtitle: "Higher Secondary (XII) Exam | CBSE Board",
    date: "2019",
    year: 2019,
    month: "Mar",
    details: "Percentage: 93% | Science Stream",
    icon: <Brain className="w-4 h-4 text-white" />,
  },
  {
    side: "left",
    title: "All India Secondary School Examination (AISSE)",
    subtitle: "Secondary (X) Exam | CBSE Board",
    date: "2017",
    year: 2017,
    month: "Mar",
    details: "CGPA: 10.0/10.0",
    icon: <Brain className="w-4 h-4 text-white" />,
  },
];

// Sort by year then month descending
const events = rawEvents.sort((a, b) => {
  if (b.year !== a.year) return b.year - a.year;
  return (monthOrder[b.month] || 0) - (monthOrder[a.month] || 0);
});

const Timeline = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative max-w-6xl mx-auto py-16 px-4">
      {/* Vertical line - positioned left on mobile, center on desktop */}
      <div className="absolute top-0 h-full w-1 bg-slate-700 rounded-full left-6 md:left-1/2 md:-translate-x-1/2"></div>

      <div className="space-y-16">
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative" // Each item is relative for the dot positioning
          >
            {/* Dot + Year - positioned on the line */}
            <div className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg ring-4 ring-slate-800">
                {item.icon}
              </div>
              <p className="text-xs text-slate-400 mt-2 whitespace-nowrap">
                {item.month ? `${item.month} ${item.year}` : item.year}
              </p>
            </div>

            {/* Card container - this handles the left/right logic and spacing */}
            <div
              className={`
                w-full md:w-1/2
                ${
                  item.side === 'left'
                    ? 'md:pr-14' // Space from the center line on desktop
                    : 'md:pl-14 md:ml-auto' // Push to the right half and add space
                }
              `}
            >
              <div
                className={`
                  ml-14 md:ml-0 // Creates space from the line on mobile
                  ${item.side === 'left' ? 'md:text-right' : 'md:text-left'}
                `}
              >
                <div className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 shadow-md inline-block max-w-md w-full">
                  <h3 className="text-md font-bold text-white">{item.title}</h3>
                  <p className="text-blue-400 font-medium">{item.subtitle}</p>
                  <p className="text-xs text-slate-400">{item.date}</p>
                  <p className="text-slate-300 mt-1 text-sm">{item.details}</p>
                  {item.fullDetails && (
                    <>
                        <button
                            onClick={() => setExpanded(expanded === index ? null : index)}
                            className="text-blue-400/80 hover:text-blue-400 text-xs flex items-center justify-center w-full mt-2 transition-colors"
                        >
                            {expanded === index ? 'Show Less' : 'Show More'}
                            <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${expanded === index ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {expanded === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden text-xs text-slate-300 space-y-1 text-left mt-2"
                                >
                                    {item.fullDetails}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
