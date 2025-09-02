import React from 'react';
import { BookOpen, Clock, Target, CheckCircle, ArrowRight, Brain, Shield, Cloud, Code, Server } from 'lucide-react';

const LearningModules = () => {
  const curriculumModules = [
    {
      icon: Brain,
      title: 'Module 1: Core System & AI Features',
      description: 'Explore the fundamental system updates and revolutionary AI integration',
      topics: [
        {
          category: 'Kernel & Core Updates',
          details: [
            'Kernel: 5.14 → 6.12',
            'glibc 2.39, systemd 256, bash 5.2',
            'Python 3.12, dnf 4.20, rpm 4.19',
            'Diff vs Previous Versions: Higher performance, scalability, better package management'
          ]
        },
        {
          category: 'AI-Powered Enhancements',
          details: [
            'RHEL Lightspeed: AI command-line assistant',
            'Install: dnf install command-line-assistant',
            'Shortcuts: c, cla, c -i, c -a, c history',
            'Diff vs Previous Versions: First-ever AI integration in RHEL'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Module 2: Security & Compliance',
      description: 'Master advanced security features and compliance automation',
      topics: [
        {
          category: 'Post-Quantum Cryptography (PQC)',
          details: [
            'Future-ready encryption',
            'Encrypted DNS + HSM support (Tech Preview)',
            'AIDE System Role for intrusion detection automation'
          ]
        },
        {
          category: 'Built-in Compliance & Hardening',
          details: [
            'Streamlined FIPS validation',
            'STIG & CIS profiles',
            'SELinux improvements',
            'Diff vs Previous Versions: Traditional crypto, no PQC or encrypted DNS, AIDE not automated'
          ]
        }
      ]
    },
    {
      icon: Cloud,
      title: 'Module 3: Deployment, Web Console & Hybrid Cloud',
      description: 'Learn modern deployment strategies and cloud-native features',
      topics: [
        {
          category: 'Immutable OS Image Mode',
          details: [
            'Consistency in deployments',
            'Image Builder Enhancements',
            'Multi-platform: Cloud, VMs, Bare Metal, WSL',
            'Container-native OS delivery'
          ]
        },
        {
          category: 'Web Console & Cloud Support',
          details: [
            'Built-in text editor',
            'Manage Stratis limits & HA add-on',
            'Optimized images: AWS, Azure, GCP',
            'Insights planning & lifecycle visibility',
            'Extensions repo for cloud workloads',
            'Diff vs Previous Versions: No immutable mode, simpler console, limited cloud images'
          ]
        }
      ]
    },
    {
      icon: Code,
      title: 'Module 4: Developer Ecosystem & Architecture',
      description: 'Explore updated toolchains and new architecture support',
      topics: [
        {
          category: 'Updated Developer Toolchains',
          details: [
            'PHP 8.3, Git 2.47, NGINX 1.26',
            'MySQL 8.4, Maven 3.9',
            'Redis, Valkey, WSL support'
          ]
        },
        {
          category: 'New Architecture Support',
          details: [
            'Flatpak support for desktop apps → flatpak install ...',
            'RISC-V Developer Preview (HiFive P550)',
            'Diff vs Previous Versions: Older stacks, no Flatpak, no RISC-V'
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-black to-gray-900/30 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Training Curriculum
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Master the key differences between Previous Versions and RHEL 10 through our focused, 
            practical curriculum designed for immediate implementation.
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="text-center p-4 lg:p-6 bg-gray-800/30 rounded-xl lg:rounded-2xl border border-gray-700/50">
            <Clock className="w-10 h-10 lg:w-12 lg:h-12 text-red-400 mx-auto mb-3 lg:mb-4" />
            <div className="text-xl lg:text-2xl font-bold text-white mb-2">4 Hours Total</div>
            <div className="text-gray-400 text-sm lg:text-base">Intensive Training</div>
          </div>
          <div className="text-center p-4 lg:p-6 bg-gray-800/30 rounded-xl lg:rounded-2xl border border-gray-700/50">
            <Target className="w-10 h-10 lg:w-12 lg:h-12 text-red-400 mx-auto mb-3 lg:mb-4" />
            <div className="text-xl lg:text-2xl font-bold text-white mb-2">4 Focused Modules</div>
            <div className="text-gray-400 text-sm lg:text-base">Specific to Previous Versions→V10</div>
          </div>
          <div className="text-center p-4 lg:p-6 bg-gray-800/30 rounded-xl lg:rounded-2xl border border-gray-700/50 sm:col-span-2 lg:col-span-1">
            <CheckCircle className="w-10 h-10 lg:w-12 lg:h-12 text-red-400 mx-auto mb-3 lg:mb-4" />
            <div className="text-xl lg:text-2xl font-bold text-white mb-2">Practical Focus</div>
            <div className="text-gray-400 text-sm lg:text-base">Ready to Implement</div>
          </div>
        </div>

        {/* Detailed Modules */}
        <div className="space-y-6 lg:space-y-8">
          {curriculumModules.map((module, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-3xl p-4 lg:p-8 border border-gray-700/50 w-full">
              <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-red-500/20 rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <module.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-400" />
                </div>
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3 break-words">{module.title}</h3>
                  <p className="text-gray-300 text-sm lg:text-lg break-words">{module.description}</p>
                </div>
              </div>

              {/* Module Topics */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="space-y-2 lg:space-y-4 min-w-0">
                    <h4 className="text-sm lg:text-lg font-semibold text-red-400 border-b border-red-500/30 pb-2 break-words">
                      {topic.category}
                    </h4>
                    <ul className="space-y-1 lg:space-y-2">
                      {topic.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 lg:gap-3">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-500 rounded-full mt-1.5 lg:mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-xs lg:text-sm leading-relaxed break-words">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">Ready to Master the Differences?</h3>
          <p className="text-gray-400 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm lg:text-base">
            Join our intensive 4-hour training and gain the expertise to confidently migrate 
            from Previous Versions to RHEL 10 with hands-on knowledge of all new features.
          </p>
          <button className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl transition-colors duration-300 flex items-center justify-center gap-2 mx-auto">
            Enroll Now - $99
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningModules;