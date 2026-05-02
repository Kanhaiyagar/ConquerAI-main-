import React from 'react';
import { CheckCircle, Award, Users, Zap, Shield, Smartphone, TrendingUp, Lightbulb, ArrowRight, Star, Heart, Eye, Brain } from 'lucide-react';

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navvbar from '../Navvbar/Navvbar';
import Footer from '../../../components/layout/Footer';


 function Company() {

  
const location = useLocation();
const navigate = useNavigate();

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

  const handleGetStarted= ()=> {
    navigate('/register');
  };

  const reasons= [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Our advanced AI technology adapts to your learning style, making study sessions personalized and effective for maximum retention.",
      color: "from-purple-600 to-purple-400"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get real-time feedback on your answers with detailed explanations, helping you learn from mistakes immediately and improve faster.",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Award,
      title: "Recognized Certificates",
      description: "Earn industry-recognized certificates upon completion that you can showcase to employers and peers worldwide.",
      color: "from-yellow-600 to-yellow-400"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with thousands of learners globally, collaborate on projects, share insights, and grow together in our supportive community.",
      color: "from-green-600 to-green-400"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Track your progress with detailed dashboards that visualize your improvement, identify strengths, and suggest personalized recommendations.",
      color: "from-red-600 to-red-400"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security. We prioritize your privacy and never share your information with third parties.",
      color: "from-teal-600 to-teal-400"
    },
    {
      icon: Smartphone,
      title: "Learn Anywhere",
      description: "Access your courses from any device - desktop, tablet, or smartphone. Download content for offline learning on the go.",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      icon: Lightbulb,
      title: "Expert Instructors",
      description: "Learn from industry experts and experienced educators who are passionate about teaching and student success.",
      color: "from-orange-600 to-orange-400"
    }
  ];

  const features= [
    {
      number: "10K+",
      label: "Expert-Curated Courses",
      icon: "📚"
    },
    {
      number: "50K+",
      label: "Active Learners",
      icon: "👥"
    },
    {
      number: "100%",
      label: "Money-Back Guarantee",
      icon: "💰"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: "🎧"
    }
  ];

  const testimonials= [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "Google",
      image: "SJ",
      text: "ConQUER-AI transformed the way I learn. The AI-powered feedback helped me master complex concepts in half the time!",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "Software Engineer",
      company: "Microsoft",
      image: "AC",
      text: "The personalized learning paths are incredible. I completed 3 advanced courses and earned certifications that got me a promotion.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Product Manager",
      company: "Amazon",
      image: "ED",
      text: "The community aspect is what sets ConQUER-AI apart. I've made professional connections that led to amazing opportunities.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer",
      company: "Apple",
      image: "MR",
      text: "Best learning platform I've ever used. The analytics dashboard gives me clear insights into my progress and areas to improve.",
      rating: 5
    },
    {
  name: "Priya Sharma",
  role: "Frontend Developer",
  company: "Infosys",
  image: "PS",
  text: "ConQUER-AI made learning frontend development so structured and intuitive. The guided roadmap kept me consistent and job-ready.",
  rating: 5
},
{
  name: "Rahul Verma",
  role: "Backend Engineer",
  company: "TCS",
  image: "RV",
  text: "I struggled with system design before, but this platform simplified everything with real-world examples and AI feedback.",
  rating: 5
},
{
  name: "Daniel Kim",
  role: "Machine Learning Engineer",
  company: "Meta",
  image: "DK",
  text: "The hands-on projects and instant feedback accelerated my ML journey. I finally feel confident building real models.",
  rating: 5
},
{
  name: "Sophia Martinez",
  role: "Data Analyst",
  company: "Deloitte",
  image: "SM",
  text: "The interactive dashboards and practice problems helped me sharpen my analytical thinking like never before.",
  rating: 5
},
{
  name: "Arjun Mehta",
  role: "Full Stack Developer",
  company: "Wipro",
  image: "AM",
  text: "From zero to full stack — ConQUER-AI gave me clarity, direction, and confidence. The journey felt smooth and achievable.",
  rating: 5
},
{
  name: "Emily Brown",
  role: "Cybersecurity Analyst",
  company: "IBM",
  image: "EB",
  text: "The security modules are top-notch. I loved how practical and up-to-date the content is with real-world threats.",
  rating: 5
},
{
  name: "Karan Singh",
  role: "Software Developer",
  company: "HCL",
  image: "KS",
  text: "The DSA practice and AI hints helped me crack coding interviews I once feared. Highly recommended for placements!",
  rating: 5
},
{
  name: "Olivia Wilson",
  role: "UI Engineer",
  company: "Adobe",
  image: "OW",
  text: "Beautifully designed platform with equally powerful content. Learning UI/UX has never been this engaging.",
  rating: 5
},
{
  name: "Nikhil Gupta",
  role: "DevOps Engineer",
  company: "Accenture",
  image: "NG",
  text: "The DevOps roadmap and real-world labs helped me understand CI/CD pipelines practically, not just theoretically.",
  rating: 5
},
{
  name: "Lucas Anderson",
  role: "Cloud Engineer",
  company: "AWS",
  image: "LA",
  text: "Cloud concepts felt overwhelming until I used ConQUER-AI. The step-by-step learning path made everything click.",
  rating: 5
},
{
  name: "Ananya Kapoor",
  role: "AI Engineer",
  company: "NVIDIA",
  image: "AK",
  text: "The AI-powered mentorship feature feels like having a personal tutor available 24/7. It’s a game changer.",
  rating: 5
},
{
  name: "Ethan Walker",
  role: "Game Developer",
  company: "Ubisoft",
  image: "EW",
  text: "I loved how the platform combines creativity with technical depth. It helped me level up my game development skills.",
  rating: 5
}
  ];

  const benefits= [
    {
      title: "Self-Paced Learning",
      description: "Study at your own pace without pressure. No strict deadlines, just pure flexibility.",
      icon: "⏰"
    },
    {
      title: "Interactive Content",
      description: "Engage with interactive lessons, quizzes, and real-world projects that keep you motivated.",
      icon: "🎮"
    },
    {
      title: "Lifetime Access",
      description: "Get lifetime access to courses you purchase. Revisit anytime to refresh your knowledge.",
      icon: "♾️"
    },
    {
      title: "Affordable Pricing",
      description: "Premium education at a fraction of traditional course costs. Exceptional value for money.",
      icon: "💵"
    },
    {
      title: "Career Support",
      description: "Get guidance on resume building, interview prep, and job placement assistance.",
      icon: "🚀"
    },
    {
      title: "Peer Collaboration",
      description: "Work with peers on group projects, assignments, and code reviews for better learning.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navvbar />
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-teal-100 to-transparent rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose
              <span className="block bg-linear-to-r from-teal-600 via-cyan-500 to-teal-700 bg-clip-text text-transparent">ConQUER-AI</span>
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover why thousands of learners worldwide trust ConQUER-AI for their educational journey. We're committed to transforming the way people learn.
            </p>
            <button 
              onClick={handleGetStarted}
              className="group relative bg-linear-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-bold transition duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-teal-400/50 text-lg transform hover:scale-105 mx-auto"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-teal-600 via-teal-500 to-cyan-500">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index)=> (
              <div key={index} className="text-center text-white">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <div className="text-4xl font-black mb-2">{feature.number}</div>
                <p className="text-teal-100 font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Reasons Section */}
      <section id="reasons" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Eight Compelling Reasons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what makes ConQUER-AI the ultimate choice for your learning goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index)=> {
              const Icon= reason.icon;
              return (
                <div
                 key={index}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${reason.color} text-white mb-6 group-hover:scale-110 transition duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Additional Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index)=> (
              <div
               key={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 p-10 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                <div className="text-5xl mb-6 group-hover:scale-125 transition duration-300">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="customers" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">What Our Learners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real students who transformed their learning with ConQUER-AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index)=> (
              <div
               key={index}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-teal-400 hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, id)=> (
                      <Star key={id} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">How We Compare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what makes ConQUER-AI stand out from the competition
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-6 font-bold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">ConQUER-AI</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-900">Other Platforms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI-Powered Personalization", conquers: true, others: false },
                  { feature: "Real-Time Feedback", conquers: true, others: false },
                  { feature: "Lifetime Access", conquers: true, others: false },
                  { feature: "Interactive Quizzes", conquers: true, others: true },
                  { feature: "Community Support", conquers: true, others: true },
                  { feature: "Mobile Learning", conquers: true, others: true },
                  { feature: "Advanced Analytics", conquers: true, others: false },
                  { feature: "Certificates", conquers: true, others: true }
                ].map((row, index)=> (
                  <tr ykey={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      {row.conquers ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-300">✕</div>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.others ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 mx-auto text-gray-300">✕</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at ConQUER-AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Student First", description: "We prioritize your success and well-being above everything else." },
              { icon: Eye, title: "Transparency", description: "We're open and honest about our practices, pricing, and course quality." },
              { icon: Star, title: "Excellence", description: "We strive for the highest standards in education and user experience." },
              { icon: Users, title: "Community", description: "We believe in the power of learning together and supporting each other." }
            ].map((value, index)=> {
              const Icon= value.icon;
              return (
                <div
                  ykey={index}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-teal-400 hover:shadow-xl transition duration-300 text-center"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-linear-to-br from-teal-600 to-cyan-500 text-white mb-6 group-hover:scale-110 transition duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-teal-600 via-teal-500 to-cyan-500 opacity-95"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Experience the Difference?
          </h2>
          <p className="text-2xl text-teal-100 mb-12 font-medium">
            Join thousands of successful learners and start your transformation today.
          </p>
          <button 
            onClic={handleGetStarted}
            className="group relative inline-flex items-center gap-3 bg-white text-teal-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-teal-50 transition duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Get Started Free</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition relative z-10" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
 export default Company;