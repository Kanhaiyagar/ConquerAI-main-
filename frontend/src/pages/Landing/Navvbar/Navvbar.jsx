import React, { useEffect } from 'react';
import { ArrowRight, FileText, MessageCircle, CheckCircle, BarChart3, Zap, Users, Sparkles, BookOpen, PenTool, Brain, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



function Navvbar() {
      const navigate = useNavigate();

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
  return (
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
                <Link to="/" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Home</Link>
                <Link to="/how-it-works" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">How It Works</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Pricing</Link>
                <Link to="/profile" className="text-gray-700 hover:text-teal-600 transition font-semibold text-sm">Profile</Link>
              </div>

              {/* Auth Buttons */}
              
            </div>
          </div>
        </nav>
  )
}

export default Navvbar;