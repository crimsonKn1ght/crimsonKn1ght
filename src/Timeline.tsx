// src/Timeline.tsx
import React from "react";
import { motion } from "framer-motion";
import { Brain, Briefcase } from "lucide-react";

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
    date: "Aug 2025 – Present",
    year: 2025,
    month: "Aug",
    details: "CT image reconstruction with U-Nets & 3D CNNs, SSIM 0.9+.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
  },
  {
    side: "left",
    title: "M.Tech in Computer Science and Engineering",
    subtitle: "IIT Dhanbad",
    date: "2023 – 2025",
    year: 2025,
    month: "May",
    details:
      "GPA: 8.57/10. Thesis on deep learning for knee osteoarthritis & osteoporosis detection.",
    icon: <Brain className="w-4 h-4 text-white" />,
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
  },
  {
    side: "left",
    title: "B.Tech in Electronics & Telecommunications",
    subtitle: "IIEST Shibpur",
    date: "2019 – 2023",
    year: 2023,
    month: "Jun",
    details: "GPA: 7.58/10. Coursework in DSP, Image Processing.",
    icon: <Brain className="w-4 h-4 text-white" />,
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
  },
  {
    side: "right",
    title: "Digital Forensics Intern",
    subtitle: "Cyber Secured India",
    date: "2022",
    year: 2022,
    month: "Mar",
    details:
      "Worked on penetration testing, threat analysis, and incident response.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
  },
  {
    side: "right",
    title: "Cyber Security Intern",
    subtitle: "SISTMR Australia",
    date: "2022",
    year: 2022,
    month: "Jan",
    details: "Practical red & blue team operations, simulated cyber-attacks.",
    icon: <Briefcase className="w-4 h-4 text-white" />,
  },
  {
    side: "left",
    title: "Higher Secondary (XII), CBSE",
    subtitle: "Science Stream",
    date: "2019",
    year: 2019,
    month: "Mar",
    details: "Percentage: 93%",
    icon: <Brain className="w-4 h-4 text-white" />,
  },
  {
    side: "left",
    title: "Secondary (X), CBSE",
    subtitle: "Board Exam",
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
