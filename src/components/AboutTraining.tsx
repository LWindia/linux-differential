import React from 'react';
import { Target, Users, Clock, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const AboutTraining = () => {
  const trainingHighlights = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Concentrated 4-hour session covering only the essential differences between Previous Versions and V10'
    },
    {
      icon: Users,
      title: 'Professional Audience',
      description: 'Designed for system administrators, DevOps engineers, and IT professionals'
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Maximize learning in minimal time with our intensive differential approach'
    },
    {
      icon: BookOpen,
      title: 'Practical Knowledge',
      description: 'Hands-on examples and real-world migration scenarios'
    }
  ];

  const keyTopics = [
    'System architecture changes and improvements',
    'Security enhancements and new policies',
    'Performance optimizations and benchmarks',
    'Container and cloud-native features',
    'Package management and tooling updates',
    'Migration strategies and best practices'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Differential Training
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our specialized training focuses exclusively on the critical differences between Linux Previous Versions and V10, 
            providing you with the knowledge needed to successfully upgrade and leverage new capabilities.
          </p>
        </div>

        {/* Training Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trainingHighlights.map((highlight, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                <highlight.icon className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{highlight.title}</h3>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Differential Training?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Traditional Linux courses cover everything from basics to advanced topics, but our differential 
                approach zeroes in on what you actually need to know to upgrade from Previous Versions to V10. This focused 
                methodology saves time and delivers immediate, actionable knowledge.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you're planning a migration, need to understand new features, or want to stay current 
                with Linux evolution, this training provides the precise knowledge required for professional success.
              </p>
            </div>

            {/* Key Topics */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Training Topics Include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {keyTopics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                document.getElementById('curriculum')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              View Full Curriculum
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl p-8 border border-red-500/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-red-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Training Format</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Duration:</span>
                    <span className="text-white font-semibold">4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Format:</span>
                    <span className="text-white font-semibold">Live Interactive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Level:</span>
                    <span className="text-white font-semibold">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;