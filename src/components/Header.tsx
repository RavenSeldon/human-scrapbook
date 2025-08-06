import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-organic-gradient overflow-hidden min-h-[300px] flex items-center">
      {/* Floating organic shapes background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sage-200/30 rounded-organic floating-element"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-lotus-200/40 rounded-full floating-element"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-forest-200/20 organic-shape-1 floating-element"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-earth-200/30 leaf-shape floating-element"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-lotus-300/25 rounded-organic floating-element transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Organic decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 300" fill="none">
          {/* Botanical vine decoration */}
          <path
            d="M0,150 Q200,50 400,150 T800,150 Q1000,200 1200,150"
            stroke="rgba(58, 155, 58, 0.2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="rgba(169, 13, 189, 0.3)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
          />

          {/* Scattered botanical elements */}
          <circle cx="150" cy="80" r="3" fill="rgba(58, 155, 58, 0.4)" className="animate-pulse" />
          <circle cx="250" cy="120" r="2" fill="rgba(169, 13, 189, 0.5)" className="animate-pulse" />
          <circle cx="350" cy="90" r="2.5" fill="rgba(138, 150, 138, 0.4)" className="animate-pulse" />
          <circle cx="450" cy="110" r="2" fill="rgba(58, 155, 58, 0.3)" className="animate-pulse" />
          <circle cx="650" cy="85" r="3" fill="rgba(222, 126, 230, 0.4)" className="animate-pulse" />
          <circle cx="750" cy="130" r="2" fill="rgba(138, 150, 138, 0.5)" className="animate-pulse" />
          <circle cx="850" cy="95" r="2.5" fill="rgba(58, 155, 58, 0.4)" className="animate-pulse" />
          <circle cx="950" cy="115" r="2" fill="rgba(169, 13, 189, 0.3)" className="animate-pulse" />
          <circle cx="1050" cy="75" r="3" fill="rgba(138, 150, 138, 0.4)" className="animate-pulse" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Decorative leaf accent */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-4 bg-forest-400 leaf-shape transform rotate-12 animate-leaf-sway"></div>
              <div className="w-6 h-3 bg-lotus-600 leaf-shape transform -rotate-12 animate-leaf-sway"></div>
              <div className="w-10 h-5 bg-sage-400 leaf-shape transform rotate-6 animate-leaf-sway"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-forest-600 via-sage-700 to-forest-800 bg-clip-text text-transparent mb-4 tracking-tight">
            The HUMA-N Project
          </h1>

          <div className="relative">
            <p className="text-xl md:text-2xl text-charcoal/80 font-light mb-2 tracking-wide">
              Donation Drive Scrapbook
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-lotus-600 to-transparent"></div>
          </div>

          {/* Subtitle with organic styling */}
          <div className="mt-8 p-6 glass-morphism rounded-organic max-w-2xl mx-auto">
            <p className="text-sage-700 font-medium text-lg leading-relaxed">
              🌱 Growing community through generosity • Cultivating hope together 🌸
            </p>
          </div>
        </div>
      </div>

      {/* Bottom organic border */}
      <div className="absolute bottom-0 left-0 w-full h-8">
        <svg viewBox="0 0 1200 80" className="w-full h-full">
          <path
            d="M0,40 Q300,0 600,40 T1200,40 L1200,80 L0,80 Z"
            fill="rgba(255, 255, 255, 0.9)"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;