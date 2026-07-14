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
                <li>Optimized end-to-end pipeline latency by eliminating redundant LLM calls and parallelizing independent calls with asynchronous execution.</li>
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
              <h4 className="font-bold text-lg mb-1 text-white">Research Intern — Deep Learning for Medical Imaging</h4>
              <p className="text-blue-400 font-medium">IIT Kharagpur</p>
              <p className="text-xs text-slate-400 mb-2">May 2025 – Sept 2025</p>
              <ul className="list-disc list-inside text-sm text-white mt-2 space-y-1">
                <li>Built and trained a modified U-Net for CT image reconstruction on 20,000+ sinogram-image pairs, targeting sparse-view and low-dose acquisition scenarios relevant to real clinical workflows.</li>
                <li>Achieved PSNR of 35 dB+ and SSIM of 0.9+, validating reconstruction quality across varying levels of projection sparsity and measurement noise.</li>
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
                  <li><b>Thesis:</b> Multi-Stage Deep Learning Framework for Knee Osteoarthritis & Osteoporosis Detection. Achieved 80.46% accuracy in multiclass classification of osteoarthritis severity and 88% accuracy in binary classification of osteoporosis from knee X-ray images.</li>
                  <li>Published 2 peer-reviewed papers from thesis work — 1 Best Paper Award at ISAI 2025 (Springer LNNS) and 1 accepted at ICADCML 2026.</li>
                  <li><b>Relevant coursework:</b> Deep Learning, Computer Vision, NLP, Pattern Recognition.</li>
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
                  <li><b>Relevant coursework:</b> Signal Processing, Digital Systems, Programming, Linear Algebra.</li>
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
