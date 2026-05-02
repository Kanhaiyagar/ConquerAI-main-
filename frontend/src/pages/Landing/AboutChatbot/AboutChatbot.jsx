import React from "react";
import {
  Bot,
  MessageCircle,
  Zap,
  Globe,
  Shield,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navvbar from "../Navvbar/Navvbar";

const ChatbotAboutPage = () => {
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
  const features = [
    {
      icon: <GraduationCap className="text-blue-400" />,
      title: "Socratic Tutoring",
      description:
        "Our AI doesn't just give answers. It asks guiding questions to help you arrive at the conclusion yourself, strengthening long-term retention.",
    },
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Real-time Feedback",
      description:
        "Get instant corrections on your logic or coding snippets. No more waiting for office hours or forum replies.",
    },
    {
      icon: <Globe className="text-emerald-400" />,
      title: "Multilingual Support",
      description:
        "Learn in your native tongue. Our bot supports over 50 languages, translating complex academic concepts into simple terms.",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans">
      {/* Navigation */}
      <Navvbar />
      {/* Hero Section */}
      <section id="hero" className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                Meet your 24/7 Study Partner
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                An AI built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Mastery
                </span>
                , not just shortcuts.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Most chatbots are search engines in disguise. Ours is a
                pedagogical engine. Whether you're debugging React code or
                deconstructing philosophy, our AI adapts to your learning pace
                and style.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25">
                  Start Chatting Now
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  See Use Cases
                </button>
              </div>
            </div>

            {/* Visual Chat Mockup */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      EduBot AI
                    </p>
                    <p className="text-xs text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>{" "}
                      Online
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4 h-64 overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px]">
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                      Can you explain how React's `useEffect` works?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm border border-slate-200 dark:border-slate-700">
                      Think of it as a synchronized bridge. If your component
                      changes, what's the one thing you want to keep in sync
                      with the outside world?
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg"></div>
                    <div className="w-10 h-10 bg-blue-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {f.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Shield className="mx-auto w-16 h-16 text-emerald-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learning you can trust.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Our AI uses **Retrieval-Augmented Generation (RAG)**, meaning it
            cross-references your course materials before speaking. We minimize
            "hallucinations" to ensure your study sessions are factually
            accurate.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-left">
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Uptime
              </p>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-left">
              <p className="text-2xl font-bold text-white">End-to-End</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Encryption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - Logo, Social Links, CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-12 border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8 md:mb-0">
              <div className="w-10 h-10 bg-linear-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-black text-lg">
                C
              </div>
              <span className="font-black text-2xl bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
                ConQUER-AI
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mb-8 md:mb-0">
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-teal-600 transition transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
                  {
                    label: "Why ConQUER-AI",
                    href: "frontend/studymeai/src/landingPage/WhyConquerAI/WhyConquerAI.jsx",
                  },
                  { label: "Customers", href: "#" },
                  { label: "Newsroom", href: "#" },
                  { label: "Careers", href: "#" },
                  { label: "Compliance & Security", href: "#" },
                  { label: "Become a partner", href: "#" },
                  { label: "Existing partner", href: "#" },
                  { label: "Partner marketplace", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-teal-600 transition font-medium"
                    >
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
                  { label: "Free trial", action: () => navigate("/register") },
                  { label: "Enterprise", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    {item.action ? (
                      <button
                        onClick={item.action}
                        className="text-gray-700 hover:text-teal-600 transition font-medium text-left"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-gray-700 hover:text-teal-600 transition font-medium"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases and Trends */}
            <div>
              <h3 className="font-black text-gray-900 text-lg mb-6">
                Features & Solutions
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Study Smarter", href: "#" },
                  { label: "PDF Analysis", href: "#" },
                  { label: "Question & Answer", href: "#" },
                  { label: "Quiz Generation", href: "#" },
                  { label: "Content Summary", href: "#" },
                  { label: "Performance Tracking", href: "#" },
                  { label: "Adaptive Learning", href: "#" },
                  { label: "Mobile Learning", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-teal-600 transition font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Community */}
            <div>
              <h3 className="font-black text-gray-900 text-lg mb-6">
                Resources & Community
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Guides & Tutorials", href: "#" },
                  { label: "Learning Community", href: "#" },
                  { label: "Brand Center", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Performance Academy", href: "#" },
                  { label: "Learning Glossary", href: "#" },
                  { label: "Events", href: "#" },
                  { label: "Webinars", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-teal-600 transition font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customers */}
            <div>
              <h3 className="font-black text-gray-900 text-lg mb-6">
                Customers
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Login", href: "#" },
                  { label: "Knowledge Base", href: "#" },
                  { label: "Release Notes", href: "#" },
                  { label: "Engagement Academy", href: "#" },
                  { label: "Support Center", href: "#" },
                  { label: "Status Page", href: "#" },
                  { label: "Documentation", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-teal-600 transition font-medium"
                    >
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
                    <div className="w-24 h-24 bg-linear-to-r from-red-100 to-red-50 rounded-full flex items-center justify-center border-2 border-red-300 hover:scale-110 transition">
                      <span className="text-2xl font-black text-red-600">
                        ★
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-2">
                      Leader 2024
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-linear-to-r from-green-100 to-green-50 rounded-full flex items-center justify-center border-2 border-green-300 hover:scale-110 transition">
                      <span className="text-2xl font-black text-green-600">
                        ★
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-2">
                      Best Choice
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-linear-to-r from-teal-100 to-teal-50 rounded-full flex items-center justify-center border-2 border-teal-300 hover:scale-110 transition">
                      <span className="text-2xl font-black text-teal-600">
                        ★
                      </span>
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-2">
                      #1 Platform
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="text-center lg:text-right max-w-md">
                <p className="text-gray-900 font-bold text-lg leading-relaxed">
                  Students choose{" "}
                  <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent font-black">
                    ConQUER-AI
                  </span>{" "}
                  for smarter learning at every stage
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-center text-gray-600 text-sm font-semibold">
                &copy; 2026 ConQUER-AI. All rights reserved. |{" "}
                <a href="#" className="hover:text-teal-600 transition">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-teal-600 transition">
                  Terms of Service
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-teal-600 transition">
                  Cookie Settings
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatbotAboutPage;
