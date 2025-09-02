import React from 'react';
import { Star, Quote, Users, Award, TrendingUp, Clock } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DevOps Engineer at Google", 
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      quote: "The Linux V10 training transformed my career completely. I went from a junior developer to a DevOps engineer at Google within 6 months of completing the certification.",
      highlight: "Career transformation in 6 months"
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Cloud Architect at AWS",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200", 
      rating: 5,
      quote: "The hands-on approach and real-world projects prepared me perfectly for my current role. The instructors are industry veterans who know exactly what skills employers need.",
      highlight: "Now earning $140K+ annually"
    },
    {
      name: "Emily Watson",
      role: "Cybersecurity Specialist at Microsoft",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5, 
      quote: "Best investment I've ever made in my education. The comprehensive curriculum and 24/7 support made learning Linux enjoyable and stress-free.",
      highlight: "Landed dream job at Microsoft"
    },
    {
      name: "David Kim",
      role: "Infrastructure Manager at Netflix",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      quote: "The training goes beyond just Linux basics. You learn enterprise-level skills that are immediately applicable in high-scale environments.",
      highlight: "Managing Netflix's infrastructure"
    },
    {
      name: "Lisa Thompson", 
      role: "Site Reliability Engineer at Spotify",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      quote: "From zero Linux knowledge to SRE at Spotify in 8 months. The mentorship and community support throughout the program were exceptional.",
      highlight: "Zero to SRE in 8 months"
    },
    {
      name: "Alex Johnson",
      role: "Lead Systems Engineer at Tesla", 
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      quote: "The practical labs and real-world scenarios gave me confidence to tackle complex infrastructure challenges at Tesla. Highly recommended!",
      highlight: "Leading Tesla's infrastructure team"
    }
  ];

  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8">
            <Users className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Success <span className="text-red-500">Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear from our graduates who've transformed their careers and are now working at world's top tech companies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-red-500/30 hover:bg-gray-900/80 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-red-400 opacity-50" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-gray-300 leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight Badge */}
              <div className="mb-6">
                <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm font-semibold rounded-full border border-red-500/30">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 group-hover:border-red-500/50 transition-colors duration-300"
                />
                <div>
                  <div className="font-bold text-white group-hover:text-red-400 transition-colors duration-300 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-base">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-gray-400 text-lg mb-3">Average Rating</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-400 text-lg">Job Placement Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300">$45K</div>
              <div className="text-gray-400 text-lg">Average Salary Increase</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-3 group-hover:scale-110 transition-transform duration-300">6 Months</div>
              <div className="text-gray-400 text-lg">Average Time to New Role</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;