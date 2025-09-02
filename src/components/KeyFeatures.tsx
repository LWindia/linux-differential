import React from 'react';
import { Target, Clock, Users, BookOpen, CheckCircle, ArrowRight, Zap, Shield, Rocket, Code, Award, Star } from 'lucide-react';

const KeyFeatures = () => {
  const trainingBenefits = [
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Concentrated on only the differences between Previous Versions and V10, eliminating unnecessary content',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: '4 hours of intensive training saves weeks of self-study and research',
      color: 'text-green-400'
    },
    {
      icon: Users,
      title: 'Professional Network',
      description: 'Connect with other professionals facing similar migration challenges',
      color: 'text-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Practical Knowledge',
      description: 'Real-world examples and hands-on exercises for immediate application',
      color: 'text-yellow-400'
    }
  ];

  const whatYouGet = [
    'Comprehensive understanding of Previous Versions to V10 differences',
    'Migration planning and execution strategies',
    'Performance optimization techniques',
    'Security enhancement implementation',
    'Cloud-native feature utilization',
    'Troubleshooting and support guidance',
    'Direct access to instructor for questions'
  ];

  const comparisonData = [
    {
      approach: 'Content Coverage',
      traditional: '40+ hours of content',
      differential: '4 hours focused content'
    },
    {
      approach: 'Focus',
      traditional: 'Generic Linux topics',
      differential: 'Specific migration focus'
    },
    {
      approach: 'Time to Completion',
      traditional: 'Weeks to complete',
      differential: 'Single session completion'
    },
    {
      approach: 'Practical Application',
      traditional: '80% review material',
      differential: '100% Previous Versions to V10 differences'
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-b from-black to-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Meet Your Mentor Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-800/50 mb-4 lg:mb-6">
                      <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Meet Your Mentor</h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from one of the most experienced Linux professionals in the industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Mentor Profile */}
            <div className="space-y-6 lg:space-y-8">
              {/* Mentor Name & Title */}
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">Mr. Vimal Daga</h3>
                <div className="inline-flex items-center gap-2 px-3 lg:px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full">
                  <Award className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm lg:text-base">Linux & Cloud Expert</span>
                </div>
              </div>

              {/* Mentor Description */}
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                A distinguished Linux professional with over 23 years of experience in enterprise Linux systems, 
                cloud infrastructure, and DevOps practices. Mr. Daga has trained over 10 Lakh+ students worldwide 
                and has hands-on experience with 153+ tools and technologies.
              </p>

              {/* Key Credentials Grid */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-1 lg:mb-2">23+</div>
                  <div className="text-gray-400 text-xs lg:text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-1 lg:mb-2">10Lakh+</div>
                  <div className="text-gray-400 text-xs lg:text-sm font-medium">Students Trained</div>
                </div>
                <div className="text-center p-3 lg:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-1 lg:mb-2">153+</div>
                  <div className="text-gray-400 text-xs lg:text-sm font-medium">Tools & Technologies</div>
                </div>
              </div>

              {/* What You'll Receive */}
              <div className="space-y-3 lg:space-y-4">
                <h4 className="text-lg lg:text-xl font-semibold text-white">What You'll Receive:</h4>
                <div className="space-y-2 lg:space-y-3">
                  {whatYouGet.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs lg:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Mentor Visual Card */}
            <div className="relative">
              {/* Background Glow Effect - Hidden on mobile */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl blur-3xl"></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-gray-700/50 shadow-2xl">
                {/* Profile Image */}
                <div className="flex justify-center mb-6 lg:mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-red-500/30 shadow-2xl">
                      <img 
                        src="/images/Vimal Sir's .jpg" 
                        alt="Mr. Vimal Daga" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Status Badge */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="text-center space-y-3 lg:space-y-4">
                  <h4 className="text-xl lg:text-2xl font-bold text-white">Mr. Vimal Daga</h4>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-300 text-xs lg:text-sm font-medium">5.0/5</span>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 lg:px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      2x Ted EX Speaker
                    </span>
                    <span className="px-2 lg:px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      Senior Principal IT Consultant
                    </span>
                    <span className="px-2 lg:px-3 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      World Record holder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Comparison Table */}
          <div className="mt-4 lg:mt-6">
            <h4 className="text-xl lg:text-2xl font-bold text-white text-center mb-6 lg:mb-8">Traditional vs. Differential Training</h4>
            <div className="overflow-hidden rounded-xl lg:rounded-2xl border border-gray-700/50">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/50">
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-white font-semibold text-sm lg:text-base">Training Approach</th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-red-400 font-semibold text-sm lg:text-base">Traditional Training</th>
                    <th className="px-4 lg:px-6 py-3 lg:py-4 text-center text-green-400 font-semibold text-sm lg:text-base">Our Differential Training</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-800/20'}>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-gray-300 font-medium text-sm lg:text-base">{row.approach}</td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-center text-gray-400 text-sm lg:text-base">{row.traditional}</td>
                      <td className="px-4 lg:px-6 py-3 lg:py-4 text-center text-gray-300 text-sm lg:text-base">{row.differential}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;