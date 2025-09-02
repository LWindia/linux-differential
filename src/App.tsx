import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutTraining from './components/AboutTraining';
import LearningModules from './components/LearningModules';
import KeyFeatures from './components/KeyFeatures';
import CareerOpportunities from './components/CareerOpportunities';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden">
      <Navbar />
      
      {/* Modern Single-Page Layout */}
      <main className="relative w-full">
        
        {/* Hero Section - Immersive Full Screen */}
        <section id="home" className="relative min-h-screen w-full">
          <HeroSection />
        </section>

        {/* Content Sections with Compact Spacing */}
        <div className="relative w-full">
          
          {/* Learning Modules - Curriculum */}
          <section id="curriculum" className="relative py-4 lg:py-6 bg-black w-full">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <LearningModules />
            </div>
          </section>

          {/* About Section - Overview */}
          <section id="overview" className="relative py-4 lg:py-6 bg-gradient-to-b from-black via-gray-900/50 to-black w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
            <div className="relative z-10">
              <AboutTraining />
            </div>
          </section>

          {/* Key Features - Benefits */}
          <section id="benefits" className="relative py-4 lg:py-6 bg-gradient-to-b from-black to-gray-900/30 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/3 via-transparent to-red-500/3"></div>
            <div className="relative z-10">
              <KeyFeatures />
            </div>
          </section>

          {/* Career Opportunities - Professional Impact */}
          <section id="careers" className="relative py-4 lg:py-6 bg-gray-900/30 w-full">
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <CareerOpportunities />
            </div>
          </section>

          {/* CTA Section - Enrollment */}
          <section id="enrollment" className="relative py-0 bg-black w-full">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <CTASection />
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Clean End */}
      <Footer />
    </div>
  );
}

export default App;