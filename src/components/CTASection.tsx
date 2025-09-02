import React from 'react';
import { ArrowRight, Clock, Users, CheckCircle, Star } from 'lucide-react';

const CTASection = () => {
  const enrollmentBenefits = [
    '4 hours of intensive, focused training',
    'Live interactive sessions with expert instructor',
    'Comprehensive Previous Versions to V10 migration guide',
    'Direct access to instructor for questions',
    'Certificate of completion'
  ];

  return (
    <section className="py-0 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">
            Ready to Master Linux V10?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our intensive differential training and gain the knowledge needed to successfully 
            upgrade from Linux Previous Versions to V10 in just 4 hours.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-red-500/30 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">
                  Enroll in Differential Training
                </h3>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                  Our specialized approach delivers maximum value in minimum time, focusing exclusively 
                  on what you need to know for a successful Previous Versions to V10 migration.
                </p>
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  Limited seats available for our next session. Secure your spot today and start 
                  implementing V10 improvements immediately.
                </p>
              </div>

              {/* Enrollment Benefits */}
              <div>
                <h4 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">What's Included:</h4>
                <div className="grid grid-cols-1 gap-2 lg:gap-3">
                  {enrollmentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs lg:text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2">
                Enroll Now
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>

            {/* Right Side - Pricing & Details */}
            <div className="space-y-4 lg:space-y-6">
              {/* Pricing Card */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 lg:p-8 border border-gray-700/50">
                <div className="text-center mb-4 lg:mb-6">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">RS 1200</div>
                  <div className="text-gray-400 text-sm lg:text-base">One-time payment</div>
                </div>
                
                <div className="space-y-3 lg:space-y-4 text-xs lg:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Training Duration:</span>
                    <span className="text-white font-semibold">4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Format:</span>
                    <span className="text-white font-semibold">Live Interactive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Support:</span>
                    <span className="text-white font-semibold">On Discord community</span>
                  </div>
                </div>
              </div>

              {/* Session Info */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-700/50">
                <div className="flex items-center gap-3 mb-3 lg:mb-4">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
                  <h4 className="text-base lg:text-lg font-semibold text-white">Next Session</h4>
                </div>
                <div className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="text-white font-semibold">Coming Soon</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-white font-semibold">TBD</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Seats:</span>
                    <span className="text-white font-semibold">Limited</span>
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

export default CTASection;