import React from 'react';
import { ArrowRight, FileText, MessageCircle, CheckCircle, BarChart3, Zap, Users, Sparkles, BookOpen, PenTool, Brain, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
      const navigate = useNavigate();
 const handleGetStarted = () => {
  
  navigate('/register');
};
  const handleLogin = () => {
    navigate('/login');
  };
 
  return (
    <div>{/* Footer */}
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
              
            </div>

            {/* Main Footer Content - 5 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
              {/* Company */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Company</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Why ConQUER-AI", to: "/company#hero" },
                    { label: "Customers", to: "/company#customers" },
                    { label: "Newsroom", to: "/company" },
                    { label: "Careers", to: "/company" },
                    { label: "Compliance & Security", to: "/company" },
                    { label: "Become a partner", to: "/company" },
                    { label: "Existing partner", to: "/company" },
                    { label: "Partner marketplace", to: "/company" }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Product</h3>
                <ul className="space-y-4">
                  {[
                    { label: "PDF Analyzer", to: "/about-chatbot#hero" },
                    { label: "AI Chatbot", to: "/about-chatbot#hero" },
                    { label: "Smart Quizzes", to: "/features-and-solutions#quiz-generation" },
                    { label: "Analytics", to: "/about-analytics" },
                    { label: "AI for Learning", to: "/features-and-solutions#adaptive-learning" },
                    { label: "Integrations", to: "/features-and-solutions" },
                    { label: "Pricing", to: "/Pricing"},
                    
                    
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases and Trends */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Features & Solutions</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Study Smarter", to: "/features-and-solutions#study-smarter" },
                    { label: "PDF Analysis", to: "/features-and-solutions#pdf-analysis" },
                    { label: "Quiz Generation", to: "/features-and-solutions#smart-quizzes" },
                    { label: "Content Summary", to: "/features-and-solutions#quiz-generation" },
                    { label: "Performance Tracking", to: "/features-and-solutions#performance-tracking" },
                    { label: "Adaptive Learning", to: "/features-and-solutions#adaptive-learning" }
                    
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources & Community */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Resources & Community</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Guides & Tutorials", to: "/Resources?tab=guides-tutorials" },
                    { label: "Learning Community", to: "/Resources?tab=learning-community" },
                    { label: "Brand Center", to: "/Resources?tab=brand-center" },
                    { label: "Blog", to: "/Resources?tab=blog" },
                    { label: "Performance Academy", to: "/Resources?tab=performance-academy" },
                    { label: "Learning Glossary", to: "/Resources?tab=learning-glossary" },
                    { label: "Events", to: "/Resources?tab=events" },
                    { label: "Webinars", to: "/Resources?tab=webinars" }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customers */}
              <div>
                <h3 className="font-black text-gray-900 text-lg mb-6">Customers</h3>
                <ul className="space-y-4">
                  {[
                    
                    
                    { label: "Support Center", to: "/contact" },
                   
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.to} className="text-gray-700 hover:text-teal-600 transition font-medium">
                        {item.label}
                      </Link>
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
        </footer></div>
  )
}

export default Footer