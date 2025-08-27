import React from 'react';
import { Github, Mail, Brain } from 'lucide-react';
// Correct the import path to where the shadcn CLI added the icon
import { AtomIcon } from '@/components/ui/AtomIcon'; 

const ResearchStatement = () => {
  return (
    <div className="min-h-screen bg-stone-900 text-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-stone-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white flex items-center">
            <Brain className="w-6 h-6 mr-2" />
            Gourab Roy
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Back to Portfolio</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                    Gourab Roy
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    CSE PhD Applicant, Fall 2025
                </p>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
                    Exploring the frontiers of 4D dynamic scene reconstruction and real-time rendering with 3D Gaussian Splatting.
                </p>
            </div>
        </section>

        {/* Introduction Section */}
        <section id="about" className="py-20 bg-stone-950/50">
            <div className="container mx-auto px-6">
                 <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent flex items-center justify-center">
                    {/* The change is in the className below */}
                    <AtomIcon className="w-12 h-12 mr-4 text-blue-400" />
                    Introduction & Motivation
                </h2>
                <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed text-center">
                    <p>
                        3D Gaussian Splatting (3DGS) has emerged as a state-of-the-art technique for real-time rendering and reconstruction, establishing itself as a compelling foundation for my doctoral research. My work aims to leverage the capabilities of 3DGS to address core challenges in 4D dynamic scene reconstruction, pushing the boundaries of what's possible in capturing and understanding our dynamic world.
                    </p>
                </div>
            </div>
        </section>

        {/* Research Experience Section */}
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">My Research Experience</h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Card */}
                    <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Knee Osteoarthritis Detection</h3>
                        <p className="mb-4 text-gray-400 flex-grow">Developed a model combining a spatial attention mechanism with hierarchical feature fusion, emphasizing medically significant areas to learn both fine-grained local details and global joint structures.</p>
                        <div className="mt-auto">
                           <span className="inline-block bg-green-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">🏆 Best Paper Award, ISAI 2025</span>
                           <a href="https://github.com/crimsonkn1ght/Code-OA-detection-model" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 font-semibold hover:text-blue-300">View Code &rarr;</a>
                        </div>
                    </div>
                    <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Automated Knee Osteoporosis Detection</h3>
                        <p className="mb-4 text-gray-400 flex-grow">Proposed a hybrid method combining a CBAM-enhanced U-Net with handcrafted texture features for osteoporosis classification from sparse X-ray data, achieving strong performance without large-scale training data.</p>
                         <div className="mt-auto">
                           <span className="inline-block bg-yellow-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">📄 Submitted to ICDSINC 2025</span>
                           <a href="https://github.com/crimsonkn1ght/Code-OP-detection-model" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 font-semibold hover:text-blue-300">View Code &rarr;</a>
                        </div>
                    </div>
                    <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">End-to-End CT Scan Reconstruction</h3>
                        <p className="mb-4 text-gray-400 flex-grow">As an intern at IIT Kharagpur, I am developing an end-to-end deep learning model that converts raw sinogram data directly into CT images, with promising results in parallel-beam reconstructions.</p>
                         <div className="mt-auto">
                           <span className="inline-block bg-purple-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">📝 In Preparation for Journal Submission</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* PhD Proposals Section */}
        <section id="proposals" className="py-20 bg-stone-950/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">PhD Research Proposals</h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Proposal Card */}
                    <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-3">Generalizable 4D Gaussian Splatting Models</h3>
                        <p className="font-semibold text-gray-300 mb-4">Going Beyond Per-Scene Optimization</p>
                        <p className="mb-6 text-gray-400">
                            Current 4DGS techniques require slow, per-scene optimization. This research aims to create a generalizable, feed-forward model to produce high-fidelity 4D reconstructions from monocular videos instantaneously, enabling real-time performance on new, unseen footage without retraining.
                        </p>
                        <h4 className="font-semibold text-white mb-3">Research Plan:</h4>
                        <ul className="space-y-4 text-gray-400 list-disc list-inside">
                            <li>Design a transformer-based network to predict a canonical 3D Gaussian model and a separate deformation field.</li>
                            <li>Leverage vast amounts of online video data using a self-supervised approach with temporal consistency constraints.</li>
                            <li>Build a large-scale, procedurally generated 4D dataset, the "4D Objaverse," for controlled development and testing.</li>
                        </ul>
                    </div>
                    <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-3">Physics-Informed Deformable Gaussian Splatting</h3>
                        <p className="font-semibold text-gray-300 mb-4">From Photorealism to Plausibility</p>
                        <p className="mb-6 text-gray-400">
                            While 4DGS is photorealistic, it lacks an understanding of physics. This research seeks to infuse these models with a physical understanding, enabling them to generate not just what a scene *looks* like, but what is physically *possible*.
                        </p>
                         <h4 className="font-semibold text-white mb-3">Research Plan:</h4>
                        <ul className="space-y-4 text-gray-400 list-disc list-inside">
                           <li>Develop methods to derive a proxy surface mesh or density field from Gaussians to apply differentiable physical penalties.</li>
                           <li>Incrementally learn latent physical properties like mass, friction, and elasticity directly from video.</li>
                           <li>Advance towards causal reasoning and scene understanding by solving the representation mismatch between rendering and physics.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-stone-950/50 border-t border-stone-800">
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">Let's Connect</h2>
            <p className="mt-4 max-w-xl mx-auto text-gray-400">
                I'm actively seeking PhD opportunities for Fall 2025 and am eager to discuss my research. Please feel free to reach out.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
                <a href="https://github.com/crimsonkn1ght/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="w-8 h-8" />
                </a>
                <a href="mailto:gourab.roy.aiml@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail className="w-8 h-8" />
                </a>
            </div>
            <p className="mt-8 text-sm text-gray-500">&copy; Created by Gourab Roy.</p>
        </div>
    </footer>
    </div>
  );
};

export default ResearchStatement;
