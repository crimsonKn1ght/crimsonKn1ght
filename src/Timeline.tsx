import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import iitKharagpurLogo from './assets/iit-kharagpur-logo.webp';
import axtriaLogo from './assets/axtria-logo.webp';
import iiestShibpurLogo from './assets/iiest-shibpur-logo.webp';
import iitDhanbadLogo from './assets/iit-dhanbad-logo.webp';


const EntryHeader = ({ role, org, period, logo, logoAlt }: { role: string; org: string; period: string; logo: string; logoAlt: string }) => (
  <div className="flex items-start justify-between gap-4 mb-2">
    <div>
      <h4 className="font-bold text-base text-white leading-snug">{role}</h4>
      <p className="text-blue-400 text-sm font-medium">{org}</p>
      <p className="text-xs text-slate-400">{period}</p>
    </div>
    <div className="shrink-0 h-12 w-20 flex items-center justify-end">
      <img src={logo} alt={logoAlt} className="max-h-full max-w-full object-contain" />
    </div>
  </div>
);

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <EntryHeader role="Data Scientist" org="Axtria, Bengaluru" period="Sept 2025 – Present" logo={axtriaLogo} logoAlt="Axtria" />
              <p className="text-xs sm:text-sm text-slate-300 italic mb-2">Multi-agent LLM platform for enterprise insights, retrieval-augmented analytics, and real-time conversational workflows.</p>
              <ul className="list-disc list-inside text-xs sm:text-sm text-white space-y-1">
                <li>Architected a multi-agent LangGraph workflow handling query decomposition, intent classification, retrieval orchestration, analytical tool execution, and web-augmented LLM reasoning with redaction and citation formatting.</li>
                <li>Built an asynchronous hybrid/vector retrieval pipeline on Azure AI Search with metadata-aware filtering, semantic reranking, vector deduplication, and parallel multi-index orchestration for grounded retrieval.</li>
                <li>Re-architected agent execution with asynchronous orchestration and decoupled processing paths, cutting time-to-first-token (TTFT) from ~90s to 10–20s.</li>
                <li>Optimized end-to-end pipeline latency by eliminating redundant LLM calls and parallelizing independent calls with asynchronous execution.</li>
                <li>Implemented token-level streaming across OpenAI, Gemini, and Claude via streaming-compatible handlers and event-processing workflows for real-time, user-facing responses.</li>
                <li>Designed a query rephrasing pipeline to refine user inputs, improving retrieval accuracy and downstream agent routing in the chatbot workflow.</li>
              </ul>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <EntryHeader role="Research Intern — Deep Learning for Medical Imaging" org="IIT Kharagpur" period="May 2025 – Sept 2025" logo={iitKharagpurLogo} logoAlt="IIT Kharagpur" />
              <ul className="list-disc list-inside text-xs sm:text-sm text-white space-y-1">
                <li>Built and trained a modified U-Net for CT image reconstruction on 20,000+ sinogram-image pairs, targeting sparse-view and low-dose acquisition scenarios relevant to real clinical workflows.</li>
                <li>Achieved PSNR of 35 dB+ and SSIM of 0.9+, validating reconstruction quality across varying levels of projection sparsity and measurement noise.</li>
              </ul>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="rounded-2xl">
            <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <EntryHeader role="M.Tech in Computer Science and Engineering" org="IIT (ISM) Dhanbad" period="2023 – 2025 · GPA: 8.57/10" logo={iitDhanbadLogo} logoAlt="IIT Dhanbad" />
              <ul className="list-disc list-inside text-xs sm:text-sm text-white space-y-1">
                  <li><b>Thesis:</b> Multi-Stage Deep Learning Framework for Knee Osteoarthritis & Osteoporosis Detection. Achieved 80.46% accuracy in multiclass classification of osteoarthritis severity and 88% accuracy in binary classification of osteoporosis from knee X-ray images.</li>
                  <li>Published 2 peer-reviewed papers from thesis work — 1 Best Paper Award at ISAI 2025 (Springer LNNS) and 1 accepted at ICADCML 2026.</li>
                  <li><b>Relevant coursework:</b> Deep Learning, Computer Vision, NLP, Pattern Recognition.</li>
              </ul>
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
            <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <EntryHeader role="Data Science Intern" org="Axtria, Bengaluru" period="May – July 2024" logo={axtriaLogo} logoAlt="Axtria" />
              <p className="text-xs sm:text-sm text-white">
                Built and validated time-series forecasting models on internal business data, surfacing predictive insights to support data-driven decision-making and automate recurring analytics workflows.
              </p>
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
            <div className="mb-5 bg-slate-800/60 border border-slate-700 rounded-2xl p-4 sm:p-5">
              <EntryHeader role="B.Tech in Electronics & Telecommunications Engineering" org="IIEST Shibpur" period="2019 – 2023 · GPA: 7.58/10" logo={iiestShibpurLogo} logoAlt="IIEST Shibpur" />
              <ul className="list-disc list-inside text-xs sm:text-sm text-white space-y-1">
                  <li><b>Relevant coursework:</b> Signal Processing, Digital Systems, Programming, Linear Algebra.</li>
                  <li>Graduated with First Class.</li>
              </ul>
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
