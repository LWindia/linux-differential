import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Shield, Zap, Rocket, Code, CheckCircle, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const v10Features = [
    {
      title: 'Enhanced Security',
      description: 'Advanced SELinux policies & zero-trust architecture',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Performance Boost',
      description: '40% faster boot times & optimized kernel',
      icon: Zap,
      color: 'text-blue-400'
    },
    {
      title: 'Cloud Native',
      description: 'Built-in Kubernetes & container orchestration',
      icon: Rocket,
      color: 'text-purple-400'
    },
    {
      title: 'Modern Tooling',
      description: 'Updated package managers & dev tools',
      icon: Code,
      color: 'text-yellow-400'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % v10Features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [v10Features.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">
      {/* Background Terminal Elements - Desktop Only */}
      <div className="hidden lg:block">
        {/* Top Left Terminal */}
        <div className="absolute top-20 left-8 w-48 h-32 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 text-xs text-gray-300 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">system-info</span>
          </div>
          <div className="space-y-1">
            <div>$ uname -r</div>
            <div className="text-green-400">5.14.0-284.11.1.el9</div>
            <div>$ cat /etc/redhat-release</div>
            <div className="text-green-400">Red Hat Enterprise Linux 9.3</div>
          </div>
        </div>

        {/* Top Right Terminal */}
        <div className="absolute top-20 right-8 w-48 h-32 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 text-xs text-gray-300 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">migration-tools</span>
          </div>
          <div className="space-y-1">
            <div>$ dnf install migration-tools</div>
            <div className="text-green-400">Package installed successfully</div>
            <div>$ system-upgrade-tool</div>
            <div className="text-green-400">Starting upgrade process...</div>
          </div>
        </div>

        {/* Bottom Left Terminal */}
        <div className="absolute bottom-20 left-8 w-48 h-32 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 text-xs text-gray-300 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">security-status</span>
          </div>
          <div className="space-y-1">
            <div>$ systemctl status selinux</div>
            <div className="text-green-400">SELinux: enabled</div>
            <div>$ firewall-cmd --state</div>
            <div className="text-green-400">running</div>
          </div>
        </div>

        {/* Bottom Right Terminal */}
        <div className="absolute bottom-20 right-8 w-48 h-32 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 text-xs text-gray-300 font-mono">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400">v10-features</span>
          </div>
          <div className="space-y-1">
            <div>$ uname -r</div>
            <div className="text-green-400">6.12.0-1.el10</div>
            <div>$ cat /etc/redhat-release</div>
            <div className="text-green-400">Red Hat Enterprise Linux 10.0</div>
          </div>
        </div>
      </div>

      {/* Mobile Background Design */}
      <div className="lg:hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-green-500/10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-8 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-12 w-12 h-12 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black text-white mb-3 lg:mb-6 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 lg:from-red-600 lg:to-red-800 bg-clip-text text-transparent drop-shadow-lg">LINUX</span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-black lg:font-bold text-white mb-3 lg:mb-6 tracking-wide">
          UPGRADATION V10 TRAINING
        </h2>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-3 lg:mb-6 max-w-3xl mx-auto leading-relaxed">
          Master the critical differences and updates in Linux. Learn what's new, what's changed, 
          and how to leverage the latest advanced features.
        </p>

        {/* Course Details Badges */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-600/20 text-green-400 text-xs sm:text-sm font-medium rounded-full border border-green-500/30">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>4 Hours</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-400 text-xs sm:text-sm font-medium rounded-full border border-blue-500/30">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Live Training</span>
          </div>
        </div>

        {/* Version Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 lg:mb-8 max-w-3xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/50 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-400" />
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-red-400 mb-1 sm:mb-2">Linux Previous Version</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Stable, proven, traditional</p>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-red-400" />
                <span>Battle-tested stability</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-red-400" />
                <span>Wide compatibility</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-red-400" />
                <span>Extensive documentation</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-green-500/30 text-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500/30 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-400" />
            </div>
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-green-400 mb-1 sm:mb-2">Linux V10</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">Modern, secure, cloud-ready</p>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                <span>Enhanced security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                <span>Cloud-native features</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-xs">
                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-green-400" />
                <span>Performance improvements</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-4 lg:mb-8">
          <button 
            onClick={() => window.open('https://rzp.io/rzp/9fs2rct', '_blank')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-2xl mx-auto">
          Limited seats available • 4-hour intensive training • Certificate included
        </p>
      </div>
    </div>
  );
};

export default HeroSection; 