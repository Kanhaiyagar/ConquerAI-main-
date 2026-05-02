import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, MessageCircle, CheckCircle, BarChart3, Zap, Users, Sparkles, BookOpen, PenTool, Brain, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/layout/Footer';

export default function LandingPage() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event if needed in the future
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const features = [
    {
      id: 1,
      icon: "🔍",
      title: "PDF Analyzer",
      color: "from-purple-400 to-purple-600",
      shortDesc: "Intelligent PDF analysis",
      fullDesc: "Upload any PDF and let our AI analyze it instantly. Extract key concepts, identify important sections, and understand complex content with intelligent summaries and explanations.",
      benefits: [
        "Extract Key Concepts - Automatically identify and highlight important information",
        "Smart Summarization - Get concise, intelligent summaries for quick revision",
        "Interactive Learning - Turn PDFs into engaging learning experiences",
        "Multi-language Support - Analyze documents in any language",
        "Instant Search - Find specific content across your PDFs instantly"
      ],
      icon_large: FileText
    },
    {
      id: 2,
      icon: "💬",
      title: "AI Chatbox",
      color: "from-blue-400 to-blue-600",
      shortDesc: "24/7 AI Support",
      fullDesc: "Get instant answers to all your study questions. Our intelligent AI tutor is available 24/7 to clarify concepts and provide detailed explanations tailored to your learning style.",
      benefits: [
        "Instant Responses - Get answers to your questions in seconds",
        "Context-Aware - AI understands your learning level and adapts explanations",
        "Multiple Explanations - Ask for alternative ways to understand concepts",
        "Homework Help - Get guidance without direct answers",
        "Learning History - AI remembers previous conversations"
      ],
      icon_large: MessageCircle
    },
    {
      id: 3,
      icon: "📚",
      title: "Smart Quizzes",
      color: "from-cyan-400 to-teal-600",
      shortDesc: "AI-Generated Assessments",
      fullDesc: "Test your knowledge with AI-generated quizzes tailored to your study materials. Get instant feedback and reinforce learning with adaptive difficulty that grows with your skills.",
      benefits: [
        "Adaptive Difficulty - Questions adjust based on your performance",
        "Instant Feedback - Get immediate explanations for wrong answers",
        "Multiple Formats - Fill-ups, MCQ, True/False, and essay questions",
        "Progress Tracking - See your improvement over time",
        "Custom Quizzes - Create quizzes from any of your study materials"
      ],
      icon_large: Zap
    },
    {
      id: 4,
      icon: "💰",
      title: "Analytics",
      color: "from-lime-400 to-green-600",
      shortDesc: "Performance Tracking",
      fullDesc: "Track your learning progress with detailed analytics. Visualize improvement, identify patterns, and get personalized recommendations to optimize your study strategy.",
      benefits: [
        "Visual Dashboards - See your learning journey at a glance",
        "Performance Metrics - Track accuracy, speed, and retention rates",
        "Learning Patterns - Identify your strengths and weaknesses",
        "Time Analytics - Understand how you spend your study time",
        "Goal Tracking - Set and monitor your learning objectives"
      ],
      icon_large: BarChart3
    },
    {
      id: 5,
      icon: "👥",
      title: "Community",
      color: "from-yellow-400 to-orange-500",
      shortDesc: "Learning Together",
      fullDesc: "Connect with thousands of learners worldwide. Collaborate on projects, share insights, ask questions, and grow together in our vibrant learning community.",
      benefits: [
        "Forums & Discussions - Ask questions and share knowledge",
        "Study Groups - Find peers studying the same topics",
        "Resource Sharing - Share notes and study materials",
        "Mentorship - Get guidance from experienced learners",
        "Community Events - Join webinars and learning sessions"
      ],
      icon_large: Users
    },
    {
      id: 6,
      icon: "⭐",
      title: "Certificates",
      color: "from-pink-400 to-rose-600",
      shortDesc: "Recognized Credentials",
      fullDesc: "Earn recognized certificates upon completion of courses. Showcase your achievements to employers and peers with verified credentials backed by ConQUER-AI.",
      benefits: [
        "Professional Certificates - Recognized across industries",
        "Skill Verification - Prove your competence with assessments",
        "Digital Badges - Display achievements on social media",
        "LinkedIn Integration - Add certificates to your profile",
        "Shareable Credentials - Easy sharing with employers"
      ],
      icon_large: Sparkles
    }
  ];

  const currentFeature = features.find(f => f.id === selectedFeature);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/20 to-white"></div>

        {/* Animated floating study icons - Top section */}
        <div className="absolute top-10 left-10 opacity-5 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}>
          <BookOpen className="w-32 h-32 text-teal-600" />
        </div>

        <div className="absolute top-32 right-20 opacity-5 animate-pulse" style={{ animationDuration: '4s' }}>
          <PenTool className="w-40 h-40 text-teal-500 transform -rotate-45" />
        </div>

        <div className="absolute top-40 left-1/3 opacity-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '7s' }}>
          <Brain className="w-28 h-28 text-cyan-600" />
        </div>

        {/* Middle section floating elements */}
        <div className="absolute top-1/2 right-10 opacity-5 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}>
          <Lightbulb className="w-36 h-36 text-teal-400" />
        </div>

        <div className="absolute top-2/3 left-20 opacity-4 animate-pulse" style={{ animationDuration: '5s' }}>
          <FileText className="w-32 h-32 text-teal-600 transform rotate-12" />
        </div>

        <div className="absolute top-1/3 right-1/4 opacity-5 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '6.5s' }}>
          <Zap className="w-28 h-28 text-cyan-500" />
        </div>

        {/* Bottom section floating elements */}
        <div className="absolute bottom-32 right-1/3 opacity-4 animate-pulse" style={{ animationDuration: '4.5s' }}>
          <BookOpen className="w-40 h-40 text-teal-400 transform -rotate-12" />
        </div>

        <div className="absolute bottom-40 left-1/4 opacity-5 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '7.5s' }}>
          <Brain className="w-32 h-32 text-cyan-600" />
        </div>

        {/* Floating dots pattern */}
        <div className="absolute top-1/4 left-1/2 opacity-3">
          <div className="flex gap-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-teal-600 animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Animated lines connecting elements */}
        <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" style={{ zIndex: -1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {/* Diagonal connecting lines */}
          <line x1="10%" y1="10%" x2="40%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="90%" y1="20%" x2="60%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="20%" y1="80%" x2="70%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
          <line x1="80%" y1="70%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="2" />
        </svg>

        {/* Gradient orbs for depth */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-cyan-300/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-l from-teal-200/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-teal-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-lg transform group-hover:scale-110 transition duration-300">
                    C
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                    ConQUER
                  </span>
                  <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-teal-600 bg-clip-text text-transparent">
                    -AI
                  </span>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-16">
                <a href="#features" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">How It Works</a>
                <a href="#pricing" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Pricing</a>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLogin}
                  className="hidden sm:inline-block text-gray-700 hover:text-teal-600 font-semibold text-sm transition duration-300"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleGetStarted}
                  className="group relative bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-6 py-2.5 rounded-lg transition duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-teal-200/50 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-22 pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-4 items-center justify-center">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-3 mb-2 justify-center border-4 border-teal-100 rounded-full px-6 py-3 bg-gradient-to-r from-teal-100 to-cyan-100">
                <span className="relative flex h-2 w-2 rounded-full bg-teal-600 animate-pulse"></span>
                <span className="text-sm font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
                  AI-Powered Intelligent Learning Platform
                </span>
              </div>

              {/* Main Heading with gradient */}
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
                <span className="block">Master Your Studies</span>
                <span className="block">with Advanced</span>
                <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-700 bg-clip-text text-transparent">ConQUER-AI</span>
              </h1>

              {/* Subheading */}
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                Intelligent study companion powered by cutting-edge AI. Analyze PDFs, get instant help, take quizzes, and track your learning performance all in one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
                <button 
                  onClick={handleGetStarted}
                  className="group relative bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-10 py-5 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-teal-400/50 text-lg transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </button>
                <button 
                  onClick={handleLogin}
                  className="relative group border-2 border-teal-400 text-teal-700 px-10 py-5 rounded-xl font-bold hover:bg-teal-50 transition duration-300 text-lg transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-700 font-semibold">
                <div className="flex items-center gap-2 group cursor-pointer hover:text-teal-600 transition">
                  <CheckCircle className="w-6 h-6 text-teal-600 group-hover:scale-110 transition" />
                  <span>30-day free trial</span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-teal-600 transition">
                  <CheckCircle className="w-6 h-6 text-teal-600 group-hover:scale-110 transition" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 group cursor-pointer hover:text-teal-600 transition">
                  <CheckCircle className="w-6 h-6 text-teal-600 group-hover:scale-110 transition" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Separator */}
        <div className="h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>

        {/* Features Section with Detailed View Below */}
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-400 rounded-full px-6 py-3 text-sm font-bold text-teal-700 mb-6 group cursor-pointer hover:border-teal-500 transition">
                ✨ CORE FEATURES
              </span>
              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">Powerful Tools for Smart Learning</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
            </div>

            {/* Feature Cards - All in One Line */}
            <div className="flex gap-6 justify-center mb-12 flex-wrap lg:flex-nowrap">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`group relative bg-white rounded-3xl border-2 p-10 hover:border-teal-400 hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105 flex-1 min-w-[200px] max-w-xs lg:max-w-none text-center flex flex-col items-center justify-center min-h-64 ${
                    selectedFeature === feature.id
                      ? 'border-teal-400 shadow-2xl shadow-teal-200/50 bg-gradient-to-br from-teal-50 to-cyan-50'
                      : 'border-purple-200'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 ${
                    selectedFeature === feature.id
                      ? 'from-teal-50 to-cyan-50 opacity-100'
                      : 'bg-gradient-to-br from-purple-50 to-blue-50'
                    }`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition duration-300">{feature.icon}</div>
                    <h3 className={`text-lg font-bold transition text-center ${
                      selectedFeature === feature.id 
                        ? 'text-teal-700' 
                        : 'text-gray-900 group-hover:text-teal-700'
                    }`}>
                      {feature.title}
                    </h3>
                    <div className={`flex justify-center mt-6 transition ${selectedFeature === feature.id ? 'text-teal-600' : 'text-purple-500'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 16.5l-4.5-4.5 1.41-1.41L12 13.67l3.09-3.09L16.5 12 12 16.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Details Section - Displays Below Without Separator */}
            {currentFeature && (
              <div className="animate-in fade-in duration-300">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                  {/* Left Content */}
                  <div className="relative z-10">
                    <h3 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                      {currentFeature.title} with <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">AI Intelligence</span>
                    </h3>

                    <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                      {currentFeature.fullDesc}
                    </p>

                    {/* Benefits List with Bullet Points */}
                    <div className="space-y-4 mb-10">
                      {currentFeature.benefits.map((benefit, i) => {
                        const [title] = benefit.split(' - ');
                        return (
                          <div key={i} className="flex items-start gap-3 group">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 mt-2.5"></div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900 group-hover:text-teal-600 transition">{title}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={handleGetStarted}
                      className="group relative bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold transition duration-300 flex items-center gap-2 shadow-lg hover:shadow-teal-300/50 overflow-hidden"
                    >
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition relative z-10" />
                    </button>
                  </div>

                  {/* Right Side - Illustration */}
                  <div className="relative h-[500px] hidden lg:flex items-center justify-center">
                    {/* Background colorful shapes */}
                    <div className="absolute inset-0">
                      {/* Pink shape */}
                      <div className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl opacity-80 blur-2xl"></div>
                      
                      {/* Green shape */}
                      <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-70 blur-2xl"></div>
                      
                      {/* Yellow shape */}
                      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-75 blur-3xl"></div>
                      
                      {/* Purple shape */}
                      <div className="absolute bottom-0 right-1/3 w-44 h-44 bg-gradient-to-tr from-purple-500 to-purple-400 rounded-3xl opacity-70 blur-2xl"></div>
                    </div>

                    {/* Person Illustration */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      {/* Head */}
                      <div className="relative mb-4">
                        <div className="w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full border-4 border-white shadow-lg relative z-20"></div>
                        {/* Hair */}
                        <div className="absolute -top-2 left-0 right-0 h-8 bg-gray-800 rounded-full blur-sm"></div>
                        {/* Smile */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-2 border-gray-700 rounded-full"></div>
                      </div>

                      {/* Body */}
                      <div className="w-20 h-32 bg-gradient-to-b from-green-400 to-green-500 rounded-2xl shadow-lg relative z-10 mb-2">
                        {/* Hands */}
                        <div className="absolute -left-8 top-8 w-8 h-8 bg-amber-200 rounded-full"></div>
                        <div className="absolute -right-8 top-8 w-8 h-8 bg-amber-200 rounded-full"></div>
                      </div>

                      {/* Document/Interface */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-white rounded-lg shadow-2xl border-4 border-purple-300 p-3 z-30 animate-bounce" style={{ animationDuration: '2s' }}>
                        <div className="w-full h-2 bg-purple-300 rounded mb-2"></div>
                        <div className="w-3/4 h-1.5 bg-gray-300 rounded mb-2"></div>
                        <div className="w-4/5 h-1.5 bg-gray-300 rounded"></div>
                      </div>

                      {/* Stats Circle */}
                      <div className="absolute top-8 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl z-20 border-4 border-white animate-pulse" style={{ animationDuration: '2.5s' }}>
                        <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center">
                          <svg className="absolute w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                            <circle 
                              cx="50" 
                              cy="50" 
                              r="45" 
                              fill="none" 
                              stroke="#0ea5e9" 
                              strokeWidth="4"
                              strokeDasharray="141.4 282.8"
                              style={{ transition: 'stroke-dasharray 0.3s ease' }}
                            />
                          </svg>
                          <div className="text-center relative z-10">
                            <div className="text-3xl font-black text-white drop-shadow-lg">32</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Badge/Icon */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg z-20 text-white text-3xl">
                        {currentFeature.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Features Grid */}
            <div className="mt-24">
              <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">And Much More</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { icon: "📱", label: "Mobile App" },
                  { icon: "🔒", label: "Secure" },
                  { icon: "⚡", label: "Fast" },
                  { icon: "🌍", label: "Global" },
                  { icon: "🎓", label: "Educational" },
                  { icon: "🚀", label: "Scalable" }
                ].map((feature, i) => (
                  <div 
                    key={i} 
                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-teal-400 hover:shadow-lg transition group cursor-pointer"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-125 transition">{feature.icon}</div>
                    <p className="font-bold text-gray-900 group-hover:text-teal-600 transition">{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/50 to-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-400 rounded-full px-6 py-3 text-sm font-bold text-teal-700 mb-6">
                🚀 SIMPLE PROCESS
              </span>
              <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8">Get Started in Minutes</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                Three simple steps to unlock your learning potential
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
              {/* Connecting lines */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600"></div>

              {[
                {
                  step: "1",
                  title: "Create Account",
                  description: "Sign up for free in seconds. No credit card required to start your learning journey.",
                  emoji: "📝",
                  delay: "0s"
                },
                {
                  step: "2",
                  title: "Upload & Analyze",
                  description: "Upload PDFs, ask questions, and let AI analyze your study materials instantly.",
                  emoji: "📚",
                  delay: "0.2s"
                },
                {
                  step: "3",
                  title: "Learn & Improve",
                  description: "Take quizzes, chat with AI tutor, and track your performance with detailed analytics.",
                  emoji: "🏆",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div 
                    className="text-6xl mb-8 text-center group-hover:scale-125 transition duration-300"
                    style={{ animation: `bounce 3s ease-in-out infinite`, animationDelay: item.delay }}
                  >
                    {item.emoji}
                  </div>
                  <div className="relative z-20 bg-white rounded-3xl border-2 border-gray-200 p-10 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-200/30 transition duration-300 h-full transform group-hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition duration-300">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4 pt-6 group-hover:text-teal-700 transition">{item.title}</h3>
                      <p className="text-gray-700 text-lg font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "50K+", label: "Active Learners", icon: "👥", color: "from-teal-600 to-cyan-500" },
                { number: "100K+", label: "PDFs Analyzed", icon: "📄", color: "from-cyan-500 to-teal-600" },
                { number: "4.9/5", label: "User Rating", icon: "⭐", color: "from-teal-600 to-cyan-500" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="relative group text-center bg-white rounded-3xl border-2 border-gray-200 p-12 hover:border-teal-400 transition duration-300 shadow-lg hover:shadow-2xl hover:shadow-teal-200/30 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition duration-300 inline-block">{stat.icon}</div>
                    <div className={`text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                      {stat.number}
                    </div>
                    <p className="text-gray-700 font-bold text-xl">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50/50 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-400 rounded-full px-6 py-3 text-sm font-bold text-teal-700 mb-6">
                💰 TRANSPARENT PRICING
              </span>
              <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-8">Choose Your Plan</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                Flexible plans designed for every learner. Start free, upgrade when you need more.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Free",
                  price: "₹0",
                  period: "Forever",
                  description: "Perfect for getting started",
                  features: ["Up to 3 PDF uploads/month", "Basic AI chat support", "5 quizzes/month", "Basic analytics", "Mobile app access"],
                  cta: "Get Started",
                  highlighted: false
                },
                {
                  name: "Pro",
                  price: "₹1099",
                  period: "/month",
                  description: "For serious learners",
                  features: ["Unlimited PDF uploads", "Advanced AI tutor", "Unlimited quizzes", "Advanced analytics", "Priority support", "Offline access", "Certificate"],
                  cta: "Start Free Trial",
                  highlighted: true
                },
                {
                  name: "Team",
                  price: "₹1699",
                  period: "/month",
                  description: "For educators & teams",
                  features: ["All Pro features", "Up to 50 users", "Team management", "Custom curriculum", "Admin dashboard", "SSO integration"],
                  cta: "Contact Sales",
                  highlighted: false
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`group relative rounded-3xl transition duration-300 overflow-hidden transform hover:scale-105 ${
                    plan.highlighted
                      ? 'border-3 border-teal-600 bg-gradient-to-br from-white to-teal-50 shadow-3xl scale-105'
                      : 'border-2 border-gray-200 bg-white hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-200/30'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  )}
                  
                  {plan.highlighted && (
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-4 text-center text-sm font-black relative z-10">
                      🏆 MOST POPULAR
                    </div>
                  )}
                  
                  <div className="relative z-10 p-10">
                    <h3 className="text-3xl font-black text-gray-900 mb-3">{plan.name}</h3>
                    <p className="text-gray-700 text-base font-semibold mb-8">{plan.description}</p>

                    <div className="mb-10">
                      <span className="text-6xl font-black bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-gray-600 ml-3 font-bold text-xl">{plan.period}</span>
                    </div>

                    <button
                      onClick={plan.name === 'Team' ? undefined : handleGetStarted}
                      className={`w-full py-4 rounded-2xl font-bold transition duration-300 mb-10 text-lg transform hover:scale-105 relative overflow-hidden group/btn ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-teal-400/50'
                          : 'border-2 border-teal-400 text-teal-700 hover:bg-teal-50'
                      }`}
                    >
                      <span className="relative z-10">{plan.cta}</span>
                    </button>

                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 group/item">
                          <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 group-hover/item:scale-110 transition" />
                          <span className="text-gray-700 font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 opacity-95"></div>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-2xl text-teal-100 mb-12 font-medium">
              Join thousands of successful learners. Start your free trial today—no credit card required.
            </p>
            <button 
              onClick={handleGetStarted}
              className="group relative inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-50 transition duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition relative z-10" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}