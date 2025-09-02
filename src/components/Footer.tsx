import React from 'react';
import { Terminal, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    training: [
      { name: 'Course Overview', href: '#overview' },
      { name: 'Curriculum', href: '#curriculum' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Enrollment', href: '#enrollment' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Technical Support', href: '#support' },
      { name: 'Training Schedule', href: '#schedule' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Approach', href: '#approach' },
      { name: 'Instructor Profile', href: '#instructor' },
      { name: 'Success Stories', href: '#stories' }
    ]
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 rounded-xl flex items-center justify-center">
                <img 
                  src="/images/WHITE LW.png" 
                  alt="LW Logo" 
                  className="h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-black text-white">LINUX</div>
                <div className="text-sm text-red-400 font-semibold">DIFFERENTIAL TRAINING</div>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Specialized training focused exclusively on the critical differences between Linux V9 and V10. 
              Professional, intensive, and results-driven.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm mb-2">Email</div>
                <div className="text-white font-medium">support@lwindia.com</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">WhatsApp</div>
                <div className="text-white font-medium">+91 9772201449</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2024 Linux Differential Training. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;