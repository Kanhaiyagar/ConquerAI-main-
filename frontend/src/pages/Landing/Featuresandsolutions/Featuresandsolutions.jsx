import React, { useState } from 'react';
import { FileText, MessageSquare, Zap, Search, ChevronRight, ArrowRight } from 'lucide-react';
import { BrainCircuit, Target, BarChart3, CheckCircle2, XCircle, Award } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from '../../../components/layout/Footer';
import Navvbar from '../Navvbar/Navvbar';

const FeaturesandSolutions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
  
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay for render
      }
    }
  }, [location]);
  const [activeTab, setActiveTab] = useState('summary');
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };


  // Mock data for the visualization on the right
  const currentQuestion = {
    text: "Which concept is crucial for the AI-Learning platform to adapt quizzes based on past performance?",
    options: [
      { id: 'a', text: "Static Content Delivery" },
      { id: 'b', text: "Retrieval-Augmented Generation (RAG)", correct: true },
      { id: 'c', text: "Linear Progression Modeling" },
      { id: 'd', text: "Manual Grading Systems" }
    ],
    explanation: "RAG allows the AI to pull relevant context (like your past mistakes or covered material) to generate highly specific, real-time questions."
  };

  const handleOptionClick = (optionId) => {
    if (showFeedback) return;
    setSelectedOption(optionId);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const features = [
    {
      icon: <BrainCircuit className="text-indigo-400" size={24} />,
      title: "Adaptive Difficulty",
      description: "Our AI analyzes your mastery level in real-time. Nailed the last three questions? The next one will challenge you further. Struggling? It dynamically adjusts to build your foundational understanding."
    },
    {
      icon: <Target className="text-emerald-400" size={24} />,
      title: "Personalized Skill Gap Analysis",
      description: "We don't just give you a score. The AI identifies specific concepts where you are weak and auto-generates micro-quizzes focused purely on closing those gaps."
    },
    {
      icon: <Zap className="text-amber-400" size={24} />,
      title: "AI-Generated Explanations",
      description: "Forget generic 'Correct/Incorrect' feedback. Get immediate, lucid explanations tailored to *why* your specific answer was right or wrong, accelerating your learning loop."
    }
  ];

  const benefits = [
    {
      id: 'summary',
      title: 'Instant Executive Summary',
      icon: <Zap className="text-yellow-400" size={20} />,
      description: 'Condense 50-page research papers into 5 key bullet points. Understand the core thesis in seconds.',
      color: 'bg-yellow-500/10'
    },
    {
      id: 'qa',
      title: 'Contextual Q&A',
      icon: <MessageSquare className="text-blue-400" size={20} />,
      description: 'Ask "How does this algorithm work?" and get an answer derived specifically from the text, with citations.',
      color: 'bg-blue-500/10'
    },
    {
      id: 'terms',
      title: 'Jargon Deciphering',
      icon: <Search className="text-purple-400" size={20} />,
      description: 'Instantly explain complex technical terms or acronyms without leaving the document.',
      color: 'bg-purple-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans">
      {/* Navigation */}
      <Navvbar />
      

      {/* Study Smarter Section */}
      <section id="study-smarter" className="pt-32 pb-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-teal-600 dark:text-teal-400 tracking-wide uppercase mb-2">The Science of Learning</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              How ConQUER-AI Optimizes Your Brain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Active Recall",
                description: "Instead of re-reading, our AI forces you to retrieve information. This strengthens neural pathways and ensures long-term retention.",
                icon: <BrainCircuit className="text-teal-500" />,
                tag: "Cognitive Science"
              },
              {
                title: "Information Synthesis",
                description: "The AI connects new concepts to things you already know, creating a 'knowledge graph' rather than a list of isolated facts.",
                icon: <Zap className="text-amber-500" />,
                tag: "Smart Connections"
              },
              {
                title: "Feedback Loops",
                description: "Instant, detailed corrections prevent 'wrong-way learning.' You fix misconceptions the moment they happen.",
                icon: <Target className="text-blue-500" />,
                tag: "Rapid Mastery"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 mb-6 border border-slate-100 dark:border-slate-700">
                  {item.icon}
                </div>
                <span className="block text-xs font-bold text-teal-600 dark:text-teal-400 mb-2 uppercase tracking-tighter">{item.tag}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Stats/Social Proof */}
          <div className="mt-16 py-8 px-6 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-3xl flex flex-col md:flex-row items-center justify-around gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-black">40%</div>
              <div className="text-sm font-medium opacity-90">Reduction in Study Time</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-black">2.5x</div>
              <div className="text-sm font-medium opacity-90">Better Retention Rates</div>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-black">10k+</div>
              <div className="text-sm font-medium opacity-90">Concepts Mastered Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Analysis Section */}
      <section id="pdf-analysis"  className="max-w-6xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 mb-20 min-h-screen">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent mb-4">
            Learn 10x Faster with AI Analysis
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Stop reading every word. Start extracting every insight. Our AI transforms static PDFs into interactive mentors.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Feature List */}
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div 
                key={benefit.id}
                onClick={() => setActiveTab(benefit.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeTab === benefit.id 
                    ? 'bg-slate-800 dark:bg-slate-700 border-blue-500 shadow-lg shadow-blue-500/20 translate-x-2' 
                    : 'bg-white dark:bg-slate-800/40 border-slate-700 dark:border-slate-700 hover:border-slate-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-green-400">{benefit.title}</h3>
                    <p className="text-slate-400 dark:text-slate-400 leading-relaxed text-sm">{benefit.description}</p>
                  </div>
                  <ChevronRight className={`ml-auto mt-1 transition-transform shrink-0 ${activeTab === benefit.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Visualization / Mockup */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-800 dark:bg-slate-800 rounded-2xl border border-slate-700 dark:border-slate-700 overflow-hidden shadow-2xl">
              <div className="bg-slate-700/50 dark:bg-slate-700/50 p-4 border-b border-slate-600 dark:border-slate-600 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-blue-400" />
                  <span className="text-sm font-medium text-white dark:text-slate-200">Research_Paper_v2.pdf</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="p-8 h-80 flex flex-col justify-center items-center text-center">
                {activeTab === 'summary' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-1 bg-blue-500 mb-4 rounded-full mx-auto"></div>
                    <p className="text-slate-300 dark:text-slate-300 italic">"The core finding suggests that transformer architectures exhibit emergent properties when scaled beyond $10^{12}$ parameters..."</p>
                    <span className="mt-4 block text-xs text-blue-400 uppercase tracking-widest font-bold">Generated Summary</span>
                  </div>
                )}
                {activeTab === 'qa' && (
                  <div className="w-full space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="bg-slate-700/50 dark:bg-slate-700/50 p-3 rounded-lg text-right ml-12 text-sm text-slate-200 dark:text-slate-300">What is the significance of the P-value here?</div>
                    <div className="bg-blue-600/20 dark:bg-blue-600/20 border border-blue-500/30 dark:border-blue-500/30 p-3 rounded-lg text-left mr-12 text-sm text-blue-100 dark:text-blue-200">
                      The p-value of 0.001 (page 14) indicates high statistical significance, refuting the null hypothesis.
                    </div>
                  </div>
                )}
                {activeTab === 'terms' && (
                  <div className="animate-in zoom-in duration-500">
                    <div className="inline-block bg-purple-500/20 dark:bg-purple-500/20 text-purple-300 dark:text-purple-300 px-3 py-1 rounded border border-purple-500/40 dark:border-purple-500/40 mb-2">Backpropagation</div>
                    <p className="text-sm text-slate-400 dark:text-slate-400 px-8">A supervised learning algorithm used for training artificial neural networks by calculating the gradient of the loss function.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 bg-white dark:bg-slate-950 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
            <FileText size={16} />
            <span>Advanced Summarization Engine</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            From Massive Docs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Instant Clarity</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Stop wasting time scanning for key information. Our AI doesn't just shorten text; it reconstructs the document's narrative, extracting the core arguments and critical data points so you can master the content in minutes, not hours.
          </p>

          <div className="space-y-6">
            {[
              { title: "Context-Aware Extraction", desc: "Our engine understands the hierarchy of information, prioritizing thesis statements and critical evidence." },
              { title: "Visual Timeline Generation", desc: "Automatically map out dates, events, and progressions found within complex research papers." },
              { title: "Metric & KPI Highlighting", desc: "Instantly surface all statistics, quantitative data, and performance indicators from any document." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup/Visual */}
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap size={150} />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-slate-700">
            <h5 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-500" />
              Executive Summary: The Future of AI
            </h5>
            <div className="space-y-3">
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
              <div className="w-5/6 h-2 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
              <div className="w-full h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
              <div className="w-4/6 h-2 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-100 dark:border-blue-900/50">
              <p className="text-xs text-blue-800 dark:text-blue-200 font-medium italic">
                "Key Insight: Transformer models show linear scaling in performance relative to compute budget, suggesting a ceiling exists around 2028."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

{/* Features Deep-Dive Section */}
      <section id="quiz-generation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32 min-h-screen">
        
        {/* Feature 1: Content Summary Detail */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              AI Synthesis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Smart Content Summarization
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Don't get buried in 100-page readings. Our AI extracts the skeletal structure of any document, highlighting the core thesis and evidence while discarding the fluff.
            </p>
            <div className="space-y-6">
              {[
                { title: "Hierarchical Parsing", desc: "Identify thesis, supporting arguments, and conclusions." },
                { title: "Semantic Compression", desc: "Reduces volume while maintaining logical flow and nuance." },
                { title: "Priority Tagging", desc: "Auto-highlights critical data, statistics, and citations." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-500" size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400/20 to-orange-500/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-700 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-xs font-mono text-slate-400">summary_engine_v4.py</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full animate-pulse"></div>
                <div className="h-2 w-5/6 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                <div className="h-2 w-4/6 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 text-[10px] font-bold rounded mb-2 uppercase">Core Finding</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">"The study concludes that neural plasticity is significantly enhanced through retrieval-based learning compared to passive review."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Performance Tracking Detail */}
        <div id="performance-tracking"  className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="relative group lg:pr-8">
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl">
              <div className="flex justify-between items-end h-40 gap-2 mb-6">
                {[40, 70, 55, 90, 65, 85, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-emerald-600 to-cyan-400 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Velocity</p>
                  <p className="text-xl font-black text-white">+18.4%</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Retention</p>
                  <p className="text-xl font-black text-white">94%</p>
                </div>
              </div>
            </div>
          </div>
          
          
          <div >
            <div  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <BarChart3 size={14} />
              Growth Analytics
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Predictive Performance Tracking
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We don't just track where you've been; we predict where you're going. Our AI maps your learning velocity to ensure you're always on the fastest path to mastery.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Concept Heatmaps", desc: "See exactly where your knowledge gaps are." },
                { title: "Decay Alerts", desc: "Get notified before you forget key concepts." },
                { title: "Benchmarking", desc: "Compare speed with top-tier students." },
                { title: "Mastery Score", desc: "A single metric for total comprehension." }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive Learning - Light Mode Full Screen */}
      <section id="adaptive-learning" className="min-h-screen w-full flex items-center justify-center bg-white text-slate-900 overflow-hidden relative border-y border-slate-100">
        {/* Subtle Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-indigo-50 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-emerald-50 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Copy Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-8">
                <BrainCircuit size={14} />
                Precision Education
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter text-slate-900">
                A Curriculum that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Self-Adjusts</span>.
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Static textbooks are a thing of the past. ConQUER-AI monitors your cognitive load in real-time, automatically thinning out concepts you know and doubling down on your friction points.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="group">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-2">Micro-Adjustments</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">The AI recalibrates question complexity every time you submit an answer.</p>
                </div>
                <div className="group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 text-emerald-600">
                    <Target size={20} />
                  </div>
                  <h4 className="text-slate-900 font-bold mb-2">Flow State Engine</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Designed to keep you in the "Goldilocks Zone"—challenging but never discouraging.</p>
                </div>
              </div>

             
            </div>

            {/* Right Side: Visual Dashboard Card */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                {/* Header Mockup */}
                <div className="flex items-center justify-between mb-12">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Live Calibration</p>
                    <h3 className="text-xl font-bold text-slate-900">Cognitive Profile</h3>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200`} />
                    ))}
                  </div>
                </div>

                {/* Adaptive Content Bars */}
                <div className="space-y-8">
                  {[
                    { label: "Critical Thinking", val: "82%", color: "bg-indigo-600" },
                    { label: "Technical Recall", val: "64%", color: "bg-emerald-500" },
                    { label: "Synthesis", val: "91%", color: "bg-amber-500" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-700">
                        <span>{stat.label}</span>
                        <span>{stat.val}</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full">
                        <div className={`h-full ${stat.color} rounded-full transition-all duration-1000 ease-out`} style={{ width: stat.val }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating "Next Topic" Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-5/6 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-xs font-bold">Suggested: Quantum Mechanics II</span>
                  </div>
                  <ArrowRight size={16} className="text-slate-400" />
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full mix-blend-multiply opacity-[0.03] animate-blob"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Smart Quizzes Section */}
      <section id="smart-quizzes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 min-h-screen">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-semibold">
            <Award size={16} />
            <span>Introducing Smart Quizzes</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5 text-slate-900 dark:text-white">
            Testing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-emerald-500">Teaches</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stop passive cramming. Our AI-driven Smart Quizzes dynamically adapt to your mastery, pinpointing your knowledge gaps and reinforcing concepts through targeted, retrieval-based practice.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Features/Benefits */}
          <div className="lg:col-span-5 space-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16 group">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            <div className="pl-16 pt-4">
             
            </div>
          </div>

          {/* Right Side: Interactive Quiz Mockup */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
            
            {/* Header Mockup */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800">
                  <BarChart3 className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Module: AI Fundamentals</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Concept: Adaptive Learning</h4>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Question 4/10</div>
                <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                  <div className="w-2/5 h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-8 relative z-10">
              <p className="text-xl md:text-2xl font-semibold leading-snug text-slate-900 dark:text-white">
                {currentQuestion.text}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8 relative z-10">
              {currentQuestion.options.map((option) => {
                let optionClasses = "w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between gap-4 font-medium ";
                let icon = null;

                if (!showFeedback) {
                  optionClasses += "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-800 cursor-pointer";
                } else {
                  if (option.correct) {
                    optionClasses += "bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-100 shadow-lg shadow-emerald-500/10";
                    icon = <CheckCircle2 className="text-emerald-500 flex-shrink-0" />;
                  } else if (selectedOption === option.id) {
                    optionClasses += "bg-red-50 dark:bg-red-950/50 border-red-500 text-red-900 dark:text-red-100 shadow-lg shadow-red-500/10";
                    icon = <XCircle className="text-red-500 flex-shrink-0" />;
                  } else {
                    optionClasses += "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60";
                  }
                }

                return (
                  <button 
                    key={option.id} 
                    onClick={() => handleOptionClick(option.id)} 
                    className={optionClasses} 
                    disabled={showFeedback}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold uppercase text-sm flex-shrink-0 ${
                        showFeedback && option.correct 
                          ? 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300' 
                          : showFeedback && selectedOption === option.id 
                          ? 'border-red-500 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300' 
                          : 'border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'
                      }`}>
                        {option.id}
                      </span>
                      {option.text}
                    </div>
                    {icon}
                  </button>
                );
              })}
            </div>

            {/* Feedback / Explanation */}
            {showFeedback && (
              <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-800 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <BrainCircuit size={22} className="text-indigo-500" />
                  <h5 className="text-lg font-bold text-indigo-950 dark:text-indigo-100">AI Tutor Insights</h5>
                </div>
                <p className="text-indigo-900 dark:text-indigo-200 leading-relaxed text-sm mb-4">
                  {currentQuestion.explanation}
                </p>
                <button 
                  onClick={handleNextQuestion}
                  className="text-sm font-bold text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors flex items-center gap-2"
                >
                  Next Question <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
        <Footer  />
      </div>
    </div>
  );
};

export default FeaturesandSolutions;