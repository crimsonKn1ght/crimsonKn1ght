import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import iitKharagpurLogo from './assets/iit-kharagpur-logo.webp';
import axtriaLogo from './assets/axtria-logo.webp';
import iiestShibpurLogo from './assets/iiest-shibpur-logo.webp';
import iitDhanbadLogo from './assets/iit-dhanbad-logo.webp';


export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-1 text-white">Data Scientist</h4>
              <p className="text-blue-400 font-medium">Axtria, Bengaluru</p>
              <p className="text-xs text-slate-400 mb-2">Sept 2025 – Present</p>
              <p className="text-sm text-slate-300 italic mb-2">Multi-agent LLM platform for enterprise insights, retrieval-augmented analytics, and real-time conversational workflows.</p>

              <ul className="list-disc list-inside text-sm text-white space-y-1">
                <li>Architected a multi-agent LangGraph workflow handling query decomposition, intent classification, retrieval orchestration, analytical tool execution, and web-augmented LLM reasoning with redaction and citation formatting.</li>
                <li>Built an asynchronous hybrid/vector retrieval pipeline on Azure AI Search with metadata-aware filtering, semantic reranking, vector deduplication, and parallel multi-index orchestration for grounded retrieval.</li>
                <li>Re-architected agent execution with asynchronous orchestration and decoupled processing paths, cutting time-to-first-token (TTFT) from ~90s to 10–20s.</li>
                <li>Implemented token-level streaming across OpenAI, Gemini, and Claude via streaming-compatible handlers and event-processing workflows for real-time, user-facing responses.</li>
                <li>Designed a query rephrasing pipeline to refine user inputs, improving retrieval accuracy and downstream agent routing in the chatbot workflow.</li>
              </ul>
          
              <div className="mt-4 h-24 flex items-center justify-center">
                <img
                  src={axtriaLogo}
                  alt="Axtria"
                  className="max-h-[70%] max-w-[70%] object-contain"
                />
              </div>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-1 text-white">Research Intern</h4>
              <p className="text-blue-400 font-medium">IIT Kharagpur</p>
              <p className="text-xs text-slate-400 mb-2">May 2025 – Sept 2025</p>
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
          </BackgroundGradient>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
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
          </BackgroundGradient>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-1 text-white">Data Science Intern</h4>
              <p className="text-blue-400 font-medium">Axtria, Bengaluru</p>
              <p className="text-xs text-slate-400 mb-2">May – July 2024</p>
              <p className="text-sm text-white">
                Built and validated time-series forecasting models on internal business data, surfacing predictive insights to support data-driven decision-making and automate recurring analytics workflows.
              </p>
              <div className="mt-4 h-24 flex items-center justify-center">
                <img
                  src={axtriaLogo}
                  alt="Axtria"
                  className="max-h-[70%] max-w-[70%] object-contain"
                />
              </div>
            </div>
          </BackgroundGradient>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-8 bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
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
          </BackgroundGradient>
        </div>
      ),
    }
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
