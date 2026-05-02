import React from 'react';
import { BookOpen, Users, Play, BarChart3, Award, Zap } from 'lucide-react';

const HowItWorks = () => {
  const studentSteps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Browse Courses",
      description: "Explore our extensive library of courses across various topics. Filter by category, difficulty level, and ratings to find the perfect course for your learning goals."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Enroll Now",
      description: "Choose any course that interests you and enroll with just one click. Gain instant access to all course materials, lectures, and resources."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Learn at Your Pace",
      description: "Access video lectures organized by chapters. Learn whenever you want with lifetime access to all enrolled course materials."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Track Progress",
      description: "Monitor your learning journey with detailed progress tracking. See which lectures you've completed and what's remaining."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Rate & Review",
      description: "Share your feedback with the community. Rate courses and leave reviews to help other learners make informed decisions."
    }
  ];

  const educatorSteps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Create Your Course",
      description: "Build your course by adding chapters and lessons. Organize your content in a structured format for better learning experience."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Upload Lectures",
      description: "Add video lectures to each chapter. Enrich content with descriptions, resources, and learning materials for students."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manage Students",
      description: "View all students enrolled in your courses. Track their progress and engagement with your course content."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monitor Analytics",
      description: "Access your dashboard to see course statistics, student enrollments, and engagement metrics at a glance."
    }
  ];

  const features = [
    {
      title: "Secure Authentication",
      description: "Powered by Clerk for safe and secure user authentication"
    },
    {
      title: "Rich Content Editor",
      description: "Create engaging course descriptions using Quill rich text editor"
    },
    {
      title: "Video Integration",
      description: "Seamless YouTube video integration for lectures"
    },
    {
      title: "Real-time Feedback",
      description: "Instant notifications and toast messages for user actions"
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Our LMS Works</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Seamless learning and teaching experience for everyone
          </p>
        </div>
      </div>

      {/* Student Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            For Students
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Start your learning journey in 5 simple steps
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 border-t-4 border-blue-600"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-sm text-blue-600 font-semibold">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            For Educators
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Share your expertise with students worldwide in 4 steps
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {educatorSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition p-6 border-l-4 border-green-600"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 text-green-600">
                  {step.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    feature-to-be-available-soon
                  </span>
                </div>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 text-sm text-green-600 font-semibold">Step {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Complete Workflow
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Authentication</h3>
                <p className="text-gray-600">Users sign up or log in using secure Clerk authentication</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Role Assignment</h3>
                <p className="text-gray-600">Users are assigned roles (Student or Educator) based on their profile</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Content Management</h3>
                <p className="text-gray-600">Educators create and manage courses with chapters and video lectures</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">Learning Experience</h3>
                <p className="text-gray-600">Students enroll in courses, watch lectures, track progress, and rate content</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of learners and educators transforming their educational journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
              Become an Educator
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;