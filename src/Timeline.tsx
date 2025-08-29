import React from "react";
import { Timeline } from "@/components/ui/timeline";
import iitKharagpurLogo from './assets/iit-kharagpur-logo.png';
import axtriaLogo from './assets/axtria-logo.png';
import virtuallyTestingLogo from './assets/virtually-testing-logo.png';
import cbseLogo from './assets/CBSE-logo.png';
import cyberSecuredIndiaLogo from './assets/cybersecuredindia-logo.png';
import iiestShibpurLogo from './assets/iiest-shibpur-logo.png';
import iitDhanbadLogo from './assets/iit-dhanbad-logo.png';


export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-1 text-white">Research Intern</h4>
            <p className="text-blue-400 font-medium">IIT Kharagpur</p>
            <p className="text-xs text-slate-400 mb-2">June 2025 – Aug 2025</p>
            <ul className="list-disc list-inside text-sm text-white mt-2 space-y-1">
              <li>Conducting ongoing research on CT image reconstruction as part of a deep learning internship, using a parallel-beam, fan-beam, cone-beam datasets consisting of 20,000+ sinogram-image pairs to improve reconstruction quality from sparse and noisy projections, with a focus on real-world medical imaging challenges.</li>
              <li>Developing various deep learning architectures, including U-Nets for 2D slices and experimenting with 3D CNNs for volumetric reconstruction, to improve image quality from low-signal, noisy sinogram data.</li>
              <li>Employed a combined SSIM and MSE loss function to optimize both structural and pixel-level accuracy, achieving a test SSIM of 0.9+.</li>
            </ul>
            <div className="mt-4 h-24 flex items-center justify-center">
              <img
                src={iitKharagpurLogo}
                alt="IIT Kharagpur"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-1 text-white">M.Tech in Computer Science and Engineering</h4>
            <p className="text-blue-400 font-medium">IIT Dhanbad</p>
            <p className="text-xs text-slate-400 mb-2">2023 – 2025</p>
            <p className="text-sm text-white">
              GPA: 8.57/10.
            </p>
            <ul className="list-disc list-inside text-sm text-white mt-2 space-y-1">
                <li><b>Thesis:</b> Deep Learning based Multi-Stage Framework for Automated Detection and
        Grading of Knee Osteoarthritis and Osteoporosis. Achieved 80% accuracy in multiclass
        classification of osteoarthritis severity and 88% accuracy in binary classification
        of osteoporosis from knee X-ray images.</li>
                <li><b>Technical Proficiencies:</b>
        Programming & ML Frameworks: Python, PyTorch, NumPy, OpenCV, SciPy, sklearn.</li>
                <li><b>Relevant courses:</b> Deep Learning, Pattern Recognition, Information Retrieval, Data
        Analytics, Advanced Data Structures and Algorithms.</li>
            </ul>
            <div className="mt-4 h-24 flex items-center justify-center">
              <img
                  src={iitDhanbadLogo}
                  alt="IIT Dhanbad"
                  className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-1 text-white">Data Engineering Intern</h4>
            <p className="text-blue-400 font-medium">Axtria, Bengaluru</p>
            <p className="text-xs text-slate-400 mb-2">May – July 2024</p>
            <p className="text-sm text-white">
              Developed and optimized data processing workflows and ETL pipelines using Python and SQL, ensuring efficient integration, transformation, and validation of large, het- erogeneous data.
            </p>
            <div className="mt-4 h-24 flex items-center justify-center">
              <img
                src={axtriaLogo}
                alt="Axtria"
                className="max-h-[70%] max-w-[70%] object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="mb-8">
            <h4 className="font-bold text-lg mb-1 text-white">B.Tech in Electronics & Telecommunications Engineering</h4>
            <p className="text-blue-400 font-medium">IIEST Shibpur</p>
            <p className="text-xs text-slate-400 mb-2">2019 – 2023</p>
            <p className="text-sm text-white">
              GPA: 7.58/10.
            </p>
            <ul className="list-disc list-inside text-sm text-white mt-2 space-y-1">
                <li><b>Relevant coursework included:</b> Signals and Systems, Digital Signal Processing, and Image Processing.</li>
                <li>Graduated with First Class.</li>
            </ul>
            <div className="mt-4 h-24 flex items-center justify-center">
              <img
                  src={iiestShibpurLogo}
                  alt="IIEST Shibpur"
                  className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
        title: "2022",
        content: (
            <div>
                <div className="mb-8">
                    <h4 className="font-bold text-lg mb-1 text-white">Security Intern</h4>
                    <p className="text-blue-400 font-medium">Virtually Testing Foundation</p>
                    <p className="text-xs text-slate-400 mb-2">May – July 2022</p>
                    <p className="text-sm text-white">
                        Accomplished hands-on training in offensive and defensive cybersecurity measured by completion of an 8-week internship with practical red and blue team exercises.
                    </p>
                    <div className="mt-4 h-24 flex items-center justify-center">
                      <img
                          src={virtuallyTestingLogo}
                          alt="Virtually Testing Foundation"
                          className="max-h-full max-w-full object-contain"
                      />
                    </div>
                </div>
                <div className="mb-8">
                    <h4 className="font-bold text-lg mb-1 text-white">Digital Forensics Intern</h4>
                    <p className="text-blue-400 font-medium">Cyber Secured India</p>
                    <p className="text-xs text-slate-400 mb-2">Mar - May 2022</p>
                    <p className="text-sm text-white">
                      Gained practical experience in offensive and defensive security through an 8-week internship, executing real-world red and blue team operations.
                    </p>
                    <div className="mt-4 h-24 flex items-center justify-center">
                      <img
                          src={cyberSecuredIndiaLogo}
                          alt="Cyber Secured India"
                          className="max-h-full max-w-full object-contain"
                      />
                    </div>
                </div>
                <div className="mb-8">
                    <h4 className="font-bold text-lg mb-1 text-white">Cyber Security Intern</h4>
                    <p className="text-blue-400 font-medium">SISTMR Australia</p>
                    <p className="text-xs text-slate-400 mb-2">Jan - Mar 2022</p>
                    <p className="text-sm text-white">
                      Successfully completed an 8-week internship in cybersecurity, gaining hands-on experience with practical red team (offensive) and blue team (defensive) operations.
                    </p>
                </div>
            </div>
        )
    },
    {
        title: "2019",
        content: (
            <div>
                <div className="mb-8">
                    <h4 className="font-bold text-lg mb-1 text-white">All India Senior School Certificate Examination (AISSCE)</h4>
                    <p className="text-blue-400 font-medium">Higher Secondary (XII) Exam | CBSE Board</p>
                    <p className="text-xs text-slate-400 mb-2">2019</p>
                    <p className="text-sm text-white">
                        Percentage: 93% | Science Stream
                    </p>
                    <div className="mt-4 h-24 flex items-center justify-center">
                      <img
                          src={cbseLogo}
                          alt="CBSE"
                          className="max-h-full max-w-full object-contain"
                      />
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "2017",
        content: (
            <div>
                <div className="mb-8">
                    <h4 className="font-bold text-lg mb-1 text-white">All India Secondary School Examination (AISSE)</h4>
                    <p className="text-blue-400 font-medium">Secondary (X) Exam | CBSE Board</p>
                    <p className="text-xs text-slate-400 mb-2">2017</p>
                    <p className="text-sm text-white">
                        CGPA: 10.0/10.0
                    </p>
                    <div className="mt-4 h-24 flex items-center justify-center">
                      <img
                          src={cbseLogo}
                          alt="CBSE"
                          className="max-h-full max-w-full object-contain"
                      />
                    </div>
                </div>
            </div>
        )
    }
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
