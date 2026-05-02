import React, { useState } from 'react';
import { BookOpen, Users, ShieldCheck, Newspaper, GraduationCap, Info, Calendar, Video, ArrowRight, Clock, Star, Zap } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navvbar from '../Navvbar/Navvbar';

const ResourcesSection = () => {
  const [activeTab, setActiveTab] = useState('Guides & Tutorials');
  const location = useLocation();
  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab");

  if (tab) {
    const found = resources.find(r => r.id === tab);
    if (found) {
      setActiveTab(found.name);
    }
  }
  
}, [location.search]);

  const resources = [
    { 
       id: "guides-tutorials",
      name: 'Guides & Tutorials', 
      icon: <BookOpen size={20} />, 
      description: 'Step-by-step documentation and interactive walkthroughs to master the platform.', 
      details: [
        { title: 'API Documentation', text: 'Full technical specs for deep integration.', meta: '12 min read', status: 'Updated' },
        { title: 'Video Walkthroughs', text: 'Visual guides for every platform feature.', meta: '15 videos', status: 'Popular' },
        { title: 'Quick Start PDF', text: 'A 5-minute setup guide for new users.', meta: '2MB Download', status: 'Essential' }
      ] 
    },
    { 
      id: "learning-community",
      name: 'Learning Community', 
      icon: <Users size={20} />, 
      description: 'Connect with over 50,000+ educators and students sharing study strategies.', 
      details: [
        { title: 'Discord Server', text: 'Real-time chat with the ConQUER-AI community.', meta: '2.4k Online', status: 'Live' },
        { title: 'Peer Review Groups', text: 'Get feedback on your AI-generated curricula.', meta: 'Weekly cohorts', status: 'Open' },
        { title: 'Expert Q&A', text: 'Weekly sessions with pedagogical experts.', meta: 'Every Tuesday', status: 'Verified' }
      ] 
    },
    { 
      id: "brand-center",
      name: 'Brand Center', 
      icon: <ShieldCheck size={20} />, 
      description: 'Official assets, logos, and style guides for ConQUER-AI partners.', 
      details: [
        { title: 'Logo Kits', text: 'High-res vectors for print and digital use.', meta: 'All Formats', status: 'v2.0' },
        { title: 'Typography Rules', text: 'Guides on fonts and hierarchy systems.', meta: 'Web/Print', status: 'Static' },
        { title: 'Media Assets', text: 'Approved photography and UI screenshots.', meta: '140+ Assets', status: 'New' }
      ] 
    },
    { 
      id: "blog",
      name: 'Blog', 
      icon: <Newspaper size={20} />, 
      description: 'The latest updates on AI in education, learning science, and feature releases.', 
      details: [
        { title: 'Weekly Newsletter', text: 'Curated insights delivered to your inbox.', meta: '10k Subs', status: 'Free' },
        { title: 'Case Studies', text: 'How institutions are scaling with AI.', meta: '8 Reports', status: 'Featured' },
        { title: 'Product Updates', text: 'Release notes and upcoming roadmap items.', meta: 'Monthly', status: 'Latest' }
      ] 
    },
    { 
      id: "performance-academy",
      name: 'Performance Academy', 
      icon: <GraduationCap size={20} />, 
      description: 'Certified courses designed to boost your cognitive retention and study speed.', 
      details: [
        { title: 'Advanced Certifications', text: 'Professional credentials for power users.', meta: '40 Hours', status: 'Pro' },
        { title: 'Study Skills 101', text: 'Foundational habits for academic success.', meta: 'Beginner', status: 'Enrolling' },
        { title: 'Time Management', text: 'Systems to maximize your daily output.', meta: 'Certificate', status: 'Popular' }
      ] 
    },
    { 
      id: "learning-glossary",
      name: 'Learning Glossary', 
      icon: <Info size={20} />, 
      description: 'A comprehensive database of terms used in AI, pedagogy, and neurobiology.', 
      details: [
        { title: 'Neuroscience Terms', text: 'Decoding how the brain stores memories.', meta: '500+ Terms', status: 'Ref' },
        { title: 'AI Definitions', text: 'Plain-English explanations of LLMs.', meta: 'Beginner Friendly', status: 'Hot' },
        { title: 'Pedagogy Index', text: 'Classic and modern teaching methodologies.', meta: 'Academic', status: 'Verified' }
      ] 
    },
    { 
      id: "events",
      name: 'Events', 
      icon: <Calendar size={20} />, 
      description: 'Join us for global hackathons, study-fests, and in-person meetups.', 
      details: [
        { title: 'Annual Summit', text: 'Our flagship conference on future tech.', meta: 'Oct 2026', status: 'Early Bird' },
        { title: 'Local Meetups', text: 'Find ConQUER-AI users in your city.', meta: 'Global', status: 'Join' },
        { title: 'Hackathons', text: 'Build the next big ed-tech tool with us.', meta: '$10k Prizes', status: 'Register' }
      ] 
    },
    { 
      id: "webinars",
      name: 'Webinars', 
      icon: <Video size={20} />, 
      description: 'Live sessions with learning experts and the engineers behind ConQUER-AI.', 
      details: [
        { title: 'On-Demand Replays', text: 'Catch up on any missed live sessions.', meta: 'Unlimited', status: 'Archive' },
        { title: 'Upcoming Live Q&A', text: 'Ask our engineers anything directly.', meta: 'Next: Friday', status: 'Live' },
        { title: 'Guest Lectures', text: 'Insights from industry-leading researchers.', meta: 'Exclusive', status: 'Top Rated' }
      ] 
    },
  ];

  const activeData = resources.find(r => r.name === activeTab);

  return (
    <div>
      <Navvbar />

    <section className="min-h-screen bg-slate-50/50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Hub for <br />
                <span className="text-indigo-600">Knowledge</span>
              </h2>
              <p className="mt-4 text-slate-500 font-medium italic">Hover to explore categories</p>
            </div>
            
            <nav className="flex flex-col space-y-3">
              {resources.map((item) => (
                <button
                  key={item.name}
                  onMouseEnter={() => setActiveTab(item.name)}
                  className={`flex items-center justify-between group px-5 py-4 rounded-2xl transition-all duration-300 text-left border ${
                    activeTab === item.name 
                    ? 'bg-white border-indigo-100 shadow-xl shadow-indigo-500/10 -translate-y-1' 
                    : 'bg-transparent border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab === item.name ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {React.cloneElement(item.icon, { size: 18 })}
                    </div>
                    <span id = {item.name} className="text-lg font-bold">{item.name}</span>
                  </div>
                  <Zap 
                    size={16} 
                    className={`text-indigo-500 transition-all duration-500 ${activeTab === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Dynamic Content Display */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-2xl shadow-slate-200/50 min-h-[650px] flex flex-col">
              
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" key={activeTab}>
                <div className="flex items-start justify-between mb-10">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-widest rounded-full">
                            Category: {activeTab}
                        </span>
                        <h3 className="text-4xl font-black text-slate-900">{activeData.name}</h3>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-xl">
                            {activeData.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activeData.details.map((detail, idx) => (
                    <div key={idx} className="group relative flex flex-col p-6 bg-slate-50 rounded-3xl border border-transparent hover:border-indigo-100 hover:bg-white transition-all duration-300 cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-md uppercase">
                            {detail.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                            <Clock size={12} /> {detail.meta}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {detail.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        {detail.text}
                      </p>
                      
                      <div className="mt-4 flex items-center gap-2 text-indigo-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Resource <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                  
                  {/* Call to Action Card */}
                  <div className="flex flex-col items-center justify-center p-6 bg-indigo-600 rounded-3xl text-white text-center group cursor-pointer hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                     <Star className="mb-3 animate-pulse" />
                     <h4 className="text-lg font-bold">Want more?</h4>
                     <p className="text-sm text-indigo-100 mt-1">Unlock the full directory with a Pro account.</p>
                  </div>
                </div>

                <div className="mt-auto pt-12">
                  <button className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:pr-14 hover:bg-black overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        Launch {activeData.name} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default ResourcesSection;