
import React, { useState } from 'react';
import { ArrowRight, BarChart3, TrendingUp, PieChart, LineChart, Activity, Zap, Target, Users, Clock, Award, Eye, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HowAnalyticsWork() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleGetStarted = () => {
    navigate('/register');
  };

  const analyticsFeatures = [
    {
      id: 1,
      icon: BarChart3,
      title: "Performance Dashboard",
      description: "Comprehensive overview of your learning metrics",
      details: "Real-time dashboard showing your current performance, streak, and overall progress. Get a bird's eye view of your learning journey at a glance."
    },
    {
      id: 2,
      icon: LineChart,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with visual graphs",
      details: "Track your scores, completion rates, and skill improvements with interactive line charts. See exactly how far you've come."
    },
    {
      id: 3,
      icon: PieChart,
      title: "Subject Breakdown",
      description: "Understand your performance by topic and subject",
      details: "Pie charts and breakdowns show your strengths and weaknesses across different subjects and topics."
    },
    {
      id: 4,
      icon: Activity,
      title: "Learning Activity",
      description: "Detailed logs of all your study activities",
      details: "See when you studied, what you studied, and how long you spent on each topic with detailed activity logs."
    },
    {
      id: 5,
      icon: Zap,
      title: "Skill Assessment",
      description: "Detailed analysis of your skill levels",
      details: "Get detailed assessments of your proficiency in different skills with recommendations for improvement."
    },
    {
      id: 6,
      icon: Target,
      title: "Goal Progress",
      description: "Track progress toward your learning goals",
      details: "Monitor your progress against the goals you've set. Get motivational insights and milestone celebrations."
    }
  ];

  const metricsExplained = [
    {
      metric: "Accuracy Rate",
      explanation: "The percentage of questions you answer correctly. A higher rate indicates better understanding of the material.",
      example: "85% accuracy means you get 85 out of 100 questions right on average."
    },
    {
      metric: "Completion Rate",
      explanation: "The percentage of course material you've completed. Tracks your progress through lessons and modules.",
      example: "60% completion means you've finished 60% of the course material."
    },
    {
      metric: "Average Response Time",
      explanation: "The average time you spend answering questions. Helps identify if you're rushing or taking too long.",
      example: "Average of 45 seconds per question helps optimize your study pace."
    },
    {
      metric: "Learning Streak",
      explanation: "The number of consecutive days you've studied. Motivates consistency and regular learning habits.",
      example: "A 7-day streak means you've studied every day for a week."
    },
    {
      metric: "Retention Score",
      explanation: "Measures how well you remember previously learned material. Based on spaced repetition accuracy.",
      example: "80% retention means you remember 80% of concepts you learned weeks ago."
    },
    {
      metric: "Time Spent",
      explanation: "Total hours invested in learning. Helps you balance study time and avoid burnout.",
      example: "20 hours per week is a healthy study schedule for effective learning."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Every action you take is recorded - quiz scores, time spent, topics covered, and more.",
      icon: "📊"
    },
    {
      step: 2,
      title: "Processing",
      description: "Our AI analyzes your data patterns to calculate meaningful metrics and identify trends.",
      icon: "⚙️"
    },
    {
      step: 3,
      title: "Visualization",
      description: "Complex data is converted into easy-to-understand charts, graphs, and visualizations.",
      icon: "📈"
    },
    {
      step: 4,
      title: "Insights",
      description: "We generate actionable insights and personalized recommendations based on your progress.",
      icon: "💡"
    },
    {
      step: 5,
      title: "Optimization",
      description: "Use these insights to adjust your learning strategy and improve your performance.",
      icon: "🚀"
    }
  ];

  const analyticsBenefits = [
    {
      icon: Eye,
      title: "Self-Awareness",
      description: "Understand your strengths and weaknesses with detailed performance analysis."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Track progress and adjust your learning strategies for better results."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Monitor progress toward specific learning goals and celebrate milestones."
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Receive AI-powered suggestions for topics you should focus on next."
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Identify how you spend study time and optimize for maximum efficiency."
    },
    {
      icon: Award,
      title: "Motivation Boost",
      description: "Visual progress indicators and achievements keep you motivated throughout your journey."
    }
  ];

  const faqs = [
    {
      question: "How often are analytics updated?",
      answer: "Your analytics are updated in real-time. As soon as you complete a quiz or lesson, your scores are reflected in your dashboard within seconds."
    },
    {
      question: "Is my learning data private and secure?",
      answer: "Yes, absolutely. Your data is encrypted and stored securely. We follow enterprise-grade security standards and never share your personal data with third parties."
    },
    {
      question: "Can I export my analytics reports?",
      answer: "Yes! You can export your performance reports as PDF or CSV files. This is useful for sharing with teachers, mentors, or keeping personal records."
    },
    {
      question: "What do the different color codes mean?",
      answer: "Green indicates strong performance (80%+), yellow indicates room for improvement (60-80%), and red indicates areas needing focus (<60%). This color coding helps you quickly identify where to focus."
    },
    {
      question: "How are recommendations generated?",
      answer: "Our AI analyzes your performance patterns, identifies weak areas, and suggests topics or courses that would help you improve. It learns from your study habits to make personalized suggestions."
    },
    {
      question: "Can I set custom goals and track them?",
      answer: "Yes! You can set custom learning goals (e.g., 'achieve 90% accuracy in Mathematics') and our analytics will track your progress toward these specific targets."
    },
    {
      question: "What if I want to benchmark against other learners?",
      answer: "We provide optional benchmarking data showing how your performance compares to other learners at your level. This is completely optional and you can disable it in settings."
    },
    {
      question: "How far back can I view my analytics history?",
      answer: "You have access to your complete learning history for your entire time on ConQUER-AI. You can view analytics from any date and compare across different time periods."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                <a href="#home" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Home</a>
                <a href="#features" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Features</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">How It Works</a>
                <a href="#benefits" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Benefits</a>
              </div>

            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-gradient-to-r from-teal-100 to-cyan-100 border-2 border-teal-400 rounded-full px-6 py-3 text-sm font-bold text-teal-700 mb-6">
              📊 ANALYTICS & INSIGHTS
            </span>
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              How Our
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-700 bg-clip-text text-transparent">Advanced Analytics Work</span>
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Understand how ConQUER-AI tracks, analyzes, and optimizes your learning journey with intelligent insights and data-driven recommendations.
            </p>
            <button 
              onClick={handleGetStarted}
              className="group relative bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-teal-400/50 text-lg transform hover:scale-105 mx-auto"
            >
              Explore Analytics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Six Analytics Dashboards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple views of your data to understand different aspects of your learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                  onClick={() => setActiveTab(feature.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white mb-6 group-hover:scale-110 transition duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    
                    {activeTab === feature.id && (
                      <div className="mt-6 pt-6 border-t-2 border-teal-300">
                        <p className="text-gray-700 font-medium">{feature.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Workflow */}
      <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">The Analytics Workflow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five key steps that transform raw data into actionable insights
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-cyan-500"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {workflowSteps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl mb-6 text-center">{item.icon}</div>
                  <div className="relative z-20 bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-teal-400 hover:shadow-xl transition duration-300 h-full">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-black text-lg z-10">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 pt-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Explained */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Key Metrics Explained</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding what each metric means and how it helps you learn better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {metricsExplained.map((metric, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 p-10 hover:border-teal-400 hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{metric.metric}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{metric.explanation}</p>
                  
                  <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-600">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-teal-700">Example:</span> {metric.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id='benefits' className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Benefits of Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How detailed insights improve your learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-10 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 text-white mb-6 group-hover:scale-110 transition duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our analytics system
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-teal-400 transition duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  <span className={`text-2xl text-teal-600 transition duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                    ⋮
                  </span>
                </button>

                {expandedFaq === index && (
                  <div className="px-6 pb-6 pt-0 border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-200 p-10">
          <div className="flex gap-6">
            <div className="text-4xl">🔒</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Data is Protected</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All your analytics data is encrypted and stored securely. We comply with GDPR, CCPA, and other privacy regulations. You have full control over your data and can export or delete it anytime.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ End-to-end encryption for all data</li>
                <li>✓ Regular security audits and certifications</li>
                <li>✓ We never sell or share your data</li>
                <li>✓ Transparent privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 opacity-95"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            See Your Progress Come to Life
          </h2>
          <p className="text-2xl text-teal-100 mb-12 font-medium">
            Start using our advanced analytics to optimize your learning journey today.
          </p>
          <button 
            onClick={handleGetStarted}
            className="group relative inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-50 transition duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Start Free Trial</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition relative z-10" />
          </button>
        </div>
      </section>

              {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Top Section - Logo, Social Links, CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-12 border-b border-gray-200">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-lg">
                  C
                </div>
                <span className="font-black text-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  ConQUER-AI
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 mb-8 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-col sm:flex-row">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition transform hover:scale-105">
                  Get a demo
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition transform hover:scale-105">
                  Contact us
                </button>
              </div>
            </div>

            {/* Main Footer Content - 5 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
              {/* Company */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Company</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Why ConQUER-AI", href: "frontend/studymeai/src/landingPage/WhyConquerAI/WhyConquerAI.jsx" },
                    { label: "Customers", href: "#" },
                    { label: "Newsroom", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Compliance & Security", href: "#" },
                    { label: "Become a partner", href: "#" },
                    { label: "Existing partner", href: "#" },
                    { label: "Partner marketplace", href: "#" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Product</h3>
                <ul className="space-y-4">
                  {[
                    { label: "PDF Analyzer", href: "#" },
                    { label: "AI Chatbot", href: "#" },
                    { label: "Smart Quizzes", href: "#" },
                    { label: "Analytics", href: "#" },
                    { label: "AI for Learning", href: "#" },
                    { label: "Integrations", href: "#" },
                    { label: "Pricing", href: "#" },
                    { label: "Free trial", href: "#" },
                    { label: "Enterprise", href: "#" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases and Trends */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Features & Solutions</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Study Smarter", href: "#" },
                    { label: "PDF Analysis", href: "#" },
                    { label: "Question & Answer", href: "#" },
                    { label: "Quiz Generation", href: "#" },
                    { label: "Content Summary", href: "#" },
                    { label: "Performance Tracking", href: "#" },
                    { label: "Adaptive Learning", href: "#" },
                    { label: "Mobile Learning", href: "#" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources & Community */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Resources & Community</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Guides & Tutorials", href: "#" },
                    { label: "Learning Community", href: "#" },
                    { label: "Brand Center", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Performance Academy", href: "#" },
                    { label: "Learning Glossary", href: "#" },
                    { label: "Events", href: "#" },
                    { label: "Webinars", href: "#" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customers */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Customers</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Login", href: "#" },
                    { label: "Knowledge Base", href: "#" },
                    { label: "Release Notes", href: "#" },
                    { label: "Engagement Academy", href: "#" },
                    { label: "Support Center", href: "#" },
                    { label: "Status Page", href: "#" },
                    { label: "Documentation", href: "#" }
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={item.href} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section - Awards & Testimonial */}
            <div className="border-t border-gray-200 pt-12">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                {/* Awards */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {/* Award badges */}
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-full flex items-center justify-center border-2 border-red-300 hover:scale-110 transition">
                        <span className="text-2xl font-black text-red-600">★</span>
                      </div>
                      <p className="text-xs font-bold text-gray-600 mt-2">Leader 2024</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center border-2 border-green-300 hover:scale-110 transition">
                        <span className="text-2xl font-black text-green-600">★</span>
                      </div>
                      <p className="text-xs font-bold text-gray-600 mt-2">Best Choice</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition">
                        <span className="text-2xl font-black text-teal-600">★</span>
                      </div>
                      <p className="text-xs font-bold text-gray-600 mt-2">#1 Platform</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="text-center lg:text-right max-w-md">
                  <p className="text-gray-900 font-bold text-lg leading-relaxed">
                    Students choose <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent font-black">ConQUER-AI</span> for smarter learning at every stage
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-200 mt-12 pt-8">
                <p className="text-center text-gray-600 text-sm font-semibold">
                  &copy; 2026 ConQUER-AI. All rights reserved. | <a href="#" className="hover:text-teal-600 transition">Privacy Policy</a> | <a href="#" className="hover:text-teal-600 transition">Terms of Service</a> | <a href="#" className="hover:text-teal-600 transition">Cookie Settings</a>
                </p>
              </div>
            </div>
          </div>
        </footer>

      
    </div>
  );
}