
import React, { useEffect, useState } from 'react';
import { ArrowRight, FileText, MessageCircle, CheckCircle, BarChart3, Zap, Users, Sparkles, BookOpen, PenTool, Brain, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const handleGetStarted = () => {
    navigate('/register');
  };
  return (
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
  )
}

export default Pricing